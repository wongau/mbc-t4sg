import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={ {color: "black", fontFamily: "Avenir Next", fontWeight: "600", fontSize: 20, marginBottom: 25}}>Maize and Blue Cupboard</Text>
      <Image source={require("./assets/MBC-signature-vertical-blue.png")} style={{width: "100%", height: 250, marginBottom: 50}}/>
    
      <TouchableOpacity style={{marginBottom: 25}} activeOpacity={0.7}>
        <View style={{ backgroundColor: "gray", width: 300, height: 50, borderRadius: 20, alignItems: "center", justifyContent: "center"}}>
          <Text style={ {color: "white", fontFamily: "Avenir Next", fontWeight: "600", fontSize: 20}}> login </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}>
        <View style={{ backgroundColor: "gray", width: 300, height: 50, borderRadius: 20, alignItems: "center", justifyContent: "center"}}>
          <Text style={ {color: "white", fontFamily: "Avenir Next", fontWeight: "600", fontSize: 20}}> signup </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
