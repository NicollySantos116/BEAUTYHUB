import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

export default function ProductCard({ item, navigation }) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={() => navigation.navigate("Detail", { product: item })}
    >
      <View style={styles.imageBox}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.name}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "30.5%",
    alignItems: "center",
    marginBottom: 18,
  },

  imageBox: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#f6c1d0",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.10,
    shadowRadius: 10,
    elevation: 4,
  },

  image: {
    width: "80%",
    height: "80%",
  },

  name: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 11,
    lineHeight: 14,
    color: "#756a73",
    minHeight: 30,
  },
});