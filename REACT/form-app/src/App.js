import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "india",
    notificationFor: "",
    comments: false,
    candidates: false,
    offers: false,
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
    <div className="container">
      <div className="wrapper">
        <form onSubmit={submitHandler}>
          <label htmlFor="firstName">
            First name
            <br />
            <input
              type="text"
              className="textfield"
              name="firstName"
              id="firstName"
              placeholder="first name"
              onChange={changeHandler}
              value={data.firstName}
            />
          </label>
          <br /> <br />
          <label htmlFor="lastName">
            Last name
            <br />
            <input
              type="text"
              className="textfield"
              name="lastName"
              id="lastName"
              placeholder="last name"
              onChange={changeHandler}
              value={data.lastName}
            />
          </label>
          <br /> <br />
          <label htmlFor="email">
            Email
            <br />
            <input
              type="email"
              className="textfield"
              name="email"
              id="email"
              placeholder="email"
              onChange={changeHandler}
              value={data.email}
            />
          </label>
          <br />
          <br />
          <label htmlFor="country">
            Country
            <br />
            <select
              name="country"
              className="textfield"
              id="country"
              onChange={changeHandler}
              value={data.country}
            >
              <option value="india">India</option>
              <option value="nepal">Nepal</option>
              <option value="usa">USA</option>
            </select>
          </label>
          <br /> <br />
          {/* handling checkbox */}
          <div className="checkboxes">
            <h2>By Email</h2>
            <input
              type="checkbox"
              name="comments"
              checked={data.comments}
              id="comments"
              onChange={changeHandler}
            />
            <label htmlFor="comments">Comments</label>

            <br />
            <input
              type="checkbox"
              name="candidates"
              checked={data.candidates}
              id="candidates"
              onChange={changeHandler}
            />
            <label htmlFor="candidates">Candidates</label>

            <br />
            <input
              type="checkbox"
              name="offers"
              checked={data.offers}
              id="offers"
              onChange={changeHandler}
            />
            <label htmlFor="offers">Offers</label>
          </div>
          <br />
          <br />
          {/* handling radio buttons */}
          <div className="notification">
            <h2>Push Notifications</h2>
            <p>These are delivered via sms</p>
            <label htmlFor="everything">everything</label>
            <input
              type="radio"
              name="notificationFor"
              onChange={changeHandler}
              value="everything"
              id="everything"
              checked={data.notificationFor === "everything"}
            />
            <br />
            <label htmlFor="same-as-email">Same as email</label>
            <input
              type="radio"
              name="notificationFor"
              onChange={changeHandler}
              value="same-as-email"
              id="same-as-email"
              checked={data.notificationFor === "same-as-email"}
            />
            <br />
            <label htmlFor="no-notification">No push notification</label>
            <input
              type="radio"
              name="notificationFor"
              onChange={changeHandler}
              value="no-notification"
              id="no-notification"
              checked={data.notificationFor === "no-notification"}
            />
          </div>
          <br /> <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
