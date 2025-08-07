import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const gender = e.target.gender.value;

    const userData = { name, email, password, gender };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("User data saved to localStorage!");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
        </div>

        <div>
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
        </div>

        <div>
          <label>
            Gender:
            <select name="gender" required>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default App;
