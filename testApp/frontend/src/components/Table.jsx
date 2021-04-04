import React from "react";

const Table = ({ data }) => {
  return data.length > 0 ? (
    <div>
      <div className="flex justify-center">
        {data.length} displayed complaints
      </div>
      <table className="border-collapse w-full table-auto mt-10">
        <thead>
          <tr>
            {Object.keys(data[0]).map((header, index) => (
              <th
                key={index}
                className="p-1 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(
            (
              {
                account,
                borough,
                city,
                closedate,
                community_board,
                complaint_type,
                council_dist,
                descriptor,
                opendate,
                unique_key,
                zip,
              },
              index
            ) => (
              <tr
                key={index}
                className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
              >
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    {unique_key}
                  </span>
                  {unique_key}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  {account}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  {opendate}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  {complaint_type}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  {descriptor}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  {zip}
                </td>

                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  {borough}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  {city}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  {council_dist}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  {community_board}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  {closedate}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  ) : (
    <p>No Data Was Found !</p>
  );
};

export default Table;
