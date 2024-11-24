const BtnSelection = ({ value, onclick, btnSelect }) => {
  return (
    <button
      onClick={() => onclick(value)}
      className={` font-semibold py-2 px-3 ${
        btnSelect === value ? "text-white" : "text-textSelect"
      }  ${btnSelect === value && "bg-textSelect"} rounded-xl`}
    >
      {value}
    </button>
  );
};
export default BtnSelection;
