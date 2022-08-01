import React, { useState } from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';
// import colors
import Colors from '../../theme/colors';
import CategoryItem from '../../components/Category/CategoryItem'

export default function CustomSwitch({
    selectionMode,
    category,
    onSelectSwitch,
}) {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);
    const updateSwitchData = value => {
        setSelectionMode(value);
        onSelectSwitch(value);

    };

    return (

        <View style={styles.categoryList}>
            <FlatList
                horizontal
                data={category}
                showsHorizontalScrollIndicator={false}
                alwaysBounceHorizontal={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => updateSwitchData(item.id)}

                        style={{

                            borderBottomWidth: getSelectionMode == item.id ? 2 : 0,
                            borderColor: getSelectionMode == item.id ? Colors.linkButton : Colors.black,
                            alignItems: 'center',

                        }}>

                        <CategoryItem
                            category={item}
                        />

                    </TouchableOpacity>
                )}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    categoryList: {
        width: '100%',
        paddingBottom: 20
    },

});
