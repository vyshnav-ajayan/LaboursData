import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataContainer: { flex: 1, backgroundColor: 'red' },
  icon: { marginRight: '4%' },
  gamesListContainer: {
    flex: 1,
    width: '100%',
  },
  itemContainer: {
    marginVertical: '2%',
    width: '92%',
    alignSelf: 'center',
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: '3%',
    textAlign: 'center',
  },
  inputContainer: {
    width: '86%',
    backgroundColor: '#C4C4C4',
    borderRadius: 5,
    paddingHorizontal: 25,
    color: 'grey',
  },
});

export default styles;
