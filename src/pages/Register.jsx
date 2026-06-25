import Navbar from "../components/Navbar";

function Register() {
  return (
    <>
      <Navbar />

      <div>
        <h1 className="form-title">
          Create Your Account
        </h1>

        <form>
          <input
            type="text"
            placeholder="Full Name"
          />

          <br /><br />

          <input
            type="email"
            placeholder="Email"
          />

          <br /><br />

          <input
            type="password"
            placeholder="Password"
          />

          <br /><br />

          <button type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;