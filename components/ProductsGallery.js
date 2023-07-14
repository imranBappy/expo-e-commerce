import { StyleSheet, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const ProductGallery = (props) => {
    const { images = [] } = props

    return (
        <View>
            <SliderBox
                images={images}
                autoPlay={true}
                circleLoop
                sliderBoxHeight={400}
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

export default ProductGallery;

const styles = StyleSheet.create({});
