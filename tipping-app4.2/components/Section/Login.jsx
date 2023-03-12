const Login = () => {
  return (
    <section>
      <form action="" className="form">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            // value={email}
            placeholder="Enter your email"
            // onChange={onChange}
            autoComplete="on"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            // value={password}
            placeholder="Enter password"
            // onChange={onChange}
            autoComplete="on"
          />
        </div>
        <p>Sign Up?</p>

        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
