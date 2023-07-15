import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGetAllBrandsQuery } from '../redux/features/brand/brandApi';
import ServiceCard from './ServiceCard';

const Brands = () => {
    const { data, isLoading } = useGetAllBrandsQuery();
    const { brands = [] } = data || {};
    let content = null;
    if (isLoading) {
        content = <Text>Loading...</Text>;
    } else if (brands) {
        content = brands?.map((service) => <ServiceCard data={service} />)
    }
    return content;
}

export default Brands
