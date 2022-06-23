import React from "react";
import { v4 } from "uuid";

const UpdateForm = (props) => {
  // rezervasyon guncelleme formunda kullanici input degisikligi yaptikca form datasini gunceller
  const handleChange = (input, value) => {
    props.setData({ ...props.data, [input]: value });
  };
  return (
    <form className="grid grid-cols-1 gap-4 w-full overflow-hidden">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="isim"
            className="block text-sm font-medium text-gray-700"
          >
            İsim
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="isim"
              id="isim"
              className="input"
              autoComplete="off"
              required
              value={props.data.isim}
              onChange={(e) => handleChange("isim", e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="soyisim"
            className="block text-sm font-medium text-gray-700"
          >
            Soyisim
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="soyisim"
              id="soyisim"
              className="input"
              autoComplete="off"
              required
              value={props.data.soyisim}
              onChange={(e) => handleChange("soyisim", e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="sahaismi"
            className="block text-sm font-medium text-gray-700"
          >
            Saha İsmi
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="sahaismi"
              id="sahaismi"
              className="input"
              autoComplete="off"
              required
              value={props.data.sahaismi}
              onChange={(e) => handleChange("sahaismi", e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="sahakonumu"
            className="block text-sm font-medium text-gray-700"
          >
            Saha Konumu
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="sahakonumu"
              id="sahakonumu"
              className="input"
              autoComplete="off"
              required
              value={props.data.sahakonumu}
              onChange={(e) => handleChange("sahakonumu", e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="fiyat"
            className="block text-sm font-medium text-gray-700"
          >
            Fiyat
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="fiyat"
              id="fiyat"
              className="input"
              autoComplete="off"
              required
              value={props.data.fiyat}
              onChange={(e) => handleChange("fiyat", e.target.value)}
            />
          </div>
          <div>
          <label
            htmlFor="sahaalanlari"
            className="block text-sm font-medium text-gray-700"
          >
            Boş Saatler
          </label>
          <div className="mt-4 ">
            <select
              type="radiobutton"
              name="bosSaatler"
              id="bosSaatler"
              className="input"
              autoComplete="off"
              required
              value={props.data.bosSaatler}
              onChange={(e) => handleChange("bosSaatler", e.target.value)}
            >
              <option value="1">01.00</option>
              <option value="2">02.00</option>
              <option value="3">03.00</option>
              <option value="4">04.00</option>
              <option value="5">05.00</option>
              <option value="6">06.00</option>
              <option value="7">07.00</option>
              <option value="8">08.00</option>
              <option value="9">09.00</option>
              <option value="10">10.00</option>
              <option value="11">11.00</option>
              <option value="12">12.00</option>
              <option value="13">13.00</option>
              <option value="14">14.00</option>
              <option value="15">15.00</option>
              <option value="16">16.00</option>
              <option value="17">17.00</option>
              <option value="18">18.00</option>
              <option value="19">19.00</option>
              <option value="20">20.00</option>
              <option value="21">21.00</option>
              <option value="22">22.00</option>
              <option value="23">23.00</option>
              <option value="24">24.00</option>
            </select>
          </div>
        </div>
        </div>
        <div>
          <div className="mt-8">
            <select
              type="radio"
              name="sahaalanlari"
              id="sahaalanlari"
              className="input"
              autoComplete="off"
              required
              value={props.data.sahaalanlari}
              onChange={(e) => handleChange("sahaalanlari", e.target.value)}
            >
              <option>Sahalar</option>
                <option value="A Sahası">A Sahası</option>
                <option value="B Sahası">B Sahası</option>
                <option value="C Sahası">C Sahası</option>
            </select>
          </div>
        </div>
        
        
      </div>
      <div className="mt-1">
              <input
                type="radio"
                name="id"
                id="id"
                placeholder="TC"
                className="input"
                autoComplete="off"
                required
                value={props.data.id}
                onChange={(e) => {
                  handleChange("fiyat", e.target.value);
                  handleChange("id", v4());
                }}
              /></div>
    </form>
  );
};

export default UpdateForm;
