import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        alert(`Inicio de sesión:\nEmail: ${email}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>

            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Button title="Ingresar" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
