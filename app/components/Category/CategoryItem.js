import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import colors
import Colors from '../../theme/colors';

const CategoryItem = ({ category }) => {

    return (

        <View style={styles.categoryItem}>

            <Text style={styles.categoryItemName}>
                {category.name} ({category.items.length})
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    categoryItem: {
        padding: 10,

    },
    categoryItemName: {
        fontSize: 16,
        color: Colors.primaryText,
        fontWeight: '500',
    },
    productCount: {

    },
});

export default CategoryItem;