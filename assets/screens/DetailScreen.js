import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function DetailScreen({ route }) {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>

      <Text style={styles.description}>{product.description}</Text>

      <TouchableOpacity style={styles.addCart}>
        <Text style={styles.addCartText}>Adicionar ao carrinho</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buyNow}>
        <Text style={styles.buyNowText}>Comprar agora</Text>
      </TouchableOpacity>

      <Text style={styles.paymentTitle}>Meios de pagamento</Text>

      <View style={styles.paymentMethods}>
        <Image
          source={{ uri: "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.21.0/mercado-pago/MP-acceptance-medium.png" }}
          style={styles.paymentImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.paymentSubTitle}>Linha de Crédito</Text>
      <View style={styles.paymentMethods}>
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Elo_logo.svg/1200px-Elo_logo.svg.png" }}
          style={styles.paymentImage}
          resizeMode="contain"
        />
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mastercard-logo.png/320px-Mastercard-logo.png" }}
          style={styles.paymentImage}
          resizeMode="contain"
        />
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/2560px-Visa.svg.png" }}
          style={styles.paymentImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.paymentSubTitle}>Pix</Text>
      <View style={styles.paymentMethods}>
        <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/56/Pix_Logo.svg" }}
          style={[styles.paymentImage, { width: 50, height: 50 }]}
          resizeMode="contain"
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fce4ec",
    padding: 20,
  },
  image: {
    width: windowWidth - 40,
    height: 220,
    borderRadius: 20,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#880e4f",
  },
  price: {
    fontSize: 18,
    color: "#e91e63",
    marginVertical: 10,
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 25,
  },
  addCart: {
    backgroundColor: "#ddd",
    borderRadius: 12,
    paddingVertical: 15,
    marginBottom: 15,
  },
  addCartText: {
    textAlign: "center",
    fontWeight: "600",
  },
  buyNow: {
    backgroundColor: "#e91e63",
    borderRadius: 12,
    paddingVertical: 15,
    marginBottom: 20,
  },
  buyNowText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  paymentTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    color: "#880e4f",
  },
  paymentMethods: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  paymentImage: {
    width: 80,
    height: 30,
    marginRight: 10,
  },
  paymentSubTitle: {
    fontWeight: "600",
    fontSize: 14,
    color: "#880e4f",
    marginBottom: 5,
  },
});