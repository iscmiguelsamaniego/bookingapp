import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/BaseStyles';

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FAFAFA' },
    scrollContent: { padding: 20, paddingBottom: 100 },
    sectionTitle: { fontSize: 18, color: colors.primary, marginVertical: 16, fontFamily: fonts.Bold },
    subSectionTitle: { fontSize: 14, color: colors.secondary, marginBottom: 10, fontFamily: fonts.SemiBold },
    dateCard: { width: 60, height: 74, backgroundColor: colors.white, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginRight: 12, borderWidth: 1, borderColor: '#ECEFF1' },
    selectedCard: { backgroundColor: colors.blue, borderColor: colors.blue },
    dayName: { fontSize: 12, color: colors.secondary, fontFamily: fonts.Regular },
    dayNumber: { fontSize: 18, color: colors.primary, marginTop: 4, fontFamily: fonts.Bold },
    selectedText: { color: colors.white },
    grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20 },
    slotButton: { paddingVertical: 12, paddingHorizontal: 16, backgroundColor: colors.white, borderRadius: 8, borderWidth: 1, borderColor: '#ECEFF1', minWidth: '29%' },
    slotText: { textAlign: 'center', fontSize: 14, color: colors.primary, fontFamily: fonts.Medium },
    footer: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, backgroundColor: colors.white, borderTopWidth: 1, borderTopColor: '#ECEFF1' },
    ctaButton: { backgroundColor: colors.blue, paddingVertical: 16, borderRadius: 12, alignItems: 'center' },
    ctaDisabled: { backgroundColor: colors.secondary },
    ctaButtonText: { color: colors.white, fontSize: 16, fontFamily: fonts.Bold },
});

export default styles;