import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export const useSignup = () => {
    const navigation = useNavigation();
    const [secureEntry, setSecureEntry] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toggleSecureEntry = () => setSecureEntry((prev) => !prev);

    const handleGoBack = () => {
        navigation.navigate("Welcome");
    };

    const handleLogin = () => {
        navigation.navigate("Login");
    };

    return {
        secureEntry,
        toggleSecureEntry,
        email,
        password,
        handleGoBack,
        handleLogin
    };
}