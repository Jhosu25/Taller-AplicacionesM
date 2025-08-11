import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';
import { LoginFormulario } from '../screen/LoginFormulario';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pantalla1" options={{ headerShown: false, title: "Login" }} component={LoginScreen} />
            <Stack.Screen name="Pantalla2" options={{ headerShown: false}} component={LoginFormulario} />
        </Stack.Navigator>
    );
}