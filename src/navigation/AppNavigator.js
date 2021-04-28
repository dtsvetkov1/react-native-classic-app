import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainNavigator } from './MainNavigator';
import { AuthNavigator } from './AuthNavigator';
import { QuestionaryNavigator } from './QuestionaryNavigator';

const Stack = createStackNavigator();

export function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Auth" component={AuthNavigator} />
                <Stack.Screen name="Main" component={MainNavigator} />
                <Stack.Screen
                    name="Questionary"
                    component={QuestionaryNavigator}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
