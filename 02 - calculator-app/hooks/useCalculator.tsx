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

/**
 * @summary Hook personalizado para gestionar la lógica de la calculadora.
 */
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


  /**
   * @summary Realiza el cálculo basado en la fórmula actual.
   * @returns {number} El resultado del cálculo.
   */
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

  /**
   * @summary Prepara el estado para la siguiente operación, moviendo el número actual al número previo.
   * Nota: Hay un posible error tipográfico en el nombre, debería ser `setLastNumber`.
   */
  const setLasNumber = () =>{
    caclulateResult(); // Considera si esta llamada es necesaria aquí o si debe ser parte de la lógica del operador.

    if(numberView.endsWith(".")){
      setPreviousNumber(numberView.slice(0,-1));
    } else { // Añadido else para evitar sobreescribir si no termina en "."
        setPreviousNumber(numberView);
    }

    // setPreviousNumber(numberView); // Esta línea parece redundante o incorrecta si la condición anterior se cumple.
    setNumber('0');
  }

  /**
   * @summary Establece el operador de división y prepara para el siguiente número.
   */
  const divideOperator = () =>{
    setLasNumber();
    lastOperation.current = Operator.divide;
  }

  /**
   * @summary Establece el operador de multiplicación y prepara para el siguiente número.
   */
  const multiplyOperator = () =>{
    setLasNumber();
    lastOperation.current = Operator.multiply;
  }

  /**
   * @summary Establece el operador de resta y prepara para el siguiente número.
   */
  const substractOperator = () =>{
    setLasNumber();
    lastOperation.current = Operator.substract;
  }

  /**
   * @summary Establece el operador de suma y prepara para el siguiente número.
   */
  const addOperator = () =>{
    setLasNumber();
    lastOperation.current = Operator.add;
  }

  /**
   * @summary Resetea todos los estados de la calculadora a sus valores iniciales.
   */
  const cleanNumber = () =>{
    setNumber('0');
    setPreviousNumber('0');
    setFormula('0');
    lastOperation.current = undefined;
  }

  /**
   * @summary Elimina el último dígito del número actual en pantalla.
   */
  const deleteLastNumber = () =>{
    if(numberView.length ===  1 || (numberView.startsWith('-') && numberView.length === 2)) return setNumber("0"); // Modificado para manejar negativos
    // if(numberView.includes("-0")) return; // Esta condición parece innecesaria con la lógica actual
    return setNumber(numberView.slice(0,-1));
  }


  /**
   * @summary Cambia el signo del número actual en pantalla (positivo/negativo).
   */
  const toogleSign = () =>{
    if(numberView === '0') return; // Evita cambiar el signo de cero
    if(numberView.includes("-")){
      return setNumber(numberView.slice(1));
    }

    return setNumber("-" + numberView);
  }

  /**
   * @summary Construye el número actual añadiendo dígitos o un punto decimal.
   * @param {string} inputNumber El dígito o punto a añadir.
   */
  const buildNumber = (inputNumber: string) =>{

    //Verificar si el numero ya tiene un punto
    if(numberView.includes(".") && inputNumber === ".") return;


    // Verifica si el número actual comienza con 0 o -0
    if(numberView.startsWith('0') || numberView.startsWith('-0')){

      // Si se presiona el punto decimal, lo agrega al número actual
      if(inputNumber === "."){
        // Si es "-0", reemplaza con "-0."
        if (numberView === '-0') return setNumber('-0.');
        return setNumber(numberView + inputNumber);
      }

      // Si se presiona 0 y ya hay un punto decimal, permite agregar más ceros
      if(inputNumber === "0" && numberView.includes(".")){
        return setNumber(numberView + inputNumber);
      }

      // Si no hay punto decimal y se presiona 0 (y el número actual es 0 o -0), no hace nada
      if(!numberView.includes(".") && inputNumber === "0" && (numberView === '0' || numberView === '-0')) return;

      // Si no hay punto decimal y se presiona un número distinto de 0, reemplaza el 0 inicial (o -0)
      if(!numberView.includes(".") && inputNumber !== "0"){
         // Si es "-0", reemplaza con "-" + inputNumber
         if (numberView === '-0') return setNumber('-' + inputNumber);
         // Si es "0", reemplaza con inputNumber
         if (numberView === '0') return setNumber(inputNumber);
      }

      // Si se llega aquí con 0 o -0 y un punto, simplemente añade el número
      // (Esta condición cubre el caso después de ingresar "0." o "-0.")
      if(numberView.includes('.')) {
         return setNumber(numberView + inputNumber);
      }

    }
    // Añade el número si no empieza con 0 o -0 (o si ya se manejó el reemplazo)
    setNumber(numberView + inputNumber);

  }

  /**
   * @summary Calcula el resultado final de la operación y actualiza el estado.
   * Nota: Hay un posible error tipográfico en el nombre, debería ser `calculateResult`.
   */
  const caclulateResult = () =>{
    const result = calculate();
    setFormula(result.toString());
    setPreviousNumber('0'); // Resetea el número previo después de calcular
    setNumber(result.toString()); // Muestra el resultado en la vista principal
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
    caclulateResult,

  }
};

