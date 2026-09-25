import { Dimensions } from 'react-native';

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width,
};

export const colors = {
    // Identidad y Primarios
    primary: '#45484A',
    secondary: '#AEB5BB',
    tertiary: '#5DA6A7',
    white: '#FFFFFF',
    gray: '#D9D9D9',
    blue: '#1E90FF',
    ligthblue: '#03A9F4',
    orange: '#FFA500',
    green: '#19d422',
    // Colores para tarjetas y eventos de calendario
    greenLight: '#E8F5E9',
    greenDark: '#2E7D32',
    orangeLight: '#FFE0B2',
    orangeDark: '#E65100',
    purpleLight: '#E1BEE7',
    purpleDark: '#4A148C',

    // Tonos oscuros / UI de llamadas y fondos profundos
    darkBackground: '#1C1C1E',
    darkSurface: '#3A3A3C',

    // UI Neutros, Superficies y Contenedores
    backgroundLight: '#F8F9FA',
    screenBackground: '#FAFAFA', // ◄ Fondo general limpio
    borderLight: '#EAEAEA',
    cardBorder: '#ECEFF1',     // ◄ Borde suave para tarjetas y separadores
    textMuted: '#6B7280',
    textDark: '#1A1C1E',

    // Alertas, Errores, Overlays y Sombras
    error: '#FF4D4D',
    errorDark: '#D32F2F',
    overlay: 'rgba(0, 0, 0, 0.5)',
    errorBg: 'rgba(0, 0, 0, 0.6)',
    overlayBg: 'rgba(0, 0, 0, 0.4)',
    inputBg: 'rgba(255, 255, 255, 0.30)',
    shadow: '#000000',
};

export const fonts = {
    Bold: 'Poppins-Bold',
    Light: 'Poppins-Light',
    Medium: 'Poppins-Medium',
    Regular: 'Poppins-Regular',
    SemiBold: 'Poppins-SemiBold',
};