
import { ASYNC_STORAGE_CODE } from '@/constants/AsyncStorageCode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'nativewind';
import { useEffect, useRef, useState } from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';

type ThemeMode = 'light' | 'dark' | 'system';

export const useThemePersistence = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const systemColorScheme = useSystemColorScheme();
  const [isLoading, setIsLoading] = useState(true);
  const [savedTheme, setSavedTheme] = useState<ThemeMode | null>(null);
  const hasLoadedRef = useRef(false);

  // Load saved theme preference on mount (only once)
  useEffect(() => {
    if (hasLoadedRef.current) return;
    
    const loadTheme = async () => {
      try {
        const savedThemeValue = await AsyncStorage.getItem(ASYNC_STORAGE_CODE.THEME_KEY);
        if (savedThemeValue) {
          const theme = savedThemeValue as ThemeMode;
          setSavedTheme(theme);
          
          // If user has set a specific theme (not 'system'), use it
          if (theme === 'light' || theme === 'dark') {
            setColorScheme(theme);
          } else {
            // Use system theme
            setColorScheme(systemColorScheme ?? 'light');
          }
        } else {
          // No saved preference, use system theme
          setSavedTheme('system');
          setColorScheme(systemColorScheme ?? 'light');
        }
        hasLoadedRef.current = true;
      } catch (error) {
        console.error('Error loading theme preference:', error);
        // Fallback to system theme on error
        setColorScheme(systemColorScheme ?? 'light');
        hasLoadedRef.current = true;
      } finally {
        setIsLoading(false);
      }
    };

    loadTheme();
  }, [setColorScheme, systemColorScheme]);

  // Update theme when system theme changes (only if saved theme is 'system')
  useEffect(() => {
    if (savedTheme === 'system' && !isLoading && hasLoadedRef.current) {
      setColorScheme(systemColorScheme ?? 'light');
    }
  }, [systemColorScheme, savedTheme, isLoading, setColorScheme]);

  // Save theme preference
  const saveTheme = async (theme: ThemeMode) => {
    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_CODE.THEME_KEY, theme);
      setSavedTheme(theme);
      
      // Apply the theme immediately
      if (theme === 'light' || theme === 'dark') {
        setColorScheme(theme);
      } else {
        // Use system theme
        setColorScheme(systemColorScheme ?? 'light');
      }
    } catch (error) {
      console.error('Error saving theme preference:', error);
    }
  };

  // Toggle between light and dark (not system)
  const toggleTheme = () => {
    const currentTheme = colorScheme === 'light' ? 'dark' : 'light';
    saveTheme(currentTheme);
  };

  return {
    colorScheme,
    savedTheme,
    isLoading,
    saveTheme,
    toggleTheme,
    setColorScheme: (theme: 'light' | 'dark') => saveTheme(theme),
  };
};
