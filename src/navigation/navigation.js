import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Home from "../screens/Home";
import Contactos from "../screens/Contactos";
import HoraActual from "../screens/HoraActual";
import LlamadoEmergencia from "../screens/LlamadoEmergencia";
import ConfiguracionNumeroEmergencia from '../screens/ConfiguracionNumeroEmergencia';

const MainStack =()=>{

    const Stack = createNativeStackNavigator()
   
    return(
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen
                
                name='Home'
                component={ Home }
            />
            <Stack.Screen
                name='Contactos'
                component={ Contactos }
            />
            <Stack.Screen
                name='HoraActual'
                component={ HoraActual }
            />
            <Stack.Screen
                name='LlamadoEmergencia'
                component={ LlamadoEmergencia }
            />
            <Stack.Screen
                name='ConfiguracionNumeroEmergencia'
                component={ ConfiguracionNumeroEmergencia }
            />
        </Stack.Navigator>
    </NavigationContainer>

);

}

export default MainStack;