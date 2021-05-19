import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import SearchHistoryTile from "../components/SearchHistoryTile";
import {
  addHistoryItem,
  clearHistoryItem,
} from "../store/modules/Search/actions";
import { getHistory } from "../store/modules/Search/selectors";

let SearchHistory = [];

const SearchScreen = ({ navigation }) => {
  const searchHistory = useSelector(getHistory);
  const dispatch = useDispatch();
  const PopularSearches = [
    { id: 1, name: "Permament Brows" },
    { id: 2, name: "Anastasia Beauty" },
    { id: 3, name: "Botox" },
    { id: 4, name: "Hair" },
  ];
  const [search, setSearch] = useState(null);

  const clearHelper = () => {
    SearchHistory = [];
    dispatch(clearHistoryItem());
  };
  const Helper = () => {
    SearchHistory.push({ id: SearchHistory.length + 1, name: search });
    dispatch(addHistoryItem({ id: SearchHistory.length + 1, name: search }));
    navigation.navigate("Main");
  };

  return (
    <View>
      <Text>{JSON.stringify(searchHistory)}</Text>
      <View style={styles.searchContiner}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Main");
          }}
          style={{ alignSelf: "center" }}
        >
          <FiArrowLeft
            style={{ alignSelf: "center", fontSize: 32, color: "purple" }}
          />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <TextInput
            value={search}
            onChangeText={setSearch}
            onSubmitEditing={Helper}
            placeholder="Type name of the training course ..."
            style={{ flex: 1, height: 30, marginLeft: 10, alignSelf: "center" }}
          />
          <FiSearch
            style={{
              alignSelf: "flex-end",
              margin: 10,
              fontSize: 24,
              color: "purple",
            }}
          />
        </View>
      </View>

      <View style={styles.searchHistoryContainer}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.smallText}>Search</Text>
          <TouchableOpacity onPress={clearHelper}>
            <Text style={styles.smallText}>Clean</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.bigText}>History</Text>
        <FlatList
          data={SearchHistory}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SearchHistoryTile value={item.name} />}
        />
      </View>

      <View style={styles.searchHistoryContainer}>
        <Text style={styles.smallText}>Popular</Text>
        <Text style={styles.bigText}>Searches</Text>
        <FlatList
          data={PopularSearches}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SearchHistoryTile value={item.name} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContiner: {
    flexDirection: "row",
    marginVertical: 50,
    flex: 1,
    marginHorizontal: 10,
  },
  searchBar: {
    flexDirection: "row",
    flex: 1,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5,
  },
  searchHistoryContainer: { marginHorizontal: 10, marginVertical: 20, flex: 1 },
  smallText: { color: "purple" },
  bigText: { fontSize: 16, fontWeight: "bold", marginBottom: 20 },
});

export default SearchScreen;

SearchScreen.navigationOptions = () => {
  return { headerShown: false };
};
