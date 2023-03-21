const Register = () => {
  return (
    <form action="" className="form">
      <div className="form__group">
        <h2 className="secondary-heading">Login</h2>
      </div>
      <div className="form__group">
        <input
          type="email"
          className="form__control"
          id="email"
          name="email"
          // value={email}
          placeholder="Enter your email"
          // onChange={onChange}
          autoComplete="on"
        />
      </div>

      <div className="form__group">
        <input
          type="password"
          className="form__control"
          id="password"
          name="password"
          // value={password}
          placeholder="Enter password"
          // onChange={onChange}
          autoComplete="on"
        />
      </div>

      <div className="form__group">
        <p>Sign Up?</p>
      </div>

      <div className="form__group">
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Register;