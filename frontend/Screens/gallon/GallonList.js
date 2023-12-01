import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import Button
 from "../../Components/Button";
var { width } = Dimensions.get("window");
const GallonList = (item, index) => {
  //   useEffect(() => {
  //     console.log("Item:", item);
  //   }, [item]);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: index % 2 == 0 ? "white" : "gainsboro",
        },
      ]}>
      <Image
        source={{
          uri: item.item.image ? item.item.image : null,
        }}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.item}>{item.item.type || "N/A"}</Text>

      <Text style={styles.item}>{item.item.gallonAge || "N/A"}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    width: width,
    marginBottom: 5,
  },
  image: {
    borderRadius: 10,
    width: width / 3,
    aspectRatio: 1,
    margin: 7,
  },
  item: {
    flexWrap: "wrap",
    marginVertical: 3,
    width: width / 3,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
});

export default GallonList;
