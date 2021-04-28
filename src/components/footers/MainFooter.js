import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';
import { colors } from '../../constants/colors';
import { DefaultButton } from '../../components/buttons/DefaultButton';
import { text, flex, commonStyles } from '../../constants/styles';

import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
} from 'react-native-svg';

import homeIcon from '../../../assets/icons/brain.png';
import searchIcon from '../../../assets/icons/menu/search.png';
import heartIcon from '../../../assets/icons/menu/heart.png';
import profileIcon from '../../../assets/icons/menu/person_profile.png';
import plusIcon from '../../../assets/icons/menu/plus.png';
import { MAIN_STACK_SCREENS } from '../../constants/navigation';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

const BUTTON_RADIUS = 50;
const CURVE_RADIUS = BUTTON_RADIUS * 0.9;
const FOOTER_HEIGHT = 70;
const CENTER_BUTTON_SIZE = 70;

const HOME_INDEX = 0;
const SEARCH_INDEX = 1;
const HEART_INDEX = 2;
const PROFILE_INDEX = 3;

const FooterIcon = ({ source, onPress, focused }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image
                source={source}
                style={{
                    height: 30,
                    width: 30,
                    tintColor:
                        colors.secondary[focused ? 'darkGreen' : 'pastelgreen'],
                }}
                resizeMode={'contain'}
            />
        </TouchableOpacity>
    );
};

// TODO

export function MainFooter(props) {
    const navigation = useNavigation();
    const state = 0;
    const { ...otherProps } = props;

    // const {navigation, state, ...otherProps} = props;
    const currentIndex = state.index;

    const onMainPress = () => {
        navigation.navigate(MAIN_STACK_SCREENS.HOME, { screen: 'Home' });
    };
    const onSearchPress = () => {
        navigation.navigate(MAIN_STACK_SCREENS.SEARCH);
    };
    const onHeartPress = () => {
        navigation.navigate(MAIN_STACK_SCREENS.HEART);
    };
    const onProfilePress = () => {
        navigation.navigate(MAIN_STACK_SCREENS.PROFILE);
    };

    return (
        <View
            style={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                backgroundColor: 'transparent',
                zIndex: 2,
            }}>
            <Svg
                color={'transparent'}
                height={FOOTER_HEIGHT}
                width={width}
                style={{
                    zIndex: 1,
                    //  borderWidth: 1,
                    backgroundColor: 'transparent',
                }}>
                <G>
                    <Path
                        d={`M0 80 L0 0 L${width / 2 - BUTTON_RADIUS * 1.5} 0 \
                    Q${width / 2 - BUTTON_RADIUS} 0 ${
                            width / 2 - CURVE_RADIUS
                        } 10 \
                    a ${CURVE_RADIUS} ${CURVE_RADIUS} 0 0 0 ${
                            CURVE_RADIUS * 1.9
                        } 0 \
                    Q${width / 2 + BUTTON_RADIUS} 0 ${
                            width / 2 + BUTTON_RADIUS * 1.5
                        } 0 \
                    L${width} 00 L${width} 80`}
                        fill={'white'}
                        stroke={'rgba(0,0,0,0.2)'}></Path>
                </G>
            </Svg>
            <View
                style={{
                    position: 'absolute',
                    zIndex: 2,
                    // backgroundColor: 'white',
                    bottom: 0,
                    // borderWidth: 2,
                    backgroundColor: 'transparent',
                    alignItems: 'center',
                    height: FOOTER_HEIGHT,
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        width: '40%',
                        justifyContent: 'space-around',
                    }}>
                    <FooterIcon
                        source={homeIcon}
                        focused={currentIndex === HOME_INDEX}
                        onPress={onMainPress}
                    />
                    <FooterIcon
                        source={searchIcon}
                        focused={currentIndex === SEARCH_INDEX}
                        onPress={onSearchPress}
                    />
                </View>
                <View
                    style={{
                        position: 'absolute',
                        left: width / 2 - CENTER_BUTTON_SIZE / 2 - 2,
                        bottom: 40,
                        zIndex: 10,
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Exercise');
                        }}>
                        <LinearGradient
                            style={{
                                width: CENTER_BUTTON_SIZE,
                                height: CENTER_BUTTON_SIZE,
                                borderRadius: CENTER_BUTTON_SIZE / 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            colors={[
                                colors.primary.gradient1,
                                colors.primary.gradient2,
                            ]}
                            end={{ x: 0.99, y: -0.2 }}
                            start={{ x: 1, y: 0.7 }}>
                            <Image
                                source={plusIcon}
                                style={{
                                    width: CENTER_BUTTON_SIZE * 0.4,
                                    height: CENTER_BUTTON_SIZE * 0.4,
                                    tintColor: 'white',
                                }}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        width: '40%',
                        justifyContent: 'space-around',
                    }}>
                    <FooterIcon
                        source={heartIcon}
                        focused={currentIndex === HEART_INDEX}
                        onPress={onHeartPress}
                    />
                    <FooterIcon
                        source={profileIcon}
                        focused={currentIndex === PROFILE_INDEX}
                        onPress={onProfilePress}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#fff',
        alignItems: 'center',
    },
});
