import { text } from 'express';
import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';

export default function
ProductCard({product, onPress}) {
    return (
           <TouchableOpacity style ={StyleSheet.card} onPress={onPress}>
        <Image source={{ uri: product.image}} style= {StyleSheet.image}/>
        <Text style= {StyleSheet.name}>{product.name}</Text>
    </TouchableOpacity>
    );
 
}


const style= StyleSheet.create ({
    card: {
        width: '30%',
        backgroundColor: '#f6c8d4',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        marginBottom: 12,
    },
     
    Image: {
        width: 70,
        height: 70,
        marginBottom: 8,
    },

    name: {
        textAling: 'center',
        fontize: 13,
        color: "#555"
    }

})