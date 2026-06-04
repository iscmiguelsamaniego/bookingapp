import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import HomeScreen from '../screens/home/HomeScreen/HomeScreen';
import styles from './HomeTabsStyles'; // Importamos sus estilos nativos limpios

const Tab = createBottomTabNavigator();

// Placeholders requeridos para armar y cablear el menú de 4 elementos por el momento
const CalendarPlaceholder = () => (
    <View style={styles.placeholderContainer}>
        <Text style={styles.placeholderText}>Calendario de Servicios Solicitados</Text>
    </View>
);

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
    return (
        <Tab.Navigator
            initialRouteName="HomeTab"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#0056C6', // Tu azul de acción destacado en las imágenes
                tabBarInactiveTintColor: '#AEB5BB', // El gris secundario nativo
                tabBarStyle: styles.tabBar, // Aplicamos el estilo premium flotante
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarItemStyle: styles.tabBarItem,
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <Text style={[styles.tabIcon, focused && styles.tabIconActive]}>🏠</Text>
                    )
                }}
            />
            <Tab.Screen
                name="CalendarTab"
                component={CalendarPlaceholder}
                options={{
                    tabBarLabel: 'Citas',
                    tabBarIcon: ({ focused }) => (
                        <Text style={[styles.tabIcon, focused && styles.tabIconActive]}>📅</Text>
                    )
                }}
            />
            <Tab.Screen
                name="InboxTab"
                component={InboxPlaceholder}
                options={{
                    tabBarLabel: 'Inbox',
                    tabBarIcon: ({ focused }) => (
                        <Text style={[styles.tabIcon, focused && styles.tabIconActive]}>💬</Text>
                    )
                }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfilePlaceholder}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ focused }) => (
                        <Text style={[styles.tabIcon, focused && styles.tabIconActive]}>👤</Text>
                    )
                }}
            />
        </Tab.Navigator>
    );
};