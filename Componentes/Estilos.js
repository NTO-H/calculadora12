import { StyleSheet } from "react-native";

export const estilos=StyleSheet.create({
    //Estilos del boton
    boton:{
      
  
        backgroundColor:'#89a0a4',
       
        borderBottomColor:'#050404',
        color:'#000000',

        padding:5,
        borderRadius:9,
        textAlign:'center',
        borderColor:'black',
        borderWidth:4,
        flexDirection:'row',
      },
      textoB:{
        color:'white',
        fontSize:20,
       
      },
      logoB:{
        height:50,
        width:33,
        marginRight:7
      },
    //Estilos de la caja
    boxContainer:{

        borderBottomColor:'#fefefe',
        backgroundColor:'hsla(210, 100.00%, 95.30%, 0.52)',
        borderWidth:2,
        borderRadius:5,
 
        marginTop:60,
        height:70,
        margin:24,
        alignItems:'flex-end',
        justifyContent:'center',
        padding:2
    },
    TextBox:{
        fontSize:60
    },
    //estilo de contenedor de los botones
    botonescontainer:{
   
      margin:4,
        padding:10,
        flexDirection:'row',
        flexWrap:'wrap'
    }
})