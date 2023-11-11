import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Main from "./Navigators/Main";
import Auth from "./Context/store/Auth";

export default function App() {
  return (
    <Auth>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Auth>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
