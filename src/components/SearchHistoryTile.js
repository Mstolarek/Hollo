import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const SearchHistoryTile = ({ navigation, value }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    padding: 5,
    borderRadius: 5,
    margin: 10,
  },
  text: { color: "white" },
});

export default SearchHistoryTile;
