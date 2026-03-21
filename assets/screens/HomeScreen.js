import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function HomeScreen({ navigation }) {
  const skinCare = products.filter((item) => item.categoria == 'Skin Care')
  const makeup = products.filter((item) => item.categoria == 'Make Up')
  const hair = products.filter((item) => item.categoria == 'Hair')

  const renderSection = (titulo, dados) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{titulo}</Text>

      <View style={styles.grid}>
        {dados.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onPress={() => navigation.navigate('Detalhes', { product: item })}
          />
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.topIcons}>
          <Feather name="shopping-bag" size={22} color="#333" />
          <Ionicons name="person-circle-outline" size={30} color="#eee" />
        </View>

        <Text style={styles.logoBig}>BH</Text>
        <Text style={styles.logoScript}>BeautyHub</Text>
        <Text style={styles.logoSmall}>BEAUTY & SMART</Text>

        <View style={styles.searchContainer}>
          <Feather name="search" size={18} color="#444" />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
      </View>

      <View style={styles.menu}>
        <Text style={styles.menuText}>Home</Text>
        <Text style={[styles.menuText, styles.menuActive]}>Maquiagem</Text>
        <Text style={styles.menuText}>About Us</Text>
      </View>

      <Image
       source={require('../image/banner.png')}
        style={styles.banner}
      />

      {renderSection('Skin Care', skinCare)}
      {renderSection('Makeup', makeup)}
      {renderSection('Hair', hair)}
    </ScrollView>
  );
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f8edf1',
    },
    header: {
        backgroundColor: '#efb6c4',
        paddingTop: 20,
        paddingHorizontal: 16,
        paddingBottom: 14,
    },
    topIcons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
        marginBottom: 4,
    },
    logoBig: {
        fontSize: 52,
        fontWeight: '700',
        color: 'rgba(110,90,95,0.28)',
    },
    logoScript: {
        fontSize: 28,
        color: '#4d3b40',
        marginTop: -35,
    },
    logoSmall: {
        fontSize: 10,
        letterSpacing: 2,
        color: "#8a6f78",
        marginBottom: 12,
    },
    searchContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 38,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        marginLeft: 6,
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingVertical: 8,
    },
    menuText: {
        fontSize: 14,
        color: '#666',
    },
    menuActive: {
        color: '#9c6072',
        fontWeight: 'bold',
    },
    banner: {
        width: '100%',
        height: 140,
        marginBottom: 10,
    },
    section: {
        paddingHorizontal: 12,
        marginTop: 8,
    },
    sectionTitle: {
        fontSize: 28, 
        color: '#6b6265',
        fontStyle: 'italic',
        marginBottom: 14,
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    }
});