import React, { useState } from "react";
import Operations from "../../../../../components/Operations";
import CartMain from "../../../../../components/CartMain";
import Reservations from "../../../../../components/Reservations";

const HomeTabContent = (props) => {
  const [selectedItem, setSelectedItem] = useState(null); // secili urun
  const [itemsAddedToCart, setItemsAddedToCart] = useState([]); // sepete eklenen urunler
  const [paymentMethod, setPaymentMethod] = useState(null); // odeme yontemi
  const [totalPrice, setTotalPrice] = useState(0); // toplam fiyat

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-5 lg:grid-rows-1 gap-4 h-full max-h-full overflow-hidden">
        <Reservations
          data={props.data}
          setData={props.setData}
          selected={selectedItem}
          setSelected={setSelectedItem}
        />
        
        <div>
          <div className="lg:h-5/6">
          <CartMain
          selected={selectedItem}
          setSelected={setSelectedItem}
          itemsAddedToCart={itemsAddedToCart}
          setItemsAddedToCart={setItemsAddedToCart}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
          </div>
        <div className="lg:mt-3"><Operations
        data={props.data}
        setData={props.setData}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        itemsAddedToCart={itemsAddedToCart}
        setItemsAddedToCart={setItemsAddedToCart}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        payments={props.payments}
        setPayments={props.setPayments}
      /></div>
        
        </div>
        
      </div>
      
    </>
  );
};

export default HomeTabContent;
