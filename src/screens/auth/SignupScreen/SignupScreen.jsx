import {
    Image, Text, TextInput, TouchableOpacity, View
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSignup } from "./useSignup";
import { colors } from '../../styles/BaseStyles';
import styles from './SignupStyles';

import backLogo from "../../../../assets/images/arrow_back.png";
import emailLogo from "../../../../assets/images/email.png";
import lockLogo from "../../../../assets/images/lock.png";
import eyeLogo from "../../../../assets/images/eye.png";
import phoneLogo from "../../../../assets/images/smartphone.png";

const SignupScreen = () => {
    const {
        secureEntry,
        toggleSecureEntry,
        email,
        setEmail,
        password,
        setPassword,
        phone,
        setPhone,
        handleGoBack,
        handleNavigateToLogin
    } = useSignup();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
                <Image source={backLogo} style={styles.iconBackLarge} />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Comencemos</Text>
            </View>

            {/* Formulario */}
            <View style={styles.formContainer}>

                {/* Input Email */}
                <View style={styles.inputContainer}>
                    <Image source={emailLogo} style={styles.inputIcon} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Ingresa tu email"
                        placeholderTextColor={colors.secondary}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                {/* Input Contraseña */}
                <View style={styles.inputContainer}>
                    <Image source={lockLogo} style={styles.inputIcon} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Ingresa tu contraseña"
                        placeholderTextColor={colors.secondary}
                        secureTextEntry={secureEntry}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={toggleSecureEntry}>
                        <Image source={eyeLogo} style={styles.inputIcon} />
                    </TouchableOpacity>
                </View>

                {/* Input Teléfono */}
                <View style={styles.inputContainer}>
                    <Image source={phoneLogo} style={styles.inputIcon} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Ingresa tu número de teléfono"
                        placeholderTextColor={colors.secondary}
                        keyboardType="phone-pad"
                        value={phone}
                        onChangeText={setPhone}
                    />
                </View>

                {/* Botón de Registro */}
                <TouchableOpacity style={styles.loginButtonWrapper}>
                    <Text style={styles.loginText}>Registrarse</Text>
                </TouchableOpacity>

                {/* Footer / Navegación a Login */}
                <View style={styles.footerContainer}>
                    <Text style={styles.accountText}>¡Ya tengo una cuenta!</Text>
                    <TouchableOpacity onPress={handleNavigateToLogin}>
                        <Text style={styles.signupText}>Entrar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default SignupScreen;