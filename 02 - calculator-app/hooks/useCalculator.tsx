import { useEffect, useState } from "react";
import { useRef } from "react";

/**
 * Enum que define los operadores matemáticos disponibles en la calculadora.
 * Un enum es un tipo de dato que permite definir un conjunto de constantes con nombre.
 * En este caso, cada operador está asociado a su símbolo correspondiente.
 */
enum Operator{
    add = "+",
    substract = "-",
    multiply = "x",
    divide = "/",
}

export const useCalculator = () => {
  
  // useRef es un hook de React que permite mantener una referencia mutable que persiste entre renderizados
  // A diferencia de useState, los cambios en useRef no provocan re-renderizados
  // En este caso, lo usamos para almacenar la última operación realizada sin causar re-renderizados innecesarios
  const lastOperation = useRef<Operator>();

  const [formula, setFormula] = useState<string>('0');
  const [numberView, setNumber] = useState<string>('0');
  const [previousNumber, setPreviousNumber] = useState<string>('0');

  useEffect(() => {
    setFormula(numberView);
  }, [numberView]);

  const cleanNumber = () =>{
    setNumber('0');
    setPreviousNumber('0');
    setFormula('0');
    lastOperation.current = undefined;
  }

  const deleteLastNumber = () =>{ 
    if(numberView.length ===  1) return setNumber("0");
    return setNumber(numberView.slice(0,-1));
  }

  const toogleSign = () =>{
    if(numberView.includes("-")){
      return setNumber(numberView.slice(1));
    }

    return setNumber("-" + numberView);
  }

  const buildNumber = (inputNumber: string) =>{

    

    //Verificar si el numero ya tiene un punto
    if(numberView.includes(".") && inputNumber === ".") return;

    
    // Verifica si el número actual comienza con 0 o -0
    if(numberView.startsWith('0') || numberView.startsWith('-0')){

      if(inputNumber === "+/-"){
        toogleSign();
        return;
      }
      
      // Si se presiona el punto decimal, lo agrega al número actual
      if(inputNumber === "."){
        return setNumber(numberView + inputNumber);
      }

      // Si se presiona 0 y ya hay un punto decimal, permite agregar más ceros
      if(inputNumber === "0" && numberView.includes(".")){
        return setNumber(numberView + inputNumber);
      }

      // Si no hay punto decimal y se presiona 0, no hace nada para evitar ceros a la izquierda
      if(!numberView.includes(".") && inputNumber === "0") return;

      // Si no hay punto decimal y se presiona un número distinto de 0, reemplaza el 0 inicial
      if(!numberView.includes(".") && inputNumber != "0" && inputNumber != "Del" && inputNumber != "C" && inputNumber != "+/-" 
      && inputNumber != Operator.add && inputNumber != Operator.substract && inputNumber != Operator.multiply && inputNumber != Operator.divide){
        return setNumber(inputNumber);
      }

    }

    //Eliminar el ultimo numero
    if(inputNumber === "Del"){
      deleteLastNumber();
      return;
    }

    //Limpiar todos los numeros
    if(inputNumber === "C"){
      cleanNumber();
      return;
    }

    //Cambiar el signo del numero
    if(inputNumber === "+/-"){
      toogleSign();
      return;
    }
    
    setNumber(numberView + inputNumber);
    
  }

  return{
    //Propiedades
    formula,
    numberView,
    previousNumber,

    //Metodos
    buildNumber,

  }
};

