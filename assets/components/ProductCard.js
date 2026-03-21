import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ProductCard({ item, navigation }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Detail", { product: item })}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f8cdd3",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    margin: 8,
    width: 150,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  name: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
  },
  price: {
    fontSize: 12,
    color: "#e91e63",
    fontWeight: "bold",
  },
});