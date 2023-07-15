import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Services = ({ title, children }) => {


    return (
        <View style={{ marginTop: 10, padding: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 7 }} >{title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {
                    children
                }
            </ScrollView>
        </View>
    )
}

export default Services

const styles = StyleSheet.create({})