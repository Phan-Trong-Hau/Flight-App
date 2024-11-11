import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: '100%',
  },
  tabContainer: {
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  tab: {
    fontSize: 20,
    fontWeight: '700',
    color: 'gray',
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  tabActive: {
    color: '#000',
    borderBottomWidth: 2,
  },
  inputContainer: {
    margin: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 30,
    fontSize: 20,
    fontWeight: '700',
    color: 'gray',
  },
});

export default styles;
