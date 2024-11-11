import React from 'react';
import { View, Text } from 'react-native';
import { router } from 'expo-router';

import styles from './style';
import { AntDesign } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <AntDesign
        name='close'
        size={28}
        color='black'
        style={styles.closeButton}
        onPress={() => {
          router.back();
        }}
      />
      <Text style={styles.headerTitle}>Flight</Text>
      <Text></Text>
    </View>
  );
}
