import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";

import { tableHeadItems } from "./mocks";
import { nfs } from "./mocks";

export function BacklogTable() {
  return (
    <div className="w-full overflow-x-scroll">
      <table className="w-full mb-2 bg-gray-100">
        <TableHead headContent={tableHeadItems} />
        <TableBody backlog={nfs} />
      </table>
    </div>
  );
}

export default BacklogTable;