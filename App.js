import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.welcomeText}>
        WELCOME,
      </Text>
      
      <View style={styles.imageContainer}>
        <Image 
          source={require("./assets/MBC-signature-vertical-blue.png")} 
          style={styles.image}/>
      </View>

      <Text style={styles.remindersAndCategoriesText}>
        REMINDERS
      </Text>

      <View style={styles.remindersContainer}>
          
      </View>

      <Text style={styles.remindersAndCategoriesText}>
        CATEGORIES
      </Text>

        <TouchableOpacity style={styles.loginButton} activeOpacity={0.7} onPress={() => navigation.navigate('LogIn')}>
            <Text style={styles.buttonText}>
              Log In
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
    // justifyContent: 'center',
  },
  welcomeText: {
    color: "black", 
    fontFamily: "Avenir Next",
    fontWeight: "700", 
    fontSize: 30, 
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  imageContainer: {
    backgroundColor: '#D9E0F3',
    width: "85%", 
    height: "15%", 
    borderRadius: 20,
    overflow: 'hidden',
    padding: 10,
    marginBottom: 20,
    alignItems: 'center', // Center horizontally
    justifyContent: 'center'
  },
  image: {
    width: "100%", // Make the image take full width
    height: "100%", // Make the image take full height
    resizeMode: "contain",
  },
  remindersAndCategoriesText: {
    color: "black", 
    fontFamily: "Avenir Next",
    fontWeight: "700", 
    fontSize: 20, 
    alignSelf: 'flex-start',
    marginLeft: 50,
    marginBottom: 5
  },
  remindersContainer: {
    backgroundColor: "White",
    width: "70%", 
    height: "12%", 
    borderColor: "Black",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'center', // Center horizontally
    justifyContent: 'center'
  },
  buttonsContainer: {
    
  },
  loginButton: {
    marginBottom: 25, 
    backgroundColor: "#D9D9D9", 
    width: 150, height: 50, 
    borderRadius: 20, 
    alignItems: "center", 
    justifyContent: "center"
  },
  buttonText: {
    color: "black", 
    fontFamily: "Avenir Next", 
    fontWeight: "600", 
    fontSize: 20
  }
});
