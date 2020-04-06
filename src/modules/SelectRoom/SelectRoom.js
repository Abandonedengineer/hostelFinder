import React, { useEffect, useState } from "react";
import {
    Image,
    StyleSheet,
    StatusBar,
    Dimensions,
    View,
    ScrollView,
    TouchableOpacity,
    FlatList,
    TouchableWithoutFeedback
} from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";
import reactotron from "reactotron-react-native";
import MapView, { Marker } from 'react-native-maps';
import Button from '../../components/Button';
import ListItem from '../../components/ListItem';
import Rooms from '../../components/constants/rooms';
const { height, width } = Dimensions.get("screen");
const listData = [
    {
        id: 1,
        title: 'Single Sharing',
        subtitle: 'Limited Edition',
        price: 'RS 4000',
        priceFrom: true,
        badge: 'NEW',
        badgeColor: '#3cd39f',
        image:
            'https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg',
    },
    {
        id: 2,
        title: 'Double Sharing',
        subtitle: 'Office, prom or special parties is all dressed up',
        price: 'RS 4000',
        badge: 'NEW',
        priceFrom: true,
        image: 'https://reactnativestarter.com/demo/images/pexels-photo-26549.jpg',
    },
    {
        id: 3,
        title: 'Triple Sharing',
        subtitle: 'Office, prom or special parties is all dressed up',
        price: 'RS 4000',
        priceFrom: true,
        badge: 'NEW',
        badgeColor: '#ee1f78',
        image: 'https://reactnativestarter.com/demo/images/pexels-photo-30360.jpg',
    },
    {
        id: 4,
        title: 'Four Sharing',
        subtitle: 'Limited Edition',
        price: 'RS 4000',
        priceFrom: true,
        badge: 'NEW',
        badgeColor: 'green',
        image: 'https://reactnativestarter.com/demo/images/pexels-photo-37839.jpg',
    },
];
const SelectRoom = (props) => {
    const [Room, setRoom] = useState(null)
    const [isSelected, setSelection] = useState(false)
    return (
        <Block flex center style={styles.home}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.articles}
            >
                <FlatList
                    data={listData}
                    renderItem={({ item }) => {
                        if (isSelected && Room.id == item.id) {
                            return (
                                <TouchableWithoutFeedback onPress={() => { setRoom(item); setSelection(!isSelected) }}>
                                    <View style={{ borderColor: theme.COLORS.INFO, borderWidth: 4, borderRadius: 9 }}>
                                        <Block flex>
                                            <ListItem item={item} />
                                        </Block>
                                    </View>
                                </TouchableWithoutFeedback>

                            )
                        } else {
                            return (
                                <TouchableWithoutFeedback onPress={() => { setRoom(item); setSelection(!isSelected) }}>
                                    <Block flex>
                                        <ListItem item={item} />
                                    </Block>
                                </TouchableWithoutFeedback>

                            )
                        }
                    }}
                    keyExtractor={item => item.title} />
            </ScrollView>
            <Block center>
                <Button
                    style={styles.demoButton}
                    primary
                    bordered={!isSelected}
                    caption="Book Now"
                    onPress={() => {
                        isSelected ? props.navigation.navigate({
                            routeName: 'Booking',
                            params: { ...Room, 'roomType': Room.title },
                        }) : {}
                    }}
                />
            </Block>
        </Block>
    )
}
export default SelectRoom;

const styles = StyleSheet.create({
    home: {
        width: width,
        height: '60%'
    },
    articles: {
        width: width - theme.SIZES.BASE * 2,
        marginVertical: theme.SIZES.BASE,
        marginHorizontal: 2,
        fontFamily: 'montserrat-regular',
    },
    demoButton: {
        marginBottom: 40,
        margin: 8,
        marginLeft: 17
    },
});