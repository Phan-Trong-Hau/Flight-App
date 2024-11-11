import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './style';
import Header from './Header';
import RoundTrip from './Round-trip';
import Footer from './Footer';
import OneWay from './One-way';
import MultiCity from './Multi-city';

const FlightBooking = () => {
  const TRIP_TABS = {
    ROUND_TRIP: 'round-trip',
    ONE_WAY: 'one-way',
    MULTI_CITY: 'multi-city',
  };
  const [tabActive, setTabActive] = useState(TRIP_TABS.ROUND_TRIP);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.tabContainer}>
        <Text
          style={[
            styles.tab,
            tabActive === TRIP_TABS.ROUND_TRIP && styles.tabActive,
          ]}
          onPress={() => setTabActive(TRIP_TABS.ROUND_TRIP)}
        >
          Round-trip
        </Text>
        <Text
          style={[
            styles.tab,
            tabActive === TRIP_TABS.ONE_WAY && styles.tabActive,
          ]}
          onPress={() => setTabActive(TRIP_TABS.ONE_WAY)}
        >
          One-way
        </Text>
        <Text
          style={[
            styles.tab,
            tabActive === TRIP_TABS.MULTI_CITY && styles.tabActive,
          ]}
          onPress={() => setTabActive(TRIP_TABS.MULTI_CITY)}
        >
          Multi-city
        </Text>
      </View>

      {tabActive === TRIP_TABS.ROUND_TRIP && <RoundTrip />}
      {tabActive === TRIP_TABS.ONE_WAY && <OneWay />}
      {tabActive === TRIP_TABS.MULTI_CITY && <MultiCity />}

      <Footer />
    </View>
  );
};

export default FlightBooking;
