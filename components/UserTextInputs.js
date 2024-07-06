import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";


const UserTextInputs = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, onChangeMessage] = useState('');

    return (
        <>
            <ScrollView style={styles.container} keyboardDismissMode="on-drag">
                <Text style={styles.headingSection}>User Input</Text>
                <Text style={styles.headingSection}>
                    How was your visit to Little Lemon?
                </Text>
                <Text style={styles.infoSection}>
                    Little Lemon is a charming neighborhood bistro that serves simple food
                    and classic cocktails in a lively but casual environment. We would love
                    to hear your experience with us!
                </Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? "padding" : "position"}
                >
                    <TextInput
                        style={styles.input}
                        value={firstName}
                        placeholder="First Name"
                        onChangeText={setFirstName}
                    />
                    <TextInput
                        style={styles.input}
                        value={lastName}
                        onChangeText={setLastName}
                        placeholder="Last Name"
                        />
                    <TextInput
                        style={styles.messageInput}
                        value={message}
                        onChangeText={onChangeMessage}
                        placeholder="Your Message"
                    />
                </KeyboardAvoidingView>
                {/* <Text style={styles.headingSection}>The Name is : {firstName}</Text> */}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        backgroundColor: 'white',
    },
    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: 'white',
    },
    infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
    headingSection: {
        fontSize: 28,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
});

export default UserTextInputs;