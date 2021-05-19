import React from "react";
import { Text, View, StyleSheet } from "react-native";

const SingleTrainingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is Single Training Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "green", height: 200, width: 200 },
});

export default SingleTrainingScreen;
