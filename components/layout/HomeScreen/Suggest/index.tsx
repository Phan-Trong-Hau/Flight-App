import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    margin: 20,
    marginRight: 0,
  },
  horizontalScroll: {
    flexDirection: 'row',
  },
  item: {
    marginRight: 10,
  },
  image: {
    width: 220,
    height: 200,
    borderRadius: 10,
  },
  city: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

const Suggest = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The best cities for you</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        <View style={styles.item}>
          <Image
            source={{
              uri: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-phong-canh-dep-41.jpg',
            }}
            style={styles.image}
          />
          <Text style={styles.city}>HongKong</Text>
          <Text style={styles.price}>from $33.00 to $38.00</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={{
              uri: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-phong-canh-dep-41.jpg',
            }}
            style={styles.image}
          />
          <Text style={styles.city}>HongKong</Text>
          <Text style={styles.price}>from $33.00 to $38.00</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={{
              uri: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-phong-canh-dep-41.jpg',
            }}
            style={styles.image}
          />
          <Text style={styles.city}>HongKong</Text>
          <Text style={styles.price}>from $33.00 to $38.00</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Suggest;
