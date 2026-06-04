import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform, ToastAndroid, Alert } from 'react-native';

export const useLogin = () => {
    const navigation = useNavigation();
    const [secureEntry, setSecureEntry] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleGoBack = () => navigation.navigate('Welcome');
    const handleSignup = () => navigation.navigate('Signup');

    const toggleSecureEntry = () => setSecureEntry((prev) => !prev);

    const handleLogin = () => {
        let isValid = true;
        setEmailError('');
        setPasswordError('');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            setEmailError('Se necesita un Email');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            setEmailError('Ingresa un Email Válido');
            isValid = false;
        }

        if (!password) {
            setPasswordError('La contraseña es requerida');
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError('La contraseña debe tener al menos 6 caracteres');
            isValid = false;
        }

        if (isValid) {
            if (email === "test@correo.com" && password === "123456") {
                navigation.navigate('Home');
            } else {
                if (Platform.OS === 'android') {
                    ToastAndroid.show('Usuario o contraseña incorrectos', ToastAndroid.LONG);
                } else {
                    Alert.alert('Error', 'Usuario o contraseña incorrectos');
                }
            }
        }
    };

    // Exponemos únicamente lo que la UI necesita consumir
    return {
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
    };
};