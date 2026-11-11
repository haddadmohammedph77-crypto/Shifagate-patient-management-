import React, { useMemo, useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const copy = {
  en: {
    brand: "Shifagate",
    tagline: "Your healthcare journey in India, made easier",
    welcome: "Welcome to Shifagate",
    intro: "Trusted support for your medical journey in India.",
    treatment: "Request treatment",
    treatmentSub: "Find care and connect with hospitals",
    appointments: "Appointments",
    appointmentsSub: "Keep your visits organized",
    visa: "Medical visa support",
    visaSub: "Guidance with your document checklist",
    travel: "Travel & accommodation",
    travelSub: "Airport pickup, stay and local support",
    track: "Track your request",
    trackSub: "Follow your case with our team",
    services: "How can we help you?",
    help: "Need personal assistance?",
    contact: "Contact our support team",
    note: "This is an early preview. Service requests will be connected in the next development step.",
    home: "Home",
    requests: "My requests",
    profile: "Profile",
    soon: "Coming in the next step",
  },
  ar: {
    brand: "Shifagate",
    tagline: "رحلتك العلاجية في الهند أصبحت أسهل",
    welcome: "مرحباً بك في Shifagate",
    intro: "نرافقك ونساعدك في رحلتك العلاجية في الهند بكل ثقة.",
    treatment: "طلب علاج",
    treatmentSub: "اكتشف خيارات العلاج وتواصل مع المستشفيات",
    appointments: "المواعيد الطبية",
    appointmentsSub: "نظّم مواعيدك وزياراتك الطبية",
    visa: "المساعدة في التأشيرة الطبية",
    visaSub: "إرشادات وتجهيز قائمة الوثائق المطلوبة",
    travel: "السفر والإقامة",
    travelSub: "استقبال المطار والسكن والتنقل",
    track: "متابعة الطلب",
    trackSub: "تابع حالة ملفك مع فريقنا",
    services: "كيف يمكننا مساعدتك؟",
    help: "هل تحتاج إلى مساعدة شخصية؟",
    contact: "تواصل مع فريق الدعم",
    note: "هذه نسخة تجريبية أولية. سنربط طلبات الخدمات في الخطوة التطويرية القادمة.",
    home: "الرئيسية",
    requests: "طلباتي",
    profile: "حسابي",
    soon: "ستتوفر في الخطوة القادمة",
  },
};

const serviceItems = [
  { key: "treatment", icon: "✚", color: "#EAF3FF" },
  { key: "appointments", icon: "▦", color: "#EAF7F5" },
  { key: "visa", icon: "▤", color: "#F0EEFF" },
  { key: "travel", icon: "✈", color: "#FFF4E8" },
  { key: "track", icon: "⌁", color: "#EAF3FF" },
];

export default function App() {
  const [language, setLanguage] = useState("ar");
  const [activeTab, setActiveTab] = useState("home");
  const t = useMemo(() => copy[language], [language]);
  const isArabic = language === "ar";

  const showComingSoon = () => Alert.alert(t.soon, t.note);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7FAFE" />
      <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.brandRow}>
            <View style={styles.logoMark}><Text style={styles.logoCross}>✚</Text></View>
            <View>
              <Text style={styles.brand}>{t.brand}</Text>
              <Text style={styles.brandCaption}>PATIENT SERVICES</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.languageButton} onPress={() => setLanguage(isArabic ? "en" : "ar")}>
            <Text style={styles.languageText}>{isArabic ? "English" : "العربية"}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.hero}>
          <View style={styles.heroText}>
            <Text style={[styles.eyebrow, isArabic && styles.rtl]}>CARE • SUPPORT • TRUST</Text>
            <Text style={[styles.heroTitle, isArabic && styles.rtl]}>{t.welcome}</Text>
            <Text style={[styles.heroDescription, isArabic && styles.rtl]}>{t.intro}</Text>
            <TouchableOpacity style={styles.primaryButton} onPress={showComingSoon}>
              <Text style={styles.primaryButtonText}>{t.treatment}</Text>
              <Text style={styles.buttonArrow}>{isArabic ? "←" : "→"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.heroIllustration}>
            <View style={styles.circleOuter}>
              <View style={styles.circleInner}>
                <Text style={styles.medicalIcon}>✚</Text>
              </View>
            </View>
            <View style={styles.heroDot} />
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, isArabic && styles.rtl]}>{t.services}</Text>
          <Text style={styles.sectionAccent}> </Text>
        </View>

        {serviceItems.map((item) => (
          <TouchableOpacity key={item.key} style={styles.serviceCard} onPress={showComingSoon} activeOpacity={0.82}>
            <View style={[styles.serviceIcon, { backgroundColor: item.color }]}>
              <Text style={styles.serviceIconText}>{item.icon}</Text>
            </View>
            <View style={[styles.serviceCopy, isArabic && styles.serviceCopyRtl]}>
              <Text style={[styles.serviceTitle, isArabic && styles.rtl]}>{t[item.key]}</Text>
              <Text style={[styles.serviceDescription, isArabic && styles.rtl]}>{t[item.key + "Sub"]}</Text>
            </View>
            <Text style={styles.cardArrow}>{isArabic ? "‹" : "›"}</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.supportCard}>
          <View style={styles.supportIcon}><Text style={styles.supportIconText}>♡</Text></View>
          <Text style={[styles.supportTitle, isArabic && styles.rtl]}>{t.help}</Text>
          <Text style={[styles.supportDescription, isArabic && styles.rtl]}>{t.intro}</Text>
          <TouchableOpacity style={styles.outlineButton} onPress={showComingSoon}>
            <Text style={styles.outlineButtonText}>{t.contact}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.disclaimer}>{t.note}</Text>
      </ScrollView>

      <View style={styles.bottomNav}>
        {[
          { key: "home", icon: "⌂", label: t.home },
          { key: "requests", icon: "▤", label: t.requests },
          { key: "profile", icon: "○", label: t.profile },
        ].map((tab) => (
          <TouchableOpacity key={tab.key} style={styles.navItem} onPress={() => {
            setActiveTab(tab.key);
            if (tab.key !== "home") showComingSoon();
          }}>
            <Text style={[styles.navIcon, activeTab === tab.key && styles.navActive]}>{tab.icon}</Text>
            <Text style={[styles.navLabel, activeTab === tab.key && styles.navActive]}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F7FAFE" },
  page: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 28 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 22 },
  brandRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  logoMark: { width: 42, height: 42, borderRadius: 13, backgroundColor: "#1266C5", alignItems: "center", justifyContent: "center" },
  logoCross: { color: "#FFFFFF", fontSize: 23, fontWeight: "800" },
  brand: { color: "#123B68", fontSize: 21, fontWeight: "800", letterSpacing: 0.2 },
  brandCaption: { color: "#7790AA", fontSize: 8, fontWeight: "700", letterSpacing: 1.3, marginTop: 1 },
  languageButton: { backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#DCE8F4", borderRadius: 20, paddingHorizontal: 14, paddingVertical: 9 },
  languageText: { color: "#1767B7", fontWeight: "700", fontSize: 12 },
  hero: { backgroundColor: "#EAF3FF", borderRadius: 24, padding: 20, minHeight: 214, flexDirection: "row", alignItems: "center", overflow: "hidden", marginBottom: 26 },
  heroText: { flex: 1, zIndex: 2 },
  eyebrow: { color: "#397FC3", fontSize: 8, fontWeight: "800", letterSpacing: 1.1, marginBottom: 9 },
  heroTitle: { color: "#123B68", fontSize: 22, lineHeight: 29, fontWeight: "800", marginBottom: 7 },
  heroDescription: { color: "#55718E", fontSize: 12, lineHeight: 19, marginBottom: 15 },
  rtl: { textAlign: "right", writingDirection: "rtl" },
  primaryButton: { alignSelf: "flex-start", flexDirection: "row", alignItems: "center", backgroundColor: "#1266C5", paddingVertical: 11, paddingHorizontal: 15, borderRadius: 12, gap: 10 },
  primaryButtonText: { color: "#FFFFFF", fontSize: 11, fontWeight: "800" },
  buttonArrow: { color: "#FFFFFF", fontSize: 15, fontWeight: "700" },
  heroIllustration: { width: 90, height: 130, alignItems: "center", justifyContent: "center", marginLeft: 4 },
  circleOuter: { width: 86, height: 86, borderRadius: 43, backgroundColor: "#D3E6FC", alignItems: "center", justifyContent: "center" },
  circleInner: { width: 60, height: 60, borderRadius: 30, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center", elevation: 3 },
  medicalIcon: { color: "#176CC4", fontSize: 35, fontWeight: "800" },
  heroDot: { width: 12, height: 12, borderRadius: 6, backgroundColor: "#64B8C9", position: "absolute", right: 2, top: 12 },
  sectionHeader: { marginBottom: 12 },
  sectionTitle: { color: "#173B60", fontSize: 17, fontWeight: "800" },
  sectionAccent: { width: 35, height: 3, backgroundColor: "#2B86D6", borderRadius: 2, marginTop: 7 },
  serviceCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#FFFFFF", borderRadius: 16, padding: 13, marginBottom: 10, borderWidth: 1, borderColor: "#EDF2F7" },
  serviceIcon: { width: 45, height: 45, borderRadius: 13, alignItems: "center", justifyContent: "center" },
  serviceIconText: { color: "#1767B7", fontSize: 22, fontWeight: "700" },
  serviceCopy: { flex: 1, marginLeft: 12 },
  serviceCopyRtl: { marginLeft: 0, marginRight: 12 },
  serviceTitle: { color: "#183D63", fontSize: 13, fontWeight: "800", marginBottom: 4 },
  serviceDescription: { color: "#8294A7", fontSize: 10, lineHeight: 15 },
  cardArrow: { color: "#9BB2C8", fontSize: 25, paddingHorizontal: 4 },
  supportCard: { backgroundColor: "#FFFFFF", borderRadius: 18, borderWidth: 1, borderColor: "#E5EEF7", padding: 17, marginTop: 10, alignItems: "center" },
  supportIcon: { width: 37, height: 37, borderRadius: 19, backgroundColor: "#EAF3FF", alignItems: "center", justifyContent: "center", marginBottom: 8 },
  supportIconText: { color: "#1767B7", fontSize: 23 },
  supportTitle: { color: "#173B60", fontSize: 14, fontWeight: "800", marginBottom: 5 },
  supportDescription: { color: "#8194A8", fontSize: 10, lineHeight: 16, textAlign: "center", marginBottom: 12 },
  outlineButton: { borderWidth: 1, borderColor: "#176CC4", borderRadius: 11, paddingVertical: 10, paddingHorizontal: 17 },
  outlineButtonText: { color: "#1767B7", fontSize: 11, fontWeight: "800" },
  disclaimer: { color: "#91A1B1", fontSize: 9, lineHeight: 14, textAlign: "center", marginTop: 15, paddingHorizontal: 8 },
  bottomNav: { height: 65, backgroundColor: "#FFFFFF", borderTopWidth: 1, borderTopColor: "#E8EEF5", flexDirection: "row", justifyContent: "space-around", alignItems: "center" },
  navItem: { alignItems: "center", justifyContent: "center", minWidth: 70 },
  navIcon: { color: "#9AABBC", fontSize: 21, marginBottom: 2 },
  navLabel: { color: "#9AABBC", fontSize: 9, fontWeight: "600" },
  navActive: { color: "#176CC4", fontWeight: "800" },
});
