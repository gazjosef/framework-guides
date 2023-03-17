import Link from "next/link";
import TableComp from "../components/UI/TableComp";
import TableLeague from "../components/UI/TableLeague";

const table = () => {
  return (
    <div>
      <div className="container">
        <section className="u-py-5">
          <Link href="/tips">
            <button className="btn | u-bg-secondary-200 u-mt-2 | u-flex u-items-center u-justify-between | u-clr-white-0">
              <h3 className="u-ml-0-5">Tip Now</h3>
            </button>
          </Link>
        </section>
      </div>
      <div className="container | u-py-5 | u-flex u-justify-between">
        <TableComp />
        <TableLeague />
      </div>
    </div>
  );
};

export default table;
