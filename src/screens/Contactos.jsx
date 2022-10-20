import react from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Location from 'expo-location';

export default function HoraActual() {
  let [error, setError] = useState(undefined);
  const [location, setLocation] = useState(undefined);
  
   useEffect(() => {
    (async () => {
      
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }

      let localizar = await Location.getCurrentPositionAsync({});
      setLocation(localizar);
      
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hora y Clima</Text>
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
