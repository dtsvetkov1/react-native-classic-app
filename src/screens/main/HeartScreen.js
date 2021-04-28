import React from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import { text, flex, commonStyles } from '../../constants/styles';

import { MainScreenContainer } from '../../components/containers/MainScreenContainer';
import { Text } from '../../components/Text';
import corona from '../../../assets/images/corona.jpg';
import food from '../../../assets/images/food.jpg';
import breath from '../../../assets/images/breath.png';

const data = [
    {
        title: 'Stay home - stay safe',
        bg: corona,
        text:
            'Follow these 8 simple rules to keep you\r\nand your family fit and well',
    },
    {
        title: 'Healthy winter diet',
        bg: food,
        text: 'The best foods to eat to\r\nstay well this winter',
    },
    {
        title: 'Deep breathing advantages',
        bg: breath,
        text: '5 Breathing\r\nExercises',
    },
];

const renderItem = ({ item }) => {
    return (
        <View style={styles.card} key={item.title + item.text}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{item.title}</Text>
            </View>
            <View style={styles.main}>
                <Text style={styles.mainText}>{item.text}</Text>
            </View>
            <Image source={item.bg} style={styles.bg} />
        </View>
    );
};

export function HeartScreen(props) {
    return (
        <MainScreenContainer>
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={data}
                renderItem={renderItem}
                style={styles.container}
                contentContainerStyle={styles.content}
            />
        </MainScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: '#fff',
        width: '100%',
    },
    content: {
        width: '100%',
        paddingVertical: 24,
    },
    bg: {
        height: 200,
        width: '100%',
        position: 'absolute',
        top: 0,
    },
    header: {
        zIndex: 1,
        padding: 12,
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    headerText: {
        color: 'white',
    },
    main: {
        zIndex: 1,
        position: 'absolute',
        bottom: 10,
        backgroundColor: 'rgba(255,255,255,0.3)',
        padding: 12,
        borderRadius: 12,
        right: 12,
    },
    mainText: {
        ...text.h4,
        color: 'white',
        textAlign: 'right',
    },
    card: {
        ...commonStyles.shadow,
        margin: 15,
        overflow: 'hidden',
        height: 200,
        borderRadius: 20,
    },
});
