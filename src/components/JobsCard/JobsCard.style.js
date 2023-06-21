import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    container: {
        flex:1,
        margin: 7,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        backgroundColor: 'white',
        borderColor: '#dcdcdc'
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    company: {
        fontSize: 16
    },
    inner_container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    level: {
        margin: 15,
        paddingTop: 15,
        left: 5,
        color: '#EF5350',
        fontWeight: 'bold',
        fontSize: 14,
    },
    location: {
       backgroundColor: '#EF5350',
       borderRadius: 20,
       alignSelf: 'baseline',
       color: 'white',
       fontWeight: 'bold',
       paddingLeft: 10,
       paddingRight: 10,
       fontSize: 15,
       padding: 3

        
    }

})