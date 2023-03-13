import { useState, useEffect } from "react";
import Image from "next/image";
import { IconContext } from "react-icons";
import { FaCheck } from "react-icons/fa";

const Tip = ({ fixture, selectTeam }) => {
  console.log("fixture", fixture);
  return (
    <div className="tip | u-bg-white-100 u-mb-1 u-mx-auto | u-flex u-items-center u-justify-between">
      <div className="tip__home">
        <div>
          <input
            type="radio"
            className="u-mx-2"
            // name={fixture.fixture_id}
            // value={fixture.home_team}
            // onChange={onChange}
          />
        </div>
        <div className="tip__logo">
          IMAGE
          {/* <Image
            src={require("../../public/png/t8961_l_h15_aa.png")}
            alt="Doggies"
            // layout="fill"
            // objectFit="cover"
            // sizes="(max-width: 768px) 10vw"
            width="6rem"
            height="4.5rem"
          /> */}
        </div>
        <div className="tip__team">
          HOME TEAM
          {/* {fixture.home_team}
           */}
        </div>
      </div>

      <div className="tip__details | u-flex u-flex-col u-items-center">
        <div className="">
          {/* {fixture.day}
          {"  "}
          {dateConverter(fixture.date)} */}
          DAY DATE
        </div>
        <div>
          TIME
          {/* {fixture.time} */}
        </div>
        <div>
          STADIUM
          {/* {fixture.stadium} */}
        </div>
      </div>

      <div className="tip__away">
        <div className="tip__team">
          AWAY TEAM
          {/* {fixture.away_team} */}
        </div>
        <div className="tip__logo">
          IMAGE
          {/* <Image
            src={require("../../public/png/t8961_l_h15_aa.png")}
            alt="Doggies"
            // layout="fill"
            // objectFit="cover"
            // sizes="(max-width: 768px) 10vw"
            width="6rem"
            height="4.5rem"
          /> */}
        </div>

        <div>
          <input
            type="radio"
            className="u-mx-2"
            // name={fixture.fixture_id}
            // onChange={onChange}
            // value={fixture.away_team}
          />
        </div>
      </div>
    </div>
  );
};

export default Tip;
