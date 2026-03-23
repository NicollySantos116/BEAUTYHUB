import React, { useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import products from "../data/products";
import logo from "../images/logo.png";
import banner from "../images/banner.png";

const windowWidth = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState("skinCare");

  const categoryTitles = {
    skinCare: "Skin Care",
    makeup: "Makeup",
    hair: "Hair",
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Detail", { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={logo} style={styles.logo} resizeMode="contain" />

      {/* Banner */}
      <Image source={banner} style={styles.banner} resizeMode="contain" />

      {/* Menu de categorias */}
      <View style={styles.menu}>
        {Object.keys(categoryTitles).map((key) => (
          <TouchableOpacity
            key={key}
            style={[styles.menuItem, selectedCategory === key && styles.menuItemActive]}
            onPress={() => setSelectedCategory(key)}
          >
            <Text style={[styles.menuText, selectedCategory === key && styles.menuTextActive]}>
              {categoryTitles[key]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Título da seção */}
      <Text style={styles.sectionTitle}>{categoryTitles[selectedCategory]}</Text>

      {/* Lista de produtos */}
      <FlatList
        data={products[selectedCategory]}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fce4ec", 
    paddingTop: 40,
  },
  logo: {
    width: 140,
    height: 140,
    alignSelf: "center",
    marginBottom: 10,
  },
  banner: {
    width: windowWidth * 0.9,
    height: 130,
    alignSelf: "center",
    borderRadius: 15,
    marginBottom: 10,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f8bbd0",
    paddingVertical: 10,
    marginBottom: 5,
  },
  menuItem: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  menuItemActive: {
    backgroundColor: "#880e4f",
  },
  menuText: {
    fontSize: 14,
    color: "#880e4f",
    fontWeight: "600",
  },
  menuTextActive: {
    color: "#fff",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 15,
    marginVertical: 10,
    color: "#880e4f",
  },
  productList: {
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 15,
    alignItems: "center",
    width: (windowWidth - 60) / 3,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginBottom: 6,
  },
  productName: {
    fontSize: 12,
    fontWeight: "600",
    color: "#880e4f",
    textAlign: "center",
  },
});