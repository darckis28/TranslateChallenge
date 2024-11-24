import Button from "./Button";
import SortAlfaIcon from "../icons/SortAlfaIcon";
import SoundIcon from "../icons/SoundIcon";
import CopyIcon from "../icons/CopyIcon";
import ButtonIcons from "./buttonIcons";
const Box = () => {
  return (
    <div className="bg-bgBox/60 backdrop-blur-md border border-textSelect rounded-lg py-5 px-4  ">
      <div className="relative mb-4">
        <textarea className="w-full bg-transparent min-h-48 outline-none text-white resize-none"></textarea>
        <span className="absolute bottom-0 right-0 text-xs text-textSelect ">
          0/500
        </span>
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
        <Button>
          <span>
            <SortAlfaIcon />
          </span>
          <span>Translate</span>
        </Button>
      </div>
    </div>
  );
};
export default Box;
