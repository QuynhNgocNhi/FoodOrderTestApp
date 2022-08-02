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
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Loader
} from "rn-placeholder";
//import action
import { fetchData } from '../../redux/Product/action'

// import redux hook
import { useSelector } from 'react-redux';
// import redux hook
import { connect } from 'react-redux';

function Menu() {

    const [productList, setProductList] = useState([])
    const data = useSelector((state) => state.productData);

    const [CategoryTab, setCategoryTab] = useState(0)
    let currentProductList;

    //const productListSaga = useSelector((state) => state.productData);
    //console.log("productListSaga in menuscreen" + productListSaga)
    const dispatch = useDispatch()
    const setProductData = () => {
        if (data.products.length > 0) {
            setCategoryTab(data.products[0].id)
            setProductList(data.products[0].items)
        }

    }


    useEffect(() => {

        dispatch(fetchData())

    }, [])
    useEffect(() => {
        setProductData()
    }, [data])


    const onSelectSwitch = value => {
        setCategoryTab(value);
        currentProductList = data.products.find(obj => {
            return obj.id === value;
        })
        setProductList(currentProductList.items);
    };

    if (data.showLoading) {
        return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Placeholder
                Animation={Loader}
                Left={PlaceholderMedia}
                Right={PlaceholderMedia}
            >
                <PlaceholderLine width={80} />
                <PlaceholderLine />
                <PlaceholderLine width={30} />
            </Placeholder>
        </View>)
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.screenContainer}>
                <View style={styles.container}>
                    <View style={styles.categoryList}>
                        <CustomSwitch
                            selectionMode={CategoryTab}
                            category={data.products}
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