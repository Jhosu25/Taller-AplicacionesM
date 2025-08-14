import React, { useState } from 'react';
import { ImageBackground, Text, View, Button, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

//interface para las propiedades
interface Props {
    users: User[]; //arreglo con la lista de usuarios
}

//interface para definir el objeto del formulario
interface FormLogin {
    email: string;
    password: string;
}

export const LoginScreen = ({ users }:Props) => {


    //hook useState manejar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    //hook useNvigation permite navegar entre pantallas
    const navigation = useNavigation();

    const changeForm = (property: string, value: string): void => {
        setFormLogin({ ...formLogin, [property]: value });
    };

    //funcion para verificar si el usuario y contraseña existe
    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.username == formLogin.email && user.password == formLogin.password);
        return existUser;
    }


    const handleLogin = (): void => {
        if (formLogin.email === '' || formLogin.password === '') {
            Alert.alert('Error', 'Por favor, complete todos los campos');
            return;
        }

        //Validar que exista el usuario y contraseña
        if(!verifyUser()){
            Alert.alert('Error', 'Usuario y/o contraseña incorrectos');
            return;

        }
        console.log(formLogin);
    };

    return (
        <ImageBackground
            source={require('../../assets/fondoAPP.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.darkOverlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Bienvenido a GamerStore</Text>

                    <InputComponent
                        placeholder="Usuario"
                        keyboardType="email-address"
                        changeForm={changeForm}
                        property="email"
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <InputComponent
                                placeholder="Contraseña"
                                keyboardType="default"
                                changeForm={changeForm}
                                property="password"
                                isPassword={hiddenPassword}
                            />
                        </View>
                        <Icon
                            name={hiddenPassword ? 'visibility-off' : 'visibility'}
                            size={24}
                            color="#ccc"
                            style={{
                                position: 'absolute',
                                right: 10,
                                top: '35%',
                                transform: [{ translateY: -12 }]
                            }}
                            onPress={() => setHiddenPassword(!hiddenPassword)}
                        />
                    </View>

                    <Button title="Ingresar" onPress={handleLogin} />
                    <TouchableOpacity
                    onPress={()=> navigation.dispatch(CommonActions.navigate({ name: 'Register'}))}>
                        <Text  style={styles.textRedirect}>No tienes una cuenta? Registrate ahora</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};
