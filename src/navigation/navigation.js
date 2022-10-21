import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Home from "../screens/Home";
import Contactos from "../screens/Contactos";
import HoraActual from "../screens/HoraActual";

const MainStackNavigator = createNativeStackNavigator();

function MyStack(){
    return(
        <NavigationContainer>
        <MainStackNavigator.Navigator
            initialRouteName="Home"
        >
            <MainStackNavigator.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
             <MainStackNavigator.Screen
                name="Contactos"
                component={Contactos}
                options={{
                    headerShown: false
                }}
            />
             <MainStackNavigator.Screen
                name="HoraActual"
                component={HoraActual}
                options={{
                    headerShown: false
                }}
            />
        </MainStackNavigator.Navigator>
        </NavigationContainer>
    );
}

export default MyStack;