import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cafe Gator</Text>
      <Link href="/sign-in" style={styles.link}>
        Sign-in
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  title: { fontSize: 36, fontWeight: 'bold', color: colors.black },
  link: { marginTop: 24, fontSize: 20, color: colors.red },
});