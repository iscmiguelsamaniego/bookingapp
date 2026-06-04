import React from 'react';
import { Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDatePicker } from './useDatePicker';
import styles from './DatePickerStyles';

const DAYS_DATA = [
    { id: '1', dayName: 'Lun', dayNumber: '01' },
    { id: '2', dayName: 'Mar', dayNumber: '02' },
    { id: '3', dayName: 'Mié', dayNumber: '03' },
    { id: '4', dayName: 'Jue', dayNumber: '04' },
    { id: '5', dayName: 'Vie', dayNumber: '05' },
];

const TIME_SLOTS = {
    morning: ['09:00 AM', '10:30 AM', '11:00 AM'],
    afternoon: ['01:30 PM', '03:00 PM', '04:30 PM'],
};

const DatePickerScreen = ({ route, navigation }) => {
    const {
        selectedDate,
        setSelectedDate,
        selectedSlot,
        setSelectedSlot,
        handleContinue,
    } = useDatePicker(route, navigation);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                <Text style={styles.sectionTitle}>Selecciona el día</Text>
                <FlatList
                    horizontal
                    data={DAYS_DATA}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        const isSelected = selectedDate === item.dayNumber;
                        return (
                            <TouchableOpacity
                                style={[styles.dateCard, isSelected && styles.selectedCard]}
                                onPress={() => setSelectedDate(item.dayNumber)}
                            >
                                <Text style={[styles.dayName, isSelected && styles.selectedText]}>{item.dayName}</Text>
                                <Text style={[styles.dayNumber, isSelected && styles.selectedText]}>{item.dayNumber}</Text>
                            </TouchableOpacity>
                        );
                    }}
                />

                <Text style={styles.sectionTitle}>Horarios disponibles</Text>

                <Text style={styles.subSectionTitle}>Mañana</Text>
                <View style={styles.grid}>
                    {TIME_SLOTS.morning.map((slot) => {
                        const isSelected = selectedSlot === slot;
                        return (
                            <TouchableOpacity
                                key={slot}
                                style={[styles.slotButton, isSelected && styles.selectedCard]}
                                onPress={() => setSelectedSlot(slot)}
                            >
                                <Text style={[styles.slotText, isSelected && styles.selectedText]}>{slot}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <Text style={styles.subSectionTitle}>Tarde</Text>
                <View style={styles.grid}>
                    {TIME_SLOTS.afternoon.map((slot) => {
                        const isSelected = selectedSlot === slot;
                        return (
                            <TouchableOpacity
                                key={slot}
                                style={[styles.slotButton, isSelected && styles.selectedCard]}
                                onPress={() => setSelectedSlot(slot)}
                            >
                                <Text style={[styles.slotText, isSelected && styles.selectedText]}>{slot}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={[styles.ctaButton, (!selectedDate || !selectedSlot) && styles.ctaDisabled]}
                    disabled={!selectedDate || !selectedSlot}
                    onPress={handleContinue}
                >
                    <Text style={styles.ctaButtonText}>Continuar al Resumen</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default DatePickerScreen;