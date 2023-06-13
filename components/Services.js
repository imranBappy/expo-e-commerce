import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { services } from '../data/data'

const Services = () => {
    return (
        <View style={{ marginTop: 10, padding: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 7 }} >{"Our Services"}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {
                    services.map((service, index) =>
                        <Pressable style={{ backgroundColor: "white", padding: 20, margin: 10, borderRadius: 7, flex: 1, alignItems: 'center', justifyContent: "space-between" }} key={index}>
                            <Image source={{ uri: service.image }} style={{ width: 70, height: 70 }} />
                            <Text style={{ marginTop: 10 }} >{service.name}</Text>
                        </Pressable>
                    )
                }
            </ScrollView>
        </View>
    )
}

export default Services

const styles = StyleSheet.create({})