import React, { useState } from 'react'
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import { BodyComponent } from '../../components/BodyComponent';
import { TitleComponent } from '../../components/TitleComponents';
import { CardProduct } from './components/CardProduct';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalCart } from './components/ModalCart';

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

//interface para los objetos del arreglo del carrito de compras
export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {
    //arreglo con la lista de productos
    const products: Product[] = [
        { id: 1, name: 'God of War Ragnarök', price: 69.99, stock: 5, pathImage: 'https://static.wikia.nocookie.net/godofwar/images/c/ca/Portada_God_of_War_Ragnarok.png/revision/latest?cb=20211008000423&path-prefix=es' },
        { id: 2, name: 'Marvel Spider-Man 2', price: 59.99, stock: 10, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg' },
        { id: 3, name: 'The Last of Us: Remastered', price: 44.99, stock: 3, pathImage: 'https://juegodigitalecuador.com/files/images/productos/1624908503-the-last-of-us-remastered-ps5.jpg' },
        { id: 4, name: 'Astro Bot', price: 29.99, stock: 8, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202406/0500/8f15268257b878597757fcc5f2c9545840867bc71fc863b1.png' },
        { id: 5, name: 'FC 25', price: 49.99, stock: 4, pathImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202503/2520/f3c135f8ebdc50b782c6f5f02b27130b499e22847f05aee6.png' },
    ];

    //hook useState para manejar la lista de productos
    const [productsList, setProductsList] = useState<Product[]>(products);

    //hook useState para gestionar los productos del carrito
    const [cart, setCart] = useState<Cart[]>([]);

    //hook useState para manejar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    //funcion para actualizar el stock de los productos
    const updateStock = (id: number, quantity: number): void => {
        const updatedProducts = productsList.map(product => (product.id == id)
            ? { ...product, stock: product.stock - quantity }
            : product);
        //actualizar el arreglo de productos
        setProductsList(updatedProducts);
        //llamar función para añadir al carrito
        addProduct(id, quantity);
    }

    //funcion para agregar los productos al arreglo del carrito
    const addProduct = (id: number, quantity: number) => {
        const product = productsList.find(product => product.id == id);

        //validar que el producto si exista
        if (!product) { //producto -> undefined
            return;
        }

        //Crear objeto del producto para el carrito de compras
        const newProductCart: Cart = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            total: product.price * quantity
        }

        //Añadir en el arreglo del carrito
        setCart([...cart, newProductCart]);
        //console.log(cart);
    }


    return (
        <View>
            <View style={styles.containerHeader}>
                <TitleComponent title='Productos'></TitleComponent>
                <View style={styles.containerIcon}>
                    <Text style={styles.textIconCart}>{cart.length}</Text>
                    <Icon name='shopping-cart'
                        size={27}
                        color={'white'}
                        onPress={()=> setShowModal(!showModal)}></Icon>
                </View>

            </View>
            <BodyComponent>
                <FlatList
                    data={productsList}
                    renderItem={({ item }) => <CardProduct item={item} updateStock={updateStock}></CardProduct>}
                    keyExtractor={item => item.id.toString()}>
                </FlatList>

            </BodyComponent>
            <ModalCart visible={showModal}
                setShowModal={() => setShowModal(!showModal)}
                cart={cart}></ModalCart>
        </View>
    )
}


const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerIcon:{
        flex:1,
        alignItems:'flex-end',
        paddingHorizontal:30
    },
    textIconCart:{
        backgroundColor: 'white',
        paddingHorizontal:5,
        borderRadius:25,
        fontWeight:'bold',
        fontSize:12
    }
})