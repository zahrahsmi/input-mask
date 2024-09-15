/* eslint-disable react/prop-types */
const Input = ({ handleChange, inputValue, hint }) => {
  return (
    <div className="input">
      <label htmlFor="input">{inputValue ? hint : "enter a city"}</label>
      <input
        type="text"
        id="input"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
