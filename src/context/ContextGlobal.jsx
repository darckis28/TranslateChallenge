import { createContext, useState } from "react";
import getTranslate from "../services/translate";
import { languages } from "../data/lenguajes";

export const Context = createContext(null);
const ContextGlobal = ({ children }) => {
  const [fristLanguage, setFristLanguage] = useState("English");
  const [secondLanguage, setSecondLanguage] = useState("Spanish");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  function translateText() {
    if (text === "" || fristLanguage === secondLanguage) return;
    getTranslate(
      languages[fristLanguage],
      languages[secondLanguage],
      text
    ).then((data) => setResult(data.translation));
  }

  return (
    <Context.Provider
      value={{
        fristLanguage,
        setFristLanguage,
        secondLanguage,
        setSecondLanguage,
        text,
        setText,
        result,
        setResult,
        translateText,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextGlobal;
