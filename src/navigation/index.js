import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import BookMarkButton from "../components/BookMarkButton";
import BookScreen from '../screens/BookScreen';
import DetailScreen from '../screens/DetailScreen';
//import bookData from '../json/books.json';
import WishlistScreen from '../screens/Wishlist';
import MybooksScreen from '../screens/MybooksScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

const MyTabs = () =>{
    return(
        <Tab.Navigator
            initialRouteName = "HomeStack"
            ScreenOption={{
                tabBarActiveTintColor: "#6200EE",
                tabBarInactiveTintColor: "#666666",
                headerShow: false,
                tabBarLabelStyle: {
                    fontWeight: '500',
                    fontSize: 12,
                    letterSpacing: 0.4,
                },
                tabBarIconStyle: {
                    marginTop: 11,
                },
                headerStyle: { 
                    headerShadowVisible: false,
                            shadowColor: 'transparent',
                            elevation: 0,
                            shadowOpacity: 0,
                            shadowOffset:{height: 0, width: 0},
                            borderBottomColor: 'transparent',
                  },
            }}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="WishlistStack"
                component={WishlistScreen}
                options={{
                    headerShown: false,
                    title: "Wishlist",
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: '400',
                    },
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bookmark" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="MyBooksStack"
                component={MybooksScreen}
                options={{
                    headerShown: false,
                    title: "My Books",
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: '400',
                    },
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-open" color={color} size={24} />
                    ),
                }}
            />            
        </Tab.Navigator>
    );
}

const HomeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "Home"
                component = {BookScreen}
                option = {{
                    headerShadowVisible: false,
                    title: null,
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset:{height: 0, width: 0},
                        // fontWeight: '400',
                        // fontSize: 20
                    },
                    headerLeft: () => (
                        <MaterialCommunityIcons
                            name={ 'menu'}
                            size={24}
                        />      
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons
                            name={ 'magnify'}
                            size={24}
                        />      
                    ),
                }}
            />    
            <Stack.Screen
                name = "Detail"
                component = {DetailScreen}
                options = {{
                    title: null,
                    headerBackTitleVisible: false,
                    headerShadowVisible: false,
                    headerTintColor: '#131313',
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset: 0,
                },
                headerRight: () => ( <BookMarkButton/> ),
            }}
                // option = {({ route }) => ({
                //     title: route.params.title,
                //     headerStyle: {
                //         backgroundColor: 'fff',
                //     },
                //     headerTintColor: '#000',
                //     headerTitleStyle: {
                //         fontWeight: '400',
                //         fontSize: 20
                //     },
                // })}
            />                
        </Stack.Navigator>
    );
};

export default Navigation;

// const StackNavigator = () => {
//     return(
//         <Stack.Navigator>
//             <Stack.Screen
//                 name = "Home"
//                 component = {BookScreen}
//                 option = {{
//                     title: bookData.bookTitle,
//                     headerTitleStyle: {
//                         fontWeight: '400',
//                         fontSize: 20
//                     },
//                 }}
//             />    
//             <Stack.Screen
//                 name = "Detail"
//                 component = {DetailScreen}
//                 option = {({ route }) => ({
//                     title: route.params.title,
//                     headerStyle: {
//                         backgroundColor: 'fff',
//                     },
//                     headerTintColor: '#000',
//                     headerTitleStyle: {
//                         fontWeight: '400',
//                         fontSize: 20
//                     },
//                 })}
//             />                
//         </Stack.Navigator>
//     );
// }

