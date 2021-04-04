import React from "react";

const TopTable = ({ data }) => {
  return data.length > 0 && data ? (
    <div>
      <div>Number of displayed complaints : {data.length}</div>
      <table className="border-collapse table-auto w-full mt-10">
        <thead>
          <tr>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Complaint Type
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Count
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((complaint, index) => (
            <tr
              key={index}
              className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
            >
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                {complaint[0]}
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                {complaint[1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p>No Data Was Found !</p>
  );
};

export default TopTable;
