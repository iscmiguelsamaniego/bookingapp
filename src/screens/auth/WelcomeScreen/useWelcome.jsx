import { useNavigation } from '@react-navigation/native';

export const useWelcome = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate("Login");
    };

    const handleSignup = () => {
        navigation.navigate("Signup");
    };

    return {
        handleSignup,
        handleLogin
    };
}