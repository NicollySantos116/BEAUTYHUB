import  React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

 export default function DetailScreen({ route, navigation }) {
    const { product } = route.params;
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>  
                <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>
            <Image source={{ uri: product.imagem }} style={styles.image} />
            <Text style={styles.name}>{product.nome}</Text>
            <Text style={styles.price}>{product.preco}</Text>
            <Text style={styles.description}>{product.descricao}</Text>
                 <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Comprar Agora</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8edf1',
        padding: 20,
    },
    botaoVoltar: {
        marginBottom: 20,
        mar