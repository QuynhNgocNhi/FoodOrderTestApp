import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';
// import colors
import Colors from '../../theme/colors';
import ProductItem from '../../components/Product/ProductItem'

export default function CustomSwitch({ products }) {

    return (

        <View style={styles.productList}>
            <FlatList

                data={products}
                showsHorizontalScrollIndicator={false}
                alwaysBounceHorizontal={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={1}
                    >
                        <ProductItem
                            product={item}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    productList: {
        width: '100%',

    },

});
