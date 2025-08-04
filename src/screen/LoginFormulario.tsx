import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

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
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#63BBC7',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        marginBottom: 30,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: 'white',
        padding: 12,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
});
