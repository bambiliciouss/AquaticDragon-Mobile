import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Select } from "native-base";

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import baseURL from "../assets/common/baseurl";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import TrafficLight from "./StyledComponents/TrafficLight";
import EasyButton from "./StyledComponents/EasyButton";
import Toast from "react-native-toast-message";

const codes = [
  { name: "Order Placed", code: "1" },
  { name: "Order Accepted", code: "2" },
  { name: "Rider is on the way to pick up your Gallon", code: "3" },
  { name: "Gallon has been picked up by the Rider", code: "4" },
  { name: "Gallon/s is at the station", code: "5" },
  { name: "Out for Delivery", code: "6" },
  { name: "Delivered", code: "7" },
];

const OrderCard = ({ item }) => {
  const [orderStatus, setOrderStatus] = useState();
  const [statusText, setStatusText] = useState();
  const [statusChange, setStatusChange] = useState();
  const [token, setToken] = useState();
  const [cardColor, setCardColor] = useState();
  const navigation = useNavigation();

  const updateOrder = () => {
    AsyncStorage.getItem("jwt")
      .then((res) => {
        setToken(res);
      })
      .catch((error) => console.log(error));
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const order = {
      orderItems: item.orderItems,
      latitude: item.latitude,
      longitude: item.longitude,
      houseNo: item.houseNo,
      street: item.street,
      city: item.city,
      region: item.region,
      country: item.country,
      user: item.user,
      payment: item.payment,
      dateOrdered: item.dateOrdered,
      id: item.id,
      status: statusChange,
    };
    axios
      .put(`${baseURL}orders/${item.id}`, order, config)
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
          Toast.show({
            topOffset: 60,
            type: "success",
            text1: "Order Edited",
            text2: "",
          });
          setTimeout(() => {
            navigation.navigate("Orders");
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

  useEffect(() => {
    if (item.status == "1") {
      setOrderStatus(<TrafficLight limited></TrafficLight>);
      setStatusText("Order Placed");
      setCardColor("#fa9893");
    } else if (item.status == "2") {
      setOrderStatus(<TrafficLight limited></TrafficLight>);
      setStatusText("Order Accepted");
      setCardColor("#f5e08c");
    } else if (item.status == "3") {
      setOrderStatus(<TrafficLight limited></TrafficLight>);
      setStatusText("Rider is on the way to pick up your Gallon");
      setCardColor("#f5e08c");
    } else if (item.status == "4") {
      setOrderStatus(<TrafficLight limited></TrafficLight>);
      setStatusText("Gallon has been picked up by the Rider");
      setCardColor("#f5e08c");
    } else if (item.status == "5") {
      setOrderStatus(<TrafficLight limited></TrafficLight>);
      setStatusText("Gallon/s is at the station");
      setCardColor("#f5e08c");
    } else if (item.status == "6") {
      setOrderStatus(<TrafficLight limited></TrafficLight>);
      setStatusText("Out for Delivery");
      setCardColor("#F1C40F");
    } else {
      setOrderStatus(<TrafficLight available></TrafficLight>);
      setStatusText("Delivered");
      setCardColor("#2ECC71");
    }

    return () => {
      setOrderStatus();
      setStatusText();
      setCardColor();
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={[{ backgroundColor: cardColor }, styles.pricingOption]}>
          <Text style={styles.pricingOptionTitle}>Status: {statusText}</Text>
          <Text style={styles.pricingOptionPrice}>
            Order Number: #{item.id}
          </Text>
          <Text style={styles.pricingOptionDescription}>
            Address: {item.houseNo} {item.street} {item.city} {item.region}{" "}
            {item.country}
          </Text>
          <Text style={styles.pricingOptionDescription}>
            Date Ordered: {item.dateOrdered.split("T")[0]}
          </Text>
          <View>
            <Select
              width="80%"
              iosIcon={<Icon name="arrow-down" color={"black"} />}
              style={{ width: undefined, borderColor: "#000000" }}
              selectedValue={statusChange}
              color="black"
              placeholder="Change Status"
              placeholderTextColor="black"
              placeholderStyle={{ color: "black" }}
              placeholderIconColor="#007aff"
              onValueChange={(e) => setStatusChange(e)}>
              {codes.map((c) => {
                return (
                  <Select.Item key={c.code} label={c.name} value={c.code} />
                );
              })}
            </Select>
          </View>
          <EasyButton secondary large onPress={() => updateOrder()}>
            <Text style={{ color: "white" }}>Update</Text>
          </EasyButton>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  pricingOption: {
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
  },
  pricingOptionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pricingOptionPrice: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
  pricingOptionDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  pricingOptionFeatures: {
    marginBottom: 10,
  },
  pricingOptionFeature: {
    fontSize: 14,
    color: "#999",
  },
  pricingOptionButtonContainer: {
    backgroundColor: "#00BFFF",
    borderRadius: 5,
    marginTop: 20,
  },
  pricingOptionButton: {
    fontSize: 14,
    color: "#fff",
    padding: 10,
  },
});

export default OrderCard;
