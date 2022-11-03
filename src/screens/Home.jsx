import { StyleSheet, Text, View, Button  } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Lista de Contactos</Text>
      <Button onPress={() => navigation.navigate('Contactos')} title="Contactos"/>

      <Text style = {styles.text}>Hora y clima:</Text>
      <Button onPress={() => navigation.navigate('HoraActual')} title="Hora Actual"/>

      <Text style = {styles.text}>Llamado de Emergencia</Text>
      <Button onPress={() => navigation.navigate('LlamadoEmergencia')} title="Llamado de Emergencia"/>

      <Text style = {styles.text}>Numero de Emergencia</Text>
      <Button onPress={() => navigation.navigate('ConfiguracionNumeroEmergencia')} title="Numero de Emergencia"/>

      <Text style = {styles.text}>About</Text>
      <Button onPress={() => navigation.navigate('About')} title="About"/>
    </View>
  );
}

//arreglar lo de clima
//verificar lo de llamado de emergencia si es null

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 5,
  }
});