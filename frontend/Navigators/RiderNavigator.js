import { View, Text } from "react-native";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import RiderRegister from "../Screens/Rider/RiderRegister";
import Rider from "../Screens/Rider/Rider";

const RiderNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Rider"
        component={Rider}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RiderRegister"
        component={RiderRegister}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RiderNavigator;
