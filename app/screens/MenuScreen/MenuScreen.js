import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet, View } from 'react-native';
// import colors
import Colors from '../../theme/colors';
//import data
import sample_data from '../../config/sampleData';
//import components
import CustomSwitch from '../../components/Category/CategoryList'
import ProductList from '../../components/Product/ProductList'
import CartButtonDetail from '../../components/CartButton/CartButtonDetail';
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
        <SafeAreaProvider>
            <SafeAreaView style={styles.screenContainer}>
                <View style={styles.container}>
                    <View style={styles.categoryList}>
                        <CustomSwitch
                            selectionMode={Category[0].id}
                            category={Category}
                            onSelectSwitch={onSelectSwitch}
                        />

                    </View>
                    <View style={styles.Hairline} />
                    <View style={styles.productList}>
                        <ProductList products={currentProductList.items} />
                    </View>

                    <View style={styles.cartButton}>
                        <CartButtonDetail />
                    </View>

                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,

    },
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    Hairline: {
        backgroundColor: Colors.borderColor,
        height: 2,
        width: '90%',
        alignSelf: 'center',
        marginBottom: 10
    },
    cartButton: {
        flex: 1,
    }
});
export default Menu;