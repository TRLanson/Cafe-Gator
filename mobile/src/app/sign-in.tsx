import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign-in</Text>
      <Link href="/" style={styles.link}>
        Cancel
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
  title: { fontSize: 28, color: colors.black },
  link: { marginTop: 24, fontSize: 18, color: colors.red },
});