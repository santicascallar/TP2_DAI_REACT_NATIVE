import react from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';

export default function HoraActual() {
  let [error, setError] = useState(undefined);
  const [location, setLocation] = useState(undefined);
  const [currentHour, setCurrentHour] = useState('');


  useEffect(() => {
    (async () => {
      
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }

      let localizar = await Location.getCurrentPositionAsync({});
      setLocation(localizar);
    })();
  }, []);

    let text = 'Waiting..';
      if (error) {
        text = error;
      } else if (location) {
        text = JSON.stringify(location.coords.latitude);
    }

    let longitud = 'Waiting..';
      if (error) {
        longitud = error;
      } else if (location) {
        longitud = JSON.stringify(location.coords.longitude);
    }
  
    useEffect(() => {
      let hours = new Date().getHours()
      let min = new Date().getMinutes()
      let sec = new Date().getSeconds()
      
      setCurrentHour(hours + ':' + min + ':' + sec)
    }, []);
  
  //Obtener el clima: https://www.youtube.com/watch?v=M8mslcfiEQI
  //https://developer.weatherunlocked.com/signup/success (Confirmar Email)
  //https://www.youtube.com/watch?v=MjJ1A-Puszw (Obtener current Hour)
  
  return (
    <View style={styles.container}>
      <Text>Hora y Clima</Text>
      <Text>Latitud: {text}</Text>
      <Text>Longitud: {longitud}</Text>
      <Text>Hora: {currentHour}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});