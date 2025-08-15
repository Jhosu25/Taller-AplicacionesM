import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';
import { LoginFormulario } from '../screen/LoginFormulario';
import { useState } from 'react';
import { HomeScreen } from '../screen/HomeScreen/HomeScreen';

const Stack = createStackNavigator();
//interface para los objetos del arreglo
export interface User {
    id: number;
    name: string;
    username: string;
    password: string;
}

//arreglo lista de usuarios
const users: User[] = [
    { id: 1, name: 'Josue Parrales', username: 'jhosu25', password: '123456' },
    { id: 2, name: 'Nicole Mora', username: 'wafeling', password: '654321' }
];

export const StackNavigator = () => {

    //hook useState para gestionar el estado de la lista de usuarios
    const [listUsers, setListUsers] = useState<User[]>(users);

    //función para agregar un nuevo usuario en el arreglo
    const addUser = (user: User):void => {
        setListUsers([...listUsers, user]); //añadir nuevo usuario

    }

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" options={{ headerShown: false }} children={()=> <LoginScreen users={listUsers}/>} />
            <Stack.Screen name="Register" options={{ headerShown: false }} children={()=> <LoginFormulario users={listUsers} addUser={addUser}/>} />
            <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
        </Stack.Navigator>
    );
}