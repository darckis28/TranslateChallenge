import Button from "./Button";
import SortAlfaIcon from "../icons/SortAlfaIcon";
import SoundIcon from "../icons/SoundIcon";
import CopyIcon from "../icons/CopyIcon";
import ButtonIcons from "./buttonIcons";
import HeaderSelection from "./HeaderSelection";
const Box = ({ translate }) => {
  return (
    <div className="bg-bgBox/80 backdrop-blur-md border border-textSelect rounded-3xl py-5 px-4  ">
      <HeaderSelection translate={translate} />
      <div className="relative mb-4">
        <textarea className="w-full bg-transparent min-h-40 outline-none text-white resize-none"></textarea>
        {translate && (
          <span className="absolute bottom-0 right-0 text-xs text-textSelect ">
            0/500
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
          <Button>
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
