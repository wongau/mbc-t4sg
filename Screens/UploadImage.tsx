import React, { useState, useEffect } from 'react';
import { View, Button, Image, TextInput, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Storage, API, graphqlOperation, Auth } from 'aws-amplify';
import { createPublicData } from './src/graphql/mutations';

function UploadImage() {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const checkUserGroup = async () => {
            const user = await Auth.currentAuthenticatedUser();
            const groups = user.signInUserSession.accessToken.payload["cognito:groups"];
            if (groups && groups.includes("Admin")) {
                setIsAdmin(true);
            }
        };

        checkUserGroup();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const uploadImage = async () => {
        if (image) {
            const response = await fetch(image);
            const blob = await response.blob();
            const fileName = `${Date.now()}-${image.split('/').pop()}`;
            await Storage.put(fileName, blob, {
                contentType: 'image/jpeg',
            });
            const url = await Storage.get(fileName);
            setImageUrl(url);
            saveImageUrl(url);
        }
    };

    const saveImageUrl = async (url) => {
        const input = {
            title,
            description,
            image: url,
        };

        await API.graphql(graphqlOperation(createPublicData, { input }));
    };

    if (!isAdmin) {
        return (
            <View style={styles.container}>
                <Text>You do not have permission to upload images.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <Button title="Upload Image" onPress={uploadImage} />
            {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        width: '80%',
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
});

export default UploadImage;