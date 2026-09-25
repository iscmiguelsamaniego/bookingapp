import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './ProfessionalDetailStyles';
import { colors } from '../../styles/BaseStyles';

const ProfessionalDetail = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const { professional } = route.params || {};

    if (!professional) return null;

    const [selectedTasks, setSelectedTasks] = useState({
        0: true,
        1: false,
        2: false,
        3: false,
    });

    const serviceTasks = [
        { id: 0, title: 'Limpieza profunda y desinfección de cocina', price: 45 },
        { id: 1, title: 'Aspirado y ordenamiento de sala', price: 35 },
        { id: 2, title: 'Mantenimiento de áreas comunes', price: 30 },
        { id: 3, title: 'Revisión y diagnóstico inicial', price: 30 },
    ];

    const toggleTask = (index) => {
        setSelectedTasks((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const calculateTotal = () => {
        let total = 0;
        serviceTasks.forEach((task, index) => {
            if (selectedTasks[index]) {
                total += task.price;
            }
        });
        return total > 0 ? `$${total}.00` : '$0.00';
    };

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.scrollContainer, { paddingBottom: 150 + insets.bottom }]}
            >
                {/* Imagen de Portada con Cristal Humeado Sólido */}
                <View style={styles.coverContainer}>
                    <Image source={{ uri: professional.avatarUrl }} style={styles.coverImage} />

                    <View style={styles.imageOverlay}>

                        <View style={styles.floatingHeaderContent}>
                            <Text style={styles.floatingTitle} numberOfLines={1}>
                                {professional.category.toUpperCase()}
                            </Text>

                            <View style={styles.floatingMetaRow}>
                                <View style={styles.metaItemInline}>
                                    <Ionicons name="location-outline" size={14} color={colors.white} style={{ marginRight: 4 }} />
                                    <Text style={styles.floatingMetaText} numberOfLines={1}>Miguel Hidalgo, CDMX</Text>
                                </View>
                                <View style={styles.metaItemInline}>
                                    <Ionicons name="star" size={14} color={colors.orange} style={{ marginRight: 4 }} />
                                    <Text style={styles.floatingRatingText}>{professional.rating.toFixed(1)}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={20} color={colors.white} />
                    </TouchableOpacity>
                </View>

                {/* Información del Cuerpo */}
                <View style={styles.infoWrapper}>
                    <View style={styles.providerCardEnhanced}>
                        <Image source={{ uri: professional.avatarUrl }} style={styles.providerAvatarEnhanced} />
                        <View style={styles.providerInfoEnhanced}>
                            <Text style={styles.providerNameEnhanced}>{professional.name}</Text>
                            <View style={styles.verifiedRow}>
                                <Ionicons name="checkmark-circle" size={13} color={colors.blue} style={{ marginRight: 4 }} />
                                <Text style={styles.providerRoleEnhanced}>Experto certificado</Text>
                            </View>
                        </View>
                        <View style={styles.providerActionsEnhanced}>
                            <TouchableOpacity
                                style={styles.actionIconBoxEnhanced}
                                onPress={() => navigation.navigate('Chats')}
                            >
                                <Ionicons name="chatbubble-ellipses-outline" size={18} color={colors.blue} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.actionIconBoxEnhanced}
                                onPress={() => navigation.navigate('CallScreen', { contact: professional })}
                            >
                                <Ionicons name="call-outline" size={18} color={colors.success || '#34C759'} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={styles.sectionTitle}>Selecciona los Servicios</Text>
                    <View style={styles.checklistContainer}>
                        {serviceTasks.map((task, index) => {
                            const isChecked = !!selectedTasks[index];
                            return (
                                <TouchableOpacity
                                    key={index}
                                    activeOpacity={0.8}
                                    style={[styles.checkRowInteractive, isChecked && styles.checkRowActive]}
                                    onPress={() => toggleTask(index)}
                                >
                                    <Ionicons
                                        name={isChecked ? "checkbox" : "square-outline"}
                                        size={22}
                                        color={isChecked ? colors.blue : colors.secondary}
                                        style={{ marginRight: 10 }}
                                    />
                                    <Text style={[styles.checkTextDynamic, isChecked && styles.checkTextActive]}>
                                        {task.title}
                                    </Text>
                                    <Text style={styles.taskPriceText}>${task.price}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    <Text style={styles.sectionTitle}>Acerca del Servicio</Text>
                    <Text style={styles.description}>{professional.description}</Text>

                    <Text style={styles.sectionTitle}>Políticas del Servicio</Text>
                    <Text style={styles.policyText}>• Cancelación sin costo avisando 24 horas antes.</Text>
                    <Text style={styles.policyText}>• El costo incluye mano de obra de diagnóstico inicial.</Text>
                </View>
            </ScrollView>

            <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom + 16, 24) }]}>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceLabel}>Total Service</Text>
                    <Text style={styles.priceValue}>{calculateTotal()}</Text>
                </View>
                <TouchableOpacity
                    style={styles.bookingButton}
                    onPress={() => navigation.navigate('DatePicker', { professionalId: professional.id, serviceId: professional.category })}
                >
                    <Text style={styles.bookingButtonText}>Reserva ahora</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ProfessionalDetail;