import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AutomaticPrefetchPlugin } from 'webpack';

const Banner = () => {
    return (
        <View style={styles.bannerContainer}>
            <Image
                source={require("../assets/m-logo.png")}
                style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    bannerContainer: {
        backgroundColor: '#00274C', // University of Michigan Blue
        alignItems: 'center',
        justifyContent: 'flex-end', // Align bottom vertically
        height: 114, // Adjust height as needed
        width: '100%',
    },
    image: {
        width: 59,
        height: 36,
        marginBottom: 12,
        resizeMode: 'contain',
    },
});

export default Banner;