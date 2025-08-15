import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Product } from '../HomeScreen'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ModalProduct } from './ModalProduct';

interface Props {
    item: Product;
    updateStock: (id: number, quantity: number)=> void;
}



export const CardProduct = ({ item, updateStock }: Props) => {
    //hook useState manejar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <View>
            <View style={styles.container}>
                <Image source={{ uri: item.pathImage }} style={styles.image}></Image>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text>Precio: ${item.price.toFixed(2)}</Text>
                </View>
                <View style={styles.containerIcon}>
                    <Icon name='add-shopping-cart' size={30} color={'#251f48'}
                    onPress={()=> setShowModal(!showModal)}></Icon>
                </View>
            </View>
            <ModalProduct visible={showModal} item={item} setShowModal={()=> setShowModal(!showModal)}
                updateStock={updateStock}></ModalProduct>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    image: {
        width: 70,
        height: 70
    },
    containerIcon: {
        flex: 1,
        alignItems: 'flex-end'
    }

})