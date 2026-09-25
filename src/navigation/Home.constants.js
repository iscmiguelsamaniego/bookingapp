import Home from '../screens/home/Home/Home';
import Calendar from '../screens/home/Calendar/Calendar';
import Chats from '../screens/home/Chat/Chats';
import Profile from '../screens/home/Profile/Profile';

export const TAB_CONFIG = [
    {
        name: 'HomeTab',
        component: Home,
        label: 'Home',
        activeIcon: 'home',
        inactiveIcon: 'home-outline',
    },
    {
        name: 'CalendarTab',
        component: Calendar,
        label: 'Citas',
        activeIcon: 'calendar',
        inactiveIcon: 'calendar-outline',
    },
    {
        name: 'ChatTab',
        component: Chats,
        label: 'Mensajes',
        activeIcon: 'chatbubbles',
        inactiveIcon: 'chatbubbles-outline',
    },
    {
        name: 'ProfileTab',
        component: Profile,
        label: 'Perfil',
        activeIcon: 'person',
        inactiveIcon: 'person-outline',
    },
];