import React, { useCallback, useState } from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";
import axios from "axios";
import baseURL from "../../assets/common/baseurl";
import { useFocusEffect } from "@react-navigation/native";
import OrderCard from "../../Shared/OrderCard";
const Orders = (props) => {
  const [orderList, setOrderList] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      axios.get(`${baseURL}orders`).then((res) => {
        // console.log(res.data)
        setOrderList(res.data);
        setLoading(false);
      });
      setRefreshing(false);
    }, 2000);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getOrders();
      return () => {
        setOrderList();
      };
    }, [])
  );
  // console.log(`${baseURL}orders`)
  const getOrders = () => {
    axios
      .get(`${baseURL}orders`)
      .then((res) => {
        setOrderList(res.data);
      })
      .catch((error) => console.log(error));
  };
  // console.log(orderList)
  return (
    <View>
      <FlatList
        data={orderList}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => <OrderCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Orders;
