import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TAB_CONFIG } from './Home.constants';
import styles from './HomeTabsStyles';
import { colors } from '../screens/styles/BaseStyles';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            initialRouteName="HomeTab"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.blue,
                tabBarInactiveTintColor: colors.secondary,
                tabBarStyle: [
                    styles.tabBar,
                    {
                        height: styles.metrics.tabBarHeight + insets.bottom,
                        paddingBottom: insets.bottom > 0 ? insets.bottom : 10
                    }
                ],
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarItemStyle: styles.tabBarItem,
            }}
        >
            {TAB_CONFIG.map(({ name, component, label, activeIcon, inactiveIcon }) => (
                <Tab.Screen
                    key={name}
                    name={name}
                    component={component}
                    options={{
                        tabBarLabel: label,
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons
                                name={focused ? activeIcon : inactiveIcon}
                                size={styles.metrics.iconSize}
                                color={color}
                            />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default HomeTabs;