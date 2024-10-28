import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AutomaticPrefetchPlugin } from 'webpack';

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
        height: '14%', // Adjust height as needed
        width: '100%',
        marginBottom: 19,
    },
    image: {
        width: '15.1%',
        height: undefined,
        aspectRatio: 59 / 36,
        marginBottom: 19,
        resizeMode: 'contain',
    },
});

export default Banner;