import { View, Text } from "react-native";
import React, { useContext } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import AuthGlobal from "../Context/store/AuthGlobal";
import UserNavigator from "./UserNavigator";
import GallonNavigator from "./GallonNavigator";
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";

import { Ionicons } from "@expo/vector-icons";

import SlidebarDrawer from "../Shared/SlidebarDrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CartIcon from "../Shared/CartIcon";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Main = () => {
  const context = useContext(AuthGlobal);
  return (
    <Tab.Navigator
      initialRouteName="HomeNav"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#00bbff",
      }}>
      <Tab.Screen
        name="HomeNav"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons
                name="home"
                style={{ position: "relative" }}
                color={color}
                size={30}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name=" Gallon"
        component={GallonNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons
                name="water"
                style={{ position: "relative" }}
                color={color}
                size={30}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <>
                <Ionicons
                  name="cart"
                  style={{ position: "relative" }}
                  color={color}
                  size={30}
                />
                <CartIcon />
              </>
            );
          },
        }}
      />

      <Tab.Screen
        name="User"
        component={UserNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons
                name="person"
                style={{ position: "relative" }}
                color={color}
                size={30}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
