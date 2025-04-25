import { useState } from "react";
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

  const [formula, setFormula] = useState<string>('');
  const [number, setNumber] = useState<string>('0');
  const [previousNumber, setPreviousNumber] = useState<string>('0');

    
};

