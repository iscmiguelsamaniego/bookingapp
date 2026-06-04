import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export const useSignup = () => {
    const navigation = useNavigation();
    const [secureEntery, setSecureEntery] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoBack = () => {
        navigation.navigate("Welcome");
    };

    const handleLogin = () => {
        navigation.navigate("Login");
    };

    return {
        secureEntery,
        email,
        password,
        handleGoBack,
        handleLogin
    };
}