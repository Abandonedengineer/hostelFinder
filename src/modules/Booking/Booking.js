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
import { colors, fonts } from '../../styles';

const Booking = (props) => (
    <View style={styles.container}>
        <Block flex>
            <View style={{
                marginTop: 20, borderBottomWidth: 2
            }}>
                <ListItem item={props.navigation.state.params} />
            </View>
            <Block center>
                <Text style={{ fontFamily: fonts.primaryLight, fontSize: 16, fontWeight: '600' }}>Details</Text>
            </Block>
            <View style={{ marginLeft: 20, }}>
                <Text style={{ fontSize: 16, margin: 5, }}>Room Type : {props.navigation.state.params.roomType}</Text>
                <Text style={{ fontSize: 16, margin: 5 }}>Expected date of Joining : 12/12/2020</Text>
            </View>
        </Block>
        <Block center>
            <Button
                style={styles.demoButton}
                primary
                caption="Confirm Booking"
                onPress={() => { }}
            />
        </Block>
        <View style={styles.itemThreeHr} />
    </View >
)
export default Booking;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemThreeHr: {
        flex: 1,
        height: 1,
        backgroundColor: '#e3e3e3',
        marginRight: -15,
    },
    demoButton: {
        marginBottom: 40,
        margin: 8,
        marginLeft: 17
    },
});