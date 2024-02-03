import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.welcomeText}>
        Welcome to
      </Text>

      <View style={styles.imageParentView}>
        <Image 
          source={require("./assets/MBC-signature-vertical-blue.png")} 
          style={styles.image}/>
      </View>  

      <TouchableOpacity style={styles.loginButton} activeOpacity={0.7}>
          <Text style={styles.buttonText}>
            Login
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
    fontWeight: "600", 
    fontSize: 20, 
    marginBottom: 25
  },
  imageParentView: {
    width: "70%", 
    height: "20%", 
    borderColor:'black', 
    borderWidth: 3, 
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
