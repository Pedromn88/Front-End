import React from 'react'
import { MemberTableRow } from "./member-table-row";
import { MemberEntity } from "./model";

const getMembers = (): Promise<MemberEntity[]> => {
  return fetch(`https://api.github.com/orgs/lemoncode/members`).then(
    (response) => response.json()
  );
};

  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    getMembers().then((data) => setMembers(data));
  }, []);

export const MembersTable = () => {
    return (
        <table className="table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <MemberTableRow key={member.id} member={member} />
            ))}
          </tbody>
        </table>
      );
}