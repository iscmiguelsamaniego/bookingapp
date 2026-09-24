import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform, ToastAndroid, Alert } from 'react-native';

export const useLogin = () => {
    const navigation = useNavigation();
    const [secureEntry, setSecureEntry] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [globalError, setGlobalError] = useState('');

    const handleGoBack = () => navigation.navigate('Welcome');
    const handleSignup = () => navigation.navigate('Signup');

    const toggleSecureEntry = () => setSecureEntry((prev) => !prev);

    const handleLogin = () => {
        navigation.navigate('Home');
        /*
        let isValid = true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim() || !emailRegex.test(email)) {
            setGlobalError('Email no válido');
            return;
        }

        if (!password || password.length < 6) {
            setGlobalError('Contraseña incorrecta');
            return;
        }

        if (email === "test@correo.com" && password === "123456") {
            navigation.navigate('Home');
        } else {
            setGlobalError('Usuario o contraseña incorrectos');
        }
        */
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        globalError,
        secureEntry,
        toggleSecureEntry,
        handleGoBack,
        handleSignup,
        handleLogin
    };
};