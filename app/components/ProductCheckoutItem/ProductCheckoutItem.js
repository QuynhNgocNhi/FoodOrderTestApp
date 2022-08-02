import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
// import colors
import Colors from '../../theme/colors';
//import components
import { Icon } from 'react-native-elements';
// import redux hook
import { useDispatch, useSelector } from 'react-redux';
//import action
import { addToCart, removeFromCart, decreaseQuantity } from '../../redux/Cart/action'

const ProductItem = ({ product }) => {
    /* const [Quantity, setQuantity] = useState(1);
    const addProduct = () => {
        console.log('plus' + product.name);
    }
    const removeProduct = () => {
        console.log('minus' + product.name);
    } */
    const cartDetail = useSelector((state) => state.cartData);
    const dispatch = useDispatch()

    return (

        <View style={styles.productItemContainer}>

            <Text numberOfLines={1} style={styles.productItemName}>{product.name}</Text>
            <View style={styles.manageQuantity}>
                <Icon
                    onPress={() => dispatch(decreaseQuantity(product))}
                    name='minus'
                    type='feather'
                    color={Colors.red}
                    size={30}

                />
                <Text style={styles.productItemQuantity}>{product.quantity}</Text>
                <Icon
                    onPress={() => dispatch(addToCart(product))}

                    name='plus'
                    type='feather'
                    color={Colors.green}
                    size={30}

                />
            </View>
            <Text style={styles.productItemPrice}>$ {product.totalPrice}</Text>
            <Icon
                onPress={() => dispatch(removeFromCart(product))}

                name='cross'
                type='entypo'
                color={Colors.red}
                size={30}

            />



        </View >
    );
};

const styles = StyleSheet.create({
    productItemContainer: {
        width: '90%',
        paddingBottom: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },


    productItemName: {
        width: '30%',
        textAlign: "left",
        fontSize: 16,
        color: Colors.primaryText,
        fontWeight: '700',


    },
    manageQuantity: {
        width: '40%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    productItemQuantity: {
        textAlign: "right",
        fontSize: 20,
        color: Colors.secondaryText,
    },
    productItemPrice: {
        width: '20%',
        textAlign: "right",
        fontSize: 17,
        color: Colors.secondaryText,
        fontWeight: '500',


    },


});

export default ProductItem;