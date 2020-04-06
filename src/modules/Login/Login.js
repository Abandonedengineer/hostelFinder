import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    ImageBackground
} from "react-native";
import reactotron from "reactotron-react-native";
import { firebase } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import { Block, Card, Icon, Input, NavBar, Text, Button } from 'galio-framework';
// import theme from './src/components/constants/Theme';
import theme from '../../components/constants/Theme';
const Login = (props) => {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [OTP, setOTP] = useState(null);
    const [showSignin, setSignin] = useState(false);
    const [number, setNumber] = useState('')
    const [OtpNumber, setOtpNumber] = useState('')
    const [radioGroupsState, setRadioGroupsState] = useState([0, 0])
    // Handle user state changes
    onAuthStateChanged = (user) => {
        setUser(user);
        // props.navigation.navigate('Main')
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        reactotron.log('subscriberr', subscriber)
        return subscriber; // unsubscribe on unmount
    }, []);
    const sendOTP = () => {
        props.navigation.navigate('CreateProfile')
        // firebase
        //     .auth()
        //     .signInWithPhoneNumber(`+919154500923`)
        //     .then(res => {

        //         // setOTP(res)
        //         // setSignin(true)
        //         reactotron.log('OTP Response>>>>>>>', res)
        //     })
        //     .catch(error => {
        //         alert('please enter a vaild mobile number')
        //         reactotron.log(error)
        //     })
    }
    const signIn = () => {
        setUser(user);
        reactotron.log('', res)
        props.navigation.navigate('CreateProfile')
        // OTP
        //     .confirm(OtpNumber)
        //     .then(res => {
        //         // setUser(user);
        //         // reactotron.log('', res)
        //         // props.navigation.navigate('CreateProfile')
        //     })
        //     .catch(error => {
        //         alert('Incorrect OTP')
        //         reactotron.log(error)
        //     })
    }
    const buttonText = showSignin ? 'SIGN IN' : 'GET OTP';
    //../../../assets/images/background.png
    return (
        <ImageBackground
            source={require("../../../assets/images/background.png")}
            style={styles.bgImage}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text h4 italic color={'white'}>LOGIN</Text>
                <Input placeholder="Enter Mobile Number" style={{ borderColor: theme.COLORS.INFO, width: '70%' }} placeholderTextColor={theme.COLORS.INFO} type={'phone-pad'} onChangeText={(text) => setNumber(text)} />
                {(showSignin) && (<Input placeholder="Enter OTP" style={{ borderColor: theme.COLORS.INFO, width: '70%' }} placeholderTextColor={theme.COLORS.INFO} type={'phone-pad'} onChangeText={(text) => setOtpNumber(text)} />)}
                <Button round size="small" color="success" onPress={showSignin ? signIn : sendOTP}>{buttonText}</Button>
            </View>
        </ImageBackground>
    )
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bgImage: {
        flex: 1,
        marginHorizontal: -20,
    },
    demoItem: {
        marginVertical: 15,
    },
});