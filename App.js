import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({navigation}) {
  const data = [
    { id: '1', title: 'Volunteering',  },
    { id: '2', title: 'Appointments' },
    { id: '3', title: 'Snap Info' },
    { id: '4', title: 'Recipes' },
    { id: '5', title: 'News' },
    { id: '6', title: 'FAQ/About' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
    style={{width: 165, height: 165, padding: 10, backgroundColor: "#00274C", borderRadius: 20, justifyContent: 'center', 
    margin: 10}}
      item={item}
      onPress={() => console.log(`Pressed ${item.title}`)} // Change to your desired onPress action
      activeOpacity={0.7}
    >
      <Text style={{color: "white", fontFamily: "Avenir Next", fontSize: 20, fontWeight: "600", alignSelf: 'center', }}>
        {item.title}
      </Text> 

    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.welcomeText}>
        Welcome to Maize & Blue Cupboard
      </Text>
      
      <View style={styles.imageContainer}>
        <Image 
          source={require("./assets/MBC-signature-vertical-blue.png")} 
          style={styles.image}/>
      </View>

      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />


        
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
  },
  buttonsContainer: {
    
  },

});
