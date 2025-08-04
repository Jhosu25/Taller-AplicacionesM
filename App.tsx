import { SafeAreaView } from 'react-native';
import { LoginScreen } from './src/screen/LoginScreen';
import { LoginFormulario } from './src/screen/LoginFormulario';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <LoginScreen /> */}
      <LoginFormulario></LoginFormulario>
    </SafeAreaView>
  );
};

export default App;
