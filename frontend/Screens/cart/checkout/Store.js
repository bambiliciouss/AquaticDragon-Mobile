import React, { useState, useCallback, useContext } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Container,
  Heading,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import baseURL from "../../../assets/common/baseurl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthGlobal from "../../../Context/store/AuthGlobal";
import Toast from "react-native-toast-message";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../../Components/Button";
const Store = (props) => {
  const checkoutContent = props.route.params ? props.route.params.order : null;
  const [selectedStore, setselectedStore] = useState(null);
  const [branchList, setBranchList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const context = useContext(AuthGlobal);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      axios.get(`${baseURL}supplier`).then((res) => {
        setBranchList(res.data);
        setLoading(false);
      });
      setRefreshing(false);
    }, 2000);
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (!context.stateUser.isAuthenticated) {
        navigation.navigate("User", { screen: "Login" });
      } else {
        AsyncStorage.getItem("jwt")
          .then((res) => {
            axios
              .get(`${baseURL}supplier/`, {
                headers: { Authorization: `Bearer ${res}` },
              })
              .then((res) => {
                setBranchList(res.data);
                setLoading(false);
              });
          })
          .catch((error) => console.log(error));

        return () => {
          setBranchList([]);
          setLoading(true);
        };
      }
    }, [context.stateUser.isAuthenticated])
  );

  const checktoPayment = () => {
    console.log("orders", checkoutContent);
    let order = {
      checkoutContent,
      selectedStore,
    };
    console.log("ship", order);
    navigation.navigate("Payment", { order: order });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setselectedStore(item._id);
        console.log("Selected Store:", item._id);
      }}
      style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ marginRight: 8 }}>
        <View
          style={{
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: selectedStore === item._id ? "#3498db" : "#95a5a6",
            alignItems: "center",
            justifyContent: "center",
          }}>
          {selectedStore === item._id && (
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: "#3498db",
              }}
            />
          )}
        </View>
      </View>
      <Text>{item.branchNo}</Text>
    </TouchableOpacity>
  );
  return (
    <>
      <Text>Select Store</Text>
      <FlatList
        data={branchList}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()} // Make sure to use toString() for the key
      />
      <View style={{ width: "100%", alignItems: "center" }}>
        <Button
          title="Confirm Store"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
            width: 300,
          }}
          onPress={() => checktoPayment()}
        />
      </View>
    </>
  );
};
export default Store;
