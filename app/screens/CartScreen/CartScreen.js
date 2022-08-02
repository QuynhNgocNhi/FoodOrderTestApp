import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity, FlatList, SafeAreaView, StyleSheet, View, Text } from 'react-native';

// import colors
import Colors from '../../theme/colors';

//import data
import sample_data from '../../config/sampleData';

//import components
import CartButton from '../../components/CartButton/CartButton';
import ProductCheckoutItem from '../../components/ProductCheckoutItem/ProductCheckoutItem'

// import redux hook
import { useSelector, connect } from 'react-redux';

const Cart = ({ cart, totalCount, totalAmount }) => {
    //const [cartDetail, setProducts] = useState(sample_data[1].items)
    //const cartDetail = useSelector((state) => state.cartData);
    //console.log("cartDetail   " + cartDetail);
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.screenContainer}>
                <View style={styles.container}>
                    <View style={styles.CheckoutContainer}>
                        <View style={styles.topHeadline}>
                            <Text style={styles.Headline}>Items</Text>
                            <Text style={styles.Headline}>Quantity</Text>
                            <Text style={styles.Headline}>Price</Text>
                        </View>
                        <View style={styles.Hairline} />
                        <View style={styles.CheckoutList}>
                            {cart.map(item => <TouchableOpacity
                                activeOpacity={1}
                                key={item.id}
                            >
                                <ProductCheckoutItem
                                    product={item}
                                />
                            </TouchableOpacity>)}
                            {/* <FlatList

                                data={cartDetail}
                                showsHorizontalScrollIndicator={false}
                                alwaysBounceHorizontal={false}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        activeOpacity={1}
                                    >
                                        <ProductCheckoutItem
                                            product={item}
                                        />
                                    </TouchableOpacity>
                                )}
                            /> */}
                        </View>
                        <View style={styles.Hairline} />

                        <View style={styles.bottomHeadline}>
                            <Text style={styles.Headline}>Total</Text>
                            <Text style={styles.Headline}>{totalCount}</Text>
                            <Text style={styles.Headline}>$ {totalAmount}</Text>
                        </View>
                        <Text style={styles.Headline}></Text>

                    </View>

                    <View style={styles.cartButton}>
                        <CartButton />
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,

    },
    container: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
    },
    Hairline: {
        backgroundColor: Colors.borderColorDark,
        height: 2,
        width: '90%',
        alignSelf: 'center',
        marginBottom: 20
    },
    cartButton: {
        flex: 1,
    },
    CheckoutContainer: {
        width: '90%',
        alignSelf: 'center',
    },
    topHeadline: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20
    },
    bottomHeadline: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    Headline: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primaryText
    },
    CheckoutList: {
        paddingBottom: 20,
    }
});

const mapStateToProps = state => {
    return {
        cart: state.cartData.cart,
        totalCount: state.cartData.totalCount,
        totalAmount: state.cartData.totalAmount
    }
}

export default connect(mapStateToProps)(Cart);