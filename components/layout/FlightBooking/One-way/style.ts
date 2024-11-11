import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  dateInput: {
    flex: 1,
    height: 30,
    fontSize: 16,
    fontWeight: '700',
    color: 'gray',
  },
  travellerContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  travellerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  travellerText: {
    fontWeight: '700',
    fontSize: 16,
  },
  caretIcon: {
    position: 'absolute',
    right: 10,
  },
  exchangeButton: {
    position: 'absolute',
    right: 20,
    top: 44,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
  },
  exchangeIcon: {
    transform: [{ rotate: '90deg' }],
  },
});

export default styles;
