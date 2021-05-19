import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import SearchScreen from "../screens/SearchScreen";
import SingleTrainingScreen from "../screens/SingleTrainingScreen";
import SettingsScreen from "../screens/SettingsScreen";

const MainStack = createStackNavigator(
  {
    Main: MainScreen,
    Search: SearchScreen,
    SingleTraining: SingleTrainingScreen,
    Settings: SettingsScreen,
  },
  { initialRouteName: "Main" }
);

export default MainStack;
