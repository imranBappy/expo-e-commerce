import { Text } from 'react-native'
import React from 'react'
import ServiceCard from '../components/ServiceCard';
import { useGetAllCategoresQuery } from '../redux/features/category/category';

const Categores = () => {
    const { data, isLoading } = useGetAllCategoresQuery();
    const { categories = [] } = data || {};
    let content = null;
    if (isLoading) {
        content = <Text>Loading...</Text>;
    } else if (categories) {
        content = categories?.map((service) => <ServiceCard data={service} />)
    }
    return content;
}

export default Categores;
