import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ScrollView,
    ImageBackground
} from 'react-native';

export const LoginFormulario = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        alert(`Usuario registrado:\nNombre: ${name} ${lastname}`);
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

                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Apellido"
                    value={lastname}
                    onChangeText={setLastname}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Teléfono"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <Button title="Registrarse" onPress={handleRegister} />
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    darkOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 0,
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
        zIndex: 1,
    },
    title: {
        fontSize: 28,
        marginBottom: 30,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 12,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        color: 'white'
    },
});