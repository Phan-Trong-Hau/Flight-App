import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  closeButton: {
    position: 'absolute',
    left: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
  },
});

export default styles;
