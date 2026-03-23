import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import logo from "../images/logo.png";
import banner from "../images/banner.png";

export default function HomeScreen({ navigation }) {
  const renderSection = (title, data) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>

      <View style={styles.grid}>
        {data.map((item) => (
          <ProductCard key={item.id} item={item} navigation={navigation} />
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.mobileFrame}>
        <View style={styles.header}>
          <View style={styles.topRow}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />

            <View style={styles.icons}>
              <Feather name="shopping-bag" size={18} color="#2c2c2c" style={styles.iconSpacing} />
              <AntDesign name="user" size={22} color="#d9cfd5" />
            </View>
          </View>

          <View style={styles.searchWrapper}>
            <Feather name="search" size={14} color="#222" style={styles.searchIcon} />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#3f3f3f"
              style={styles.searchInput}
            />
          </View>

          <View style={styles.topMenu}>
            <TouchableOpacity>
              <Text style={styles.topMenuItem}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.topMenuItem}>Maquiagem</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.topMenuItem}>About Us</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Image source={banner} style={styles.banner} resizeMode="cover" />

        {renderSection("Skin Care", products.skinCare)}
        {renderSection("Makeup", products.makeup)}
        {renderSection("Hair", products.hair)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#efefef",
  },

  content: {
    alignItems: "center",
    paddingVertical: 14,
  },

  mobileFrame: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#f8e7ec",
    paddingBottom: 18,
  },

  header: {
    backgroundColor: "#f4becf",
    paddingTop: 14,
    paddingHorizontal: 12,
    paddingBottom: 0,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },

  logo: {
    width: 110,
    height: 58,
  },

  icons: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  iconSpacing: {
    marginRight: 12,
  },

  searchWrapper: {
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 6,
  },

  searchIcon: {
    marginRight: 4,
  },

  searchInput: {
    flex: 1,
    fontSize: 13,
    color: "#222",
    paddingVertical: 0,
  },

  topMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderColor: "#d8c9cf",
    backgroundColor: "#f8e7ec",
    paddingVertical: 5,
    marginHorizontal: -12,
    marginTop: 2,
  },

  topMenuItem: {
    fontSize: 11,
    color: "#6d6d6d",
    fontWeight: "500",
  },

  banner: {
    width: "100%",
    height: 120,
  },

  section: {
    paddingHorizontal: 14,
    paddingTop: 14,
  },

  sectionTitle: {
    fontSize: 15,
    fontStyle: "italic",
    color: "#7b6a73",
    marginBottom: 12,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});