import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { products } from '../data/data'
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/features/productFeatures';

const Products = () => {
    const cart = useSelector((state) => state.cart)
    const product = useSelector((state) => state.product.product);
    const dispatch = useDispatch();
    useEffect(() => {
        if (product.length > 0) return;
        dispatch(getProducts(products))
    }, [])
    return (
        <ScrollView style={styles.container}>
            <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 10, marginLeft: 10 }} >{"Products"}</Text>
            <View>
                {
                    product.map((item) => <Product
                        key={item.id}
                        item={item}
                    />)
                }
            </View>


        </ScrollView>
    );
};

export default Products;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 10 : 0
    },
});
