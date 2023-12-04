import { View, Text } from "react-native";
import React, { useContext } from "react";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import AuthGlobal from "../Context/store/AuthGlobal";
import SupplierRegister from "../Screens/supplier/SupplierRegister";

import BranchRegister from "../Screens/supplier/BranchRegister";
import Branch from "../Screens/supplier/Branch";

const BranchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Branch"
        component={Branch}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BranchRegister"
        component={BranchRegister}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default BranchNavigator;
