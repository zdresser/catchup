import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from './components/header'
import Home from './screens/home'
import Profile from './screens/profile'
import Post from './screens/post'
import Group from './screens/group'
import { beginEvent } from 'react-native/Libraries/Performance/Systrace';

const Stack = createNativeStackNavigator();

//add dynamically generated titles for groups, post
export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "beige",
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Group" component={Group} />
        <Stack.Screen name="Post" component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
