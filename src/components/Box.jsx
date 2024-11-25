import Button from "./Button";
import SortAlfaIcon from "../icons/SortAlfaIcon";
import SoundIcon from "../icons/SoundIcon";
import CopyIcon from "../icons/CopyIcon";
import ButtonIcons from "./ButtonIcons";
import HeaderSelection from "./HeaderSelection";
import { useContextGlob } from "../hooks/useContextGlob";
const Box = ({ translate }) => {
  const {
    text,
    setText,
    result,
    fristLanguage,
    setFristLanguage,
    secondLanguage,
    setSecondLanguage,
    translateText,
  } = useContextGlob();
  const handelOnchange = (e) => {
    if (e.target.value.length <= 500) {
      setText(e.target.value);
    }
  };
  return (
    <div className="bg-bgBox/80 backdrop-blur-md border border-textSelect rounded-3xl py-5 px-4 xl:min-w-[480px] ">
      <HeaderSelection
        translate={translate}
        lenguage={translate ? fristLanguage : secondLanguage}
        setLenguage={translate ? setFristLanguage : setSecondLanguage}
      />
      <div className="relative mb-4">
        <textarea
          onChange={translate && handelOnchange}
          value={translate ? text : result}
          disabled={!translate}
          className="w-full bg-transparent min-h-40 outline-none text-white resize-none"
        ></textarea>
        {translate && (
          <span className="absolute bottom-0 right-0 text-xs text-textSelect ">
            {text.length}/500
          </span>
        )}
      </div>
      <div className="flex justify-between items-end">
        <div className="flex gap-3">
          <ButtonIcons>
            <SoundIcon />
          </ButtonIcons>
          <ButtonIcons>
            <CopyIcon />
          </ButtonIcons>
        </div>
        {translate && (
          <Button onClick={translateText}>
            <span>
              <SortAlfaIcon />
            </span>
            <span>Translate</span>
          </Button>
        )}
      </div>
    </div>
  );
};
export default Box;
