import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Flatlist } from 'react-native';
import * as Contacts from 'expo-contacts';
import {useState, useEffect} from 'react';

export default function App() {
  let [error, setError] = useState(undefined);
  const [contactos, setContactos] = useState(undefined);

  useEffect(()=>{
    (async () => {
      const {status}= await Contacts.requestPermissionsAsync();

      if(status === 'granted') {
        const {data}= await Contacts.getContactsAsync({
          fields: [Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers]
        });

        if(data.length > 0){
          console.log(data);
          setContactos(data);
        }
        else{
          setError("No se han encontrado contactos")
        }
      }
      else {
        setError("Permiso denegado");
      }
    })
  ()
  }, [])

  let getNumero = (contact) => {
    if (contact.phoneNumbers) {
      return contact.phoneNumbers.map((phoneNumber, index) => {
        <View key={index}>
          <Text>Telefono: {phoneNumber.number}</Text>
        </View>
      })
    }
  }

  let getContactos = () => {
    if(contactos !== undefined){
      return contactos.map((contact, index) => {
        return (
          <View key={index}>
            <Text>Nombre: {contact.firstName} {contact.lastName}</Text>
            {getNumero(contact)}
          </View>
        );
      });
    }
    else{
      return <Text>Esperando contactos...</Text>
    }
  }

  return (
    <View style={styles.container}>
      <Text>Lista Contactos</Text>
      {getContactos()}
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