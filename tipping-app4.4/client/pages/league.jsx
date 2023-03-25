import TableLeague from "../components/UI/TableLeague";
import { iconConverter } from "../components/UI/Converter";
import useFetch from "../hooks/useFetch.js";

const league = () => {
  // GET ALL TIPS
  return (
    <div>
      <div className="container | u-py-5 | u-grid u-even-columns">
        <TableLeague />
        <div className="u-mb-auto ">
          <div className="u-bg-white-0 u-py-4 u-px-4">
            <div className="u-mb-3">
              <h3>Most consecutive wins:</h3>
              <p>Storm</p>
            </div>
            <div className="u-mb-3">
              <h3>Most consecutive losses:</h3>
              <p>Titans</p>
            </div>
            <div className="u-mb-3">
              <h3>Highest points scored in game:</h3>
              <p>Home Team Points v Away Team Points</p>
            </div>
            <div className="u-mb-3">
              <h3>Lowest points scored in game:</h3>
              <p>Home Team Points v Away Team Points</p>
            </div>
            <div className="u-mb-3">
              <h3>Biggest win:</h3>
              <p>Home Team Points v Away Team Points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default league;
