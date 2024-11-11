import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

import styles from './style';

export default function OneWay() {
  const nowDate = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return (
    <>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <FontAwesome5
            name='plane-departure'
            size={18}
            color='black'
            style={styles.icon}
          />
          <TextInput placeholder='From' style={styles.input} />
        </View>

        <View style={styles.inputWrapper}>
          <FontAwesome5
            name='plane-arrival'
            size={18}
            color='black'
            style={styles.icon}
          />
          <TextInput placeholder='To' style={styles.input} />
        </View>

        <TouchableOpacity style={styles.exchangeButton}>
          <FontAwesome
            name='exchange'
            size={20}
            color='black'
            style={styles.exchangeIcon}
          />
        </TouchableOpacity>

        <View style={styles.dateContainer}>
          <View style={styles.dateWrapper}>
            <FontAwesome
              name='calendar'
              size={24}
              color='black'
              style={styles.icon}
            />
            <TextInput placeholder={nowDate} style={styles.dateInput} />
          </View>
        </View>
      </View>

      <View style={styles.travellerContainer}>
        <View style={styles.travellerWrapper}>
          <FontAwesome
            name='user'
            size={24}
            color='black'
            style={styles.icon}
          />
          <Text style={styles.travellerText}>1 traveller</Text>
        </View>
        <Entypo name='dot-single' size={24} color='black' />
        <View style={styles.travellerWrapper}>
          <FontAwesome
            name='user'
            size={24}
            color='black'
            style={styles.icon}
          />
          <Text style={styles.travellerText}>Economy</Text>
        </View>
        <AntDesign
          name='caretdown'
          size={20}
          color='black'
          style={styles.caretIcon}
        />
      </View>
    </>
  );
}
