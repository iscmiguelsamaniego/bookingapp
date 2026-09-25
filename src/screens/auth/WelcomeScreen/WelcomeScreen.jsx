import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWelcome } from "./useWelcome";
import styles from "../WelcomeScreen/WelcomeStyles";

// Recursos multimedia
import logo from "../../../../assets/images/logo.png";
import manLogo from "../../../../assets/images/man.png";
import googleLogo from "../../../../assets/images/google.png";

const WelcomeScreen = () => {
    const {
        handleLogin,
        handleSignup
    } = useWelcome();

    return (
        <SafeAreaView style={styles.container}>
            {/* Logo de la aplicación */}
            <Image source={logo} style={styles.logo} />

            {/* Banner ilustrativo */}
            <Image source={manLogo} style={styles.bannerImage} />

            {/* Encabezado e identidad de la marca */}
            <Text style={styles.title}>Manos Pro.</Text>
            <Text style={styles.subTitle}>
                Mantenimiento y Servicios, {"\n"}
                confianza, ahorro y calidad {"\n"}
                nosotros vamos.
            </Text>

            {/* Acciones principales (Entrar / Registrarse) */}
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

            {/* Separador */}
            <Text style={styles.continueText}>ó</Text>

            {/* Acceso social (Google) */}
            <TouchableOpacity style={styles.googleButtonContainer}>
                <Image
                    source={googleLogo}
                    style={styles.googleImage}
                />
                <Text style={styles.googleText}>Continuar con Google</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default WelcomeScreen;