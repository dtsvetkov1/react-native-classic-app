import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

// import { HomeScreen } from '../screens/auth/WelcomeScreen';

import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AppointmentsScreen } from '../screens/profile/AppointmentsScreen';
import { SettingsScreen } from '../screens/profile/SettingsScreen';
import { InformationScreen } from '../screens/profile/InformationScreen';

const Tab = createStackNavigator();

export function ProfileNavigator() {
    return (
        <Tab.Navigator style={{}}>
            <Tab.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Appointments" component={AppointmentsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Information" component={InformationScreen} />
        </Tab.Navigator>
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
