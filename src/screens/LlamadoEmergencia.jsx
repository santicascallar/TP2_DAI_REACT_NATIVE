//https://www.youtube.com/watch?v=xU5TdrNKMHE (Accelerometer)
//https://www.youtube.com/watch?v=fPa9Sev7il8 (shake detection)

//https://medium.com/@charana.am/react-native-shake-event-w-expo-9dbf17033ea9

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function LlamadoEmergencia() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [acl, setAcl] = useState(0);
  
  /*const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);*/



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
  
  // usage :
  const subscriptionn = configureShake(acceleration => {
    console.log("shake with acceleration " + acceleration);
    setAcl(acceleration);
  });

  return (
    <View style={styles.container}>
      {subscriptionn}
      if(acl > 2){
        <Text>Ok</Text>
      }
      <Text>hola</Text>
    </View>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
