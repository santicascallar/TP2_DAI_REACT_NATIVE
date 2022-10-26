//Primero instalar dependencia: npx expo install @react-native-async-storage/async-storage
//Links:https://medium.com/featurepreneur/asyncstorage-in-react-native-with-expo-ff82a3496c9f
//https://docs.expo.dev/versions/latest/sdk/async-storage/

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


// Create or Update nickname
  const saveNumero = async () => {
  try {
    await AsyncStorage.setItem("@numero", numero);
    console.log("ok")
  } catch (err) {
    console.log(err);
  }
    Keyboard.dismiss();
  };

  // Delete nickname (POR el momento no)
  const removeNickname = async () => {
  try {
  await AsyncStorage.removeItem("@nickname");
  setNickname();
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
    <Text style={styles.heading}>Create your Numero</Text>
    )}
    <TextInput
    placeholder="Enter Your Numero"
    style={styles.textInput}
    value={numero}
    onChangeText={(value) => {
    setNumero(value);
    }}
    />
    <View style={styles.buttonContainer}>
    <Button title="Save" onPress={saveNumero} />

    <Button title="DeleteNo" onPress={removeNickname} />
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
