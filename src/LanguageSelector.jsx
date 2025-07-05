import { useLanguage } from "./LanguageContext";

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLang) => {
    changeLanguage(newLang);
    }

  return (
    <div>
      <h2>Current Language: {language}</h2>
      <select value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
        <option value="es">Spanish</option>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
}

export default LanguageSelector;