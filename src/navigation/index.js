import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import SearchScreen from "../screens/SearchScreen";
import SingleTrainingScreen from "../screens/SingleTrainingScreen";
import SettingsScreen from "../screens/SettingsScreen";
const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName={"Main"}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};
