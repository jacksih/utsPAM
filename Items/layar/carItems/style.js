import { StyleSheet, Dimensions} from "react-native-web";

const styles = StyleSheet.create({

    carContainer:{
        width: '100%',
        height: Dimensions.get('window').height,
      },
    
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
    
      title: {
        fontSize: 50,
        fontWeight: '600',
      },
    
      subTitle:{
        fontSize: 16,
        color: '#5c5e62',
      },

      subTitleCTA:{
        fontSize: 16,
        color: '#5c5e62',
        textDecorationLine: 'underline',
      },
    
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },

      buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
      }

})

export default styles;