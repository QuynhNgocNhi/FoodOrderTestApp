

// import dependencies
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

// import components
import { Icon } from 'react-native-elements';
import TouchableItem from './TouchableItem';

// HeaderIconButton Config
const IOS = Platform.OS === 'ios';

// HeaderIconButton Styles
const styles = StyleSheet.create({
    androidButtonWrapper: {
        marginHorizontal: 13,
        backgroundColor: 'transparent',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    icon: IOS
        ? {
            height: 26, // 24
            width: 26, // 24
            marginRight: 14,
            marginVertical: 8, // 10
            justifyContent: 'center',
            alignItems: 'center',
        }
        : {
            height: 24,
            width: 24,

            margin: 3,
            justifyContent: 'center',
            alignItems: 'center',
        },
});

const renderIcon = (name, size, color, type) => (
    <View style={styles.icon}>
        <Icon name={name} size={size} color={color} type={type} />
    </View>
);

const HeaderIconButton = (props) => {
    const {
        onPress = () => null,
        rippleColor = 'rgba(0, 0, 0, 0.32)',
        name,
        size = IOS ? 26 : 24,
        color = Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.52)' : '#037aff',
        type
    } = props;

    const button = (
        <TouchableItem
            accessibilityComponentType="button"
            accessibilityTraits="button"
            delayPressIn={0}
            onPress={onPress}
            rippleColor={rippleColor}
            style={styles.container}
            useForeground
            borderless>
            {renderIcon(name, size, color, type)}
        </TouchableItem>
    );

    if (Platform.OS === 'android') {
        return <View style={styles.androidButtonWrapper}>{button}</View>;
    }
    return button;
};

export default HeaderIconButton;
