import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './style';

export default function Footer() {
  return (
    <View style={styles.searchButtonContainer}>
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Search flights</Text>
      </TouchableOpacity>
    </View>
  );
}
