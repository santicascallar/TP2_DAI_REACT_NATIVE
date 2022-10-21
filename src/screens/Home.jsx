import { StyleSheet, Text, View  } from 'react-native';
import Button from '../components/Button';
import { useNavigation } from "@react-navigation/native";

export default function App() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Lista de opciones:</Text>
      <Button text={"Contactos"} onPress={() => navigation.navigate('Contactos')}/>
      <Button text={"Hora Actual"} onPress={() => navigation.navigate('HoraActual')}/>
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