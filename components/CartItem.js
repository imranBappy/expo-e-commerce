import { useDispatch, useSelector } from 'react-redux';
import { Image, Pressable, Text, View } from 'react-native';
import { decrementQuantity, incrementQuantity } from '../redux/features/cartFeatures';

const CardItem = (props) => {
    const { name, image, price, id } = props.item;
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch();
    return (
        <View >
            <Pressable style={{
                backgroundColor: "#f8f8f8", padding: 10, margin: 10, borderRadius: 8,
                flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems:
                    "center"
            }}>
                <View>
                    <Image source={{ uri: image }} style={{ width: 50, height: 50, marginRight: 20 }} />
                </View>
                <View>
                    <Text style={{ width: 180, fontSize: 14, fontWeight: "500", marginBottom: 7 }}>{name}</Text>
                    <Text style={{ width: 60, fontSize: 15, color: "gray" }}>${price}</Text>
                </View>
                {cart?.some((c) => c.id === id) ? (
                    <Pressable
                        style={{
                            flexDirection: "row",
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                        }}
                    >
                        <Pressable
                            onPress={() => {
                                dispatch(decrementQuantity(props.item))
                            }}
                            style={{
                                width: 26,
                                height: 26,
                                borderRadius: 13,
                                borderColor: "#BEBEBE",
                                backgroundColor: "#E0E0E0",
                                justifyContent: "center",
                                alignContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: "#088F8F",
                                    paddingHorizontal: 6,
                                    fontWeight: "600",
                                    textAlign: "center",
                                }}
                            >
                                -
                            </Text>
                        </Pressable>

                        <Pressable>
                            <Text
                                style={{
                                    fontSize: 19,
                                    color: "#088F8F",
                                    paddingHorizontal: 8,
                                    fontWeight: "600",
                                }}
                            >
                                {props.item.quantity}
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={() => {
                                dispatch(incrementQuantity(props.item))
                            }}
                            style={{
                                width: 26,
                                height: 26,
                                borderRadius: 13,
                                borderColor: "#BEBEBE",
                                backgroundColor: "#E0E0E0",
                                justifyContent: "center",
                                alignContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: "#088F8F",
                                    paddingHorizontal: 6,
                                    fontWeight: "600",
                                    textAlign: "center",
                                }}
                            >
                                +
                            </Text>
                        </Pressable>
                    </Pressable>
                ) : (
                    <Pressable onPress={addToCartHandle} style={{ width: 50 }} >
                        <Text
                            style={{
                                borderColor: "gray",
                                borderRadius: 5,
                                borderWidth: 0.8,
                                color: "#088f8f",
                                textAlign: "center",
                                padding: 5,
                                fontSize: 16,
                                fontWeight: "bold"
                            }} >Add</Text>
                    </Pressable>
                )}

            </Pressable>
        </View>
    )
}

export default CardItem;