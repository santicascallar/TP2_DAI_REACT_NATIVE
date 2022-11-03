import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LlamadoEmergencia() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [acl, setAcl] = useState(0);

  const configureShake = onShake => {
    // update value every 100ms.
    // Adjust this interval to detect
    // faster (20ms) or slower shakes (500ms)
    Accelerometer.setUpdateInterval(100);
  
    // at each update, we have acceleration registered on 3 axis
    // 1 = no device movement, only acceleration caused by gravity
    const onUpdate = ({ x, y, z }) => {
  
      // compute a total acceleration value, here with a square sum
      // you can eventually change the formula
      // if you want to prioritize an axis
      const acceleration = Math.sqrt(x * x + y * y + z * z);
  
      // Adjust sensibility, because it can depend of usage (& devices)
      const sensibility = 1.8;
      if (acceleration >= sensibility) {
        onShake(acceleration);
      }
    };
  
    Accelerometer.addListener(onUpdate);
  };

  const handleSMS = async () => {
    const num = await AsyncStorage.getItem("@numero");
    await Linking.openURL(`sms:+${num}?body=Trabajo de DAI Realizado por Uriel Rozic y Santiago Cascallar`)
  }
  
  //usage:
  const subscriptionn = configureShake(acceleration => {
    console.log("shake with acceleration " + acceleration);
    setAcl(acceleration);
    console.log("ok");
    handleSMS();
  });

  return (
    <View style={styles.container}>
      <Text>Shake it</Text>
      {subscriptionn}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
});