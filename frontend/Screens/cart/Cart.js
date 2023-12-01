import { View, Text } from "react-native";
import React from "react";
import Button from "../../Components/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
const Cart = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="Shipping"
        filled
        style={{
          marginTop: 4,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("Checkout")}
      />
    </View>
  );
};

export default Cart;
