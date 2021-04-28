import React from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Text } from '../Text';

import { commonStyles } from '../../constants/styles';

export function Previous({ navigation, imgStyle = {} }) {
    const goBackHandler = () => navigation.goBack(null);

    return (
        <View style={commonStyles.previousWrapper}>
            <TouchableOpacity onPress={goBackHandler}>
                <Image
                    style={{ ...commonStyles.previous, ...imgStyle }}
                    source={require('../../../assets/icons/previous.png')}
                />
            </TouchableOpacity>
        </View>
    );
}
