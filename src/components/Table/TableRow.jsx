import React from "react";

const TableRow = ({rowData}) => {
  return (
    <>
      <td
        className="px-6 py-4 text-sm font-small
        leading-5 whitespace-no-wrap"
      >
        {rowData.flight_number}
      </td>
      <td
        className="px-6 py-4 text-sm font-small
        leading-5 text-bb-gray whitespace-no-wrap"
      >
        {rowData.launch_date_utc}
      </td>
      <td
        className="px-6 py-4 text-sm font-small
        leading-5 text-bb-gray whitespace-no-wrap"
      >
        {rowData.launch_site.site_name}
      </td>
      <td
        className="px-6 py-4 text-sm text-center font-small
        leading-5 text-bb-gray whitespace-no-wrap"
      >
        {rowData.mission_name}
      </td>
      <td
        className="px-6 py-4 text-sm font-small
        leading-5 text-bb-gray whitespace-no-wrap"
      >
        {rowData.rocket.second_stage.payloads[0].orbit}
      </td>        
      <td>  
      {(rowData.launch_success == null) ? 
        <span 
        className="bg-blue-300 text-blue-700 font-bold w-1 text-center px-2 py-1 rounded-full"
        >
        Upcoming
        </span>
        : rowData.launch_success ? 
        <span 
        className="bg-green-200 text-green-700 font-bold w-1 text-center px-2 py-1 rounded-full"
        >
        Success
        </span>
        :           
        <span  
        className="bg-red-200 text-red-700 font-bold w-1 text-center px-2 py-1 rounded-full"
        >
        Failed
        </span>
      }
      </td>
      <td
        className="px-6 py-4 text-sm font-small
        leading-5 text-bb-gray whitespace-no-wrap"
      >
        {rowData.rocket.rocket_name}
      </td>
    </>
  );
};

export default TableRow;