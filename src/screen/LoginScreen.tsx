import React, { useState } from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    SafeAreaView
} from 'react-native';

export const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        alert(`Inicio de sesión:\nEmail: ${email}`);
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
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    safe: {
        flex: 1,
        justifyContent: 'center',
    },
    overlay: {
        margin: 20,
        borderRadius: 12,
        padding: 25,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 25,
        textAlign: 'center',
        color: 'white',
        textShadowColor: '#000',  
        textShadowOffset: { width: 1, height: 1 }, 
        textShadowRadius: 2,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        color: 'white'
    },
});
