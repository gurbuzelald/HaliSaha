import React, { useState } from "react";
import Operations from "../../../../../components/Operations";
import CartMain from "../../../../../components/CartMain";
import Reservations from "../../../../../components/Reservations";

const HomeTabContent = (props) => {
  const [selectedItem, setSelectedItem] = useState(null); // secili rezervasyon
  const [itemsAddedToCart, setItemsAddedToCart] = useState([]); // sepete eklenen rezervasyon
  const [paymentMethod, setPaymentMethod] = useState(null); // odeme yontemi
  const [totalPrice, setTotalPrice] = useState(0); // toplam fiyat

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-5 lg:grid-rows-1 gap-6 h-full max-h-full overflow-hidden ">
        <Reservations
          data={props.data}
          setData={props.setData}
          selected={selectedItem}
          setSelected={setSelectedItem}
        />
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
      <Operations
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
      />
    </>
  );
};

export default HomeTabContent;
