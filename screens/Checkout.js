
import { Pressable, ScrollView, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product'
import InputAddress from '../components/InputAddress'
import CardItem from '../components/CartItem'

const CheckoutScreen = () => {
    const cart = useSelector((state) => state.cart.cart)
    const total = cart.reduce((total, item) => (total + item.price) * item.quantity, 0);
    // const handleSubmit
    return (
        <ScrollView style={styles.container}>
            <View>
                {
                    cart?.map((item) => <CardItem
                        key={item.id}
                        item={item}
                    />)
                }
            </View>
            <InputAddress />
            <InputAddress />

            <View style={{
                marginTop: 10,
                flexDirection: "row", justifyContent: "space-between",
                padding: 10
            }} >
                <Text style={{ flex: 1, fontSize: 18 }}>
                    Total: <Text style={{ fontSize: 18, fontWeight: "bold", color: "#088f8f" }}> ${total}</Text>
                </Text>
                <Pressable onPress={() => {
                    alert("Order Success")
                }} style={{ flex: 1 }}>
                    <Text style={{
                        borderColor: "gray",
                        borderRadius: 5,
                        borderWidth: 0.8,
                        color: "#088f8f",
                        textAlign: "center",
                        padding: 5,
                        fontSize: 16,
                        fontWeight: "bold"
                    }} >Order ({cart.length})</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default CheckoutScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 10 : 0
    },
});
