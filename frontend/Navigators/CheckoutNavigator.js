import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Checkout from "../Screens/cart/checkout/Checkout";
import Payment from "../Screens/cart/checkout/Payment";
import Confirm from "../Screens/cart/checkout/Confirm";
const Tab = createMaterialTopTabNavigator();

const CheckoutNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Shipping" component={Checkout} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Confirm" component={Confirm} />
    </Tab.Navigator>
  );
};

export default CheckoutNavigator;
