import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    overlay: {
        margin: 20,
        borderRadius: 12,
        padding: 25,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
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
    textRedirect:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ccc',
        textAlign: 'center',
        marginTop: 25
    },
    containerModal:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modal:{
        padding: 15,
        backgroundColor:'white',
        borderRadius:10
    },
    headerModal:{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10
    },
    containerIconModal:{
        flex: 1,
        alignItems: 'flex-end'
    },
    titleModal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#251f48'
    },
    imageModal: {
        width: 160,
        height: 160
    },
    containerQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantity: {
        height: 50,
        width: 50,
        backgroundColor: '#251f48',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        borderRadius: 25
    },
    buttonQuantityText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantity: {
        fontSize: 18,
    },
    buttonAddCart: {
        backgroundColor: '#e93758',
        marginTop: 15,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 5
    },
    buttonAddCartText: {
        color: 'white',
        fontWeight: 'bold'
    },
    textStock:{
        fontSize: 18,
        color: '#992E2E',
        textAlign:'center',
        fontWeight:'bold',
        marginTop: 5
    }
});

