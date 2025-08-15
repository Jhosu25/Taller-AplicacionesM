import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Cart } from '../HomeScreen';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    visible: boolean;
    setShowModal: () => void;
    cart: Cart[];
    clearCart:()=> void;
}

export const ModalCart = ({ visible, setShowModal, cart, clearCart }: Props) => {
    const { width } = useWindowDimensions();
    //función para mostrar total pagar
    const totalPay = (): number => {
        let total = 0; //acumulador
        cart.forEach(product => {
            total += product.total;
        })
        return total;
    }

    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.modal,
                    width: width * 0.80
                }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>Mis Productos</Text>
                        <View style={styles.containerIconModal}>
                            <Icon name='cancel'
                                size={18}
                                color={'#251f48'}
                                onPress={setShowModal}
                            />
                        </View>
                    </View>
                    <View style={localStyles.headerTable}>
                        <Text style={localStyles.headerTextTable}>Producto</Text>
                        <View style={localStyles.headerInformation}>
                            <Text style={localStyles.headerTextTable}>Pre.</Text>
                            <Text style={localStyles.headerTextTable}>Cant.</Text>
                            <Text style={localStyles.headerTextTable}>Total</Text>
                        </View>
                    </View>
                    <View>
                        <FlatList
                            data={cart}
                            renderItem={({ item }) =>
                                <View style={localStyles.headerTable}>
                                    <Text>{item.name}</Text>
                                    <View style={localStyles.headerInformation}>
                                        <Text style={{ paddingHorizontal: 8 }}>${item.price.toFixed(2)}</Text>
                                        <Text style={{ paddingHorizontal: 25 }}>{item.quantity}</Text>
                                        <Text style={{ paddingHorizontal: 8 }}>${item.total.toFixed(2)}</Text>
                                    </View>
                                </View>}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                    <View style={localStyles.containerTotal}>
                        <Text style={localStyles.headerTextTable}>
                            Total pagar: ${totalPay().toFixed(2)}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonAddCart}
                        onPress={clearCart}>
                        <Text style={styles.buttonAddCartText}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}


const localStyles = StyleSheet.create({
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerInformation: {
        flexDirection: 'row'
    },
    headerTextTable: {
        fontWeight: 'bold',
        color: '#251f48',
        fontSize: 16,
        marginHorizontal: 9
    },
    containerTotal: {
        alignItems: 'flex-end',
        marginTop: 15
    }
})