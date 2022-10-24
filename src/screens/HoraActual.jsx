import react from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Location from 'expo-location';

export default function HoraActual() {
  let [error, setError] = useState(undefined);
  const [location, setLocation] = useState(undefined);
  const [currentHour, setCurrentHour] = useState('');
  
   useEffect(() => {
    (async () => {
      
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      
      if (status !== 'granted') {
        console.log('error no permisos')
        setError('El permiso a la Localizacion ha sido denegado');
      }

      let localizar = await Location.getCurrentPositionAsync({});
      setLocation(localizar);
      
    })();
  }, []);
  
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
      <Text>Ubicacion: {localizar}</Text>
      <Text>Hora: {CurrentHour}</Text>
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
