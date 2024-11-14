import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';

export default function MyOrdersApp() {
  const [orders, setOrders] = useState([
    { id: '1', items: [{ name: 'Air Jordan 1 University Blue', price: 50 } ] },
    { id: '2', items: [{ name: 'Air Jordan 4 Retro "Military Black"', price: 80 }] },
    { id: '3', items: [{ name: 'Air Jordan 1 Chicago', price: 90 }] },
  ]);

  const renderOrder = ({ item }) => (
    <View style={styles.orderContainer}>
      <Text style={styles.orderTitle}>Order ID: {item.id}</Text>
      {item.items.map((shoe, index) => (
        <Text key={index}>{shoe.name} - ${shoe.price}</Text>
      ))}
      <Text style={styles.totalPrice}>
        Total: ${item.items.reduce((total, shoe) => total + shoe.price, 0).toFixed(2)}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Orders</Text>
      <FlatList
        data={orders}
        renderItem={renderOrder}
        keyExtractor={item => item.id}
      />
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
  orderContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    elevation: 1,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
