import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';

// TODO
export function MainScreenContainer(props) {
    const {children} = props;
    return (
        <View style={styles.container}>
            {children}
            {/* <MainFooter /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
});
