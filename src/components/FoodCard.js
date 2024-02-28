import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importe o componente FontAwesome corretamente
import { useNavigation } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function FoodCard({ item, index }) {
    const navigation = useNavigation();
    const gradientColors = ['#1A9DBA', '#AACCFE'];  
    
    const handleConhecerPress = (negocioId) => {
        // Lógica para cancelar o produto com o ID especificado
        console.log('Conhecer o negócio com ID:', negocioId);
    };

    // Componente de Estrela
    // Componente de Estrela
    const StarRating = ({ rating }) => {
        const filledStars = Math.floor(rating);
        const halfStars = rating - filledStars >= 0.5 ? 1 : 0;
        const emptyStars = 5 - filledStars - halfStars;
    
        const stars = [];
    
        // Preenche as estrelas preenchidas
        for (let i = 0; i < filledStars; i++) {
            stars.push(<FontAwesome key={`star_${i}`} name="star" color="yellow" size={12} />);
        }
    
        // Adiciona a estrela pela metade, se houver
        if (halfStars === 1) {
            stars.push(<FontAwesome key="halfStar" name="star-half-full" color="yellow" size={12} />);
        }
    
        // Preenche as estrelas vazias
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FontAwesome key={`emptyStar_${i}`} name="star-o" color="yellow" size={12} />);
        }
    
        return (
            <View style={{ flexDirection: 'row' }}>
                {stars}
            </View>
        );
    };
    


    return (
        <View>
            <LinearGradient colors={gradientColors} style={styles.container}>
                <Image source={item.image} style={styles.image} />
                
                <View style={styles.content}>
                    <Text style={styles.title}>{item.name}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>{item.rating}</Text>
                        <StarRating rating={item.rating} />
                        <Text style={styles.categoria}>{item.categoria}</Text>
                    </View>
                    <Text style={styles.ingredients}>{item.ingredients}</Text>
                </View>

                <TouchableOpacity style={styles.conhecerButton} 
                onPress={() => {handleConhecerPress(item.id), navigation.navigate('makerProdutos')}}>
                    <Text style={styles.conhecerButtonText}>Conhecer</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        overflow: 'hidden',
        marginHorizontal: 6,
        marginTop: 5,
        marginBottom: 10,
        padding: 3,
        paddingBottom: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    image: {
        height: 92,
        width: 92,
        alignSelf: 'center',
    },
    content: {
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 200,
        width: 250,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
    },
    rating: {
        color: 'rgba(30, 30, 30, 0.38)',
        marginRight:10
        
    },
    ratingContainer: {
        flexDirection: 'row',
        borderRadius: 10,
        
        padding: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    categoria: {
        color: 'rgba(30, 30, 30, 0.38)',
        marginLeft: 10
        
    },

    ingredients: {
        color: 'white',
        marginTop: 5,
        textAlign: 'center',
        fontSize: 12,
    },

    conhecerButton: {
        position: 'absolute',
        bottom: 10,
        right: 70,
        width: '37%',
        height: 30,
        marginBottom: 1,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 7,
        marginTop: 15,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        justifyContent: 'center',
        elevation: 20,
    },
    conhecerButtonText: {
        color: 'green',
        fontSize: 10,
        fontWeight: 'bold',
    },
});
