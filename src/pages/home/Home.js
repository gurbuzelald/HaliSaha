import React, { useState } from "react";
import data from "../../data/products.json";
import Tabs from "./sections/tabList/Tabs";
import HomeTabContent from "./sections/tabContents/home/HomeTabContent";
import StocksTabContent from "./sections/tabContents/stocks/StocksTabContent";
import { Tab } from "@headlessui/react";

const Home = () => {
  const [reservData, setReservData] = useState(data.products); // tum rezervasyonların datası

  return (
    <Tab.Group>
      <div className="grid grid-rows-10 lg:grid-rows-8 gap-4 lg:gap-6 w-full h-full max-h-full overflow-hidden ">
        <Tabs />
        <Tab.Panel className="row-span-9 lg:row-span-7 flex flex-col space-y-6 h-full w-full">
          <HomeTabContent
            data={reservData}
            setData={setReservData}
          />
        </Tab.Panel>
        <Tab.Panel className="row-span-9 lg:row-span-7 flex flex-col space-y-6 h-full w-full">
          <StocksTabContent data={reservData} setData={setReservData} />
        </Tab.Panel>
      </div>
    </Tab.Group>
  );
};

export default Home;
