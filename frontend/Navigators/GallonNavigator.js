import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import RegisterGallon from "../Screens/gallon/RegisterGallon";
import Gallons from "../Screens/gallon/Gallons";
const GallonNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}>
      <Stack.Screen
        name="Gallons"
        component={Gallons}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Register Gallon"
        component={RegisterGallon}
        option={{
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default GallonNavigator;
