import { router, Stack } from 'expo-router';
import { SafeAreaView, View } from 'react-native';
import { Text } from '@/components/ui/text';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function NotFoundScreen() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View>
        <Text>This screen doesn&apos;t exist...</Text>

        <Button onPress={() => router.push('(tabs)/index')}>
          <Text>Go to home screen!</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
