import  React from 'react';
import{ View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

 export default function DetailScreen({ route, navigation }) {
    const { product } = route.params;
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>  
                <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>
            <Image source={{ uri: product.imagem }} style={styles.imagem} />
            <Text style={styles.nome}>{product.nome}</Text>
            <Text style={styles.preco}>{product.preco}</Text>
            <Text style={styles.descricao}>{product.descricao}</Text>
                 <TouchableOpacity style={styles.botaoComprar}>
            <Text style={styles.textoBotao}>Comprar Agora</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8edf1',
    },
    botaoVoltar: {
        marginTop: 20,
        marginBottom: 10,
    },
    caixaImagem: {
        backgroundColor: '#f6c8d4',
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
      imagem: {
        width: 180,
        height: 180,
        color: '#444',
      },
      categoria: {
        fontSize: 14, 
        color: '#888',
        marginTop: 5,
      },
      preco: {
        fontSize: 16,
        color: '#E2049F',
        fontWeight: 'bold',
        marginVertical: 10,
      },
      descricao: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
      },
      botaoComprar: {
        backgroundColor: '#FB7E9D',
        padding: 14,
        borderRadius: 30,
        alignItems: 'center',
      },
      textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      }
});