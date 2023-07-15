import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Button = (props) => {
    const { title, onPress } = props;

    const [isHovered, setIsHovered] = useState(false);

    const handlePressIn = () => {
        setIsHovered(true);
    };

    const handlePressOut = () => {
        setIsHovered(false);
    };

    return (
        <View style={{
            flex: 1,
            width: '100%',
        }}>
            <TouchableWithoutFeedback onPress={onPress}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
            >
                <View style={[styles.button, isHovered && styles.buttonHovered]}>
                    <Text style={styles.buttonText}>
                        {title}
                    </Text>
                </View>

            </TouchableWithoutFeedback>
        </View>
    )
}

export default Button
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#088f8f",
        padding: 10,
        borderRadius: 5,
        alignItems: "center"
    },
    buttonHovered: {
        backgroundColor: '#084949',
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
});
