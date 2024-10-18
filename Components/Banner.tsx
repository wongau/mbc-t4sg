import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Banner = () => {
    return (
        <View style={styles.bannerContainer}>
            <Image
                source={require("../assets/m_logo.png")}
                style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    bannerContainer: {
        backgroundColor: '#00274C', // University of Michigan Blue
        alignItems: 'center',
        justifyContent: 'flex-end', // Align bottom vertically
        height: '13%', // Adjust height as needed
        width: '100%',
    },
    image: {
        width: 75,
        height: 75,
        resizeMode: 'contain',
    },
});

export default Banner;