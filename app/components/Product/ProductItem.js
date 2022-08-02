import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
// import colors
import Colors from '../../theme/colors';
//import action
import { addToCart } from '../../redux/Cart/action'

const ProductItem = ({ product }) => {
    const dispatch = useDispatch()
    /* const productType = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
    } */
    return (

        <View style={styles.productItemContainer}>
            <TouchableOpacity
                onPress={() => dispatch(addToCart(product))}
            >
                <View style={styles.productItem}>

                    <Image style={{
                        resizeMode: "cover",
                        height: 100,
                        width: 100,
                        borderBottomLeftRadius: 10,
                        borderTopLeftRadius: 10,

                    }} source={product.image ? ({ uri: product.image }) : require('../../assets/image/no-image.png')} />


                    <ImageBackground imageStyle={{ borderBottomRightRadius: 10, borderTopRightRadius: 10, opacity: 0.2, }}
                        source={product.image ? ({ uri: product.image }) : require('../../assets/image/no-image.png')}
                        style={styles.productInforContainer}>

                        <View style={styles.productInfor}>

                            <Text numberOfLines={2} style={styles.productItemName}>
                                {product.name}
                            </Text>
                            <Text style={styles.productItemPrice}>
                                $ {product.price}
                            </Text>
                        </View>
                    </ImageBackground>

                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    productItemContainer: {

        paddingBottom: 10
    },

    productInforContainer: {

        width: 250,
        alignItems: 'center'

    },
    productInfor: {
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center'
    },

    productItemName: {

        textAlign: "center",
        fontSize: 16,
        color: Colors.primaryText,
        fontWeight: '700',


    },
    productItemPrice: {

        fontSize: 17,
        color: Colors.red,
        fontWeight: '500',


    },
    productItem: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.borderColorActive
    },

});

export default ProductItem;