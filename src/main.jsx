/* eslint-disable react/prop-types */
const Input = ({ handleChange, inputValue, hint }) => {
  return (
    <div className="input">
      <label htmlFor="input">{inputValue && hint}</label>
      <input
        type="text"
        id="input"
        value={inputValue}
        onChange={handleChange}
        placeholder="enter a city"
      />
    </div>
  );
};

export default Input;
