import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FoodItem = ({ name, price, ingredients, desc, image }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.ingredients}>{ingredients}</Text>
      <Text style={styles.desc}>{desc}</Text>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    marginBottom: 10,
  },
  ingredients: {
    marginBottom: 10,
    textAlign: 'center', // Centraliza o texto
  },
  desc: {
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default FoodItem;


export const categories = [
  "Papel",
  "Plástico",
  "Metal",
  "Vidro"
  
]

export const foodItems = [
  {
    name: 'Makers de Afogados',
    price: '13.40',
    ingredients: 'Aqui é o espaço para o maker fazer uma breve descrição do seu negócio que chame atenção do usuário para conhecer os produtos que você oferece.',
    desc: 'A mouthwatering pizza is a culinary wonder that delights your senses and satisfies your hunger. The crispy crust is the foundation of this masterpiece, topped with a tangy tomato sauce that perfectly balances the flavors.',
    image: require('../../src/assets/pizza.png'), 
    rating: 3.5,
    categoria: 'Papel'
  },
  {
    name: 'Makers de Jaboatão',
    price: '18.30',
    ingredients: 'Kinoa, kani, avocado',
    desc: 'A delicious burger is a culinary masterpiece that satisfies the taste buds and leaves you craving for more. A succulent beef patty, grilled to perfection, is nestled between two soft, toasted buns. The patty is generously topped with melted cheese, crispy bacon, lettuce, tomato, and a special sauce that gives it a unique flavor. ',
    image: require('../../src/assets/burger.png'),
    rating: 4.0,
    categoria: 'Plástico'
  },
  {
    name: 'Makers de Recife',
    price: '20.00',
    ingredients: 'Rice, sausage, fish',
    desc: "The rice is rolled into bite-sized pieces, with a thin sheet of nori seaweed wrapped around it. Inside, you'll find a range of delicacies such as salmon, tuna, crab, avocado, cucumber, or shrimp. The sushi is served with soy sauce, wasabi, and pickled ginger to enhance the flavors. Each piece of sushi is a work of art.",
    image: require('../../src/assets/sushi.png'),
    rating: 4.5,
    categoria: 'Metal'
  },
  {
    name: 'Makers de Olinda',
    price: '10.50',
    ingredients: 'Eggs, chicken, noodle',
    desc: 'Ramen is a popular Japanese dish that consists of chewy noodles in a savory broth, topped with a range of flavorful ingredients. The broth can be made with pork, chicken, or vegetable stock, flavored with soy sauce, miso, or other seasonings. The noodles are cooked until they are tender and then added to the broth along with toppings such as slices of pork belly.',
    image: require('../../src/assets/ramen.png'),
    rating: 2.5,
    categoria: 'Vidro'
  },

]