import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { colors } from '../theme/colors';

type Props = TextInputProps & {
  label: string;
  error?: string | null;
  disabled?: boolean;
};

export function FormField({ label, error, disabled, ...inputProps }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...inputProps}
        editable={!disabled}
        placeholderTextColor={colors.grey}
        style={[
          styles.input,
          disabled && styles.disabled,
          !!error && styles.inputError,
        ]}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 16 },
  label: { fontSize: 14, color: colors.black, marginBottom: 6 },
  input: {
    borderWidth: 2,
    borderColor: colors.black,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: colors.black,
    backgroundColor: colors.white,
  },
  disabled: { backgroundColor: colors.lightGrey, borderColor: colors.grey },
  inputError: { borderColor: colors.red },
  error: { color: colors.red, fontSize: 13, marginTop: 4 },
});