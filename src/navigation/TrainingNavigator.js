import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

// import { HomeScreen } from '../screens/auth/WelcomeScreen';
import { HomeScreen } from '../screens/main/HomeScreen';
import { CongratulationsScreen } from '../screens/main/CongratulationsScreen';
import { ExerciseScreen } from '../screens/main/ExerciseScreen';

const Tab = createStackNavigator();

export function TrainingNavigator() {
    return (
        <>
            <Tab.Navigator style={{}} screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Congrats" component={CongratulationsScreen} />
                <Tab.Screen name="Exercise" component={ExerciseScreen} />
            </Tab.Navigator>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
