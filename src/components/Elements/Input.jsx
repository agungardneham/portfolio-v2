const Input = ({ type, name, id, classname, onChange, checked }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={classname}
      onChange={onChange}
      defaultChecked={checked}
    />
  );
};

export default Input;
