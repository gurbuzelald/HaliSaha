import React, { useEffect, useState } from "react";

const CartTable = (props) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(props.itemsAddedToCart);
  }, [props.itemsAddedToCart]);

  return (
    <div className="absolute top-40 lg:top-56 left-4 lg:left-6 right-4 lg:right-6 bottom-4 lg:bottom-6 overflow-y-auto shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 rounded-lg bg-white">
      {tableData && tableData.length > 0 ? (
        <table className="w-full divide-y divide-gray-300">
          <thead className="bg-slate-200">
            <tr>
              <th
                scope="col"
                className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
              >
                #
              </th>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Saha İsmi
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Saha Konumu
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Fiyat
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Saha Alanları
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Saat
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tableData.map((item, index) => (
              <tr className="odd:bg-gray-100 even:bg-gray-50" key={item.id}>
                <td className="px-3 py-4 text-center text-sm text-gray-500">
                  {index + 1}
                </td>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                  {item.sahaismi}
                  
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {item.sahakonumu}
                </td>
                
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                {item.fiyat}₺
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  
                {item.sahaalanlari}
                </td>
                <td className="px-3 py-4 text-sm text-gray-800">
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  
                {item.bosSaatler}
                </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full">
          <span className="font-semibold text-sm lg:text-lg text-green-500">
            REZERVASYON YOK
          </span>
        </div>
      )}
    </div>
  );
};

export default CartTable;
