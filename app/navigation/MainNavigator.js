import React from 'react';
// import Menu screen
import Menu from '../screens/MenuScreen/MenuScreen';
import Cart from '../screens/CartScreen/CartScreen';
// create stack navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="CartScreen" component={Cart} options={{ headerShown: false }} />
                <Stack.Screen name="MenuScreen" component={Menu} options={({ navigation }) => ({
                    title: 'Category',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        //delete underline
                    }
                })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;