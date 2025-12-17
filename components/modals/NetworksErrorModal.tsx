import { Text, Pressable, Modal, Platform, ActivityIndicator } from 'react-native';
import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

import { Button } from '../ui/button';

const NetworksErrorModal = () => {
  const { isNetworkConnected } = useSelector((state: RootState) => state.network);

  return (
    <Modal
      visible={!isNetworkConnected}
      transparent
      animationType={Platform.OS === 'ios' ? 'slide' : 'fade'}>
      <Pressable
        // onPress={handleClose}
        className="bg-black/50 flex-1 items-center justify-center p-6"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <Pressable
          //   onPress={handleClose}
          onStartShouldSetResponder={() => true}
          className="w-full max-w-md rounded-lg bg-white p-4 dark:bg-black-3">
          <Text className="text-center text-2xl font-bold text-red-500">Networks Error</Text>
          <Text className="mb-4 text-center text-lg text-neutral-600 dark:text-neutral-300">
            Please check your network connection and try again.
          </Text>
          <Button variant="outline" onPress={() => {}} disabled={false}>
            <ActivityIndicator size="small" color="#000" /> Retry
          </Button>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default NetworksErrorModal;
