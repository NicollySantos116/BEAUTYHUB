import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

//componente ProductCard: exibe um card de produto com imagem e nome, clicavel.
//recebe 'item' (dados do produto) e 'navigation' (objeto de navegação de React Navigation).
export default function ProductCard({ item, navigation }) {
  return (
    // TouchableOpacity: torna o card clicável, com opacidade reduzida ao ser pressionado.
    //activeOpacity: define a opacidade do card quando pressionado (0.9 = quase sem mudança).
    // onPress: Navega para a tela 'Detail', passando os dados do produto.
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={() => navigation.navigate("Detail", { product: item })}
    >
    {/* Container para a imagem do produto */}
      <View style={styles.imageBox}>
        <Image
          source={{ uri: item.image }}//carrega a imagem da URL
          style={styles.image}
          resizeMode="contain"//ajuda a imagem sem distorcer.
        />
      </View>
 {/* Texto do nome do produto */}
      <Text style={styles.name}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

//Definição dos estilos dos componentes em CSS e Js.
const styles = StyleSheet.create({
  card: {
    width: "30.5%", //Largura para caber aproximadamente 3 cards por linha, considerando margens.
    alignItems: "center",
    marginBottom: 18,
  },

  imageBox: {
    width: "100%",
    aspectRatio: 1, //mantém o conteiner quadrado (proporção 1:1)
    backgroundColor: "#f6c1d0",//cor de fundo rosa claro 
    borderRadius: 18, //Bordas arredondadas
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
//Estilos de sombra para iOs
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.10,
    shadowRadius: 10,
    elevation: 4,
    //estilo de sombra para Android
  },

  image: {
    width: "80%", //A imagem interna ocupa 80% do box
    height: "80%",
  },

  name: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 11,//fonte pequena
    lineHeight: 14,
    color: "#756a73",// cor de texto cinza escuro
    minHeight: 30,//Garante alinhamento consistente mesmo para nomes curtos
  },
});