
import "../global.css";
import { Link, Redirect } from 'expo-router';
export default function App() {

  // Las carpetas encerradas con paréntesis en una aplicación de Expo Router (por ejemplo, `(auth)` o `(tabs)`) 
  // se utilizan para agrupar rutas sin que estas afecten la estructura de las URLs. 
  // Esto permite organizar mejor los archivos de rutas sin que el nombre de la carpeta aparezca en la URL final.
  // Por ejemplo, si tienes una carpeta llamada `(auth)` y dentro de ella un archivo `login.tsx`,
  // la URL final será `/login` y no `/auth/login`.
  
  return <Redirect href="/home" />

}
