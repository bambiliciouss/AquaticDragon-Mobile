// import { View, Text } from "react-native";
// import React from "react";
// import 'react-native-gesture-handler';

// import { createDrawerNavigator } from "@react-navigation/drawer";

// const Drawer = createDrawerNavigator();

// const SlidebarDrawer = () => {
//   const Feed = () => (
//     <View>
//       <Text>Feed Screen</Text>
//     </View>
//   );

//   const Article = () => (
//     <View>
//       <Text>Article Screen</Text>
//     </View>
//   );

//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// };

// export default SlidebarDrawer;

// import * as React from "react";
// import { Button, View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";

// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Login from "../Screens/user/Login";
// const Drawer = createDrawerNavigator();
// const SlidebarDrawer = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={Login} />
//         <Drawer.Screen name="Details" component={Login} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default SlidebarDrawer;

//PINAKA FINAL NA WORKING
// import "react-native-gesture-handler";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   Pressable,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import {
//   NavigationContainer,
//   useNavigation,
//   DrawerActions,
// } from "@react-navigation/native";
// import Register from "../Screens/user/Register";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Icon from "react-native-vector-icons/Entypo";
// import DrawerContent from "./../DrawerContent";

// import Main from "../Navigators/Main";
// import SupplierNavigator from "../Navigators/SupplierNavigator";
// const Drawer = createDrawerNavigator();
// const SlidebarDrawer = () => {
//   return (
//     <Drawer.Navigator
//       drawerStyle={{
//         backgroundColor: "#00bbff",
//         width: 300,
//       }}>
//       <Drawer.Screen
//         name="Home"
//         component={Main}
//         options={{
//           headerTitle: () => (
//             <View style={styles.header}>
//               <Text style={{ marginRight: 150 }}>Aquatic Dragon</Text>

//               <Image
//                 source={require("../assets/logo2.0.png")}
//                 resizeMode="contain"
//                 style={{ width: 50, height: 50 }}
//               />
//             </View>
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Register as Distributor"
//         component={SupplierNavigator}
//         options={{
//           headerTitle: () => (
//             <View style={styles.header}>
//               <Text style={{ marginRight: 150 }}>Register as Distributor</Text>

//               <Image
//                 source={require("../assets/logo2.0.png")}
//                 resizeMode="contain"
//                 style={{ width: 50, height: 50 }}
//               />
//             </View>
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: "#FFFFFF",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",
//   },
// });
// export default SlidebarDrawer;

// import "react-native-gesture-handler";
// import {
//   NavigationContainer,
//   useNavigation,
//   DrawerActions,
// } from "@react-navigation/native";
// import HomeScreen from "../Screens/HomeScreen";
// import ProfileScreen from "../Screens/ProfileScreen";
// import UserScreen from "../Screens/UserScreen";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Icon from "react-native-vector-icons/Entypo";
// import DrawerContent from "../DrawerContent";
// import SupplierRegister from "../Screens/supplier/SupplierRegister";
// import Main from "../Navigators/Main";
// const StackNav = () => {
//   const Stack = createNativeStackNavigator();
//   const navigation = useNavigation();
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         statusBarColor: "#0163d2",
//         headerStyle: {
//           backgroundColor: "#0163d2",
//         },
//         headerTintColor: "#fff",
//         headerTitleAlign: "center",
//       }}>
//       <Stack.Screen
//         name="Home"
//         component={Main}
//         options={{
//           headerLeft: () => {
//             return (
//               <Icon
//                 name="menu"
//                 onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//                 size={30}
//                 color="#fff"
//               />
//             );
//           },
//         }}
//       />
//       <Stack.Screen name="SupplierRegister" component={SupplierRegister} />
//       <Stack.Screen
//         name="User"
//         component={UserScreen}
//         options={{
//           headerShown: true,
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// const DrawerNav = () => {
//   const Drawer = createDrawerNavigator();
//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <DrawerContent {...props} />}
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Drawer.Screen name="Home" component={StackNav} />
//     </Drawer.Navigator>
//   );
// };

// const SlidebarDrawer = () => {
//   return <DrawerNav />;
// };

// export default SlidebarDrawer;

// SlidebarDrawer.js
import React, { useState, useEffect, useContext } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "../Navigators/Main";
import SupplierNavigator from "../Navigators/SupplierNavigator";
import Header from "../Shared/Header";

import AuthGlobal from "../Context/store/AuthGlobal";
import RiderNavigator from "../Navigators/RiderNavigator";
const Drawer = createDrawerNavigator();

import BranchNavigator from "../Navigators/BranchNavigator";
import AdminNavigator from "../Navigators/AdminNavigator";
import { Ionicons } from "@expo/vector-icons";

const SlidebarDrawer = () => {
  const context = useContext(AuthGlobal);

  return (
    <View style={{ flex: 1 }}>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: "#00bbff",
          width: 300,
        }}>
        <Drawer.Screen
          name="Home"
          component={Main}
          options={{
            headerTitle: () => <Header title="Aquatic Dragon" />,
            drawerIcon: ({ color }) => {
              return (
                <Ionicons
                  name="home"
                  style={{ position: "relative" }}
                  color={color}
                  size={20}
                />
              );
            },
          }}
        />

        {!context.stateUser.isAuthenticated && (
          <Drawer.Screen
            name="Register as Distributor"
            component={SupplierNavigator}
            options={{
              headerTitle: () => <Header title="Register as Distributor" />,
              drawerIcon: ({ color }) => {
                return (
                  <Ionicons
                    name="person-add"
                    style={{ position: "relative" }}
                    color={color}
                    size={20}
                  />
                );
              },
            }}
          />
        )}

        {context && context.stateUser.user.role === "admin" && (
          <>
            <Drawer.Screen
              name="Riders"
              component={RiderNavigator}
              options={{
                headerTitle: () => <Header title="Riders" />,
                drawerIcon: ({ color }) => {
                  return (
                    <Ionicons
                      name="people"
                      style={{ position: "relative" }}
                      color={color}
                      size={20}
                    />
                  );
                },
              }}
            />
            <Drawer.Screen
              name="Store Branches"
              component={BranchNavigator}
              options={{
                headerTitle: () => <Header title="Store Branches" />,
                drawerIcon: ({ color }) => {
                  return (
                    <Ionicons
                      name="clipboard"
                      style={{ position: "relative" }}
                      color={color}
                      size={20}
                    />
                  );
                },
              }}
            />

            <Drawer.Screen
              name="Orders List"
              component={AdminNavigator}
              options={{
                headerTitle: () => <Header title="OrderList" />,
                drawerIcon: ({ color }) => {
                  return (
                    <Ionicons
                      name="people"
                      style={{ position: "relative" }}
                      color={color}
                      size={20}
                    />
                  );
                },
              }}
            />
          </>
        )}
      </Drawer.Navigator>
    </View>
  );
};

export default SlidebarDrawer;
