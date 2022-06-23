import React, { useState } from "react";
import { v4 } from "uuid";
const initialData = {
  id: v4(),
  isim: "",
  soyisim: "",
  sahaismi: "",
  sahakonumu: "",
  fiyat: "",
  sahaalanlari: "",
  bosSaatler: "",
};

const SuperUser = (props) => {

  const [formData, setFormData] = useState(initialData);

// yeni rezervasyon ekleme formunda kullanici input degisikligi yaptikca datasını günceller
  const handleChange = (input, value) => {
    setFormData({ ...formData, [input]: value });
  };

  // yeni rezervasyon ekleme formunda kullanıcının girmis olduğu bilgilerle tum rezervasyonların tutuldugu listeye yeni kayıt ekler
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setData([...props.data, formData]);
    setFormData(initialData);
  };
  return (
    <div>
      <h2><strong>SÜPER KULLANICI</strong></h2>
      <form
      onSubmit={handleSubmit}
      className="grid grid-cols-4 lg:grid-cols-5 w-full overflow-hidden"
    >
      <td className="px-0 py-4   text-center text-xs text-gray-500">
        <div>
          <div>
            <div className="mt-1">
              <input
                placeholder="İsim"
                type="text"
                name="isim"
                id="isim"
                className="input"
                autoComplete="off"
                required
                value={formData.isim}
                onChange={(e) => handleChange("isim", e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="mt-1">
              <input
                placeholder="Soyisim"
                type="text"
                name="soyisim"
                id="soyisim"
                className="input"
                autoComplete="off"
                required
                value={formData.soyisim}
                onChange={(e) => handleChange("soyisim", e.target.value)}
              />
            </div>
          </div>
        </div>
      </td>
      <td className="px-3 py-4 text-center text-sm text-gray-500">
        {" "}
        <div>
          <div className="mt-1">
            <input
              placeholder="Saha İsmi"
              type="text"
              name="sahaismi"
              id="sahaismi"
              className="input"
              autoComplete="off"
              required
              value={formData.sahaismi}
              onChange={(e) => handleChange("sahaismi", e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="mt-1">
            <input
              placeholder="Saha Konumu"
              type="text"
              name="sahakonumu"
              id="sahakonumu"
              className="input"
              autoComplete="off"
              required
              value={formData.sahakonumu}
              onChange={(e) => handleChange("sahakonumu", e.target.value)}
            />
          </div>
        </div>
      </td>

      <td className="px-3 py-4 text-center text-sm text-gray-500">
        <div>
          <div className="mt-4">
            <select
              type="radio"
              name="bosSaatler"
              id="bosSaatler"
              className="input"
              autoComplete="off"
              required
              value={formData.bosSaatler}
              onChange={(e) => handleChange("bosSaatler", e.target.value)}
            >
              <option>Saat Seçimi</option>
              <option value="00.00">00.00</option>
              <option value="01.00">01.00</option>
              <option value="02.00">02.00</option>
              <option value="03.00">03.00</option>
              <option value="04.00">04.00</option>
              <option value="05.00">05.00</option>
              <option value="06.00">06.00</option>
              <option value="07.00">07.00</option>
              <option value="08.00">08.00</option>
              <option value="09.00">09.00</option>
              <option value="10.00">10.00</option>
              <option value="11.00">11.00</option>
              <option value="12.00">12.00</option>
              <option value="13.00">13.00</option>
              <option value="14.00">14.00</option>
              <option value="15.00">15.00</option>
              <option value="16.00">16.00</option>
              <option value="17.00">17.00</option>
              <option value="18.00">18.00</option>
              <option value="19.00">19.00</option>
              <option value="20.00">20.00</option>
              <option value="21.00">21.00</option>
              <option value="22.00">22.00</option>
              <option value="23.00">23.00</option>
              <option value="24.00">24.00</option>
            </select>
          </div>
        </div>
        <div>
          <div className="mt-4">
            <select
              type="radio"
              name="sahaalanlari"
              id="sahaalanlari"
              className="input"
              autoComplete="off"
              required
              value={formData.sahaalanlari}
              onChange={(e) => handleChange("sahaalanlari", e.target.value)}
            >
              <option>Sahalar</option>
              <option value="A Sahası">A Sahası</option>
              <option value="B Sahası">B Sahası</option>
              <option value="C Sahası">C Sahası</option>
            </select>
          </div>
        </div>
      </td>
      <td className="px-3 py-4 text-center text-sm text-gray-500">
        <div>
          <div className="mt-1">
            <input
              placeholder="Fiyat"
              type="number"
              name="fiyat"
              id="fiyat"
              className="input"
              autoComplete="off"
              required
              value={formData.fiyat}
              onChange={(e) => handleChange("fiyat", e.target.value)}
            />
          </div>
        </div>

        <td className="px-3 py-4 text-center text-sm text-gray-500">
          <div className="w-5 text-xs">
            <div className="mt-1">
              <input
                type="radio"
                name="id"
                id="id"
                className="input"
                autoComplete="off"
                required
                value={formData.id}
                onChange={(e) => {
                  handleChange("fiyat", e.target.value);
                  handleChange("id", v4());
                }}
              />
            </div>
          </div>
        </td>
        <td className="text-center text-sm text-gray-500">
          <button
            type="submit"
            //onClick={handleSubmit}
            className="px-4 py-1 rounded-lg text-sm font-semibold  text-gray-50 bg-green-600 hover:bg-green-500 active:bg-green-300"
          >
            EKLE
          </button>
        </td>
      </td>
    </form>
    </div>
    
  );
};

export default SuperUser;
