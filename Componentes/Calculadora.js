import {View,TouchableOpacity  } from 'react-native'
import React , { useState }  from 'react'
import { Boton, Caja } from './Atomicos'
import { estilos } from './Estilos'

export const Calculadora = () => {
  const [pantalla, setPantalla] = useState('');

  const manejarPulsacion = (valor) => {
    if (valor === '=') {
      // Calcular el resultado al presionar "="
      calcularResultado();
    } else if (valor === 'ce') {
      // Limpiar la pantalla al presionar "ce"
      setPantalla('');
    } else if (valor === '<-') {
      // Eliminar el último carácter al presionar "<-"
      setPantalla((prevPantalla) => prevPantalla.slice(0, -1));
    } else {
      // Concatenar el valor al final de la pantalla
      setPantalla((prevPantalla) => prevPantalla + valor);
    }
  };

  const calcularResultado = () => {
    try {
      const resultado = eval(pantalla);
      setPantalla(resultado.toString());
    } catch (error) {
      setPantalla('Error');
    }
  };
  return (
    <View>
      <View>
        <Caja valor={'55'}/>
      </View>
      <View style={estilos.botonescontainer}>
        <Boton texto={' ce'}/>
        <Boton texto={' c '}/>
        <Boton texto={' <-'}/>
        <Boton texto={'1/x'}/>
        <Boton texto={'x² '}/>
        <Boton texto={' R '}/>
        <Boton texto={' / '}/>
        <Boton texto={'  7 '}/>
        <Boton texto={'  8 '}/>
        <Boton texto={' 9 '}/>
        <Boton texto={' * '}/>
        <Boton texto={'  4 '}/>
        <Boton texto={'  5 '}/>
        <Boton texto={' 6 '}/>
        <Boton texto={'  - '}/>
        <Boton texto={'  1 '}/>
        <Boton texto={'  2 '}/>
        <Boton texto={' 3 '}/>
        <Boton texto={' + '}/>
        <Boton texto={'+/-'}/>
        <Boton texto={'  0 '}/>
        <Boton texto={'  . '}/>
        <Boton texto={' = '}/>
      </View>
    </View>
  )
}


