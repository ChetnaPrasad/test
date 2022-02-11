import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import FriendsScreen from './src/FriendsScreen';
import punchInout from './src/punchInout';



const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
           <Stack.Screen
            name="Attendence"
            component={HomeScreen}
          /> 
          {/* <Stack.Screen
            name="PunchIn/out"
            component={punchInout}
          /> */}
          {/* <Stack.Screen
            name="Dashboard"
            component={Dashboard}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


