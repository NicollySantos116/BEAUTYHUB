import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

import logo from "../images/logo.png";
import banner from "../images/banner.png";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Image source={banner} style={styles.banner} />

      <Text style={styles.section}>Skin Care</Text>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2d6db",
    paddingTop: 40,
  },
  logo: {
    width: 140,
    height: 140,
    resizeMode: "contain",
    alignSelf: "center",
  },
  banner: {
    width: 900,
    height: 200,
    alignSelf: "center",
    borderRadius: 20,
    marginVertical: 10,
  },
  section: {
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 5,
  },
});