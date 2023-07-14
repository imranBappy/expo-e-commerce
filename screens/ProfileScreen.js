import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container} >

            <View // Desing Profile Card simple shadow
                style={{
                    backgroundColor: "#fff",
                    margin: 20,
                    padding: 20,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10.0,
                    elevation: 3,
                }}
            >


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
                        borderColor: "#088F8F",
                    }} source={{ uri: "https://yt3.ggpht.com/yti/AHyvSCBwyxeNtPkmWSAD61WMhahQtMElFwPleFnwk9AGjw=s88-c-k-c0x00ffffff-no-rj-mo" }} />
                </View>

                <View>
                    <Text style={{
                        textAlign: "center",
                        marginTop: 10,
                        fontSize: 20,
                    }}>Imran Hossen</Text>
                </View>
                <View>
                    <Text style={{
                        textAlign: "center",
                        marginTop: 2,
                        fontSize: 15,
                    }}>imranbappy@gmail.com</Text>
                </View>
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
