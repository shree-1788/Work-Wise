import React from "react";
import "./styles/row.css";
import Status from "./Status";
import EditButton from "./EditButton";
import NotifyButton from "./NotifyButton";

const Row = () => {
  return (
    <>
      {" "}
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </td>
        <th
          scope="row"
          className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <p className="companyName">Amazon SDE 1 (Hyderabad)</p>
          <p className="jobId">Job Id: 123523</p>
        </th>
        <td className="px-6 py-4">21 June 2023</td>
        <td className="px-6 py-4">
          <Status status="Accepted" />
        </td>

        <td className="px-6 py-4">
          <EditButton></EditButton>
        </td>
        <td className="px-6 py-4">
          <NotifyButton></NotifyButton>
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <p className="companyName">Microsoft SDE 1 (Banglore)</p>
          <p className="jobId">Job Id: 127862</p>
        </th>
        <td className="px-6 py-4">10 May 2023</td>
        <td className="px-6 py-4">
          <Status status={"Pending"}></Status>
        </td>

        <td className="px-6 py-4">
          <EditButton></EditButton>
        </td>
        <td className="px-6 py-4">
          <NotifyButton></NotifyButton>
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <p className="companyName">Atlassian Frontend Engineer (Gurgaon)</p>
          <p className="jobId">Job Id: 342521</p>
        </th>
        <td className="px-6 py-4">1 July 2023</td>
        <td className="px-6 py-4">
          <Status status={"Applied"}></Status>
        </td>

        <td className="px-6 py-4">
          <EditButton></EditButton>
        </td>
        <td className="px-6 py-4">
          <NotifyButton></NotifyButton>
        </td>
      </tr>
    </>
  );
};

export default Row;
