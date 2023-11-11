import React, { useContext, useState, useCallback } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";
import baseURL from "../../assets/common/baseurl";

import AuthGlobal from "../../Context/store/AuthGlobal";
import { logoutUser } from "../../Context/Actions/Auth.actions";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Button from "../../Components/Button";


const Profile = () => {
  const context = useContext(AuthGlobal);
  const [userProfile, setUserProfile] = useState("");
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      if (
        context.stateUser.isAuthenticated === false ||
        context.stateUser.isAuthenticated === null
      ) {
        navigation.navigate("Login");
      }
      console.log(context.stateUser.user);
      AsyncStorage.getItem("jwt")
        .then((res) => {
          axios
            .get(`${baseURL}users/${context.stateUser.user.userId}`, {
              headers: { Authorization: `Bearer ${res}` },
            })
            .then((user) => setUserProfile(user.data));
        })
        .catch((error) => console.log(error));
      return () => {
        setUserProfile();
      };
    }, [context.stateUser.isAuthenticated])
  );

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>
          {" "}
          {userProfile ? userProfile.fname : ""}{" "}
          {userProfile ? userProfile.lname : ""}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>
          {userProfile ? userProfile.email : ""}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Phone:</Text>
        <Text style={styles.infoValue}>
          {userProfile ? userProfile.phone : ""}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Location:</Text>
        <Text style={styles.infoValue}>
          {userProfile ? userProfile.houseNo : ""},{" "}
          {userProfile ? userProfile.purokNum : ""}{" "}
          {userProfile ? userProfile.streetName : ""},{" "}
          {userProfile ? userProfile.barangay : ""},{" "}
          {userProfile ? userProfile.city : ""}
        </Text>
      </View>

      <Button
        title="Logout"
        filled
        style={{
          marginTop: 18,
          marginBottom: 4,
        }}
        onPress={() => [
          AsyncStorage.removeItem("jwt"),
          logoutUser(context.dispatch),
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: "bold",
  },
  infoValue: {
    marginTop: 5,
  },
});

export default Profile;
