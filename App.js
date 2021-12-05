import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './screens/DetailsScreen'

const Stack = createNativeStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen}>
              
            </Stack.Screen>
        </Stack.Navigator>
    );
}

const configstore = configureStore()

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={configstore}>
                <MyStack />
            </Provider>
        </NavigationContainer>
        
    ); 
}