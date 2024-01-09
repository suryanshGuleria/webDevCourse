import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });
  // console.log(data);
  function changeHandler(e) {
    const { name, value, checked, type } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          onChange={changeHandler}
          value={data.firstName}
        />
        <br /> <br />
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          onChange={changeHandler}
          value={data.lastName}
        />
        <br /> <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={changeHandler}
          value={data.email}
        />
        <br />
        <br />
        <textarea
          name="comments"
          cols="30"
          rows="10"
          onChange={changeHandler}
          value={data.comments}
        ></textarea>
        <br /> <br />
        <label htmlFor="isVisible">is visible:</label>
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          checked={data.isVisible}
          id="isVisible"
        />
        <br />
        <br />
        <fieldset>
          <legend>Mode:</legend>
          <label htmlFor="Online-Mode">
            <input
              type="radio"
              name="mode"
              onChange={changeHandler}
              value="Online-Mode"
              id="Online-Mode"
              checked={data.mode === "Online-Mode"}
            />
            Online-Mode
          </label>
          <label htmlFor="Offline-Mode">
            <input
              type="radio"
              name="mode"
              onChange={changeHandler}
              value="Offline-Mode"
              id="Offline-Mode"
              checked={data.mode === "Offline-Mode"}
            />
            Offline-Mode
          </label>
        </fieldset>
        <br /> <br />
        <label htmlFor="favCar">
          Pick your fav car{` `}
          <select
            name="favCar"
            id="favCar"
            onChange={changeHandler}
            value={data.favCar}
          >
            <option value="">-</option>
            <option value="mustang">mustang</option>
            <option value="safari">safari</option>
            <option value="scorpio">scorpio</option>
            <option value="brezza">brezza</option>
          </select>
        </label>
        <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
