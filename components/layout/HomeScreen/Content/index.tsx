import { View, Text, Image, ScrollView } from 'react-native';

import styles from './style';

const Content = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Destinations</Text>
      <Image
        source={{
          uri: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-phong-canh-dep-41.jpg',
        }}
        style={styles.image}
      />
      <Image
        source={{
          uri: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-phong-canh-dep-41.jpg',
        }}
        style={styles.image}
      />
      <Image
        source={{
          uri: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-phong-canh-dep-41.jpg',
        }}
        style={styles.image}
      />
    </View>
  );
};

export default Content;
