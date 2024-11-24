import { useState } from "react";
import BtnSelection from "./BtnSelection";
import ButtonIcons from "../components/ButtonIcons";
import TopLeftIcon from "../icons/TopLeftIcon";
const languages = {
  Spanish: "es",
  English: "en",
  French: "fr",
  German: "de",
  Italian: "it",
  Portuguese: "pt",
  Russian: "ru",
  Japanese: "ja",
  Chinese: "zh",
  Arabic: "ar",
  Korean: "ko",
  Hindi: "hi",
  Turkish: "tr",
  Dutch: "nl",
  Swedish: "sv",
  Polish: "pl",
  Czech: "cs",
  Danish: "da",
  Finnish: "fi",
  Greek: "el",
  Dectect: "mt",
};
const languageNames = [
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Russian",
  "Japanese",
  "Chinese",
  "Arabic",
  "Korean",
  "Hindi",
  "Turkish",
  "Dutch",
  "Swedish",
  "Polish",
  "Czech",
  "Danish",
  "Finnish",
  "Greek",
];
const HeaderSelection = ({ translate }) => {
  const [btnSelect, setBtnSelect] = useState(translate ? "English" : "Spanish");

  function handelClick(value) {
    setBtnSelect(value);
  }
  function handelChange(e) {
    const value = e.target.value;
    console.log(value);
    setBtnSelect(value);
  }
  return (
    <header className="flex justify-between  pb-4 mb-5 border-b border-b-textSelect/40">
      <div className="gap-3 flex">
        {translate && (
          <BtnSelection
            btnSelect={btnSelect}
            value={"Dectect"}
            onclick={handelClick}
          />
        )}
        <BtnSelection
          btnSelect={btnSelect}
          value={"English"}
          onclick={handelClick}
        />
        <BtnSelection
          btnSelect={btnSelect}
          value={"Spanish"}
          onclick={handelClick}
        />
        <select
          onChange={handelChange}
          name="language"
          className={`${
            btnSelect === "Dectect" ||
            btnSelect === "Spanish" ||
            btnSelect === "English"
              ? "bg-transparent text-textSelect"
              : "bg-textSelect text-white"
          } rounded-lg px-2  focus:bg-textSelect focus:text-white`}
        >
          {languageNames.map((language, idx) => (
            <option
              key={idx}
              value={language}
            >
              {language}
            </option>
          ))}
        </select>
      </div>
      {!translate && (
        <ButtonIcons>
          <TopLeftIcon />
        </ButtonIcons>
      )}
    </header>
  );
};
export default HeaderSelection;
