import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import RegisterGallon from "../Screens/gallon/RegisterGallon";

const GallonNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}>
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
