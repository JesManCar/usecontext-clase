import { useLanguage } from "./LanguageContext";

const Greeting = () => {
  const { language } = useLanguage();

  const greetings = {
    es: "¡Hola!",
    en: "Hello!",
    fr: "Bonjour!"
  };
    return (
        <div>
        <h1>{greetings[language]}</h1>
        </div>
    );  
}

export default Greeting;