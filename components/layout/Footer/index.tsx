import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './style';

const Footer = () => {
  const [active, setActive] = useState('home');
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => setActive('home')}>
        <FontAwesome
          name='home'
          size={24}
          color={active === 'home' ? 'green' : '#666'}
        />
        <Text
          style={[styles.text, { color: active === 'home' ? 'green' : '#666' }]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => setActive('explore')}
      >
        <FontAwesome
          name='globe'
          size={24}
          color={active === 'explore' ? 'green' : '#666'}
        />
        <Text
          style={[
            styles.text,
            { color: active === 'explore' ? 'green' : '#666' },
          ]}
        >
          Explore
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => setActive('profile')}
      >
        <FontAwesome
          name='user'
          size={24}
          color={active === 'profile' ? 'green' : '#666'}
        />
        <Text
          style={[
            styles.text,
            { color: active === 'profile' ? 'green' : '#666' },
          ]}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
