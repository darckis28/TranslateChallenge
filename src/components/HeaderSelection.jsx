import BtnSelection from "./BtnSelection";
import ButtonIcons from "../components/ButtonIcons";
import TopLeftIcon from "../icons/TopLeftIcon";
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
const HeaderSelection = ({ translate, lenguage, setLenguage, reverse }) => {
  function handelClick(value) {
    setLenguage(value);
  }
  function handelChange(e) {
    const value = e.target.value;
    setLenguage(value);
  }
  return (
    <header className="flex justify-between  pb-4 mb-5 border-b border-b-textSelect/40">
      <div className="gap-3 flex">
        {translate && (
          <BtnSelection
            btnSelect={lenguage}
            value={"Dectect"}
            onclick={handelClick}
          />
        )}
        <BtnSelection
          btnSelect={lenguage}
          value={"English"}
          onclick={handelClick}
        />
        <BtnSelection
          btnSelect={lenguage}
          value={"Spanish"}
          onclick={handelClick}
        />
        <select
          onChange={handelChange}
          name="language"
          className={`${
            lenguage === "Dectect" ||
            lenguage === "Spanish" ||
            lenguage === "English"
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
        <ButtonIcons onclick={reverse}>
          <TopLeftIcon />
        </ButtonIcons>
      )}
    </header>
  );
};
export default HeaderSelection;
