import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CafeScene } from '../components/CafeScene';
import { colors } from '../theme/colors';
import { fonts } from '../theme/fonts';

// The cafe card keeps this fixed size on every phone. Extra screen space becomes
// beige background around it; the card only shrinks if the screen is too small.
const SCENE_WIDTH = 312;
// Content never gets wider than this, so tablets and landscape stay tidy
const MAX_CONTENT_WIDTH = 480;
// Approximate height of everything in the hero except the illustration:
// "Now open" pill + title + tagline + the spacing between them.
const TEXT_BLOCK_HEIGHT = 220;

export default function WelcomeScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  // Measure the space we actually have, so the card shrinks only when it must and
  // the tagline and buttons are never pushed off-screen on a small phone.
  const [heroHeight, setHeroHeight] = useState(height - 320);
  const roomForScene = Math.max(heroHeight - TEXT_BLOCK_HEIGHT, 160);
  const sceneWidth = Math.min(SCENE_WIDTH, width - 56, roomForScene * (320 / 350));

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="dark" />
      <View style={styles.column}>
        <View style={styles.hero} onLayout={(e) => setHeroHeight(e.nativeEvent.layout.height)}>
          <View style={styles.badge}>
            <View style={styles.dot} />
            <Text style={styles.badgeText} maxFontSizeMultiplier={1.2}>
              NOW OPEN
            </Text>
          </View>

          <CafeScene width={sceneWidth} />

          <Text style={styles.title} accessibilityRole="header" maxFontSizeMultiplier={1.15}>
            Cafe Gator
          </Text>
          <Text style={styles.tagline} maxFontSizeMultiplier={1.15}>
            Find, rate, and remember{'\n'}every cafe you visit.
          </Text>
        </View>

        <View style={styles.actions}>
          <Pressable
            onPress={() => router.push('/sign-in')}
            accessibilityRole="button"
            accessibilityLabel="Sign in"
            style={({ pressed }) => [styles.primary, pressed && styles.pressed]}
          >
            <Text style={styles.primaryText} maxFontSizeMultiplier={1.2}>
              Sign in
            </Text>
          </Pressable>

          <Pressable
            onPress={() => router.push({ pathname: '/sign-in', params: { mode: 'register' } })}
            accessibilityRole="button"
            accessibilityLabel="First time at Gator Cafe? Register"
            style={({ pressed }) => [styles.secondary, pressed && styles.pressed]}
          >
            <Text style={styles.secondaryText} maxFontSizeMultiplier={1.2}>
              First time at Gator Cafe? <Text style={styles.secondaryBold}>Register</Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream, paddingHorizontal: 28 },
  column: { flex: 1, width: '100%', maxWidth: MAX_CONTENT_WIDTH, alignSelf: 'center' },
  // minHeight 0 lets the hero shrink instead of pushing the buttons off-screen
  hero: { flex: 1, minHeight: 0, alignItems: 'center', justifyContent: 'center' },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.latte,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 7,
    marginBottom: 24,
  },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.red, marginRight: 8 },
  badgeText: {
    fontFamily: fonts.bodyMedium,
    fontSize: 12,
    letterSpacing: 1.2,
    color: colors.black,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 46,
    letterSpacing: -0.8,
    color: colors.black,
    marginTop: 24,
  },
  tagline: {
    fontFamily: fonts.body,
    fontSize: 17,
    lineHeight: 25,
    textAlign: 'center',
    color: colors.inkSoft,
    marginTop: 10,
  },
  actions: { paddingBottom: 12 },
  primary: {
    height: 56,
    borderRadius: 18,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: { fontFamily: fonts.bodyBold, fontSize: 17, color: colors.white },
  secondary: { paddingVertical: 16, alignItems: 'center' },
  secondaryText: { fontFamily: fonts.body, fontSize: 15, color: colors.inkSoft },
  secondaryBold: { fontFamily: fonts.bodyBold, color: colors.black },
  pressed: { opacity: 0.8, transform: [{ scale: 0.98 }] },
});