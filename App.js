import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './app/navigation/MainNavigator';
import Menu from './app/screens/MenuScreen/MenuScreen';
// APP
function App() {
  return (
    <SafeAreaProvider>
      <MainNavigator />

    </SafeAreaProvider>
  );
}

export default App;
