import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import logo from "../images/logo.png";

export default function AboutUsScreen({ navigation }) {
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

          <View style={styles.topMenu}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.topMenuItem}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Makeup")}>
              <Text style={styles.topMenuItem}>Maquiagem</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
              <Text style={styles.topMenuItemActive}>About Us</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.aboutBox}>
          <Text style={styles.title}>About Us</Text>

          <Text style={styles.paragraph}>
            Bem-vindo ao BEAUTYHUB !!
          </Text>

          <Text style={styles.paragraph}>
            Somos uma loja dedicada para realçar a sua beleza e o cuidado pessoal através de produtos selecionados 
            de skincare, maquiagem e cuidados capilares. 
          </Text>

          <Text style={styles.paragraph}>
            Nosso objetivo é trazer praticidade, quaslidade e uma experiência moderna para você cuidar de si todos os dias.
            BeautyHub: Cuidando de você em cada detalhe.
          </Text>
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

  aboutBox: {
    paddingHorizontal: 18,
    paddingTop: 24,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#7b5c68",
    marginBottom: 16,
  },

  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    color: "#6b5a63",
    marginBottom: 14,
  },
});