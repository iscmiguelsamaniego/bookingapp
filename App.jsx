import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/auth/WelcomeScreen/WelcomeScreen';
import LoginScreen from './src/screens/auth/LoginScreen/LoginScreen';
import SignupScreen from './src/screens/auth/SignupScreen/SignupScreen';
import DatePicker from './src/screens/booking/DatePicker/DatePicker';

import { HomeTabs } from './src/navigation/HomeTabs';
import ProfessionalDetailScreen from './src/screens/home/ProfessionalDetail/ProfessionalDetail';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Signup"
                    component={SignupScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ProfessionalDetail"
                    component={ProfessionalDetailScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DatePicker"
                    component={DatePicker}
                    options={{
                        title: 'Book Service',
                        presentation: 'modal'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;