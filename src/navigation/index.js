import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookScreen from '../screens/BookScreen';
import DetailScreen from '../screens/DetailScreen';

import bookData from '../json/books.json';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}

const StackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "Home"
                component = {BookScreen}
                option = {{
                    title: bookData.bookTitle,
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                }}
            />    
            <Stack.Screen
                name = "Detail"
                component = {DetailScreen}
                option = {({ route }) => ({
                    title: route.params.title,
                    headerStyle: {
                        backgroundColor: 'fff',
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                })}
            />                
        </Stack.Navigator>
    );
}

export default Navigation;