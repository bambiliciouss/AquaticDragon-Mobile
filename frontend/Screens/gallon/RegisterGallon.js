import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useEffect, useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../Constants/colors";
import Button from "../../Components/Button";

import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import baseURL from "../../assets/common/baseurl";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthGlobal from "../../Context/store/AuthGlobal";

const RegisterGallon = () => {
  const [user, setUser] = useState("");
  const [type, setType] = useState("");
  const [gallonAge, setGallonAge] = useState("");

  const navigation = useNavigation();
  const context = useContext(AuthGlobal);

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  // const registerGallon = (props) => {
  //   let gallon = {
  //     type: type,
  //     gallonAge: gallonAge,
  //   };
  //   AsyncStorage.getItem("jwt")
  //     .then((res) => {
  //       setToken(res);
  //     })
  //     .catch((error) => console.log(error));
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   axios
  //     .post(`${baseURL}gallon/registergallons`, gallon, config)
  //     .then((res) => {
  //       if (res.status == 200 || res.status == 201) {
  //         Toast.show({
  //           topOffset: 60,
  //           type: "success",
  //           text1: "Registration Succeeded",
  //         });
  //         setTimeout(() => {
  //           navigateToLogin();
  //         }, 500);
  //       }
  //     })
  //     .catch((error) => {
  //       Toast.show({
  //         position: "bottom",
  //         bottomOffset: 20,
  //         type: "error",
  //         text1: "Something went wrong",
  //         text2: "Please try again",
  //       });
  //     });
  // };

  useEffect(() => {
    if (context.stateUser.isAuthenticated) {
      setUser(context.stateUser.user.userId);
    }
  });

  const registerGallon = () => {
    let gallon = {
      type: type,
      gallonAge: gallonAge,
      user: user,
    };
    console.log(gallon);
    axios
      .post(`${baseURL}gallon/registergallons`, gallon)
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
          Toast.show({
            topOffset: 60,
            type: "success",
            text1: "Order Completed",
            text2: "",
          });
          // dispatch(actions.clearCart())
          // props.navigation.navigate("Cart")

          setTimeout(() => {
            navigateToLogin();
          }, 500);
        }
      })
      .catch((error) => {
        Toast.show({
          topOffset: 60,
          type: "error",
          text1: "Something went wrong",
          text2: "Please try again",
        });
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <KeyboardAwareScrollView>
        <View style={{ flex: 1, marginHorizontal: 22 }}>
          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginVertical: 12,
                color: COLORS.black,
              }}>
              Register Gallon
            </Text>
          </View>

          {/* TYPE */}
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
              }}>
              Type of Gallon
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 10,
              }}>
              <TextInput
                placeholder="Enter your type of gallon"
                placeholderTextColor={COLORS.black}
                keyboardType="default"
                style={{
                  width: "100%",
                }}
                onChangeText={(text) => setType(text)}
              />
            </View>
          </View>

          {/* AGE */}
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
              }}>
              Age
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 10,
              }}>
              <TextInput
                placeholder="Enter your age"
                placeholderTextColor={COLORS.black}
                keyboardType="numeric"
                style={{
                  width: "100%",
                }}
                onChangeText={(text) => setGallonAge(text)}
              />
            </View>
          </View>

          <Button
            title="Register"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
            }}
            onPress={() => registerGallon()}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default RegisterGallon;
