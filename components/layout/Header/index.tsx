import { Image, Text, View } from 'react-native';

import styles from './style';
import { FontAwesome } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/icon.png')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Explore flight</Text>
        <Text style={styles.subtitle}>Welcome to flight booking</Text>
      </View>
      <View>
        <FontAwesome name='user-circle' size={48} color='black' />
      </View>
    </View>
  );
};

export default Header;
