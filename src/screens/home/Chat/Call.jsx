import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import styles from './CallScreenStyle';
import { colors } from '../../styles/BaseStyles';

const CallScreen = ({ route, navigation }) => {

    const { contact } = route.params || {};

    if (!contact) {
        return null;
    }

    return (
        <SafeAreaView style={styles.callContainer}>
            <View style={styles.reactionsRow}>
                <TouchableOpacity style={styles.optionsButton}>
                    <Ionicons name="ellipsis-horizontal" size={20} color={colors.white} />
                </TouchableOpacity>
            </View>

            <View style={styles.callerCenterContent}>
                <View style={styles.callerImageWrapper}>
                    <Image source={{ uri: contact.avatar }} style={styles.callerAvatar} />
                    <View style={styles.speakerBadge}>
                        <Ionicons name="volume-high" size={12} color={colors.white} />
                    </View>
                </View>
                <Text style={styles.callerName}>{contact.name}</Text>
                <Text style={styles.callDuration}>00:34</Text>
            </View>

            <View style={styles.controlsGrid}>
                <View style={styles.controlRow}>
                    <TouchableOpacity style={styles.controlButton}>
                        <Ionicons name="mic-off" size={22} color={colors.white} />
                        <Text style={styles.controlLabel}>Silencio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.controlButton}>
                        <Ionicons name="chatbubble-outline" size={22} color={colors.white} />
                        <Text style={styles.controlLabel}>Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.controlButton}>
                        <Ionicons name="volume-high-outline" size={22} color={colors.white} />
                        <Text style={styles.controlLabel}>Speaker</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.controlRow}>
                    <TouchableOpacity
                        style={styles.endCallButton}
                        onPress={() => navigation.goBack()}>
                        <Ionicons name="call" size={24} color={colors.white} />
                        <Text style={styles.controlLabel}>End</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.collapseBar} onPress={() => navigation.goBack()}>
                <Text style={styles.collapseText}>Cerrar</Text>
                <Ionicons name="chevron-down" size={18} color={colors.white} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default CallScreen;