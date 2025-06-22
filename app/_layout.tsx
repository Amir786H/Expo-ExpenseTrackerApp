import { AuthProvider } from '@/contexts/authContext';
import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

const StackLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName='index'>
      {/* Below screen added for navigation fixes */}
      <Stack.Screen
        name="index"
      />
      <Stack.Screen
        name="(modals)/profileModal"
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name="(modals)/walletModal"
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name="(modals)/transactionModal"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  )
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <StackLayout />
    </AuthProvider>
  )
}

const styles = StyleSheet.create({});

