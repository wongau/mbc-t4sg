import { StatusBar } from 'expo-status-bar';
import { ScrollV, FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Linking, ScrollView } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Banner from '../Components/Banner';

function AppointmentsScreen({ navigation }) {
  const handlePress = () => {
    Linking.openURL('https://example.com'); // Replace with your URL
  };

  const operatingHours = [
    { date: 'Monday - Friday', time: '8:00 am - 7:00 pm' },
    { date: 'Saturday', time: 'Closed' },
    { date: 'Sunday', time: '8:00 am - 5:00 pm' },
  ];

  const renderHours = ({ item }) => (
    <Text style={styles.listText}>{item.date} {item.time}</Text>
  );

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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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
        style={{ marginTop: 18, flexGrow: 0 }}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />
      <Text style={styles.subTitle}>
        Our Hours
      </Text>
      <FlatList
        data={operatingHours}
        style={{ marginTop: 18, flexGrow: 0 }}
        renderItem={renderHours}
        keyExtractor={item => item.date}
        scrollEnabled={false}
      />
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
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
    marginTop: 18,
  },
  image: {
    width: "82%",
    height: "25%",
    marginTop: 20,
    resizeMode: "contain",
  },
  linkText: {
    color: '#00274C',
    textDecorationLine: 'underline',
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
  },
  subTitle: {
    color: '#00274C',
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    marginTop: 20,
  },
  listText: {
    color: '#000000',
    fontFamily: "Montserrat_400Regular",
    fontSize: 17,
    width: "100%",
  },
});

export default AppointmentsScreen