import { View, Text, Alert, Pressable, Image, TextInput, ScrollView, StyleSheet } from 'react-native';
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import Products from '../components/Products';

const HomeScreen = () => {
    const [address, setAddress] = useState("We are loading you location");
    const [locationEnabled, setLocationEnabled] = useState(false);

    useEffect(() => {
        checkIfLocationEnabled()
        getCurrentLocation()

    }, [])

    const checkIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
        if (!enabled) {
            Alert.alert('Location is not enabled',
                'Please the location enabled',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]);
        } else {
            setLocationEnabled(enabled)
        }
    }
    const getCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status != 'granted') {
            Alert.alert('Permission denied',
                'Allow the app to use location services',
                [
                    {
                        text: 'Cancel',

                    },
                    { text: 'OK' },
                ]);
        }
        const { coords } = await Location.getCurrentPositionAsync();
        if (coords) {
            const { latitude, longitude } = coords;
            let res = await Location.reverseGeocodeAsync({ latitude, longitude });
            let currAddress = "";
            for (let item of res) {
                currAddress = `${item.district}, ${item.city}`;
            }

            setAddress(currAddress)

        }
    }
    return (
        <ScrollView style={styles.container}>
            {/* Location and Profile */}
            <View style={{ flexDirection: "row", alignItems: "center", padding: 10, justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialIcons name="location-on" size={30} color="#fd5c63" />
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "600" }} >Home</Text>
                        <Text style={{ width: 200 }}>{address}</Text>
                    </View>
                </View>
                <Pressable>
                    <Image style={{ width: 45, height: 45, borderRadius: 25, borderWidth: 2, borderColor: "red" }} source={{ uri: "https://yt3.ggpht.com/yti/AHyvSCBwyxeNtPkmWSAD61WMhahQtMElFwPleFnwk9AGjw=s88-c-k-c0x00ffffff-no-rj-mo" }} />
                </Pressable>
            </View>
            {/* Search bar */}
            <View style={{
                padding: 8, margin: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between",
                borderWidth: 0.8,
                borderColor: "#c0c0c0",
                borderRadius: 6
            }}>
                <TextInput placeholder='Search for items of More' />
                <Ionicons name="ios-search" size={24} color="#fd5c63" />
            </View>

            {/* Carousel */}
            <Carousel />

            {/* Categories */}
            <Services />

            {/* Products */}
            <Products />

        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 10 : 0
    },
});
