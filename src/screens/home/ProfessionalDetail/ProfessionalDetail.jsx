import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './ProfessionalDetailStyles.jsx'; // Tu estándar local

const ProfessionalDetailScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { professional } = route.params || {};

    if (!professional) return null;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image source={{ uri: professional.avatarUrl }} style={styles.coverImage} />

                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>✕</Text>
                </TouchableOpacity>

                <View style={styles.infoWrapper}>
                    <Text style={styles.name}>{professional.name}</Text>
                    <Text style={styles.categoryBadge}>{professional.category.toUpperCase()}</Text>
                    <Text style={styles.rating}>⭐ {professional.rating.toFixed(1)} (Verified Expert)</Text>

                    <Text style={styles.sectionTitle}>About {professional.name}</Text>
                    <Text style={styles.description}>{professional.description}</Text>

                    <Text style={styles.sectionTitle}>Políticas del Servicio</Text>
                    <Text style={styles.policyText}>• Cancelación sin costo avisando 24 horas antes.</Text>
                    <Text style={styles.policyText}>• El costo incluye mano de obra de diagnóstico inicial.</Text>
                </View>
            </ScrollView>

            {/* Botón inferior "Booking Service" que gatilla la pantalla del Calendario */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.bookingButton}
                    onPress={() => navigation.navigate('DatePicker', { professionalId: professional.id, serviceId: professional.category })}
                >
                    <Text style={styles.bookingButtonText}>Booking Service</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ProfessionalDetailScreen;