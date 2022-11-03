import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View, Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ConfiguracionNumeroEmergencia() {
const [numero, setNumero] = useState();

// Load data when the app starts
    useEffect(() => {
      const firstLoad = async () => {
      try {
        const savedNumero = await AsyncStorage.getItem("@numero");
        setNumero(savedNumero);
      } catch (err) {
        console.log(err);
      }
    };
      firstLoad();
    }, []);


// Create or Update numero
  const saveNumero = async () => {
    try {
      await AsyncStorage.setItem("@numero", numero);
      console.log("ok")
    } catch (err) {
      console.log(err);
    }
      Keyboard.dismiss();
    };

return (
  <View style={styles.container}>
    {numero ? (
      <Text style={styles.heading}>Numero: {numero}</Text>
    ) : (
      <Text style={styles.heading}>Establecer Numero:</Text>
    )}

    <TextInput
      placeholder="Numero"
      style={styles.textInput}
      value={numero}
      onChangeText={(value) => {
      setNumero(value);
      }}
    />
    <View style={styles.buttonContainer}>
    <Button title="Save" onPress={saveNumero} />
  </View>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection: "column",
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
},
heading: {
  fontSize: 24,
},
textInput: {
  width: 300,
  marginVertical: 30,
  padding: 10,
  borderWidth: 1,
  borderColor: "#000",
  borderRadius: 50,
},
buttonContainer: {
  width: 240,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
},
});
