import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
    const images = [
        "https://res.cloudinary.com/do5erbtee/image/upload/v1689235050/expo/slide_v6ruf9.jpg",
        "https://res.cloudinary.com/do5erbtee/image/upload/v1689235152/expo/slid_3_nbnro4.jpg",
        "https://res.cloudinary.com/do5erbtee/image/upload/v1689235391/expo/slied2_hwjbpi.jpg",
    ];
    return (
        <View>
            <SliderBox
                images={images}
                autoPlay={true}
                circleLoop
                dotColor={"#13274F"}
                inactiveDotColor="#90A4AE"
                ImageComponentStyle={{
                    borderRadius: 6,
                    width: "94%",
                }}
            />
        </View>
    );
};

export default Carousel;

const styles = StyleSheet.create({});
