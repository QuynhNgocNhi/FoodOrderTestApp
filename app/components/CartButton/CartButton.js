import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
// import colors
import Colors from '../../theme/colors';
//import Icon
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const CartButtonDetail = () => {
    const navigation = useNavigation();
    return (


        <TouchableOpacity onPress={() => { navigation.navigate('CartScreen'); }} style={styles.productItemContainer}>
            <View style={styles.Icon}>

                <Icon

                    name='cart-arrow-down'
                    type='material-community'
                    color={Colors.borderColorDark}
                    size={36}

                />
            </View>
            <View style={styles.cartInfoContainer}>

                <Text style={styles.cartInfo}>
                    Order
                </Text>
            </View>
        </TouchableOpacity>



    );
};

const styles = StyleSheet.create({
    productItemContainer: {
        height: 55,
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: '40%',
        borderWidth: 3,
        borderColor: Colors.borderColorDark,
        borderRadius: 10,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    Icon: {
        alignSelf: 'center',
    },
    cartInfoContainer: {
        justifyContent: 'center',
    },
    cartInfo: {
        fontSize: 20,
        color: Colors.borderColorDark,
        fontWeight: '500',
        paddingLeft: 5,

    }
});

export default CartButtonDetail;