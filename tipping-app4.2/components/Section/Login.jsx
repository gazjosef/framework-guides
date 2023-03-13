const Login = () => {
  return (
    <form action="" className="form">
      <div>
        <div className="form__group">
          <h2 className="u-mb-2 u-uppercase">Login</h2>
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
      </div>

      <div>
        <div className="form__group">
          <p>
            Don&rsquo;t have an account? <a href="">Sign Up here.</a>
          </p>
        </div>

        <div className="form__group">
          <button type="submit" className="btn btn-block">
            Enter
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
