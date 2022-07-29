import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';

// import colors
import Colors from '../../theme/colors';

//import components
import CustomSwitch from '../../components/Category/CategoryList'
import ProductList from '../../components/Product/ProductList'
import CartButtonDetail from '../../components/CartButton/CartButtonDetail';

//import API
import { getMasterDataApi } from '../../services/api'


function Menu() {
    const [loading, setLoading] = useState(false)
    const [productList, setProductList] = useState([])
    const [Category, setCategory] = useState([])
    const [CategoryTab, setCategoryTab] = useState(0)
    let currentProductList;

    const dispatch = useDispatch()
    const fetchData = async () => {
        setLoading(true)

        const response = await getMasterDataApi()
        if (response.__typename !== 'ErrorResponse') {
            setCategory(response)
            let firstCategory = response[0]
            setCategoryTab(firstCategory.id)
            setProductList(firstCategory.items);

        }

        setLoading(false)
    }


    useEffect(() => {
        fetchData()
    }, [])


    const onSelectSwitch = value => {
        setCategoryTab(value);
        currentProductList = Category.find(obj => {
            return obj.id === value;
        })
        console.log("currentProductList " + currentProductList.id)
        setProductList(currentProductList.items);
    };

    if (loading) {
        return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator animating />
        </View>)
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.screenContainer}>
                <View style={styles.container}>
                    <View style={styles.categoryList}>
                        <CustomSwitch
                            selectionMode={CategoryTab}
                            category={Category}
                            onSelectSwitch={onSelectSwitch}
                        />

                    </View>
                    <View style={styles.Hairline} />
                    <View style={styles.productList}>
                        <ProductList products={productList} />
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