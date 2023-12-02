import React, { useState } from "react";
import {
  View,
  Button,
  Pressable,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  Container,
  Text,
  Radio,
  Right,
  Left,
  Picker,
  Box,
  HStack,
  VStack,
  Heading,
  Divider,
  CheckCircleIcon,
  Select,
  CheckIcon,
} from "native-base";

import { useNavigation } from "@react-navigation/native";

const methods = [
  { name: "Cash on Delivery", value: 1 },
  { name: "Bank Transfer", value: 2 },
  { name: "Card Payment", value: 3 },
];

const paymentCards = [
  { name: "Wallet", value: 1 },
  { name: "Visa", value: 2 },
  { name: "MasterCard", value: 3 },
  { name: "Other", value: 4 },
];

const Payment = (props) => {
  const storeContent = props.route.params ? props.route.params.order : null;
  console.log("order", storeContent);
  const [selectedPayment, setselectedPayment] = useState("");
  const [card, setCard] = useState("");
  const navigation = useNavigation();

  const checktoConfirm = () => {
    console.log("orders", storeContent);
    let order = {
      storeContent,
      selectedPayment,
    };
    console.log("ship", order);
    navigation.navigate("Confirm", { order: order });
  };

  return (
    <Container flex="1">
      <Heading>
        <Text>Choose your payment method</Text>
      </Heading>

      <HStack bg="red.200" width="100%">
        <Radio.Group
          name="myRadioGroup"
          value={selectedPayment}
          onChange={(value) => {
            setselectedPayment(value);
          }}>
          {console.log(selectedPayment)}
          {methods.map((item, index) => {
            return (
              <Radio
                key={index}
                value={item.value}
                my="1"
                colorScheme="green"
                size="22"
                style={{ float: "right" }}
                icon={
                  <CheckCircleIcon size="22" mt="0.5" color="emerald.500" />
                }>
                {item.name}
              </Radio>
            );
          })}
        </Radio.Group>
      </HStack>

      <View style={{ marginTop: 60, alignSelf: "center" }}>
        <Button title={"Confirm"} onPress={() => checktoConfirm()} />
      </View>
    </Container>
  );
};
export default Payment;
