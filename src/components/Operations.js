import React from "react";
import { useNotification } from "../shared/context/notification-context";

  


const Operations = (props) => {
  const dispatch = useNotification();

  // sepete eklenen rezervasyonları sifirlar
  // toplam ucreti sifirlar
  
  const handleSendingEmail = () => {
      props.setPayments([
        ...props.payments,
        { fiyat: props.totalPrice },
      ]);
      dispatch({
        type: "SUCCESS",
        title: "Gönderme başarılı",
        message: "Eposta gönderme işlemi başarılı bir şekilde tamamlandı",
        duration: 5,
      });
    } 

  // mevcut islemi iptal eder, sepeti bosaltir
  const handleCancel = () => {
    props.setItemsAddedToCart([]);
    props.setPaymentMethod(null);
    props.setTotalPrice(0);
  };

  return (
    <form onSubmit={handleSendingEmail}  className="card flex items-center justify-between w-full p-4 lg:p-6">
      <div>
        <button
          type="button"
          onClick={handleCancel}
          className="px-3 py-1.5 rounded-lg drop-shadow-lg text-sm lg:text-lg font-bold text-gray-100 bg-red-600 hover:bg-red-700"
        >
          İPTAL
        </button>
      </div>
      <div className="flex space-x-2 lg:space-x-4">
        
        
      </div>
      <div className="flex space-x-2 lg:space-x-4">
        <div className="px-3 py-1.5 rounded-lg drop-shadow-lg font-bold text-sm lg:text-lg text-gray-800 bg-gray-300">
          {props.totalPrice}₺
        </div>
        <button
          type="button"
          onClick={handleSendingEmail}
          disabled={props.itemsAddedToCart.length === 0}
          className="px-3 py-1.5 rounded-lg drop-shadow-lg font-bold text-sm lg:text-lg disabled:cursor-not-allowed text-gray-50 bg-green-500 hover:bg-green-600 active:bg-green-300 transition-colors duration-200 ease-in-out"
        >
          GÖNDER
        </button>
      </div>
    </form>
  );
};

export default Operations;
