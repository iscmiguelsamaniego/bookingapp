import React from 'react';
import {
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLogin } from './useLogin';
import { styles } from './LoginStyles';
import { colors } from '../../styles/BaseStyles';

import background from "../../../assets/images/background.png";
import backLogo from "../../../assets/images/arrow_back.png";
import emailLogo from "../../../assets/images/email.png";
import lockLogo from "../../../assets/images/lock.png";
import eyeLogo from "../../../assets/images/eye.png";

const LoginScreen = () => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        passwordError,
        secureEntry,
        toggleSecureEntry,
        handleGoBack,
        handleSignup,
        handleLogin
    } = useLogin();

    return (
        <ImageBackground source={background} style={styles.containerBackgroundImg}>
           <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>

                <TouchableOpacity style={styles.iconWrapper} onPress={handleGoBack}>
                    <Image source={backLogo} style={styles.iconBack} />
                </TouchableOpacity>

                <View style={styles.textContainer}>
                    <Text style={styles.headingText}>Hey,</Text>
                    <Text style={styles.headingText}>Hola de nuevo</Text>
                </View>

                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Image source={emailLogo} style={styles.iconWhite} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Ingresa tu email"
                            placeholderTextColor={colors.white}
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                        />
                    </View>
                    {emailError ? (
                        <View style={styles.errorContainer}>
                            <Text style={styles.errorText}>{emailError}</Text>
                        </View>
                    ) : null}

                    <View style={styles.inputContainer}>
                        <Image source={lockLogo} style={styles.iconWhite} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Ingresa tu contraseña"
                            placeholderTextColor={colors.white}
                            secureTextEntry={secureEntry}
                            value={password}
                            onChangeText={setPassword}
                            autoCapitalize="none"
                        />
                        <TouchableOpacity onPress={toggleSecureEntry}>
                            <Image source={eyeLogo} style={styles.iconWhite} />
                        </TouchableOpacity>
                    </View>
                    {passwordError ? (
                        <View style={styles.errorContainer}>
                            <Text style={styles.errorText}>{passwordError}</Text>
                        </View>
                    ) : null}
                </View>

                <TouchableOpacity>
                    <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogin} style={styles.primaryButton}>
                    <Text style={styles.buttonText}>E n t r a r</Text>
                </TouchableOpacity>

                <View style={styles.footerContainer}>
                    <Text style={styles.bodyText}>¿No tienes cuenta?</Text>
                    <TouchableOpacity onPress={handleSignup}>
                        <Text style={styles.linkText}>Registrate</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default LoginScreen;