import AppStack from './components/stacks/AppStack';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';



export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
        <AppStack />
    </NativeBaseProvider>
  );
}
