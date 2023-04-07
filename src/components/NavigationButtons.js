import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const BackButton = () => {
  return (
    <button
      className="group w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white rounded-full ease-out duration-150"
      // onClick={() => window.history.back()}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.7)")}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        window.history.back();
      }}
    >
      <FaAngleLeft className="group-hover:-translate-x-1 ease-out duration-300" />
    </button>
  );
};

const ForwardButton = () => {
  return (
    <button
      className="group w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white rounded-full ease-out duration-150"
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.7)")}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        window.history.forward();
      }}
    >
      <FaAngleRight className="group-hover:translate-x-1 ease-out duration-300" />
    </button>
  );
};

export { BackButton, ForwardButton };
