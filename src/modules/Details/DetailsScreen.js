import React, { useEffect, useState } from "react";
import {
    Image,
    StyleSheet,
    StatusBar,
    Dimensions,
    View,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { Block, Text, theme, Icon } from "galio-framework";
import reactotron from "reactotron-react-native";
import MapView, { Marker } from 'react-native-maps';
import Button from '../../components/Button';
const { height, width } = Dimensions.get("screen");
const DetailsScreen = (props) => {
    const navigation = props.navigation.state.params
    const markers = [{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    }]
    useEffect(() => {
        reactotron.log(navigation)
        //API call comes here
    }, [])


    return (
        <Block>
            <ScrollView style={styles.container}>
                <View style={styles.container} >
                    <Image resizeMode="cover" source={{ uri: navigation.image }} style={{ height: height / 3, width: "100%" }} />
                    <View style={{ flex: 1 }}>
                        <View style={styles.listItem}>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Icon name="align-left-22x" family="NowExtra" size={15} color={'red'} />
                            </View>
                            <View>
                                <Text style={{ paddingBottom: 5 }}>Amenities : Wifi, HotWater, CoolWater, AC and Non-AC</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={styles.listItem}>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Icon name="align-left-22x" family="NowExtra" size={15} color={'red'} />
                            </View>
                            <View>
                                <Text style={{ paddingBottom: 5 }}>Amenities : Wifi, HotWater, CoolWater, AC and Non-AC</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={styles.listItem}>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Icon name="align-left-22x" family="NowExtra" size={15} color={'red'} />
                            </View>
                            <View>
                                <Text style={{ paddingBottom: 5 }}>Amenities : Wifi, HotWater, CoolWater, AC and Non-AC</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={styles.listItem}>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Icon name="align-left-22x" family="NowExtra" size={15} color={'red'} />
                            </View>
                            <View>
                                <Text style={{ paddingBottom: 5 }}>Amenities : Wifi, HotWater, CoolWater, AC and Non-AC</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={styles.listItem}>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Icon name="align-left-22x" family="NowExtra" size={15} color={'red'} />
                            </View>
                            <View>
                                <Text style={{ paddingBottom: 5 }}>Amenities : Wifi, HotWater, CoolWater, AC and Non-AC</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={styles.listItem}>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Icon name="align-left-22x" family="NowExtra" size={15} color={'red'} />
                            </View>
                            <View>
                                <Text style={{ paddingBottom: 5 }}>Amenities : Wifi, HotWater, CoolWater, AC and Non-AC</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={styles.listItem}>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Icon name="align-left-22x" family="NowExtra" size={15} color={'red'} />
                            </View>
                            <View>
                                <Text style={{ paddingBottom: 5 }}>Amenities : Wifi, HotWater, CoolWater, AC and Non-AC</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={styles.listItem}>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Icon name="align-left-22x" family="NowExtra" size={15} color={'red'} />
                            </View>
                            <View>
                                <Text style={{ paddingBottom: 5 }}>Amenities : Wifi, HotWater, CoolWater, AC and Non-AC</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={styles.listItem}>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Icon name="align-left-22x" family="NowExtra" size={15} color={'red'} />
                            </View>
                            <View>
                                <Text style={{ paddingBottom: 5 }}>Amenities : Wifi, HotWater, CoolWater, AC and Non-AC</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
            <Block center>
                <Button
                    style={styles.demoButton}
                    primary
                    bordered
                    caption={props.navigation.state.params.isAgent ? "Edit Details" : "Book Now"}
                    onPress={() => {
                        props.navigation.navigate({
                            routeName: props.navigation.state.params.isAgent ? "EditHostel" : "SelectRoom",
                            params: { ...navigation },
                        });
                    }}
                />
            </Block>
        </Block>
    )


}
export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: '90%'
    },
    demoButton: {
        marginBottom: 4,
        margin: 8,
        marginLeft: 17
    },
    listItem: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomWidth: 1
    },
    mapStyle: {
        width: '100%',
        height: 200,
    },
});