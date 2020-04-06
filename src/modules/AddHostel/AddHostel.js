import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    ScrollView,
    FlatList,
    Image
} from "react-native";
import { Block, Card, Icon, Input, NavBar, Text } from 'galio-framework';
import { Button, RadioGroup, Dropdown } from '../../components';
import theme from '../../components/constants/Theme';
import { firebase } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import reactotron from "reactotron-react-native";
import { fonts, colors } from '../../styles';
import { TouchableOpacity } from "react-native-gesture-handler";
import ImagePicker from 'react-native-image-crop-picker';


const AddHostel = (props) => {
    const [name, setName] = useState('');
    const [Description, setDescription] = useState('');
    const [Location, setLocation] = useState('');
    const [Contact, setContact] = useState('');
    const [Price, setPrice] = useState('');
    const [Images, setImages] = useState([]);
    const onAddHostel = () => {
        // await firebase.auth().currentUser.updateProfile(Profile);
        props.navigation.navigate('Main')
    }
    const addImages = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            reactotron.log(images)
            setImages([...images, ...Images]);
        });
    }
    const renderItem = ({ item }) => (
        <TouchableOpacity
            key={item.id}
            style={styles.itemThreeContainer}
            onPress={() => { }}
        >
            <Image source={{ uri: item.path }} style={styles.itemThreeImage} />
        </TouchableOpacity>
    );
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 20 }}
        >
            <View style={[styles.picturesSection]}>
                <View>
                    <Text style={styles.componentSectionHeader}>Pictures</Text>
                </View>
                <FlatList
                    keyExtractor={item =>
                        item.id
                            ? `${item.id}`
                            : `${item[0] && item[0].id}`
                    }
                    horizontal
                    style={{ backgroundColor: colors.white, paddingHorizontal: 15 }}
                    data={Images}
                    renderItem={renderItem}
                />
            </View>
            <Button
                style={[styles.demoButton, { width: 200, alignSelf: 'center' }]}
                propscolor={theme.COLORS.INFO}
                textColor={theme.COLORS.INFO}
                primary
                bordered
                caption="Add Pictures"
                onPress={() => { addImages() }}
            />
            <View style={styles.componentsSection}>
                <Input placeholder="Name" style={{ borderColor: theme.COLORS.INFO, width: '90%' }} value={name} placeholderTextColor={theme.COLORS.INFO} onChangeText={(name) => { setName(name) }} />
                <Input placeholder="Description" multiline
                    numberOfLines={4} style={{ borderColor: theme.COLORS.INFO, width: '90%' }} value={Description} placeholderTextColor={theme.COLORS.INFO} onChangeText={(Description) => { setDescription(Description) }} />
                <Input placeholder="Location" style={{ borderColor: theme.COLORS.INFO, width: '90%' }} value={Location} placeholderTextColor={theme.COLORS.INFO} onChangeText={(Location) => { setLocation(Location) }} />
                <Input placeholder="Contact" style={{ borderColor: theme.COLORS.INFO, width: '90%' }} value={Contact} placeholderTextColor={theme.COLORS.INFO} onChangeText={(Contact) => { setContact(Contact) }} />
                <Input placeholder="Price" style={{ borderColor: theme.COLORS.INFO, width: '90%' }} value={Price} placeholderTextColor={theme.COLORS.INFO} onChangeText={(Price) => { setPrice(Price) }} />
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    {/* <Button round size="small" color={theme.COLORS.INFO} onPress={() => { onCreateProfile() }}>SAVE</Button> */}
                    <Button
                        style={[styles.demoButton, { width: 200, alignSelf: 'center' }]}
                        propscolor={theme.COLORS.INFO}
                        textColor={theme.COLORS.INFO}
                        primary
                        bordered
                        caption="SAVE"
                        onPress={() => { }}
                    />
                </View>
            </View>
        </ScrollView >
    )
}
export default AddHostel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bluish,
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    componentsSection: {
        backgroundColor: colors.white,
        padding: 15,
        marginTop: 90,
        marginBottom: 50,
        borderRadius: 5,
        flex: 1
    },
    picturesSection: {
        backgroundColor: colors.white,
        padding: 15,
        // marginTop: 90,
        // marginBottom: 20,
        borderRadius: 5,
        flex: 1,
        borderColor: theme.COLORS.INFO,
        borderWidth: 2,
        height: 150
    },
    componentSectionHeader: {
        fontFamily: fonts.primaryRegular,
        color: '#686868',
        fontSize: 20,
        marginBottom: 0,
        alignSelf: 'center'
    },
    demoButton: {
        marginTop: 8,
        marginBottom: 8,
    },
    itemThreeImage: {
        height: 120,
        width: 90,
        marginRight: 5
    },
});