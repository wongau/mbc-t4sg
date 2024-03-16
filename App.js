import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.welcomeText}>
        Welcome to:
      </Text>

      <View style={styles.imageParentView}>
        <Image 
          source={require("./assets/MBC-signature-vertical-blue.png")} 
          style={styles.image}/>
      </View>  

      <TouchableOpacity style={styles.loginButton} activeOpacity={0.7} onPress={() => navigation.navigate('LogIn')}>
          <Text style={styles.buttonText}>
            Log In
          </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} activeOpacity={0.7}>
          <Text style={styles.buttonText}>
            Sign Up
          </Text>
      </TouchableOpacity>
    </View>
  );
}


function LogInScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Log In Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="LogIn" component={LogInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: "black", 
    fontFamily: "Avenir Next", 
    fontWeight: "700", 
    fontSize: 30, 
    marginBottom: 25
  },
  imageParentView: {
    width: "70%", 
    height: "20%", 
    borderColor:'black', 
    borderWidth: 0, 
    marginBottom: 50
  },
  image: {
    flex: 1, 
    width: null, 
    height: null, 
    resizeMode: "contain"
  },
  loginButton: {
    marginBottom: 25, 
    backgroundColor: "gray", 
    width: 300, height: 50, 
    borderRadius: 20, 
    alignItems: "center", 
    justifyContent: "center"
  },
  buttonText: {
    color: "white", 
    fontFamily: "Avenir Next", 
    fontWeight: "600", 
    fontSize: 20
  },
  signUpButton: {
    backgroundColor: "gray", 
    width: 300, 
    height: 50, 
    borderRadius: 20, 
    alignItems: "center", 
    justifyContent: "center"
  }
});
