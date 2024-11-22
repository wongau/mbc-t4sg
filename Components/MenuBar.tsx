import * as React from 'react';
import { View, StyleSheet, Text, Image, Linking, TouchableOpacity } from 'react-native';


const MenuBar = () => {
    return (
        <View style={styles.menuBarContainer}>
            <TouchableOpacity style={styles.iconContainer} activeOpacity={0.7}>
                <Image
                    source={require("../assets/fi-sr-home.png")}
                    style={styles.image} />
                <Text>
                    Home
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} activeOpacity={0.7}>
                <Image
                    source={require("../assets/fi-sr-calendar.png")}
                    style={styles.image} />
                <Text>
                    Schedule
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} activeOpacity={0.7}>
                <Image
                    source={require("../assets/fi-sr-salad.png")}
                    style={styles.image} />
                <Text>
                    Recipes
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} activeOpacity={0.7}>
                <Image
                    source={require("../assets/fi-sr-interrogation.png")}
                    style={styles.image} />
                <Text>
                    FAQ
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} activeOpacity={0.7}>
                <Image
                    source={require("../assets/fi-sr-envelope.png")}
                    style={styles.image} />
                <Text>
                    Contact
                </Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    menuBarContainer: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: '12%',
        width: '100%',
        borderWidth: 1, // Width of the border
        borderColor: '#000', // Color of the border
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingBottom: '5%',
    },
    iconContainer: {
        width: '16%',
        flexDirection: 'column', // For horizontal alignment
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '50%',
        height: undefined, // Adjust height automatically based on aspect ratio
        aspectRatio: 1, // Set the width-to-height ratio
        resizeMode: 'contain', // Ensure the image fits within the bounds
        marginBottom: '5%',
    },    
});

export default MenuBar;