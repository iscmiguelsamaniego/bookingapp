import { Image, Text, TouchableOpacity, View } from "react-native";
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { useWelcome } from "./useWelcome";
import styles from "../WelcomeScreen/WelcomeStyles";
import logo from "../../../assets/images/logo.png";
import manLogo from "../../../assets/images/man.png";
import googleLogo from "../../../assets/images/google.png";

const WelcomeScreen = () => {

    const {
        handleLogin,
        handleSignup
    } = useWelcome();

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Image source={manLogo} style={styles.bannerImage} />
            <Text style={styles.title}>Lorem ipsum dolor.</Text>
            <Text style={styles.subTitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore
            </Text>
            <View style={styles.buttonsInRowContainer}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.registerButton} onPress={handleSignup}>
                        <Text style={styles.registerText}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.continueText}>ó</Text>
            <TouchableOpacity style={styles.googleButtonContainer}>
                <Image
                    source={googleLogo}
                    style={styles.googleImage}
                />
                <Text style={styles.googleText}>Continuar con Google</Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;