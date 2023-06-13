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
