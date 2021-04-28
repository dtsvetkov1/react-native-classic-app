import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import { HomeScreen } from '../screens/auth/WelcomeScreen';
import { TrainingNavigator } from '../navigation/TrainingNavigator';

import { ProfileNavigator } from './ProfileNavigator';

import { HomeScreen } from '../screens/main/HomeScreen';
import { CongratulationsScreen } from '../screens/main/CongratulationsScreen';
import { SearchScreen } from '../screens/main/SearchScreen';
import { HeartScreen } from '../screens/main/HeartScreen';
import { ProfileScreen } from '../screens/main/ProfileScreen';
import { MainFooter } from '../components/footers/MainFooter';
import { FONTS } from '../constants/texts';

const Tab = createDrawerNavigator();

export function MainNavigator() {
    return (
        <>
            <Tab.Navigator style={{}}
                tabBarOptions={{
                    tabStyle: { borderWidth: 1, },
                    style: { borderWidth: 1, },
                }}
                drawerContentOptions={{
                    labelStyle: {
                        fontFamily: FONTS.MONTSERRAT,
                    }
                }}
                sceneContainerStyle={{ flex: 1, paddingBottom: 50, }}
                screenOptions={{ headerShown: false }}
                tabBar={(props) => <MainFooter {...props} navigation={props.navigation} />}>
                <Tab.Screen name="Home" component={TrainingNavigator} />
                {/* <Tab.Screen name="Congrats" component={CongratulationsScreen} /> */}
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Heart" component={HeartScreen} />
                <Tab.Screen name="Profile" component={ProfileNavigator} />
            </Tab.Navigator>

            {<MainFooter />}
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
