import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
// import colors
import Colors from '../../theme/colors';
//import components
import { Icon } from 'react-native-elements';


const ProductItem = ({ product }) => {
    const [Quantity, setQuantity] = useState(1);
    const addProduct = () => {
        console.log('plus' + product.name);
    }
    const removeProduct = () => {
        console.log('minus' + product.name);
    }

    return (

        <View style={styles.productItemContainer}>

            <Text numberOfLines={1} style={styles.productItemName}>{product.name}</Text>
            <View style={styles.manageQuantity}>
                <Icon
                    onPress={() => { removeProduct(); }}
                    name='minus'
                    type='feather'
                    color={Colors.red}
                    size={30}

                />
                <Text style={styles.productItemQuantity}>1</Text>
                <Icon
                    onPress={() => { addQuantity(); }}

                    name='plus'
                    type='feather'
                    color={Colors.green}
                    size={30}

                />
            </View>
            <Text style={styles.productItemPrice}>$ 47</Text>



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
        width: '30%',
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
        width: '30%',
        textAlign: "right",
        fontSize: 17,
        color: Colors.secondaryText,
        fontWeight: '500',


    },


});

export default ProductItem;