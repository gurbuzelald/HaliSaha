import React from "react";
import { Tab } from "@headlessui/react";

const tabs = [
  { index: "1", name: "Normal Kullanıcı" },
  { index: "2", name: "Super Kullanıcı" },
];

const Tabs = () => {
  return (
    <div
      id="tabs"
      className="row-span-2 card flex items-center w-full p-4 lg:p-8 "
    >
      <Tab.List className="grid grid-cols-3 gap-4 lg:gap-8 w-full md:max-w-md bg-transparent">
        {tabs.map((tab) => (
          <Tab
            key={tab.index}
            className={({ selected }) =>
              `${selected ? `tab-selected` : `tab-not-selected`} tab-base`
            }
          >
            {tab.name}
          </Tab>
        ))}
      </Tab.List>
    </div>
  );
};

export default Tabs;
