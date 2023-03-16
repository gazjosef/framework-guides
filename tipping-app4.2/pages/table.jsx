import Link from "next/link";
import TableComp from "../components/UI/TableComp";
import TableLeague from "../components/UI/TableLeague";

const table = () => {
  return (
    <div>
      <div className="container | u-py-5 | u-flex u-justify-between">
        <div>
          <TableComp />
          <Link href="/tips">
            <button className="btn | u-mt-2 | u-flex u-items-center u-justify-between">
              <h3 className="u-ml-0-5">Tip Now</h3>
            </button>
          </Link>
        </div>
        <TableLeague />
      </div>
    </div>
  );
};

export default table;
