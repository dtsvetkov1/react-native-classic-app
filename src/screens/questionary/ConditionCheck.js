import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { MainScreenContainer } from '../../components/containers/MainScreenContainer';
import { commonStyles } from '../../constants/styles';

import { Text } from '../../components/Text';

import { TouchableOpacity } from 'react-native-gesture-handler';

const CONDITION_OPTIONS = [
    {
        icon: require('../../../assets/icons/questionary/overTheMoonSmile.png'),
        id: 0,
        title: 'Over the moon!',
    },
    {
        icon: require('../../../assets/icons/questionary/fineSmile.png'),
        id: 1,
        title: 'Feeling Fine',
    },
    {
        icon: require('../../../assets/icons/questionary/whateverSmile.png'),
        id: 2,
        title: "It's whatever",
    },
    {
        icon: require('../../../assets/icons/questionary/notSoGreatSmile.png'),
        id: 3,
        title: 'Not so Great',
    },
    {
        icon: require('../../../assets/icons/questionary/badSmile.png'),
        id: 4,
        title: '...',
    },
];

const ConditionOptionRow = ({ icon, id, title, selected, onPress }) => {
    return (
        <TouchableOpacity
            style={{ flexDirection: 'row', width: '90%', paddingVertical: 10 }}
            onPress={onPress}>
            <Image source={icon} style={styles.icon} />

            <View
                style={[
                    styles.conditionButton,
                    selected && { backgroundColor: 'red' },
                ]}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export function ConditionCheck(props) {
    const navigation = useNavigation();
    const goal =
        'Please turn on bluetooth on your device\r\nand prepare for exercise.';
    const breath = 2000;

    const [condition, setCondition] = useState();

    const onConditionPress = (id) => {
        setCondition(id);
    };

    return (
        <MainScreenContainer>
            <Text>How are you today?</Text>
            {CONDITION_OPTIONS.map((item) => (
                <ConditionOptionRow
                    {...item}
                    selected={condition === item.id}
                    key={item.id}
                    onPress={() => onConditionPress(item.id)}
                />
            ))}
        </MainScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    icon: {
        width: 50,
        height: 50,
    },
    conditionButton: {
        width: '80%',
        marginLeft: 10,
        marginVertical: 5,
        zIndex: 1,
        backgroundColor: 'white',
        ...commonStyles.shadow,
        // borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
