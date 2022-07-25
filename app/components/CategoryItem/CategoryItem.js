import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import colors
import Colors from '../../theme/colors';

const CategoryItem = ({ category }) => {
    const [getSelectionMode, setSelectionMode] = useState(category.selectionMode);
    const updateSwitchData = value => {
        setSelectionMode(value);
        onSelectSwitch(value);
    };
    return (

        <View style={styles.categoryItem}>
            <TouchableOpacity
                onPress={() => updateSwitchData(category.id)}
                style={{
                    borderBottomWidth: getSelectionMode == category.id ? 2 : 0,

                    alignItems: 'center',

                }}>
                <Text style={styles.categoryItemName}>
                    {category.name} ({category.items.length})
                </Text>
            </TouchableOpacity>
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