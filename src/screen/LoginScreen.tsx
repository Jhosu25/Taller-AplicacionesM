import React, { useState } from 'react';
import {
    ImageBackground,
    Text,
    View,
    Button,
    SafeAreaView,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { transform } from '@babel/core';

interface FormLogin {
    email: string;
    password: string;
}

export const LoginScreen = () => {
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    const changeForm = (property: string, value: string): void => {
        setFormLogin({ ...formLogin, [property]: value });
    };

    const handleLogin = (): void  => {
        if (formLogin.email === '' || formLogin.password === '') {
            Alert.alert('Error', 'Por favor, complete todos los campos');
            return;
        }
        //Alert.alert('Inicio de sesión', `Email: ${formLogin.email}`);
        console.log(formLogin);
    };

    return (
        <ImageBackground
            source={require('../../assets/fondoAPP.jpg')}
            style={styles.fondo}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.safe}>
                <View style={styles.overlay}>
                    <Text style={styles.titulo}>Bienvenido a GamerStore</Text>

                    <InputComponent
                        placeholder="Correo electrónico"
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
                            name={hiddenPassword ? 'visibility' : 'visibility-off'}
                            size={24}
                            color="#ccc"
                            style={{
                                position: 'absolute',
                                right: 10,
                                top: '50%',
                                transform: [{ translateY: -12 }]
                            }}
                            onPress={() => setHiddenPassword(!hiddenPassword)}
                        />
                    </View>

                    <Button title="Ingresar" onPress={handleLogin} />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};
