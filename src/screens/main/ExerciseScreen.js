import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { MainScreenContainer } from '../../components/containers/MainScreenContainer';

export function ExerciseScreen() {
    return (
        <MainScreenContainer>
            <View style={styles.container}>
                <Text>Animations are under construction, sorry =(</Text>
            </View>
        </MainScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center' },
});
