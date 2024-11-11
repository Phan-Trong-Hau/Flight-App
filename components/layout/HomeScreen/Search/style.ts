import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputSearchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  inputSearch: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  searchIcon: {
    marginHorizontal: 16,
  },
  text: {
    color: '#aaa',
    fontSize: 16,
  },
});

export default styles;
