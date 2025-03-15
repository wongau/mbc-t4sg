import { StatusBar } from 'expo-status-bar';
import { Button, TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import Banner from '../Components/Banner';

function SignInScreen({ navigation }) {
    // useState set username to empty, and initlize setUsername function to set the username
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const [isNewPasswordRequired, setIsNewPasswordRequired] = useState(false);
    const [user, setUser] = useState(null);

    const handleSignIn = async () => {
        try {
            const user = await Auth.signIn(username, password);
            // if need new password, does not navigate to Home, but sets isNewPasswordRequired to true 
            if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                setIsNewPasswordRequired(true);
                setUser(user);
            } else {
                const authenticatedUser = await Auth.currentAuthenticatedUser();
                console.log('Authenticated user:', authenticatedUser);
                navigation.navigate('UploadImage'); // Navigate to Home or another screen after successful sign-in
            }
        } catch (err) {
            console.error('Error during sign-in:', err);
            setError(err.message);
        }
    };

    const handleNewPasswordSubmit = async () => {
        try {
            // Just create a new password for the user
            await Auth.completeNewPassword(user, newPassword);
            const authenticatedUser = await Auth.currentAuthenticatedUser();
            console.log('Authenticated user:', authenticatedUser);
            navigation.navigate('UploadImage'); // Navigate to Home or another screen after successful password change
        } catch (err) {
            console.error('Error during password change:', err);
            setError(err.message);
        }
    };

    return (
        <View style={styles.mainContainer}>
            <Banner />
            <Text style={styles.welcomeText}>Sign In</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                editable={!isNewPasswordRequired}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                editable={!isNewPasswordRequired}
            />
            {/* If isNewPasswordRequired is true, show New Password input field */}
            {isNewPasswordRequired && (
                <TextInput
                    style={styles.input}
                    placeholder="New Password"
                    value={newPassword}
                    onChangeText={setNewPassword}
                    secureTextEntry
                />
            )}
            {error && <Text style={styles.error}>{error}</Text>}
            {/* If isNewPasswordRequired is false, show Sign In button, else show Submit New Password button */}
            {!isNewPasswordRequired ? (
                <Button title="Sign In" onPress={handleSignIn} color="#00274C" />
            ) : (
                <Button title="Submit New Password" onPress={handleNewPasswordSubmit} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    welcomeText: {
        color: '#00274C',
        fontFamily: "Montserrat_700Bold",
        fontSize: 24,
        marginTop: 35,
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 11,
        marginBottom: 10,
        padding: 10,
        width: '84.6%',
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
});

export default SignInScreen;