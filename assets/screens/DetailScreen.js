import React from "react"; // Importar o React 
import {
  View, //Container
  Text, // Texto 
  Image, // Imagem
  StyleSheet, // Estilos
  ScrollView, // Rolaagem
  TouchableOpacity, // Botão Clicável
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";  // Importar os ícones dos produtos 

export default function DetailScreen({ route, navigation }) { // Criar tabela DatailScreen.js, o route dados da tela anterior e o v=navegation é a naavegação entre telas
  const { product } = route.params; // Pega o produto enviado pela outra tela 

  return ( // Começa o que será exibido 
    <ScrollView // Permitir o que vai ser rolado na tela 
      style={styles.screen} // Aplica estilo geral 
      contentContainerStyle={styles.content} // Estilo do conteúdo interno 
      showsVerticalScrollIndicator={false} // Esconde a barra de rolagem 
    >
      <View style={styles.mobileFrame}> 
        <View style={styles.header}> 
          <View style={styles.topRow}> 
            <Image
              source={require("../images/logo.png")} // Mostrar o logo do App
              style={styles.logo} // Container dos ícones 
              resizeMode="contain" 
            />

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
            <Text style={styles.searchFake}>Search</Text>
          </View>

          <View style={styles.topMenu}>
            <Text style={styles.topMenuItem}>Home</Text>
            <Text style={styles.topMenuItem}>Maquiagem</Text>
            <Text style={styles.topMenuItem}>About Us</Text>
          </View>
        </View>

        <View style={styles.productArea}>
          <View style={styles.productRow}>
            <View style={styles.imageBox}>
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.description}>• {product.description}</Text>
              <Text style={styles.price}>{product.price}</Text>

              <TouchableOpacity style={styles.buyButton} activeOpacity={0.85}>
                <Text style={styles.buyButtonText}>Comprar agora</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.cartButton} activeOpacity={0.85}>
            <Text style={styles.cartButtonText}>Adicionar ao carrinho</Text>
          </TouchableOpacity>

          <Text style={styles.paymentTitle}>Meios de pagamento</Text>

          <View style={styles.greenBox}>
            <Text style={styles.greenText}>Pague em até 5x sem juros!</Text>
          </View>

          <View style={styles.logoRow}>
            <Image
              source={{
                uri: "https://images.tcdn.com.br/img/editor/up/905514/Formas_de_Pagamento1.PNG",
              }}
              style={styles.mercadoPago}
              resizeMode="contain"
            />
          </View>

          <View style={styles.logoRow}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/5/56/Pix_Logo.svg",
              }}
              style={styles.pixLogo}
              resizeMode="contain"
            />
          </View>
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
    paddingBottom: 20,
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

  searchFake: {
    fontSize: 13,
    color: "#3f3f3f",
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

  productArea: {
    paddingHorizontal: 14,
    paddingTop: 18,
  },

  productRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  imageBox: {
    width: 110,
    height: 110,
    borderRadius: 18,
    backgroundColor: "#f6c1d0",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    marginRight: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },

  productImage: {
    width: "82%",
    height: "82%",
  },

  infoBox: {
    flex: 1,
    paddingTop: 4,
  },

  description: {
    fontSize: 12,
    lineHeight: 17,
    color: "#3d3d3d",
    marginBottom: 10,
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#f21874",
    marginBottom: 10,
  },

  buyButton: {
    backgroundColor: "#f46d98",
    borderRadius: 18,
    paddingVertical: 10,
    alignItems: "center",
  },

  buyButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },

  cartButton: {
    marginTop: 10,
    alignSelf: "flex-start",
    backgroundColor: "#a5a5a5",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },

  cartButtonText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "500",
  },

  paymentTitle: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "700",
    color: "#555",
    marginBottom: 12,
  },

  greenBox: {
    backgroundColor: "#11b84a",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 18,
  },

  greenText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 13,
  },

  logoRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  mercadoPago: {
    width: "100%",
    height: 90,
  },

  pixLogo: {
    width: 90,
    height: 36,
  },
});