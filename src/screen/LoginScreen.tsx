import React, { useState } from 'react';
import { ImageBackground, Text, View, Button, SafeAreaView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';



interface FormLogin {
    email: string;
    password: string;
}

export const LoginScreen = () => {
    const navigation = useNavigation();
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    const changeForm = (property: string, value: string): void => {
        setFormLogin({ ...formLogin, [property]: value });
    };

    const handleLogin = (): void => {
        if (formLogin.email === '' || formLogin.password === '') {
            Alert.alert('Error', 'Por favor, complete todos los campos');
            return;
        }
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
                </View>
            </SafeAreaView>
            <View style={{ width: 150, alignSelf: 'center', marginVertical: 10 }}>
                <Button title='Ir a registro'
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla2' }))}></Button>
            </View>
        </ImageBackground>
    );
};
