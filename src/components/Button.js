import React from "react";
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
    const { onPress, text } = props;
    return (
      <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  }
  

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#169DFF',
        width: '100',
        padding: 15,
        marginVertical: 5,
        borderRadius: 20,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    }
})