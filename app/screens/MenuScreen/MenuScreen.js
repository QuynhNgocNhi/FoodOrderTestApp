import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet, View, ActivityIndicator, Alert } from 'react-native';
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

    const dispatch = useDispatch()
    const [productList, setProductList] = useState([])
    const data = useSelector((state) => state.productData);

    const [CategoryTab, setCategoryTab] = useState(0)
    let currentProductList;

    //const productListSaga = useSelector((state) => state.productData);
    //console.log("productListSaga in menuscreen" + productListSaga)

    const setProductData = (data) => {
        console.log(data.products);
        if (data.products.length > 0) {
            setCategoryTab(data.products[0].id)
            setProductList(data.products[0].items)
        }

    }

    const onError = (messageError) => {
        Alert.alert(
            "",
            messageError || "Hệ thống đang lỗi, vui lòng thử lại sau!",
            [
                {
                    text: "OK",
                    style: "cancel"
                }
            ]
        );

    }


    useEffect(() => {

        dispatch(fetchData({ onError }))

    }, [])
    useEffect(() => {
        setProductData(data)
    }, [data])


    const onSelectSwitch = value => {
        setCategoryTab(value);
        currentProductList = data.products.find(obj =>
            obj.id === value
        )
        setProductList(currentProductList.items);
    };

    if (data.showLoading) {
        return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Placeholder
            >
                <PlaceholderLine width={80} />
                <PlaceholderLine />
                <PlaceholderLine width={30} />
                <PlaceholderLine width={30} />
                <PlaceholderLine width={30} />
                <PlaceholderLine width={80} />
                <PlaceholderLine width={80} />
                <PlaceholderLine width={30} />
                <PlaceholderLine width={30} />
                <PlaceholderLine width={80} />
                <PlaceholderLine width={80} />
                <PlaceholderLine width={30} />
                <PlaceholderLine width={30} />
                <PlaceholderLine width={30} />
                <PlaceholderLine width={30} />
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