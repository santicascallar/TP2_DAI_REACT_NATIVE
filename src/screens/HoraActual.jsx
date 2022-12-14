import react from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import { getClima } from '../../services/funcionalidadService';

export default function HoraActual() {
  let [error, setError] = useState(undefined);
  const [location, setLocation] = useState(undefined);
  const [currentHour, setCurrentHour] = useState('');
  const [clima, setClima] = useState([]);

  useEffect(() => {
    (async () => {
      
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }

      let localizar = await Location.getCurrentPositionAsync({})
      //.then()
      setLocation(localizar);
    })();
  }, []);

  useEffect(() => {
      let hours = new Date().getHours()
      let min = new Date().getMinutes()
      let sec = new Date().getSeconds()
      
      setCurrentHour(hours + ':' + min + ':' + sec)
    }, []);

    let latitud = 'Waiting..';
      if (error) {
        latitud = error;
      } else if (location) {
        latitud = JSON.stringify(location.coords.latitude);
    }

    let longitud = 'Waiting..';
      if (error) {
        longitud = error;
      } else if (location) {
        longitud = JSON.stringify(location.coords.longitude);
    }

  useEffect (() => {
      getClima(latitud, longitud).then(data => setClima(data));
      console.log(clima);
  },[]);
  
  return (
    <View style={styles.container}>
      <Text>Hora y Clima</Text>
      <Text>Latitud: {latitud}</Text>
      <Text>Longitud: {longitud}</Text>
      <Text>Hora: {currentHour}</Text>
      <Text>Clima: {clima?.current?.temp_c}°</Text>
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
