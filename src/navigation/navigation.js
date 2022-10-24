import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Home from "../screens/Home";
import Contactos from "../screens/Contactos";
import HoraActual from "../screens/HoraActual";

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
        </Stack.Navigator>
    </NavigationContainer>

);

}

export default MainStack;