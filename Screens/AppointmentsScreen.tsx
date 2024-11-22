import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Linking, ScrollView, SafeAreaView } from 'react-native';
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
    <ScrollView style={{flex: 1}} contentContainerStyle={styles.scrollContainer}>
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
      <View style={{ width: '85%', alignItems: 'center'}}>
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
      </View>
      <View style={{ width: '75%', alignItems: 'center', paddingLeft: '5%'}}>
        <Text style={styles.subTitle}>
          Our Hours
        </Text>
        <View style={styles.hoursContainer}>
          <Text style={{...styles.hoursText, width: '55%'}}>
            {`Monday - Friday\nSaturday\nSunday`}
          </Text>
          <Text style={{...styles.hoursText, width: '45%'}}>
            {`8:00 am - 7:00 pm\nClosed\n8:00 am - 5:00 pm`}
          </Text>
        </View>
      </View>
      <View style={{ width: '85%', alignItems: 'center'}}>
        <Text style={styles.subTitle}>
          Location
        </Text>
        <Text style={styles.mainText}>
          1234 Main St. Springfield, IL 62701
        </Text>
      </View>
      <Image
        style={styles.image}
        source={require('../assets/pantry.png')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 20,
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
  },
  hoursContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  hoursText: {
    fontFamily: "Rubik-Light",
    fontSize: 15,
    color: '#000000',
    textAlign: 'left',
  },
});

export default AppointmentsScreen