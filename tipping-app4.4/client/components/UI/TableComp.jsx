import Image from "next/image";
import React from "react";
import { iconConverter } from "./Converter";

const TableComp = () => {
  const compMembers = [
    {
      team: "Knights",
      name: "Michael Jones",
      wins: 131,
      perfect: 2,
    },
    {
      team: "Sea Eagles",
      name: "John Smith",
      wins: 128,
      perfect: 1,
    },

    {
      team: "Rabbitohs",
      name: "Tom Williams",
      wins: 114,
      perfect: 0,
    },
    {
      team: "Sharks",
      name: "Peter Wilson",
      wins: 114,
      perfect: 0,
    },
    {
      team: "Panthers",
      name: "Emma Brown",
      wins: 91,
      perfect: 0,
    },
    {
      team: "Tigers",
      name: "David Johnson",
      wins: 84,
      perfect: 0,
    },
    {
      team: "Roosters",
      name: "Jane Doe",
      wins: 75,
      perfect: 0,
    },
  ];

  return (
    <section>
      <h2 className="secondary-heading | u-mb-1">Comp Table</h2>
      <table className="table table__striped |">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Team</th>
            <th scope="col">W</th>
            <th scope="col">P</th>
            <th scope="col">Pts</th>
          </tr>
        </thead>
        <tbody>
          {compMembers.map((member, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{member.name}</td>
                <td>
                  <Image
                    src={iconConverter[member.team]}
                    alt={member.team}
                    height={24}
                    width={32}
                  />
                </td>
                <td>{member.wins}</td>
                <td>{member.perfect}</td>
                <td>{member.wins + member.perfect}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default TableComp;
