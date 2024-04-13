import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function NewsScreen({navigation}) {


return (
    <View style={styles.mainContainer}>
        <Text style={styles.welcomeText}>
            this is news screen
        </Text>
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
      color: "black", 
      fontFamily: "Avenir Next",
      fontWeight: "700", 
      fontSize: 30, 
      alignSelf: 'flex-start',
      marginLeft: 30,
    },
    imageContainer: {
      backgroundColor: '#D9E0F3',
      width: "90%", 
      height: "20%", 
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
    gridsContainer: {
      backgroundColor: "White",
      width: "70%", 
      height: "12%", 
      borderColor: "Black",
      borderWidth: 1,
      borderRadius: 20,
      marginBottom: 20,
      alignItems: 'center', // Center horizontally
      justifyContent: 'center'
    }
  });

  export default NewsScreen