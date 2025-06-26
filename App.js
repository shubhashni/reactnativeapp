import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text>Welcome, Manish</Text>
      <StatusBar style="auto" />
    </View>
    <View style={{flex:.5, backgroundColor:'blue'}}>
      <Text>
       yahoo {'\n'} spider-man
      </Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:.5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
