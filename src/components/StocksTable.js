import React, { useEffect, useState } from "react";
import DialogModal from "./ui/Dialog";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import UpdateForm from "./UpdateForm";

const StocksTable = (props) => {
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({});
  const [selected, setSelected] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // rezervasyonlarda değişiklik oldukça tabloyu günceller
  useEffect(() => {
    setTableData(props.data);
  }, [props.data]);

  // seçili rezervasyon değiştikçe rezervasyon güncelleme formunu seçilen rezervasyonun bilgileriyle günceller.
  useEffect(() => {
    setFormData(selected);
  }, [selected]);

  // dialog componentini açar ve içindeki seçili rezervasyon formunu günceller
  const handleOpenUpdateDialog = (item) => {
    setSelected(item);
    setIsDialogOpen(true);
  };

  // seçili rezervasyonu girilen yeni verilerle günceller	
  const handleUpdate = (id) => {
    const updatedProducts = props.data.map((el) => {
      if (el.id === id)
        return {
          ...el,
          isim: formData.isim,
          soyisim: formData.soyisim,
          sahaismi: formData.sahaismi,
          sahakonumu: formData.sahakonumu,
          fiyat: formData.fiyat,
          bosSaatler: formData.bosSaatler,
        };
      return el;
    });
    props.setData(updatedProducts);
    setIsDialogOpen(false);
  };

  // seçili rezervasyonu siler
  const handleDelete = (id) => {
    const productsExceptSelected = props.data.filter((urun) => urun.id !== id);
    props.setData(productsExceptSelected);
  };

  return (
    <>
      <div className="absolute top-1 left-6 right-4 bottom-1 lg:bottom-1 overflow-y-auto drop-shadow-md lg:drop-shadow-lg rounded-lg bg-white">
        <table className="w-full divide-y divide-gray-300">
          <thead className="bg-slate-200">
            <tr>
              <th
                scope="col"
                className="px-3 py-3.5 text-center text-sm font-semibold text-gray-800"
              >
                
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-800"
              >
                Saha İsmi
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-800"
              >
                Saha Konumu
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-800"
              >
                Boş Saatler
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-800"
              >
                Fiyat
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-800"
              >
                Saha Alanı
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tableData &&
              tableData.length > 0 &&
              tableData.map((item, index) => (
                <tr className="odd:bg-gray-100 even:bg-gray-50" key={item.id}>
                  <td className="px-3 py-4 text-center text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="w-full max-w-0 px-3 py-4 text-sm font-medium text-gray-800 sm:w-auto sm:max-w-none">
                    {item.sahaismi}
                  </td>
                  <td className="w-full max-w-0 px-3 py-4 text-sm font-medium text-gray-800 sm:w-auto sm:max-w-none">
                    {item.sahakonumu}
                  </td>
                  <td className="w-full max-w-0 px-3 py-4 text-sm font-medium text-gray-800 sm:w-auto sm:max-w-none">
                    {item.bosSaatler}
                  </td>
                  <td className="w-full max-w-0 px-3 py-4 text-sm font-medium text-gray-800 sm:w-auto sm:max-w-none">
                    {item.fiyat}₺
                  </td>
                  <td className="w-full max-w-0 px-3 py-4 text-sm font-medium text-gray-800 sm:w-auto sm:max-w-none">
                    {item.sahaalanlari}
                  </td>
                  <td className="flex justify-center space-x-3 px-3 py-4 text-sm">
                    <button
                      type="button"
                      onClick={() => handleOpenUpdateDialog(item)}
                      className="lg:border lg:border-green-600 text-green-500 lg:text-green-600 lg:rounded-lg lg:px-2 lg:py-1 bg-transparent"
                    >
                      <PencilAltIcon className="h-5 w-5 lg:hidden" />{" "}
                      <span className="hidden lg:block">Güncelle</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="lg:border lg:border-red-600 text-red-500 lg:text-red-600 lg:rounded-lg lg:px-2 lg:py-1 bg-transparent"
                    >
                      <TrashIcon className="h-5 w-5 lg:hidden" />
                      <span className="hidden lg:block">Sil</span>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <DialogModal
        title="Rezervasyon Güncelle"
        text={<UpdateForm data={formData} setData={setFormData} />}
        buttons={[
          {
            label: "Güncelle",
            color: "green",
            onClick: () => handleUpdate(selected.id),
          },
        ]}
        icon={{ component: PencilAltIcon, color: "green" }}
        show={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default StocksTable;
