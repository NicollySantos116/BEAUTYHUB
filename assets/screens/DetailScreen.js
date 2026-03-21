import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function DetailScreen({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />

      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.desc}>{product.description}</Text>

      <TouchableOpacity style={styles.cart}>
        <Text style={styles.cartText}>Adicionar ao carrinho</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buy}>
        <Text style={styles.buyText}>Comprar agora</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    color: "#e91e63",
    marginVertical: 5,
  },
  desc: {
    fontSize: 14,
    color: "#555",
  },
  cart: {
    backgroundColor: "#ddd",
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
  },
  cartText: {
    textAlign: "center",
  },
  buy: {
    backgroundColor: "#e91e63",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buyText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});