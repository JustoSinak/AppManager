import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft,faPhone, faEye, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { colors } from './utils/colors';
import { IconName } from '@fortawesome/free-solid-svg-icons';

// import { ScrollView } from 'react-native-gesture-handler';


const SignupScreen = () => {

    const [secureEntry, setSecureEntry] = useState(true); 


    const navigation = useNavigation();

    const handleHome = () => {
        navigation.navigate("Login");
    };


  return (
    <ScrollView style={{backgroundColor: colors.white}}>    
    <View style={styles.container}>
        <TouchableOpacity style={styles.nav} onPress={handleHome}>
            <FontAwesomeIcon icon={faArrowLeft} size={28} color= {colors.primary} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
            <Text style={styles.headingText}>Let's get</Text>
            <Text style={styles.headingText}>started</Text>
        </View>
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <FontAwesomeIcon icon={faEnvelope} size={30} color={colors.secondary} />
                
                <TextInput placeholder='Enter your mail' placeholderTextColor={colors.secondary} 
                keyboardType="email-address" style={styles.textInput} />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesomeIcon icon={faLock} size={30} color={colors.secondary} />
                
                <TextInput placeholder='Enter your password' 
                // keyboardType="visible-password"
                secureTextEntry={true}
                placeholderTextColor={colors.secondary} style={styles.textInput} />
                <TouchableOpacity onPress={() => {
                    setSecureEntry((prev) => !prev);
                }} >
                    <FontAwesomeIcon icon={faEye} size={30} color={colors.secondary} />
                </TouchableOpacity>
                
            </View>

            <View style={styles.inputContainer}>
                <FontAwesomeIcon icon={faPhone} size={30} color={colors.secondary} />
                
                <TextInput placeholder='Enter your phone number' 
                // keyboardType="visible-password"
                keyboardType="phone-pad"
                placeholderTextColor={colors.secondary} style={styles.textInput} />
                
                
            </View>

            <TouchableOpacity>
                <Text style={styles.forgetPass}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.logintext}>Signup</Text>
            </TouchableOpacity>
            <Text style={styles.continueText}>or Sign up with</Text>
            <TouchableOpacity 
            style={styles.googleBtn}>
                <Image source={require("../assets/google.png")} style={styles.googleImage} />
                <Text style={styles.googletext}>Google</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text style={styles.accountText}>Have an accout?</Text>
                <TouchableOpacity onPress={handleHome}>
                    <Text style={styles.signupText}>Login</Text>
                </TouchableOpacity>
                
            </View>
            
        </View>
    </View>
    </ScrollView>

  )
}

export default SignupScreen

const styles = StyleSheet.create({
    nav:{
        flex: 1,
        top: 20,
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: colors.gray,
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 180,
        justifyContent: "center",
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 5,
    },
    textContainer: {
        marginVertical: 10
    },
    headingText: {
        fontSize: 32,
        color: colors.primary,
        fontFamily: "Poppins",
    },
    formContainer: {
        marginTop: 20,
        
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 30,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        marginVertical: 10,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 15,
    },
    forgetPass: {
        textAlign: "right",
        color: colors.primary,
        marginVertical: 10,
    },
    loginBtn: {
        backgroundColor: colors.primary,
        borderRadius: 100,
        // marginVertical: 20,
        marginTop: 20,
    },
    logintext: {
        color: colors.white,
        fontSize: 18,
        textAlign: "center",
        padding: 10,
        
    },
    googleBtn: {
        flexDirection: "row",
        borderWidth: 2,
        borderRadius: 100,
        // marginVertical: 20,
        marginTop: 10,
        borderColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        
    },
    googletext: {
        color: colors.primary,
        fontSize: 18,
        // textAlign: "center",
        padding: 10,
        
    },
    continueText: {
        textAlign: "center",
        marginVertical: 20,
        fontSize: 14,
        color: colors.primary,
    },
    googleImage: {
        height: 38,
        width: 40,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        gap: 4,
        padding: 10,
    },
    accountText: {
        color:colors.primary,
        fontSize: 18,
    },
    signupText: {
        color: colors.primary,
        fontSize: 18,
        fontWeight: "bold",
    }
});