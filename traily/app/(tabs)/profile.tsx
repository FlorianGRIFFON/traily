import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.centered}>
      <ThemedText type="title">In development</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
}
});
