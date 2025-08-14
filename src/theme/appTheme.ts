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
    }
});

