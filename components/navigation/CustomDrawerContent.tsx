import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Button } from '../ui/button';
import { Text } from '../ui/text';
import { SimpleLineIcons } from '@expo/vector-icons';
import { primaryColor } from '@/constants/Colors';
import { router } from 'expo-router';
type Props = DrawerContentComponentProps;

export function CustomDrawerContent(props: Props) {
  const menuItems = [
    {
      label: 'About',
      icon: <SimpleLineIcons name="info" size={18} color={primaryColor} />,
      onPress: () => {
        console.log('About');
      },
    },
    {
      label: 'Brands',
      icon: <SimpleLineIcons name="briefcase" size={18} color={primaryColor} />,
      onPress: () => {
        console.log('Brands');
      },
    },
    {
      label: 'Support',
      icon: <SimpleLineIcons name="phone" size={18} color={primaryColor} />,
      onPress: () => {
        console.log('Support');
      },
    },
    {
      label: 'Our Locations',
      icon: <SimpleLineIcons name="map" size={18} color={primaryColor} />,
      onPress: () => {
        console.log('Our Locations');
      },
    },
    {
      label: 'Our Policies',
      icon: <SimpleLineIcons name="list" size={18} color={primaryColor} />,
      onPress: () => {
        console.log('Our Policies');
      },
    },
    {
      label: 'ShareWith Friends',
      icon: <SimpleLineIcons name="share" size={18} color={primaryColor} />,
      onPress: () => {
        console.log('ShareWith Friends');
      },
    },
    {
      label: 'Feedback',
      icon: <SimpleLineIcons name="bubbles" size={18} color={primaryColor} />,
      onPress: () => {
        console.log('Feedback');
      },
    },
  ];

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View>
        <Button className="flex-row gap-2" onPress={() => router.push('/(public)/auth/Login')}>
          <SimpleLineIcons name="login" size={18} color="white" />
          <Text>Login/Signup</Text>
        </Button>
        <ScrollView className="mt-4">
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.label}
              className="flex-row items-center gap-4 border-b border-gray-200 px-4 py-2"
              onPress={item.onPress}>
              {item.icon}
              <Text variant="large">{item.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </DrawerContentScrollView>
  );
}
