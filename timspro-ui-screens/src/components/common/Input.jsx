import React from "react";


export const Input = ({
  inputClass = "default-input",
  icon = false,
  onChangeHandler,
  placeholder = "",
  inputMsg = "",
  inputValue="",
  height = 40,
  width,
  msgStyles = {},
  id,
}) => {
  return (
    <>
    <div className={inputClass}>
      {/* Input prefix icon */}
      {icon ? <img src={icon} alt="" /> : null}

      <div className="input-group">
          <input
            id={id}
            type={"text"}
            placeholder={placeholder}
            onChange={onChangeHandler}
            style={{ height,width}}

          />
      </div>
      {/* Input Message */}
      {inputMsg ? (
        <div className="input-msg" style={msgStyles}>
          {inputMsg}
        </div>
      ) : null}
     
    </div>
    </>
  );
};
