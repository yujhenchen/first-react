function FunctionEvent() {
  /* function handleClick() {
    alert("button is click!");
  }
 */
  const handleClick = () => {
    alert("button is click!");
  };

  return (
    <div>
      Functional Component
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

export default FunctionEvent;
