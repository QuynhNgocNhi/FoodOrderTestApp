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
import { useSelector } from 'react-redux';

function Cart() {
    const [Products, setProducts] = useState(sample_data[1].items)
    const cartDetail = useSelector((state) => state.cartData);
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
                            <FlatList

                                data={Products}
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
                            />
                        </View>
                        <View style={styles.Hairline} />

                        <View style={styles.bottomHeadline}>
                            <Text style={styles.Headline}>Total</Text>
                            <Text style={styles.Headline}>{cartDetail.length}</Text>
                            <Text style={styles.Headline}>$ 57</Text>
                        </View>
                    </View>

                    <View style={styles.cartButton}>
                        <CartButton />
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
export default Cart;