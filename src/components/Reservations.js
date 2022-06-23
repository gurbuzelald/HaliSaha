import React, { useState } from "react";
import ReservationsList from "./ReservationsList";
import { SearchIcon } from "@heroicons/react/solid";
import emailjs from '@emailjs/browser';
const Reservations = (props) => {
  const [filteredData, setFilteredData] = useState(props.data);
  const [searchKey, setSearchKey] = useState("");
  const [emailData, setEmailData] = useState(props.data);

  // arama alanina girilen keyword'e gore rezervasyonları filtreler
  const handleChange = (value) => {
    setSearchKey(value);
    if (value.length > 0) {
      const searchResult = props.data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      setFilteredData(searchResult);
    } else {
      setFilteredData(props.data);
    }
  };
  const handleClick = (input, value) => {
    setEmailData({ ...emailData, [input]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_et80znc', 'template_rpnidnj', e.target, '-oq2luh_CA12sKJkd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log("error.text");
      });
    e.target.reset()
  };

  return (
    <div className="row-span-2 lg:row-span-3 flex h-full max-h-full overflow-hidden">
      <div className="card relative h-full max-h-full overflow-hidden w-full mr-14">
        <div className="flex items-center justify-between shrink-0 h-12 lg:h-14 w-full px-4 lg:px-6 rounded-t-lg">
          <h2 className="text-sm lg:text-lg font-medium text-gray-800">
            SAHALAR
          </h2>

          <div className="group mt-1 relative flex items-right">
            <input
              type="text"
              name="search"
              id="search"
              autoComplete="off"
              placeholder="Saha Ara"
              className="ring-0 focus:ring-0 border-gray-400/20 focus:border-gray-400/80 bg-white/30 focus:bg-white/30 block w-24 pr-12 pl-1.5 py-1 text-xs lg:text-sm rounded-lg text-gray-500 focus:text-gray-700 focus:placeholder:text-gray-700 placeholder:text-gray-400"
              value={searchKey}
              onChange={(e) => handleChange(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex py-1 pr-1.5">
              <SearchIcon className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600/30 group-focus-within:text-gray-600/50" />
            </div>
          </div>
        </div>
        <div className="absolute top-12 lg:top-14 left-0 right-0 bottom-4 lg:bottom-6 overflow-y-auto overflow-x-auto w-full">
          <ReservationsList
            data={filteredData}
            setData={setFilteredData}
            selected={props.selected}
            setSelected={props.setSelected}
          />
        </div>
      </div>
      <form onSubmit={sendEmail}>
        <div className="card relative h-full max-h-full overflow w-62 lg:p-8 p-1 ">
          <div className="group mt-1 relative flex items-center">
            <input
              type="text"
              name="name"
              id="toName"
              required
              autoComplete="off"
              placeholder="İsim"
              className="ring-0 focus:ring-0 focus:border-gray-400/80 bg-white/30 focus:bg-white/30 block w-24 pr-5 pl-1.5 py-0 px-3 lg:py-2 lg:px-5 text-xs lg:text-sm rounded-lg text-gray-500 focus:text-gray-700 focus:placeholder:text-gray-700 placeholder:text-gray-400"
              value={filteredData.name}
              onChange={(e) => handleClick("name", e.target.value)}
            />
          </div>
          <div className="group mt-1 relative flex items-center">
            <input
              type="text"
              name="surname"
              id="fromName"
              required
              autoComplete="off"
              placeholder="Soyisim"
              className="ring-0 focus:ring-0 focus:border-gray-400/80 bg-white/30 focus:bg-white/30 block w-24 pr-5 pl-1.5 py-0 lg:py-2 lg:px-5 text-xs lg:text-sm rounded-lg text-gray-500 focus:text-gray-700 focus:placeholder:text-gray-700 placeholder:text-gray-400"
              value={filteredData.surname}
              onChange={(e) => handleClick("surname", e.target.value)}
            />
          </div>
          <div className="group mt-1 relative flex items-center">
            <input
              type="time"
              name="surname"
              id="fromName"
              required
              autoComplete="off"
              placeholder="bosSaatler"
              className="ring-0 focus:ring-0 focus:border-gray-400/80 bg-white/30 focus:bg-white/30 block w-24 pr-5 pl-1.5 py-0 lg:py-2 lg:px-5 text-xs lg:text-sm rounded-lg text-gray-500 focus:text-gray-700 focus:placeholder:text-gray-700 placeholder:text-gray-400"
              value={filteredData.bosSaatler}
              onChange={(e) => handleClick("bosSaatler", e.target.value)}
            />
          </div>
          <div className="group mt-1 relative flex items-center">
            <input
              type="email"
              name="email"
              id="normalEposta"
              autoComplete="off"
              placeholder="Eposta"
              className="ring-0 focus:ring-0 focus:border-gray-400/80 bg-white/30 focus:bg-white/30 block w-24 pr-5 pl-1.5 py-0 lg:py-2 lg:px-5 text-xs lg:text-sm rounded-lg text-gray-500 focus:text-gray-700 focus:placeholder:text-gray-700 placeholder:text-gray-400"
              value={filteredData.email}
              onChange={(e) => handleClick("email", e.target.value)}
            />
          </div>
          <input className="flex mt-1 py-1 px-3 rounded-lg text-sm font-semibold lg:text-lg text-gray-50 bg-green-600 hover:bg-green-600 active:bg-green-500"type="submit"/>
          
        </div>
        
        
        
      </form>
    </div>
  );
};

export default Reservations;
