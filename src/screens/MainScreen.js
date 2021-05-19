import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import SingleTrainingScreen from "./SingleTrainingScreen";
import { FiSearch, FiMoreVertical } from "react-icons/fi";

const MainScreen = ({ navigation }) => {
  const GlobalState = useSelector((s) => s);
  return (
    <View>
      <Text>{JSON.stringify(GlobalState)}</Text>
      <View style={styles.searchBarNavigation}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search");
          }}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text>Hi, Logged User</Text>
              <Text>Chose training for you!</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FiSearch />
              <Text>ikonka 2</Text>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Settings");
                }}
              >
                <FiMoreVertical />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SingleTraining");
        }}
      >
        <SingleTrainingScreen />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarNavigation: {
    backgroundColor: "grey",
    marginVertical: 50,
    marginHorizontal: 10,
    borderRadius: 5,
    height: 60,
  },
});

export default MainScreen;

MainScreen.navigationOptions = () => {
  return { headerShown: false };
};
