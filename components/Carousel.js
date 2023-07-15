import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
    const images = [
        "https://res.cloudinary.com/do5erbtee/image/upload/v1689394986/slide/side1_fl8ogs.png",
        "https://res.cloudinary.com/do5erbtee/image/upload/v1689394985/slide/side2_lxa7y2.png",
        "https://res.cloudinary.com/do5erbtee/image/upload/v1689394986/slide/side3_yutc5s.png",
    ];
    return (
        <View>
            <SliderBox
                images={images}
                autoPlay={true}
                circleLoop
                sliderBoxHeight={150}
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

