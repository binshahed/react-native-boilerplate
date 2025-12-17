import React, { useState } from 'react';
import 'react-native-gesture-handler';
import '@/global.css';

import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { Stack } from 'expo-router';
import NetworksErrorModal from '@/components/modals/NetworksErrorModal';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <Provider store={store}>
      <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        {/*  RenderedLayout is the main layout of the app. It is used to render the protected and public routes. */}
        <RenderedLayout />
        <PortalHost />
      </ThemeProvider>
    </Provider>
  );
}

const RenderedLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={isAuthenticated}>
          <Stack.Screen name="(private)/(tabs)" options={{ headerShown: false }} />
        </Stack.Protected>

        <Stack.Protected guard={!isAuthenticated}>
          <Stack.Screen name="/(public)/auth/login" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
      <NetworksErrorModal />
    </>
  );
};
