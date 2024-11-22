import { StatusBar } from 'expo-status-bar';
import { Dimensions, Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Banner from '../Components/Banner';
import MenuBar from '../Components/MenuBar';

function HomeScreen({ navigation }) {

  const data = [
    { id: '1', title: 'Volunteering', navigationID: "Volunteering" },
    { id: '2', title: 'Appointments', navigationID: "Appointments" },
    { id: '3', title: 'Snap Info', navigationID: "SnapInfo" },
    { id: '4', title: 'Recipes', navigationID: "Recipes" },
    { id: '5', title: 'News', navigationID: "News" },
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
        Welcome to Maize & Blue Cupboard
      </Text>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/MBC-signature-vertical-blue.png")}
          style={styles.image} />
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
      <MenuBar />
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
    fontSize: 30,
    alignSelf: 'flex-start',
    marginLeft: 19,
    marginRight: 79,
    marginBottom: 6,
  },
  imageContainer: {
    backgroundColor: '#D9E0F3',
    width: "90%",
    height: "20%",
    borderRadius: 20,
    overflow: 'hidden',
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: "100%",
    height: "100%",
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

