import Link from "next/link";

const Demo = () => {
  return (
    <form action="" className="form">
      <div className="form__group">
        <h2 className="u-mb-2 u-uppercase">Demo</h2>
      </div>
      <div>
        <div className="form__group">
          <p>Enter with guest account</p>
        </div>
        <div className="form__group">
          <Link href="/tips">
            <button className="btn btn--cta">Enter</button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Demo;
