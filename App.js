import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import ButtomTabs from './components/ButtomTabs';


export default function App() {
  return (

    <Provider store={store}>
      <View style={styles.container} >
        <NavigationContainer>
          <ButtomTabs />
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </Provider >


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 10 : 0
  },
});
