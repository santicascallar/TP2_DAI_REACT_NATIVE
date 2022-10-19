import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
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

  let getNumero = () => {
    if (contactos.phoneNumbers) {
      return contactos.phoneNumbers.map((phoneNumber, index) => {
        <View key={index}>
          <Text>{phoneNumber.label}: {phoneNumber.number}</Text>
        </View>
      })
    }
  }

  let getContactos = () => {
    if(contactos !== undefined){
        return (
          <View>
              <FlatList data={contactos}
              keyExtractor={ (item) => item.id}
              renderItem = {({item}) => ( 
              <Text>Nombre: {item.firstName} {item.lastName} // Numero: {item.phoneNumbers && item.phoneNumbers[0] && item.phoneNumbers[0].number} </Text>
          )}
        />
          </View>
      );
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