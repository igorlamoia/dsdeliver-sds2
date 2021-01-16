import React, { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView, Alert, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import fetchOrders from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../type';

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused(); //Toda vez que renderiza vai mudar true e false

  const fetchData = () => {
    setIsLoading(true);
    fetchOrders()
      .then((response) => setOrders(response.data))
      .catch((error) => Alert.alert('Houve um erro ao buscar os pedidos'))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (isFocused) fetchData();
  }, [isFocused]);

  const handleOnPress = (order: Order) => {
    // passando order como parâmetro da rota - o pedido q vc clicou
    navigation.navigate('OrderDetails', {
      order,
    });
  };

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {isLoading ? (
          <Text style={styles.loading}>Buscando Pedidos...</Text>
        ) : (
          orders.map((order) => (
            // Torna o elemento clicável
            <TouchableWithoutFeedback
              key={order.id}
              onPress={() => handleOnPress(order)}
            >
              <OrderCard order={order} />
            </TouchableWithoutFeedback>
          ))
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  loading: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: '60%',
  },
});
