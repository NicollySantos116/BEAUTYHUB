import React, { useMemo, useState } from "react";
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

export default function MakeupScreen({ navigation }) {
  const [search, setSearch] = useState("");

  const filteredMakeup = useMemo(() => {
    return products.makeup.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

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
              <Feather
                name="shopping-bag"
                size={18}
                color="#2c2c2c"
                style={styles.iconSpacing}
              />
              <AntDesign name="user" size={22} color="#d9cfd5" />
            </View>
          </View>

          <View style={styles.searchWrapper}>
            <Feather
              name="search"
              size={14}
              color="#222"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Pesquisar maquiagem"
              placeholderTextColor="#3f3f3f"
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
            />
          </View>

          <View style={styles.topMenu}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.topMenuItem}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Makeup")}>
              <Text style={styles.topMenuItemActive}>Maquiagem</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
              <Text style={styles.topMenuItem}>About Us</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Todos os produtos de maquiagem</Text>

          {filteredMakeup.length ? (
            <View style={styles.grid}>
              {filteredMakeup.map((item) => (
                <ProductCard key={item.id} item={item} navigation={navigation} />
              ))}
            </View>
          ) : (
            <Text style={styles.emptyText}>Nenhum produto encontrado.</Text>
          )}
        </View>
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
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 6,
  },

  searchIcon: {
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
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
    paddingVertical: 10,
    marginHorizontal: -12,
    marginTop: 2,
  },

  topMenuItem: {
    fontSize: 13,
    color: "#6d6d6d",
    fontWeight: "600",
  },

  topMenuItemActive: {
    fontSize: 13,
    color: "#f21874",
    fontWeight: "700",
  },

  section: {
    paddingHorizontal: 14,
    paddingTop: 18,
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

  emptyText: {
    fontSize: 13,
    color: "#756a73",
    marginTop: 4,
  },
});