import { StyleSheet, Text, ScrollView, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from './utils/colors';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleHome = () => {

  };
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <Image source={require("../assets/mooi.jpg")} style={styles.logo} />
      <Image source={require("../assets/f1.jpg")} style={styles.bannerImage} />
      <Text style={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <Text style={styles.Subtitle}>My Name is Tcheumani Sinak Justo. I am a FullStack
         Developper and a beginner in CrossPlatform Development.
        This app links to the various projects i have created during my crossplatform course
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.loginBut, {backgroundColor: colors.primary}]}
        onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.signupBut]} onPress={handleSignup}>
          <Text style={styles.signupText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
    backgroundColor: colors.white,
    alignItems: 'center',
    marginVertical: 40,

  },
  logo: {
    height: 40,
    width: 140,
  },
  bannerImage:{
    marginVertical: 30,  
    height: 260,
    width: 300,
  },
  title: {
    fontSize: 10,
    fontFamily: 'Sans-serif',
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.primary,
    marginVertical: 20,

  },
  Subtitle:{
    fontSize: 20,
    paddingHorizontal: 20,
    textAlign: "center",
    color: colors.secondary,
    fontFamily: "Sans-serif",
    marginVertical: 20,
  },
  buttonContainer:{
    marginTop: 20,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.primary,
    width: "80%",
    height: 60,
    borderRadius: 100,
  },
  loginBut:{
    justifyContent: "center",
    alignItems: "center",
    width: "59%",
    // backgroundColor: colors.primary,
    borderRadius: 98,
  },
  signupBut: {
    justifyContent: "center",
    alignItems: "center",
    width: "59%",
  },
  loginText: { 
    color: colors.white,
    fontSize: 18,
    fontFamily: "Poppins"

  },
  signupText: {
    fontSize: 18,
    fontFamily: "Poppins"
  },
});