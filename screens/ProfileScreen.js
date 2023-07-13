import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container} >

            <View style={{
                marginTop: 10,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Image style={{
                    width: 120,
                    height: 120,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: "red",
                }} source={{ uri: "https://yt3.ggpht.com/yti/AHyvSCBwyxeNtPkmWSAD61WMhahQtMElFwPleFnwk9AGjw=s88-c-k-c0x00ffffff-no-rj-mo" }} />
            </View>

            <View>
                <Text style={{
                    textAlign: "center",
                    marginTop: 10,
                    fontSize: 20,
                }}>Imran Hossen</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 10 : 0
    },
});
