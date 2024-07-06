import * as React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
    return (
        <ScrollView indicatorStyle={"black"} style={{ flex: 1 }}>
            <Text
                style={welcomeStyle.headText}>
                Welcome to Little Lemon
            </Text>
            <Text
                style={welcomeStyle.paraText}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear more about your experience with us!
            </Text>
        </ScrollView >
    );
}

const welcomeStyle = StyleSheet.create({
    headText: {
        padding: 40,
        fontSize: 50,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    paraText: {
        fontSize: 38,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    }
})