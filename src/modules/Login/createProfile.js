import React, { useState } from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    ScrollView
} from "react-native";
import { Block, Button, Card, Icon, Input, NavBar, Text } from 'galio-framework';
import theme from '../../components/constants/Theme';
import { firebase } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import reactotron from "reactotron-react-native";
import { fonts, colors } from '../../styles';



const CreateProfile = (props) => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const onCreateProfile = () => {
        var Profile = { 'name': name, 'dob': dob, 'gender': gender, 'email': email, 'password': password, 'confirmPassword': confirmPassword }
        // await firebase.auth().currentUser.updateProfile(Profile);
        props.navigation.navigate('Main')
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingBottom: 20 }}
        >
            <View style={styles.componentsSection}>
                <Input placeholder="Name" style={{ borderColor: theme.COLORS.INFO, width: '90%' }} placeholderTextColor={theme.COLORS.INFO} onChangeText={(name) => { setName(name) }} />
                <Input placeholder="Date Of Birth" style={{ borderColor: theme.COLORS.INFO, width: '90%' }} placeholderTextColor={theme.COLORS.INFO} onChangeText={(dob) => { setDob(dob) }} />
                <Input placeholder="Gender" style={{ borderColor: theme.COLORS.INFO, width: '90%' }} placeholderTextColor={theme.COLORS.INFO} onChangeText={(gender) => { setGender(gender) }} />
                <Input placeholder="Email" style={{ borderColor: theme.COLORS.INFO, width: '90%' }} placeholderTextColor={theme.COLORS.INFO} onChangeText={(email) => { setEmail(email) }} />
                <Input placeholder="password" password viewPass style={{ borderColor: theme.COLORS.INFO, width: '90%' }} placeholderTextColor={theme.COLORS.INFO} onChangeText={(password) => { setPassword(password) }} />
                <Input placeholder="Confirm Password" password viewPass style={{ borderColor: theme.COLORS.INFO, width: '90%' }} placeholderTextColor={theme.COLORS.INFO} onChangeText={(confirmPassword) => { setConfirmPassword(confirmPassword) }} />
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Button round size="small" color="info" onPress={() => { onCreateProfile() }}>SAVE</Button>
                </View>
            </View>
        </ScrollView>
    )
}
export default CreateProfile;

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
        marginBottom: 20,
        borderRadius: 5,
        flex: 1
    },
    componentSectionHeader: {
        fontFamily: fonts.primaryRegular,
        color: '#686868',
        fontSize: 20,
        marginBottom: 400,
        alignSelf: 'center'
    },
    demoButton: {
        marginTop: 8,
        marginBottom: 8,
    },
});