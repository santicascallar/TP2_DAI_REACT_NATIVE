import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Flatlist } from 'react-native';
import * as a contacts from 'expo-contacts';
import {useState, useEffect} from 'react';

export default function App() {

  const [contacto, setContactos] = useState([]);
  //https://www.youtube.com/watch?v=PII2YRRhtI8 para el contacts
  useEffect(()=>{
    (async()=>{
      const {status}=await Contacts.requestPermissionsAsync();
      if(status === 'granted'){
        const {data}=await Contacts.getContactsAsync({
          <fieldset disabled="disabled"></fieldset>
        })
      }
    })()
  })

  return (
    <View style={styles.container}>
      <Text>navigation!</Text>
      <StatusBar style="auto" />
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