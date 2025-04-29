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
    
    if(lastOperation.current){
      const firstPartFormula = formula.split(" ").at(0)
      setFormula(`${firstPartFormula} ${lastOperation.current} ${numberView}`);
    }else{
      setFormula(numberView);
    }

  }, [numberView]);


  useEffect(() => {
    const subResult = calculate();
    setPreviousNumber(subResult.toString());
  }, [formula]);

  
  const calculate = () =>{
    const [firstNumber, operator, secondNumber] = formula.split(" ");
    
    const firstNumberParsed = Number(firstNumber);
    const secondNumberParsed = Number(secondNumber);

    if(isNaN(secondNumberParsed)) return firstNumberParsed;

    switch(operator){
      case Operator.add:
        return firstNumberParsed + secondNumberParsed;
      case Operator.substract:
        return firstNumberParsed - secondNumberParsed;
      case Operator.multiply:
        return firstNumberParsed * secondNumberParsed;
      case Operator.divide:
        return firstNumberParsed / secondNumberParsed;
      default:
        throw new Error(`Invalid operator: ${operator}`);
    }
  }

  const setLasNumber = () =>{
    caclulateResult();

    if(numberView.endsWith(".")){
      setPreviousNumber(numberView.slice(0,-1));
    }

    setPreviousNumber(numberView);
    setNumber('0');
  }

  const divideOperator = () =>{
    setLasNumber();
    lastOperation.current = Operator.divide;
  }

  const multiplyOperator = () =>{
    setLasNumber();
    lastOperation.current = Operator.multiply;
  }

  const substractOperator = () =>{
    setLasNumber();
    lastOperation.current = Operator.substract;
  }

  const addOperator = () =>{
    setLasNumber();
    lastOperation.current = Operator.add;
  }

  const cleanNumber = () =>{
    setNumber('0');
    setPreviousNumber('0');
    setFormula('0');
    lastOperation.current = undefined;
  }

  const deleteLastNumber = () =>{ 
    if(numberView.length ===  1) return setNumber("0");
    if(numberView.includes("-0")) return;
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

    setNumber(numberView + inputNumber);
    
  }

  const caclulateResult = () =>{
    const result = calculate();
    setFormula(result.toString());
    setPreviousNumber('0');
    lastOperation.current = undefined;
  }

  return{
    //Propiedades
    formula,
    numberView,
    previousNumber,

    //Metodos
    buildNumber,
    cleanNumber,
    deleteLastNumber,
    toogleSign,
    divideOperator,
    multiplyOperator,
    substractOperator,
    addOperator,
    calculate,
    caclulateResult,

  }
};

