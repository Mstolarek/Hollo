import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./navigation";
import "react-native-gesture-handler";

import store from "./store/index";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </View>
  );
};

export default App;
