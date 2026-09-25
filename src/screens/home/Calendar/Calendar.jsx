import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { WEEK_DAYS, HOURS, INITIAL_EVENTS } from './Calendar.constants';
import styles from './CalendarStyle';
import { colors } from '../../styles/BaseStyles';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState('23');

    const getEventColors = (type) => {
        switch (type) {
            case 'masonry':
                return { bg: colors.greenLight, text: colors.greenDark };
            case 'plumbing':
                return { bg: colors.orangeLight, text: colors.orangeDark };
            case 'carpentry':
                return { bg: colors.purpleLight, text: colors.purpleDark };
            default:
                return { bg: colors.gray, text: colors.primary };
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, position: 'relative' }}>

                <View style={styles.headerRow}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity>
                            <Ionicons name="menu-outline" size={24} color={colors.primary} />
                        </TouchableOpacity>
                        <Text style={styles.monthTitle}>September</Text>
                        <Ionicons name="chevron-down" size={16} color={colors.primary} style={{ marginLeft: 4 }} />
                    </View>
                    <View style={styles.headerRight}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons name="search-outline" size={20} color={colors.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons name="calendar-outline" size={20} color={colors.primary} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.weekContainer}>
                    {WEEK_DAYS.map((item, index) => {
                        const isSelected = item.date === selectedDate;
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.dayColumn}
                                onPress={() => setSelectedDate(item.date)}
                            >
                                <Text style={styles.dayText}>{item.day}</Text>
                                <View style={[styles.dateBadge, isSelected && styles.dateBadgeSelected]}>
                                    <Text style={[styles.dateText, isSelected && styles.dateTextSelected]}>
                                        {item.date}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.gridScroll}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View>
                            {HOURS.map((hour, hourIndex) => (
                                <View key={hourIndex} style={styles.hourRow}>
                                    <Text style={styles.hourText}>{hour}</Text>

                                    <View style={styles.daysColumnsContainer}>
                                        {WEEK_DAYS.map((item, dayIdx) => {
                                            const event = INITIAL_EVENTS.find(
                                                (e) => e.dayIndex === item.index && e.startHour === hour
                                            );

                                            return (
                                                <View key={dayIdx} style={[styles.gridCell, { width: 90 }]}>
                                                    {event ? (
                                                        (() => {
                                                            const theme = getEventColors(event.type); // ◄ Usamos event.type aquí
                                                            return (
                                                                <View style={[styles.eventCard, { backgroundColor: theme.bg }]}>
                                                                    <Text style={[styles.eventText, { color: theme.text }]} numberOfLines={3}>
                                                                        {event.title}
                                                                    </Text>
                                                                </View>
                                                            );
                                                        })()
                                                    ) : (
                                                        <View style={styles.emptyCellBox} />
                                                    )}
                                                </View>
                                            );
                                        })}
                                    </View>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </ScrollView>

                <TouchableOpacity style={styles.fabButton} onPress={() => console.log('Nueva cita')}>
                    <Ionicons name="add" size={26} color={colors.white} />
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};

export default Calendar;