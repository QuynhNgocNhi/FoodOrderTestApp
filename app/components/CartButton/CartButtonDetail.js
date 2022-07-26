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
                    color={Colors.borderColorActive}
                    size={36}

                />
            </View>
            <View style={styles.cartInfoContainer}>

                <Text style={styles.cartInfo}>
                    (2 item): $57
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
        width: '80%',
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: Colors.borderColorActive,
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
        color: Colors.primaryText,
        fontWeight: '500',
        paddingLeft: 5,

    }
});

export default CartButtonDetail;