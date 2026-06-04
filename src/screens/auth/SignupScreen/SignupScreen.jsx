import {
    Image, Text, TextInput, TouchableOpacity, View
} from "react-native";
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useSignup } from "./useSignup";
import { colors } from '../../styles/BaseStyles';
import styles from './SignupStyles';
import backLogo from "../../../assets/images/arrow_back.png";
import emailLogo from "../../../assets/images/email.png";
import lockLogo from "../../../assets/images/lock.png";
import eyeLogo from "../../../assets/images/eye.png";
import phoneLogo from "../../../assets/images/smartphone.png";

const SignupScreen = () => {

    const {
        secureEntery,
        email,
        password,
        handleGoBack,
        handleLogin
    } = useSignup();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
                <Image
                    source={backLogo}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Comencemos</Text>
            </View>
            {/* form  */}
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Image
                        source={emailLogo}
                        style={{ width: 25, height: 25 }}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Ingresa tu email"
                        placeholderTextColor={colors.secondary}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image
                        source={lockLogo}
                        style={{ width: 25, height: 25 }}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Ingresa tu contraseña"
                        placeholderTextColor={colors.secondary}
                        secureTextEntry={secureEntery}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            setSecureEntery((prev) => !prev);
                        }}
                    >
                        <Image
                            source={eyeLogo}
                            style={{ width: 25, height: 25 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <Image
                        source={phoneLogo}
                        style={{ width: 25, height: 25 }}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Ingresa tu numero de telefono"
                        placeholderTextColor={colors.secondary}
                        secureTextEntry={secureEntery}
                        keyboardType="phone-pad"
                    />
                </View>
                <TouchableOpacity style={styles.loginButtonWrapper}>
                    <Text style={styles.loginText}>R e g i s t r a r m e</Text>
                </TouchableOpacity>
                <View style={styles.footerContainer}>
                    <Text style={styles.accountText}>¡Ya tengo una cuenta!</Text>
                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={styles.signupText}>E n t r a r</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignupScreen;