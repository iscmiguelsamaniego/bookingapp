import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from '../screens/home/HomeScreen/HomeScreen';
import CalendarScreen from '../screens/home/CalendarScreen/CalendarScreen';
import styles from './HomeTabsStyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const InboxPlaceholder = () => (
    <View style={styles.placeholderContainer}>
        <Text style={styles.placeholderText}>Inbox / Bandeja de Mensajes</Text>
    </View>
);

const ProfilePlaceholder = () => (
    <View style={styles.placeholderContainer}>
        <Text style={styles.placeholderText}>Perfil de Usuario</Text>
    </View>
);

export const HomeTabs = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            initialRouteName="HomeTab"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#1E90FF', // Coherente con el azul moderno de tu pantalla principal
                tabBarInactiveTintColor: '#AEB5BB',
                tabBarStyle: [
                    styles.tabBar,
                    { height: 64 + insets.bottom, paddingBottom: insets.bottom > 0 ? insets.bottom : 10 }
                ],
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarItemStyle: styles.tabBarItem,
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={22}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="CalendarTab"
                component={CalendarScreen}
                options={{
                    tabBarLabel: 'Citas',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'calendar' : 'calendar-outline'}
                            size={22}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="ChatTab"
                component={InboxPlaceholder}
                options={{
                    tabBarLabel: 'Mensajes',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'chatbubbles' : 'chatbubbles-outline'}
                            size={22}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfilePlaceholder}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            size={22}
                            color={color}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};