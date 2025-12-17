import React from 'react';

import { Tabs } from 'expo-router';
import { Octicons } from '@expo/vector-icons';

import { ThemeToggle } from '@/components/ui/ThemeToggle';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerRight: () => <ThemeToggle />,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',

          tabBarIcon: ({ color }) => <Octicons name="home-fill" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <Octicons name="graph" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => <Octicons name="list-unordered" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="submission"
        options={{
          title: 'Submission',
          tabBarIcon: ({ color }) => <Octicons name="checklist" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
