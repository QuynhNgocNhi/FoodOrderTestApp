import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
// import colors
import Colors from '../../theme/colors';
import sample_data from '../../config/sampleData';
import CustomSwitch from '../../components/Category/CategoryList'
import ProductList from '../../components/Product/ProductList'
function Menu() {
    const [Category, setCategory] = useState(sample_data)
    const [CategoryTab, setCategoryTab] = useState(Category[0].id);
    const onSelectSwitch = value => {
        setCategoryTab(value);
    };
    const currentProductList = Category.find(obj => {
        return obj.id === CategoryTab;
    });

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.container}>
                <View style={styles.categoryList}>
                    <CustomSwitch
                        selectionMode={Category[0].id}
                        category={Category}
                        onSelectSwitch={onSelectSwitch}
                    />

                </View>
                <View style={styles.hairline} />
                <View style={styles.productList}>
                    <ProductList products={currentProductList.items} />
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