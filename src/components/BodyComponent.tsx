import React, { ReactNode } from 'react';
import { Button, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

interface Props {
    children: ReactNode; //children permite recibir cualquier componente hijo (Text, Image. etc)
}

export const BodyComponent = ({ children }: Props) => {
    //hook useWindowDimensions permite obtener el ancho y alto de la pantalla
    const { height } = useWindowDimensions();
    return (
        <View style={{
            ...styles.container,
            height: height * 0.88
        }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 40
    }
})