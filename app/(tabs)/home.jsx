import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, Image } from 'react-native';

export default function ShoeStoreApp() {
  const [shoes] = useState([
    {
      id: '1',
      name: 'Air Jordan 1 University Blue',
      price: 50,
      image: 'https://static.nike.com/a/images/w_1280,q_auto,f_auto/eaa42dac-16bb-4174-accd-2bbd06cee899/air-jordan-1-university-blue-release-date.jpg',
      description: 'Comfortable and trendy sneakers for daily wear.'
    },
    {
      id: '2',
      name: 'Air Jordan 4 Retro "Military Black"',
      price: 70,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGe-r18wZ-jSHt1xBK3QtXRQf-0V58NKg2sw&s',
      description: 'Elegant loafers perfect for formal occasions.'
    },
    {
      id: '3',
      name: 'Air Jordan 1 Chicago',
      price: 80,
      image: 'https://static.nike.com/a/images/w_1920,c_limit/5359f1a2-d415-43ac-80d8-0a285023bd17/image.jpg',
      description: 'Lightweight running shoes for speed and comfort.'
    },
    {
      id: '4',
      name: 'Rolex Oyster Perpetual 41',
      price: 90,
      image: 'https://example.com/images/basketball-shoes.jpg',
      description: 'High-performance shoes designed for basketball players.'
    },
    {
      id: '5',
      name: 'Casual Slip-ons',
      price: 40,
      image: 'https://example.com/images/slip-ons.jpg',
      description: 'Easy-to-wear slip-ons for a casual day out.'
    },
  ]);

  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [viewingOrders, setViewingOrders] = useState(false);

  const addToCart = (shoe) => {
    if (cart.find(item => item.id === shoe.id)) {
      Alert.alert(`${shoe.name} is already in your cart!`);
      return;
    }
    setCart(prevCart => [...prevCart, shoe]);
    Alert.alert(`${shoe.name} added to cart!`);
  };

  const removeFromCart = (shoeId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== shoeId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      Alert.alert('Your cart is empty!');
      return;
    }
    setOrders(prevOrders => [...prevOrders, { id: Date.now().toString(), items: cart }]);
    clearCart();
    Alert.alert('Order placed successfully!');
  };

  const totalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const renderOrder = ({ item }) => (
    <View style={styles.orderContainer}>
      <Text style={styles.orderTitle}>Order ID: {item.id}</Text>
      {item.items.map(shoe => (
        <Text key={shoe.id}>{shoe.name} - ${shoe.price}</Text>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kick-It-Up</Text>

      {viewingOrders ? (
        <>
          <TouchableOpacity onPress={() => setViewingOrders(false)} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back to Store</Text>
          </TouchableOpacity>
          <View style={styles.ordersContainer}>
            <Text style={styles.ordersTitle}>My Orders</Text>
            <FlatList
              data={orders}
              renderItem={renderOrder}
              keyExtractor={item => item.id}
            />
          </View>
        </>
      ) : (
        <>
          <FlatList
            data={shoes}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image source={{ uri: item.image }} style={styles.shoeImage} />
                <View style={styles.itemTextContainer}>
                  <Text style={styles.shoeName}>{item.name}</Text>
                  <Text style={styles.shoePrice}>${item.price}</Text>
                  <TouchableOpacity onPress={() => addToCart(item)}>
                    <Text style={styles.addButton}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />

          <View style={styles.cartContainer}>
            <Text style={styles.cartTitle}>Your Cart</Text>
            <FlatList
              data={cart}
              renderItem={({ item }) => (
                <View style={styles.cartItemContainer}>
                  <Image source={{ uri: item.image }} style={styles.cartItemImage} />
                  <View style={styles.cartItemTextContainer}>
                    <Text style={styles.cartItemText}>{item.name} - ${item.price}</Text>
                    <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                      <Text style={styles.removeText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              keyExtractor={item => item.id}
            />
            <Text style={styles.totalPrice}>Total: ${totalPrice()}</Text>
            <TouchableOpacity style={styles.placeOrderButton} onPress={placeOrder}>
              <Text style={styles.placeOrderButtonText}>Place Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewOrdersButton} onPress={() => setViewingOrders(true)}>
              <Text style={styles.viewOrdersButtonText}>View My Orders</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    elevation: 1,
  },
  shoeImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  itemTextContainer: {
    flex: 1,
  },
  shoeName: {
    fontSize: 18,
  },
  shoePrice: {
    fontSize: 16,
    color: 'green',
  },
  addButton: {
    color: 'blue',
  },
  cartContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  cartItemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  cartItemTextContainer: {
    flex: 1,
  },
  cartItemText: {
    fontSize: 16,
  },
  removeText: {
    color: 'red',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  placeOrderButton: {
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  placeOrderButtonText: {
    color: '#fff',
  },
  ordersContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  ordersTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderContainer: {
    marginBottom: 10,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ddd',
    alignItems: 'center',
    borderRadius: 5,
  },
  backButtonText: {
    fontSize: 16,
  },
  viewOrdersButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 5,
  },
  viewOrdersButtonText: {
    color: '#fff',
  },
});
