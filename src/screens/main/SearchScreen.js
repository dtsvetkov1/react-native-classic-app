import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { colors } from '../../constants/colors';
import { text, flex, commonStyles } from '../../constants/styles';
import { Text } from '../../components/Text';

import { MainScreenContainer } from '../../components/containers/MainScreenContainer';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { FONTS } from '../../constants/texts';

import bookmarkIcon from '../../../assets/icons/bookmark.png';
import bookmarkFillIcon from '../../../assets/icons/bookmark-fill.png';

const data = [
    {
        title: 'Training program 1',
        duration: '10 min',
        goal: 'Relax',
        rating: 4.7,
        description: 'Relax and enjoy',
    },
    {
        title: 'Training program 2',
        duration: '10 min',
        goal: 'Relax',
        rating: 4.7,
        description: 'Clean your thoughts',
    },
    {
        title: 'Training program 3',
        duration: '10 min',
        goal: 'Courage',
        rating: 4.7,
        description: 'Concentrate on study',
    },
    {
        title: 'Training program 4',
        duration: '10 min',
        goal: 'Courage',
        rating: 4.7,
        description: 'Courage and Passion',
    },
    {
        title: 'Training program 5',
        duration: '10 min',
        goal: 'Courage',
        rating: 4.7,
        description: 'Test description',
    },
    {
        title: 'Training program 6',
        duration: '10 min',
        goal: 'Quiet',
        rating: 4.7,
        description: 'Test description',
    },
    {
        title: 'Training program 7',
        duration: '10 min',
        goal: 'Quiet',
        rating: 4.7,
        description: 'Test description',
    },
];

const keywords = ['Calm', 'Dymamic', 'Entertaining', 'Long', 'Short'];

const RenderItem = ({ item }) => {
    const [bookmark, setBookmark] = useState(false);
    return (
        <View
            style={{
                ...commonStyles.shadow,
                width: '95%',
                backgroundColor: 'white',
                elevation: 10,
                margin: 10,
                padding: 20,
                borderRadius: 10,
            }}>
            <View
                style={{ position: 'absolute', zIndex: 10, top: 0, right: 15 }}>
                <TouchableOpacity onPress={() => setBookmark(!bookmark)}>
                    <Image
                        style={{
                            height: 35,
                            width: 30,
                            tintColor: colors.secondary.lightGreen,
                        }}
                        source={bookmark ? bookmarkFillIcon : bookmarkIcon}
                    />
                </TouchableOpacity>
            </View>
            <Text style={{ fontFamily: FONTS.MONTSERRAT_BOLD }}>
                {item.title}
            </Text>
            <Text style={{ marginBottom: 10 }}>{item.description}</Text>
            <Text>Duration: {item.duration}</Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <Text>
                    Goal:{' '}
                    <Text
                        style={{
                            color:
                                item.goal === 'Courage'
                                    ? colors.states.error
                                    : colors.secondary.darkGreen,
                        }}>
                        {item.goal}
                    </Text>
                </Text>
                <Text>Rating: {item.rating}</Text>
            </View>
        </View>
    );
};

const renderKeyword = () => {
    return (
        <View>
            <Text>sdf</Text>
        </View>
    );
};
const RenderKeyword = ({ title, color, textColor }) => {
    const [focused, setFocused] = useState(false);
    return (
        <TouchableOpacity
            key={title}
            style={{
                ...commonStyles.shadow,
                marginBottom: 20,
                paddingVertical: 5,
                paddingHorizontal: 10,
                margin: 5,
                borderRadius: 10,
                backgroundColor: focused
                    ? color || colors.primary.name
                    : 'white',
            }}
            onPress={() => setFocused(!focused)}>
            {/* <View style={{

		}}> */}
            <Text
                style={{
                    height: 18,
                    color: focused ? textColor || 'white' : colors.primary.name,
                }}>
                {title}
            </Text>
            {/* </View> */}
        </TouchableOpacity>
    );
};

// TODO
export function SearchScreen(props) {
    const [filteredData, setData] = useState(data);
    const [search, setSearch] = useState('');

    const onSearch = (text) => {
        setSearch(text);

        if (!text) {
            setData(data);
            return;
        }
        setData(
            filteredData.filter(
                (item) =>
                    item.title.includes(text) ||
                    item.description.includes(text),
            ),
        );
    };

    return (
        <>
            <View style={{ width: '100%', marginTop: 40 }}>
                <TextInput
                    style={{
                        backgroundColor: 'lightgray',
                        padding: 10,
                        paddingVertical: 5,
                        borderRadius: 20,
                        margin: 10,
                    }}
                    placeholder={'Search Training programs'}
                    value={search}
                    onChangeText={onSearch}
                />
            </View>
            {/* <View style={{borderWidth: 1}}> */}
            <ScrollView
                style={{ maxHeight: 55 }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                {keywords.map((item) => (
                    <RenderKeyword key={item} title={item} />
                ))}
            </ScrollView>
            {/* </View> */}
            <FlatList
                style={{ flex: 1, width: '100%' }}
                keyExtractor={(item, index) => `${item.title}${index}`}
                data={filteredData}
                renderItem={(item) => <RenderItem {...item} />}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        backgroundColor: colors.secondary.beige,
        paddingLeft: 34,
        paddingTop: 80,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 20,
        backgroundColor: colors.primary.name,
        marginRight: 13,
    },
    btnText: {
        fontSize: 12,
        color: 'white',
    },
    avatarWrapper: {
        ...commonStyles.shadow,
        position: 'absolute',
        borderWidth: 4,
        borderColor: 'white',
        top: 50,
        right: 30,
        overflow: 'hidden',
        borderRadius: 35,
    },
    avatar: {
        resizeMode: 'cover',
        height: 60,
        width: 55,
    },
    goal: {
        color: colors.secondary.lightGreen,
        marginVertical: 12,
    },
    name: {
        color: colors.primary.name,
    },
    actionsBlock: {
        padding: 20,
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        borderColor: colors.secondary.beige,
        paddingVertical: 20,
        borderBottomWidth: 1,
        width: '100%',
    },
    subheader: {
        ...text.h4,
        marginBottom: 2,
        color: colors.primary.name,
    },
    actionBtn: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    description: {
        ...text.h4,
        color: colors.secondary.descrition,
    },
    actionIcon: {
        resizeMode: 'cover',
    },
    iconWrapper: {
        width: '20%',
        alignItems: 'center',
    },
    btnsWrapper: {
        flexDirection: 'row',
        marginVertical: 15,
    },
    specialistsContainer: {},
    specialistCard: {
        ...commonStyles.shadow,
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        marginHorizontal: 15,
        marginBottom: 30,
        width: 300,
        borderRadius: 20,
        borderRadius: 15,
    },
    starWrapper: {
        width: 30,
        height: 30,
        alignItems: 'center',
    },
    star: {
        height: 20,
        width: 20,
        resizeMode: 'cover',
    },
    contactBtn: {
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 6,
        marginRight: 20,
        paddingVertical: 4,
        borderColor: colors.tertiary.lavander,
    },
    contactBtnText: {
        ...text.h4,
        color: colors.tertiary.lavander,
    },
});
const getGreeting = () => {
    let hours = new Date().getHours();
    if (hours < 10) {return 'Good morning';}
    if (hours < 18) {return 'Good afternoon';}
    return 'Good evening';
};
