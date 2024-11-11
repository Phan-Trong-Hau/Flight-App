import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
  },
  searchInput: {
    width: 50,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default styles;
