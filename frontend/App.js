import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Toast from "react-native-toast-message";
import Main from "./Navigators/Main";
import Auth from "./Context/store/Auth";
import Header from "./Shared/Header";
import SlidebarDrawer from "./Shared/SlidebarDrawer";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { NativeBaseProvider, extendTheme } from "native-base";

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  return (
    <Auth>
      <Provider store={store}>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            {/* <Header /> */}
            <SlidebarDrawer />
            {/* <Main /> */}
            <Toast />
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
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
