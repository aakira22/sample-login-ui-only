import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="Title">
        <h1>Login Here</h1>
      </div>

      <div className="Username">
        <p>
          Username:
          <input type="text" />{" "}
        </p>
      </div>

      <div className="Password">
        <p>
          Password:
          <input type="password" />{" "}
        </p>
      </div>

      <div className="Submit">
        <button>Submit</button>
      </div>
    </div>
  );
}
