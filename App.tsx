import { SafeAreaView } from 'react-native';
import { LoginScreen } from './src/screen/LoginScreen';
import { LoginFormulario } from './src/screen/LoginFormulario';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';


const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
};

export default App;
