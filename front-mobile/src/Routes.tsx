import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Orders from './Orders';
import OrderDetails from './OrderDetails';
const Stack = createStackNavigator();

export default function Routes() {
  return (
    //como se fosse o REACT ROUTER DOM
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}
      >
        {/* Parece com o React-router-dom porém n tem como interagir com o link
        é só um estado da rota */}
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetails}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
