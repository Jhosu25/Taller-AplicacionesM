import React, { useState } from 'react';
import { View, Text, Button, ScrollView, ImageBackground, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { StackScreenProps } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';

type Props = StackScreenProps<any, any>;

interface FormRegister {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
}

export const LoginFormulario = ({ navigation }: Props) => {
    const [formRegister, setFormRegister] = useState<FormRegister>({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        password: ''
    });

    const [hiddenPassword, setHiddenPassword] = useState(true);

    const changeForm = (property: string, value: string) => {
        setFormRegister({ ...formRegister, [property]: value });
    };

    const handleRegister = () => {
        const { name, lastname, email, phone, password } = formRegister;
        if (!name || !lastname || !email || !phone || !password) {
            Alert.alert('Error', 'Por favor, complete todos los campos');
            return;
        }
        //Alert.alert('Usuario registrado', `Nombre: ${name} ${lastname}`);
        console.log(formRegister);
    };

    return (
        <ImageBackground
            source={require('../../assets/fondoAPP.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.darkOverlay} />

            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Registro</Text>

                <InputComponent
                    placeholder="Nombre"
                    keyboardType="default"
                    changeForm={changeForm}
                    property="name"
                />
                <InputComponent
                    placeholder="Apellido"
                    keyboardType="default"
                    changeForm={changeForm}
                    property="lastname"
                />
                <InputComponent
                    placeholder="Correo electrónico"
                    keyboardType="email-address"
                    changeForm={changeForm}
                    property="email"
                />
                <InputComponent
                    placeholder="Teléfono"
                    keyboardType="phone-pad"
                    changeForm={changeForm}
                    property="phone"
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
                <Button title="Registrarse" onPress={handleRegister} />

            </ScrollView>
            <View style={{ width: 150, alignSelf: 'center', marginVertical: 10 }}>
                <Button title='Ir a Iniciar Sesion'
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla1' }))}></Button>
            </View>
        </ImageBackground>
    );
};
