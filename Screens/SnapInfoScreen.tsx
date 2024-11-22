import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Banner from '../Components/Banner';
import MenuBar from '../Components/MenuBar';

function SnapInfoScreen({ navigation }) {

  return (
    <View style={styles.mainContainer}>
      <Banner />
      <Text style={styles.snapInfoText}>
        Snap Information
      </Text>

      <View style={styles.subContainer}>
        <Text style={styles.subContainerTitle}>
          ELIGIBILITY
        </Text>
        <Text style={styles.subContainerText}>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.subContainerTitle}>
          WHERE TO APPLY
        </Text>
        <Text style={styles.subContainerText}>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
      </View>

      <View style={styles.applyTitleContainer}>
        <Text style={styles.subContainerTitle}>
          HOW TO APPLY
        </Text>
      </View>
      <View style={styles.applyTextContainer}>
        <Text style={styles.applyText}>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
        <TouchableOpacity onPress={() => console.log('Learn More pressed')}>
          <Text style={styles.learnMore}>Learn More</Text>
        </TouchableOpacity>
      </View>
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
  snapInfoText: {
    color: "#00274C",
    fontFamily: "Montserrat_700Bold",
    fontSize: 40,
    alignSelf: 'center',
  },
  subContainer: {
    width: "80%",
    height: "20%",
    backgroundColor: "#00274C",
    borderRadius: 14,
    marginTop: 30,
    marginBottom: 10,
    alignItems: 'center',
  },
  subContainerTitle: {
    color: "white",
    fontSize: 16,
    textAlign: 'center',
    fontFamily: "Montserrat_700Bold",
    marginTop: 20,
  },
  subContainerText: {
    color: "white",
    fontSize: 14,
    textAlign: 'center',
    fontFamily: "Montserrat_500Medium",
    marginTop: 44,
    paddingHorizontal: 10,
    width: "88%",
  },
  applyTitleContainer: {
    width: "80%",
    height: "6%",
    backgroundColor: "#00274C",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginTop: 30,
    alignItems: 'center',
  },
  applyTextContainer: {
    width: "80%",
    height: "12%",
    backgroundColor: "#fff",
    borderColor: "#00274C",
    borderWidth: 3,
    alignItems: 'center',
  },
  applyText: {
    color: "#00274C",
    fontSize: 14,
    textAlign: 'center',
    fontFamily: "Montserrat_500Medium",
    marginTop: 18,
    marginBottom: 6,
    paddingHorizontal: 10,
    width: "88%"
  },
  learnMore: {
    color: "#00274C",
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: "Montserrat_700Bold",
    textDecorationLine: 'underline',
  },
});

export default SnapInfoScreen