import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import Orders from "../Screens/Admin/Orders";
const AdminNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigator;
