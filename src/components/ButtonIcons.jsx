const ButtonIcons = ({ children, onclick }) => {
  return (
    <button
      onClick={onclick}
      className=" border-2 border-textSelect p-1 rounded-xl"
    >
      {children}
    </button>
  );
};
export default ButtonIcons;
