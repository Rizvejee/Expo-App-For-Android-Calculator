import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputBox: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    color: 'blue',
    fontSize: 45,
    textAlign: 'right',
    margin: 10,
  },
  btnContainer: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'flex-end', 
    marginBottom: 20,
    
  },
  btn: {
    width: '20%',
    borderRadius: 20,
    marginHorizontal: '1.5%',
    marginVertical: 5,
    backgroundColor: 'lightgrey',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    fontSize: 30,
    fontWeight: 'light',
    color: 'blue',
    textAlign: 'center',
  },
  btn0: {
    width: '43%',
    borderRadius: 20,
    marginHorizontal: '1.5%',
    marginVertical: 5,
    backgroundColor: 'lightgrey',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});


export default styles;