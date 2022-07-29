import React from 'react';
import { Platform } from 'react-native';

// import Menu screen
import Menu from '../screens/MenuScreen/MenuScreen';
import Cart from '../screens/CartScreen/CartScreen';
// create stack navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import colors
import Colors from '../theme/colors';
//import icon header
import HeaderIconButton from '../components/HeaderIconButton/HeaderIconButton';
//import redux
import { Provider } from 'react-redux';
import { store } from '../redux/store'
//config
const Stack = createNativeStackNavigator();
const BACK_ICON = Platform.OS === 'ios' ? 'ios-chevron-back' : 'chevron-back';
const ICON_TYPE = 'ionicon';

function MainNavigator() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="MenuScreen" component={Menu} options={({ navigation }) => ({
                        title: 'Category',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            //delete underline
                        }

                    })} />
                    <Stack.Screen name="CartScreen" component={Cart} options={({ navigation }) => ({
                        title: 'Back',
                        headerTitleAlign: 'left',
                        headerLeft: () => (
                            <HeaderIconButton
                                onPress={() => navigation.goBack()}
                                name={BACK_ICON}
                                color={Colors.black}
                                type={ICON_TYPE}
                                size={25}
                            />
                        ),
                        headerStyle: {
                            backgroundColor: Colors.primaryColor
                        }
                    })} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default MainNavigator;