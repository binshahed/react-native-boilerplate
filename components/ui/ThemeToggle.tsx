import { primaryColor } from '@/constants/Colors';
import { useThemePersistence } from '@/hooks/useThemePersistence';
import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Animated, Easing, TouchableOpacity } from 'react-native';

export function ThemeToggle() {
  const { colorScheme, toggleTheme } = useThemePersistence();

  const rotateAnim = React.useRef(new Animated.Value(0)).current;
  const scaleAnim = React.useRef(new Animated.Value(1)).current;
  const rotationValue = React.useRef(0);

  // Animate icon when theme changes
  React.useEffect(() => {
    // Scale down, rotate, then scale up
    rotationValue.current = rotationValue.current === 0 ? 1 : 0;

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.8,
        duration: 150,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: rotationValue.current,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  }, [colorScheme, rotateAnim, scaleAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handlePress = () => {
    toggleTheme();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      className="w-14 items-center justify-center rounded-full bg-secondary p-2">
      <Animated.View
        style={{
          transform: [{ rotate }, { scale: scaleAnim }],
        }}>
        {colorScheme === 'light' ? (
          <Ionicons name="sunny" size={24} color={primaryColor} />
        ) : (
          <Ionicons name="moon" size={24} color={primaryColor} />
        )}
      </Animated.View>
    </TouchableOpacity>
  );
}
