import React from "react";
import AddNewItem from "../../../../../components/SuperUser";
import StocksTable from "../../../../../components/StocksTable";

const StocksTabContent = (props) => {
  return (
    <div className="flex flex-col h-full space-y-6">
      <div className="card w-full p-4 lg:p-6">
        <AddNewItem data={props.data} setData={props.setData} />
      </div>
      <div className="card flex items-end h-full w-full p-0 space-y-0 overflow-hidden">
        <StocksTable data={props.data} setData={props.setData} />
      </div>
    </div>
  );
};

export default StocksTabContent;
