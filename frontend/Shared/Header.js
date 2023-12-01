// import React from "react";
// import { View, Text, StyleSheet, Image } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const Header = () => {
//   return (
//     <View style={styles.header}>
//       <Ionicons name="menu" style={{ position: "relative" }} size={40} />
//       <Text style={styles.headerText}>Home</Text>
//       <Image
//         source={require("../assets/logo2.0.png")}
//         resizeMode="contain"
//         style={{ width: 70, height: 80 }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: "#FFFFFF",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row", // Align children horizontally
//     paddingTop: 10,
//   },
//   headerText: {
//     flex: 1, // Takes remaining space, pushing the image to the right
//     color: "#000000",
//     fontSize: 20,
//     fontWeight: "bold",
//     marginLeft: 10,
//     textAlign: "left", // Center the text horizontally
//   },
// });

// export default Header;


// Header.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={{ marginRight: 150 }}>{title}</Text>
      <Image
        source={require('../assets/logo2.0.png')}
        resizeMode="contain"
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default Header;
