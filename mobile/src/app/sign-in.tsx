import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { FormField } from '../components/FormField';
import { colors } from '../theme/colors';
import {
  NAME_MAX_LENGTH,
  validateContact,
  validateName,
  validatePassword,
} from '../utils/validation';

export default function SignInScreen() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const nameError = isRegistering ? validateName(name) : null;
  const contactError = validateContact(email, phone);
  const passwordError = isRegistering
    ? validatePassword(password)
    : password.length === 0
      ? 'Password is required'
      : null;
  const hasErrors = !!(nameError || contactError || passwordError);

  const handleContinue = () => {
    setSubmitted(true);
    if (hasErrors) return;
    router.replace('/map'); // placeholder: real login comes with the backend
  };

  const toggleMode = () => {
    setIsRegistering((current) => !current);
    setSubmitted(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>
          {isRegistering ? 'Join Cafe Gator' : 'Sign-in'}
        </Text>

        {isRegistering && (
          <FormField
            label="What should the Gators call you?"
            value={name}
            onChangeText={setName}
            error={submitted ? nameError : null}
            maxLength={NAME_MAX_LENGTH}
          />
        )}

        <FormField
          label="Email"
          value={email}
          onChangeText={setEmail}
          disabled={phone.length > 0}
          error={submitted && phone.length === 0 ? contactError : null}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormField
          label="Phone Number"
          value={phone}
          onChangeText={setPhone}
          disabled={email.length > 0}
          error={submitted && email.length === 0 ? contactError : null}
          keyboardType="phone-pad"
        />
        <FormField
          label="Password"
          value={password}
          onChangeText={setPassword}
          error={submitted ? passwordError : null}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Pressable style={styles.primaryButton} onPress={handleContinue}>
          <Text style={styles.primaryText}>Continue</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton} onPress={() => router.replace('/')}>
          <Text style={styles.secondaryText}>Cancel</Text>
        </Pressable>

        <Pressable onPress={toggleMode}>
          <Text style={styles.toggle}>
            {isRegistering
              ? 'Already a regular? Sign in'
              : 'First time at Gator Cafe?'}
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.white },
  container: { padding: 24, paddingTop: 80 },
  title: { fontSize: 28, fontWeight: 'bold', color: colors.black, marginBottom: 24 },
  primaryButton: {
    backgroundColor: colors.black,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  primaryText: { color: colors.white, fontSize: 16, fontWeight: 'bold' },
  secondaryButton: {
    borderWidth: 2,
    borderColor: colors.black,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  secondaryText: { color: colors.black, fontSize: 16 },
  toggle: { color: colors.black, textAlign: 'center', marginTop: 24, textDecorationLine: 'underline' },
});