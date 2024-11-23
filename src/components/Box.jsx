import Button from "./Button";
import SortAlfaIcon from "../icons/SortAlfaIcon";
const Box = () => {
  return (
    <div className="bg-bgBox/60 backdrop-blur-md border border-textSelect rounded-lg py-2 px-4 ">
      <div className="relative">
        <textarea className="w-full bg-transparent min-h-48 outline-none text-white resize-none"></textarea>
        <span className="absolute bottom-0 right-0 text-xs text-textSelect ">
          0/500
        </span>
      </div>
      <Button>
        <span>
          <SortAlfaIcon />
        </span>
        <span>Translate</span>
      </Button>
    </div>
  );
};
export default Box;
