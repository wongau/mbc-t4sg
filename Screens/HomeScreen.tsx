import { StatusBar } from 'expo-status-bar';
import { Alert, Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createPushToken } from '../src/graphql/mutations';
import Banner from '../Components/Banner';

function HomeScreen({ navigation }) {
  const [expoPushToken, setExpoPushToken] = useState('');

  async function registerForPushNotificationsAsync() {
    try {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission not granted');
        return;
      }

      const projectId = Constants.expoConfig?.projectId; // Access projectId from app.json
      if (!projectId) {
        throw new Error('No projectId found in app.json');
      }

      const token = (await Notifications.getExpoPushTokenAsync({ projectId })).data; // Pass projectId dynamically
      setExpoPushToken(token);
      console.log('Expo Push Token:', token);
      try {
        await API.graphql(graphqlOperation(createPushToken, { input: { token } }));
        console.log('Push token saved successfully');
      } catch (error) {
        console.error('Error saving push token:', error);
        Alert.alert('Error saving push token', error.message);
      }
    } catch (error) {
      console.error('Error getting push token:', error);
      Alert.alert('Error getting push token', error.message);
    }
  }

  const data = [
    { id: '1', title: 'Volunteering', navigationID: "Volunteering" },
    { id: '2', title: 'Appointments', navigationID: "Appointments" },
    { id: '3', title: 'Snap Info', navigationID: "SnapInfo" },
    { id: '4', title: 'Recipes', navigationID: "Recipes" },
    { id: '5', title: 'Admin', navigationID: "SignIn" },
    { id: '6', title: 'FAQ/About', navigationID: "About" },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ width: 165, height: 165, padding: 10, backgroundColor: "#00274C", borderRadius: 20, justifyContent: 'center', margin: 10 }}
      // item={item}
      onPress={() => navigation.navigate(item.navigationID)}
      activeOpacity={0.7}
    >
      <Text style={{ color: "white", fontFamily: "Avenir Next", fontSize: 20, fontWeight: "600", alignSelf: 'center', }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <Banner />
      <Text style={styles.welcomeText}>
        Welcome to the Maize {'\n'}
        & Blue Cupboard! 
      </Text>

      <Image
        source={require("../assets/homescreen-food.png")}
        style={styles.image} />

      <Button title="Enable Notifications" onPress={registerForPushNotificationsAsync} />
      {expoPushToken ? <Text>Your Push Token: {expoPushToken}</Text> : null}

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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#00274C',
    fontFamily: "Montserrat_700Bold",
    fontSize: 26,
    height: 64,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 3,
  },
  image: {
    width: 264,
    height: 225.83,
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
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default HomeScreen

