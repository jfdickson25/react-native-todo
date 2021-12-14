import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.title}>Jordan Dickson @Copyright 2021</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'grey',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 20
    },
    title: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    }
});