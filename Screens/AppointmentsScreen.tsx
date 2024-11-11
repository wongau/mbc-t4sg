import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Banner from '../Components/Banner';

function AppointmentsScreen({ navigation }) {
  const handlePress = () => {
    Linking.openURL('https://example.com'); // Replace with your URL
  };

  const data = [
    { id: '1', title: '•  Lorem ipsum dolor sit amet consecte.' },
    { id: '2', title: '•  Nunc in et orci mauris habitant nisl.' },
    { id: '3', title: '•  Lorem ipsum dolor sit amet consecte.' },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <Text style={styles.listText}>{item.title}</Text>
  );

  return (
    <View style={styles.mainContainer}>
      <Banner />
      <Text style={styles.welcomeText}>
        Visit the Pantry
      </Text>
      <Text style={styles.mainText}>
        Lorem ipsum dolor sit amet consecte. Nunc in et orci mauris habitant nisl amet ornare.
      </Text>
      <Image
        style={styles.image}
        source={require('../assets/pantry.png')}
      />
      <Text style={styles.linkText} onPress={handlePress}>
        Click here to schedule a visit
      </Text>
      <Text style={styles.subTitle}>
        What we offer
      </Text>
      <Text style={styles.mainText}>
        Lorem ipsum dolor sit amet consecte. Nunc in et orci mauris habitant nisl amet ornare.
      </Text>
      <FlatList
        data={data}
        style={{ marginTop: 18}}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />
      <Text style={styles.subTitle}>
        Our Hours
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
    color: '#00274C',
    fontFamily: "Montserrat_700Bold",
    fontSize: 26,
    marginTop: 20,
  },
  mainText: {
    color: '#000000',
    fontFamily: "Montserrat_400Regular",
    fontSize: 17,
    textAlign: 'center',
    width: "85%",
    lineHeight: 20,
    marginTop: 18,
  },
  image: {
    width: "85%",
    height: "30%",
    marginTop: 5,
    resizeMode: "contain",
  },
  linkText: {
    color: '#00274C',
    textDecorationLine: 'underline',
     fontFamily: "Montserrat_700Bold",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 40,
  },
  subTitle: {
    color: '#00274C',
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
  },
  listText: {
    color: '#000000',
    fontFamily: "Montserrat_400Regular",
    fontSize: 17,
    width: "100%",
  },
});

export default AppointmentsScreen