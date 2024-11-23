const Button = ({ children }) => {
  return (
    <div className="bg-button inline-flex py-2 px-4 border-borderButton border hover:bg-hoverButton rounded-lg text-white font-bold items-center gap-2 cursor-pointer">
      {children}
    </div>
  );
};
export default Button;
