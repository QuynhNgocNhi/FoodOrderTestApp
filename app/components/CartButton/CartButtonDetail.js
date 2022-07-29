import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import colors
import Colors from '../../theme/colors';
//import Icon
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
// import redux hook
import { useSelector } from 'react-redux';

//test api get product
import { useDispatch } from 'react-redux';
//import action
import { fetchData } from '../../redux/Product/action'

const CartButtonDetail = () => {
    const navigation = useNavigation();
    const cartDetail = useSelector((state) => state.cartData);
    //test api get product
    const dispatch = useDispatch()
    return (


        <TouchableOpacity onPress={() => dispatch(fetchData())} style={styles.productItemContainer}>
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
                    ({cartDetail.length} item): $57
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