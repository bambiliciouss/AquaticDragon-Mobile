import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Toast from "react-native-toast-message";
import Main from "./Navigators/Main";
import Auth from "./Context/store/Auth";
import Header from "./Shared/Header";
import SlidebarDrawer from "./Shared/SlidebarDrawer";

export default function App() {
  return (
    <Auth>
      <NavigationContainer>
        {/* <Header /> */}
        <SlidebarDrawer />
        {/* <Main /> */}
        <Toast />
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
