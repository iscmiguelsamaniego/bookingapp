import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { CHAT_TABS, CHATS_DATA } from './Chats.constants';
import styles from './ChatsStyles';
import { colors } from '../../styles/BaseStyles';

const Chats = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('All');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.headerTitle}>Chats</Text>
                <View style={styles.headerActions}>
                    <TouchableOpacity style={styles.actionIcon}>
                        <Ionicons name="search-outline" size={22} color={colors.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionIcon}>
                        <Ionicons name="add" size={24} color={colors.blue} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.tabsRow}>
                {CHAT_TABS.map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setActiveTab(tab)}
                        style={[styles.tabButton, activeTab === tab && styles.tabButtonActive]}
                    >
                        <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <FlatList
                data={CHATS_DATA}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.chatItem}
                        onPress={() => navigation.navigate('CallScreen', { contact: item })}
                    >
                        <Image source={{ uri: item.avatar }} style={styles.avatar} />

                        <View style={styles.chatInfo}>
                            <View style={styles.chatTopRow}>
                                <Text style={styles.chatName}>{item.name}</Text>
                                <Text style={styles.chatTime}>{item.time}</Text>
                            </View>

                            <View style={styles.chatBottomRow}>
                                {item.isMissedCall ? (
                                    <View style={styles.missedCallWrapper}>
                                        <Ionicons name="call" size={13} color={colors.error} />
                                        <Text style={styles.missedCallText}>Missed call</Text>
                                    </View>
                                ) : (
                                    <Text style={styles.chatMessage} numberOfLines={1}>
                                        {item.message}
                                    </Text>
                                )}
                                <Ionicons name="checkmark-done" size={16} color={colors.tertiary} />
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
};

export default Chats;