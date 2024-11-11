import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
} from '@expo/vector-icons';

import styles from './style';
import { Calendar } from 'react-native-calendars';

export default function RoundTrip() {
  const today = new Date().toISOString().split('T')[0];
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState({
    departure: today,
    arrival: today,
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  // Xử lý chọn ngày
  const handleDayPress = (day: { dateString: string }) => {
    const { departure, arrival } = dates;

    if (!departure || (departure && arrival)) {
      setDates({ departure: day.dateString, arrival: '' });
    } else {
      if (new Date(day.dateString) < new Date(departure)) {
        setDates({ departure: day.dateString, arrival: departure });
      } else {
        setDates({ departure, arrival: day.dateString });
      }
      setOpenDate(false);
    }
  };

  // Tạo danh sách ngày đã đánh dấu
  const getMarkedDates = () => {
    const { departure, arrival } = dates;
    let markedDates: { [key: string]: any } = {};

    if (departure) {
      markedDates[departure] = {
        startingDay: true,
        color: '#00BDD6',
        textColor: '#fff',
      };
    }

    if (arrival) {
      markedDates[arrival] = {
        endingDay: true,
        color: '#00BDD6',
        textColor: '#fff',
      };

      // Đánh dấu các ngày nằm giữa
      let start = new Date(departure);
      let end = new Date(arrival);
      let tempDate = new Date(start);

      while (tempDate < end) {
        tempDate.setDate(tempDate.getDate() + 1);
        const dateStr = tempDate.toISOString().split('T')[0];
        if (dateStr !== arrival) {
          markedDates[dateStr] = {
            color: '#EBFDFF',
            textColor: '#000',
          };
        }
      }
    }

    return markedDates;
  };

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
          <TouchableOpacity
            style={styles.dateWrapper}
            onPress={() => setOpenDate(true)}
          >
            <FontAwesome
              name='calendar'
              size={24}
              color='black'
              style={styles.icon}
            />
            <Text style={styles.dateInput}>{formatDate(dates.departure)}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.dateWrapper}
            onPress={() => setOpenDate(true)}
          >
            <FontAwesome
              name='calendar'
              size={24}
              color='black'
              style={styles.icon}
            />
            <Text style={styles.dateInput}>
              {!dates.arrival ? formatDate(today) : formatDate(dates.arrival)}
            </Text>
          </TouchableOpacity>
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
      // move to outside it still works
      {openDate && (
        <Modal
          animationType='slide'
          transparent={true}
          visible={openDate}
          onRequestClose={() => {
            () => setOpenDate(false);
          }}
          style={{
            backgroundColor: 'red',
          }}
        >
          <View
            // css container modal
            style={{
              backgroundColor: 'black',
              flex: 1,
            }}
          >
            <View
              // css modal
              style={{
                top: 50,
                backgroundColor: 'red',
                flex: 1,
              }}
            >
              <Calendar
                markingType={'period'}
                markedDates={getMarkedDates()}
                onDayPress={handleDayPress}
              />
              <Pressable onPress={() => setOpenDate(false)}>
                <Text>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
}
