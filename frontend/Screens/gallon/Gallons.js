import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  Dimensions,
} from "react-native";
import React, { useState, useCallback, useContext } from "react";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import baseURL from "../../assets/common/baseurl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GallonList from "./GallonList";
var { height, width } = Dimensions.get("window");

import AuthGlobal from "../../Context/store/AuthGlobal";
import Button from "../../Components/Button";

import { Ionicons } from "@expo/vector-icons";

const Gallons = () => {
  const [gallonList, setGallonList] = useState();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const context = useContext(AuthGlobal);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      axios.get(`${baseURL}gallon`).then((res) => {
        // console.log(res.data)
        setGallonList(res.data);
        setLoading(false);
      });
      setRefreshing(false);
    }, 2000);
  }, []);

  useFocusEffect(
    useCallback(() => {
      // Get Token
      AsyncStorage.getItem("jwt")
        .then((res) => {
          setToken(res);
        })
        .catch((error) => console.log(error));

      axios.get(`${baseURL}gallon`).then((res) => {
      //console.log(res.data);
        setGallonList(res.data);
        setLoading(false);console.log("Gallon List:", gallonList);
      });

      return () => {
        setGallonList();
        setLoading(true);
        
      };
    }, [])
  );

  const ListHeader = () => {
    return (
      <View style={styles.listHeader}>
        {/* <View style={styles.headerItem}></View>
        <View style={styles.headerItem}>
          <Text style={styles.headerItem}>Container Type</Text>
        </View>
        <View style={styles.headerItem}>
          <Text style={styles.headerItem}>Gallon Age</Text>
        </View> */}
        <Text style={styles.headerItem}>Image</Text>

        <Text style={styles.headerItem}>Container Type</Text>

        <Text style={styles.headerItem}>Gallon Age</Text>
      </View>
    );
  };

  return (
    <View>
      <View>
        <Button
          title="Register New Gallon"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
          onPress={() => navigation.navigate("Register Gallon")}
        />
      </View>
      <FlatList
        data={gallonList}
        ListHeaderComponent={ListHeader}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item, index }) => (
          <GallonList item={item} index={index} />
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listHeader: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "lightblue",
    width: width,
    marginBottom: 5,
  },
  headerItem: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  spinner: {
    height: height / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginBottom: 160,
    backgroundColor: "white",
  },
  buttonContainer: {
    margin: 20,
    alignSelf: "center",
    flexDirection: "row",
  },
  buttonText: {
    marginLeft: 4,
    color: "white",
  },
});

export default Gallons;
