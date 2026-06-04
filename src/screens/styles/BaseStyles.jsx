import { Dimensions } from 'react-native';

// 1. Configuración de Dimensiones de Pantalla Nativa
export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width,
};

// 2. Paleta de Colores Centralizada
export const colors = {
    primary: '#45484A',
    secondary: '#AEB5BB',
    tertiary: '#5DA6A7',
    white: '#FFFFFF',
    gray: '#D9D9D9',
    blue: '#1E90FF',
    ligthblue: '#03A9F4',
    orange: '#FFA500',
};

// 3. Mapeo del Sistema de Fuentes (Cargadas con react-native-asset)
export const fonts = {
    Bold: 'Poppins-Bold',
    Light: 'Poppins-Light',
    Medium: 'Poppins-Medium',
    Regular: 'Poppins-Regular',
    SemiBold: 'Poppins-SemiBold',
};