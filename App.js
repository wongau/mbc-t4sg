import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Montserrat_500Medium, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import { useEffect } from 'react';
import HomeScreen from './Screens/HomeScreen'
import AboutScreen from './Screens/AboutScreen'
import VolunteeringScreen from './Screens/VolunteeringScreen';
import AppointmentsScreen from './Screens/AppointmentsScreen';
import SnapInfoScreen from './Screens/SnapInfoScreen';
import RecipesScreen from './Screens/RecipesScreen';
import NewsScreen from './Screens/NewsScreen';

const Stack = createNativeStackNavigator();

function App() {

  const [loaded, error] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!loaded && !error) {
    return null;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error loading fonts</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="About" component={AboutScreen}/>
        <Stack.Screen name="Volunteering" component={VolunteeringScreen}/>
        <Stack.Screen name="Appointments" component={AppointmentsScreen}/>
        <Stack.Screen name="SnapInfo" component={SnapInfoScreen}/>
        <Stack.Screen name="Recipes" component={RecipesScreen}/>
        <Stack.Screen name="News" component={NewsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default App;
