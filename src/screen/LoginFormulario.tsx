import React, { useState } from 'react';
import { View, Text, Button, ScrollView, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

//interface para las propiedades
interface Props{
    users: User[];
    addUser: (user: User) => void;
}

//interface objetp del formulario
interface FormRegister {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
}

export const LoginFormulario = ({users, addUser}:Props) => {
    //hook useNavigation permite navegar entre pantallas
    const navigation = useNavigation();

    //hook useState para manejar el estado del formulario
    const [formRegister, setFormRegister] = useState<FormRegister>({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        password: ''
    });

    const [hiddenPassword, setHiddenPassword] = useState(true);

    //función para actualizar el estado del formulario
    const changeForm = (property: string, value: string): void => {
        //modificar los valores del formulario
        setFormRegister({ ...formRegister, [property]: value });
    };

    //función para verificar si existe el usuario
    const verifyUsername = (): User | undefined => {
        const existUsername = users.find(user => user.username  == formRegister.email);
        return existUsername;
    }

    //funcion para generar los ids de los nuevos usuarios
    const getIdUser = (): number => {
        const getId = users.length +1;
        return getId;
    }

    //Función para registrar
    const handleSignUp = (): void => {
        if (formRegister.name == '' || formRegister.lastname == '' || formRegister.email == ''
            || formRegister.password == '' || formRegister.phone == ''){
            Alert.alert('Error', 'Por favor, complete todos los campos');
            return;
        }

        //Validar que no exista el usuario
        if(verifyUsername() != undefined) {
            Alert.alert('Error', 'El usuario ya existe');
            return;
        }

        //Crear nuevo usuario - objeto User
        const newUser: User = {
            id: getIdUser(),
            name: formRegister.name,
            username:formRegister.email,
            password: formRegister.password
        }

        //Añadir en el arreglo
        addUser(newUser);
        Alert.alert('Éxito', 'Usuario registrado correctamente')
        //Regresar al login
        navigation.goBack();
        //Alert.alert('Usuario registrado', `Nombre: ${name} ${lastname}`);
        //console.log(formRegister);
    };

    return (
        <ImageBackground
            source={require('../../assets/fondoAPP.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.darkOverlay} />

            <View style={styles.container}>
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
                    placeholder="Usuario"
                    keyboardType="email-address"
                    changeForm={changeForm}
                    property="email"
                />
                <InputComponent
                    placeholder="Teléfono"
                    keyboardType="numeric"
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
                <Button title="Registrarse" onPress={handleSignUp} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                    <Text style={styles.textRedirect}>Ya tienes una cuenta? Iniciar sesión ahora</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};
