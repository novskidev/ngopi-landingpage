import arrowIcon from "../image/icon/ArrowDownRight.png";

function Button(props) {
  const { children } = props;

  return (
    <div className="py-5 px-11 text-lg text-white font-normal rounded-tr-3xl rounded-bl-3xl bg-primary">
      <a href="#">
        <button className={`flex flex-row gap-3`}>
          {children}
          <img src={arrowIcon} width={25} height={25} alt="" />
        </button>
      </a>
    </div>
  );
}

export default Button;
