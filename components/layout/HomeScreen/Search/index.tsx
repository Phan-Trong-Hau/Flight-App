import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './style';
import { router } from 'expo-router';

const Search = () => {
  const handleSearch = () => {
    router.push('/booking');
  };

  return (
    <View style={styles.inputSearchContainer}>
      <TouchableOpacity onPress={handleSearch} style={styles.inputSearch}>
        <FontAwesome
          style={styles.searchIcon}
          name='search'
          size={24}
          color='#aaa'
        />
        <Text style={styles.text}>Find a flight</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
