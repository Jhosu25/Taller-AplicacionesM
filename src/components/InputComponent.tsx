import React from 'react';
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    changeForm: (property: string, value: string) => void;
    property: string;
    isPassword?: boolean;
}

export const InputComponent = ({
    placeholder,
    keyboardType,
    changeForm,
    property,
    isPassword
}: Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(value) => changeForm(property, value)}
            secureTextEntry={isPassword}
            style={styles.input}
        />
    );
};
