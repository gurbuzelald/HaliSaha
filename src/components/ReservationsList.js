import React, { useEffect, useState } from "react";

const ReservationsList = (props) => {
  const [rezList, setRezList] = useState([]);

  useEffect(() => {
    setRezList(props.data);
  }, [props.data]);

  // tiklanan sahayı secili hale getirir
  const handleClick = (selected) => {
    props.setSelected(selected);
  };

  return (
    <div>
      <ul className=" lg:grid-cols-3 3xl:grid-cols-4 gap-4 lg:gap-6 px-1 lg:pr-1 w-full">
        {rezList &&
          rezList.length > 0 &&
          rezList.map((rezervasyon) => (
            
            <li
              onClick={() => handleClick(rezervasyon)}
              key={rezervasyon.id}
              className={`${
                props.selected?.id === rezervasyon.id
                  ? `bg-green-500`
                  : `bg-gray`
              } relative group h-12 w-full  border rounded-lg transition-all duration-100 ease-in-out bg-green-300`}
            >
              <div className="flex justify-between items-end cursor-pointer h-20 pl-1 pb-3.5 absolute bottom-0 left-0 right-0 rounded-b-md bg-gradient-to-b from-transparent to-gray-900/70 text-gray-100">
                <span className="text-xs">{rezervasyon.sahaismi}</span>
                <span className="text-xs">{rezervasyon.fiyat}₺</span>
                <span className="text-xs">{rezervasyon.sahakonumu}</span>
                <span className="text-xs">{rezervasyon.bosSaatler}</span>
              </div>
            </li>
          ))}
      </ul>
      <ul>
        

      </ul>
    </div>
  );
};

export default ReservationsList;
