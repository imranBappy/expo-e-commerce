import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ServiceCard = ({ data }) => {
    const { name, thumbnail, _id } = data || {};
    return (
        <Pressable key={_id} style={{ backgroundColor: "white", padding: 20, margin: 10, borderRadius: 7, flex: 1, alignItems: 'center', justifyContent: "space-between" }}>
            <Image source={{ uri: thumbnail }} style={{
                width: 70, height: 70,
                resizeMode: "contain"
            }} />
            <Text style={{ marginTop: 10, width: "100%", textAlign: "center" }} >{name}</Text>
        </Pressable>
    )
}

export default ServiceCard

const styles = StyleSheet.create({})