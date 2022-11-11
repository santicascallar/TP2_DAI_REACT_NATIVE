import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import * as Contacts from 'expo-contacts';
import {useState, useEffect} from 'react';

export default function Contactos() {
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

  /*let getNumero = () => {
    if (contactos.phoneNumbers) {
      return contactos.phoneNumbers.map((phoneNumber, index) => {
        <View key={index}>
          <Text>{phoneNumber.label}: {phoneNumber.number}</Text>
        </View>
      })
    }
  }*/

  let getContactos = () => {
    if(contactos !== undefined){
      return (
        <View>
          <FlatList data={contactos}
            renderItem = {({item}) => ( 
              <View key={item.id}>
                <Text style={{paddingTop: 20}}>Nombre: {item.firstName} {item.lastName}</Text>
                {item.phoneNumbers.map(phone=>(
                  <Text>Numero: {phone?.number?}</Text>
                ))}
              </View>
            )}
            keyExtractor={(item, index)=>index}
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
      <Text style={{paddingTop: 30}}>Lista Contactos:</Text>
      {getContactos()}
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
