import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from './ProfileStyles';
import { colors } from '../../styles/BaseStyles';

const Profile = ({ navigation }) => {
    const [pushNotifications, setPushNotifications] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>

                {/* Cabecera del Perfil (Avatar y Datos de Usuario) */}
                <View style={styles.profileHeader}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200' }}
                        style={styles.avatar}
                    />
                    <Text style={styles.profileName}>Antonio Ramirez</Text>
                    <Text style={styles.profileEmail}>antonio.ramirez@icloud.com</Text>

                    <TouchableOpacity style={styles.editButton} onPress={() => console.log('Editar perfil')}>
                        <Text style={styles.editButtonText}>Edit profile</Text>
                    </TouchableOpacity>
                </View>

                {/* Sección: Mi Actividad / Gestión de Servicios */}
                <Text style={styles.sectionLabel}>Mi Actividad</Text>
                <View style={styles.cardGroup}>
                    {/* Direcciones guardadas */}
                    <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Mis direcciones')}>
                        <View style={styles.menuLeft}>
                            <View style={styles.iconBox}>
                                <Ionicons name="location-outline" size={20} color={colors.textDark} />
                            </View>
                            <Text style={styles.menuText}>Mis direcciones</Text>
                        </View>
                        <View style={styles.menuRight}>
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>2</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={18} color={colors.secondary} style={{ marginLeft: 8 }} />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.separator} />

                    {/* Métodos de Pago */}
                    <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Métodos de pago')}>
                        <View style={styles.menuLeft}>
                            <View style={styles.iconBox}>
                                <Ionicons name="card-outline" size={20} color={colors.textDark} />
                            </View>
                            <Text style={styles.menuText}>Métodos de pago</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color={colors.secondary} />
                    </TouchableOpacity>

                    <View style={styles.separator} />

                    {/* Centro de ayuda / Soporte */}
                    <TouchableOpacity style={styles.menuItem} onPress={() => console.log('Support')}>
                        <View style={styles.menuLeft}>
                            <View style={styles.iconBox}>
                                <Ionicons name="headset-outline" size={20} color={colors.textDark} />
                            </View>
                            <Text style={styles.menuText}>Centro de ayuda</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color={colors.secondary} />
                    </TouchableOpacity>
                </View>

                {/* Sección: Preferencias / Ajustes y Seguridad */}
                <Text style={styles.sectionLabel}>Preferencias</Text>
                <View style={styles.cardGroup}>
                    {/* Notificaciones Push */}
                    <View style={styles.menuItem}>
                        <View style={styles.menuLeft}>
                            <View style={styles.iconBox}>
                                <Ionicons name="notifications-outline" size={20} color={colors.textDark} />
                            </View>
                            <Text style={styles.menuText}>Notificaciones push</Text>
                        </View>
                        <Switch
                            value={pushNotifications}
                            onValueChange={setPushNotifications}
                            trackColor={{ false: colors.gray, true: colors.green }}
                            thumbColor={colors.white}
                        />
                    </View>

                    <View style={styles.separator} />

                    {/* PIN Code */}
                    <TouchableOpacity style={styles.menuItem} onPress={() => console.log('PIN Code')}>
                        <View style={styles.menuLeft}>
                            <View style={styles.iconBox}>
                                <Ionicons name="keypad-outline" size={20} color={colors.textDark} />
                            </View>
                            <Text style={styles.menuText}>Código PIN</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={18} color={colors.secondary} />
                    </TouchableOpacity>

                    <View style={styles.separator} />

                    {/* Logout */}
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => navigation.replace('Login')}
                    >
                        <View style={styles.menuLeft}>
                            <View style={[styles.iconBox, styles.logoutIconBox]}>
                                <Ionicons name="log-out-outline" size={20} color={colors.white} />
                            </View>
                            <Text style={styles.logoutText}>Cerrar sesión</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;