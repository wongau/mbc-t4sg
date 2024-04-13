import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function SnapInfoScreen({navigation}) {


return (
    <View style={styles.mainContainer}>
        <Text style={styles.snapInfoText}>
            Snap Information
        </Text>

        <View style={{ width: "80%", height: 225, backgroundColor: "#00274C", borderRadius: 20 }}>
            <Text style={{ color: "white", fontSize: 20, textAlign: 'center', fontFamily: "Avenir Next", fontWeight: "600", marginTop: 20 }}>
                ELIGIBILITY
            </Text>
            <Text style={{ color: "white", fontSize: 15, textAlign: 'center', fontFamily: "Avenir Next", fontWeight: "600", marginTop: 30}}>
              TODO: Add eligibility text information here!
            </Text>
        </View>
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
      fontFamily: "Avenir Next",
      fontWeight: "700", 
      fontSize: 40, 
      alignSelf: 'center',
    },
    
  });

  export default SnapInfoScreen