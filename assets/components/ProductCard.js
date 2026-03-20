import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
export default function
ProductCard({product, onPress}) {
    return (
           <TouchableOpacity style ={styles.card} onPress={onPress}>
        <Image source={{ uri: product.image}} style= {styles.image}/>
        <Text style= {styles.name}>{product.name}</Text>
    </TouchableOpacity>
    );
 
}


const styles= StyleSheet.create ({
    card: {
        width: '30%',
        backgroundColor: '#f6c8d4',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        marginBottom: 12,
    },
     
    image: {
        width: 70,
        height: 70,
        marginBottom: 8,
    },

    name: {
        textAlign: 'center',
        fontSize: 13,
        color: "#555"
    }

});