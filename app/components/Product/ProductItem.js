import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
// import colors
import Colors from '../../theme/colors';

const ProductItem = ({ product }) => {

    return (

        <View style={styles.productItemContainer}>
            <TouchableOpacity
                style={{

                }}>
                <View style={styles.productImage}>

                    <Image style={{
                        resizeMode: "cover",
                        height: 100,
                        width: 100,
                        borderBottomLeftRadius: 10,
                        borderTopLeftRadius: 10,

                    }} source={{ uri: product.image }} />


                    <ImageBackground imageStyle={{ borderBottomRightRadius: 10, borderTopRightRadius: 10, opacity: 0.2, }} source={{ uri: product.image }} style={styles.productInforContainer}>

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

        paddingBottom: 15
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
    productImage: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.borderColorActive
    },

});

export default ProductItem;