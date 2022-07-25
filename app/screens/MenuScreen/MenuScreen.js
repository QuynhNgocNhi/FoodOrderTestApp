import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList } from 'react-native';
// import colors
import Colors from '../../theme/colors';
import sample_data from '../../config/sampleData';
import CategoryItem from '../../components/CategoryItem/CategoryItem'
import ProductItem from '../../components/ProductItem/ProductItem'
function Menu() {

    const [Category, setCategory] = useState(sample_data)
    const [CategoryTab, setCategoryTab] = useState(Category[0].name);
    const onSelectSwitch = value => {
        setCategoryTab(value);
        console.log(value)
    };
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.container}>
                <View style={styles.categoryList}>
                    <FlatList
                        horizontal
                        data={Category}
                        showsHorizontalScrollIndicator={false}
                        alwaysBounceHorizontal={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <CategoryItem
                                onSelectSwitch={onSelectSwitch}
                                category={item}
                            />
                        )}
                    />
                </View>
                <View style={styles.hairline} />
                <View style={styles.ProductList}>
                    <FlatList

                        data={Category[0].items}
                        showsHorizontalScrollIndicator={false}
                        alwaysBounceHorizontal={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <ProductItem
                                product={item}
                            />
                        )}
                    />
                </View>
                <View style={styles.cartButton}>

                </View>

            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    hairline: {
        backgroundColor: Colors.borderColor,
        height: 2,
        width: '90%',
        alignSelf: 'center',
        marginBottom: 10
    },
});
export default Menu;