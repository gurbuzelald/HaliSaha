import React, { useEffect } from "react";
import { useNotification } from "../shared/context/notification-context";

const SelectedItem = (props) => {
  const dispatch = useNotification();

  // sepete urun eklendikce toplam fiyati gunceller
  useEffect(() => {
    if (props.itemsAddedToCart.length > 0) {
      let price = 0;
      props.itemsAddedToCart.map((el) => (price = Number(el.fiyat)));
      props.setTotalPrice(price);
    }
  }, [props.itemsAddedToCart]);

  // ekle butonuna tiklandiginda oncelikle bir urun secili mi diye kontrol eder
  // secili ise secili olan urun halihazirda sepette mevcut mu diye kontrol eder
  // mevcutsa sepetteki urunun miktarini gunceller
  // mevcut degilse urunu dogru miktarda sepete ekler ve toplam fiyati sifirlar
  // satin alma bilgisini raporlara ekler
  // ardindan secili urunu sifirlar
  const handleAddToCart = () => {
    if (props.selected) {
      const isAlreadyExists = checkIsAlreadyExists();
      if (isAlreadyExists) {
        const updatedCart = props.itemsAddedToCart.map((el) => {
          if (el.id === props.selected.id)
            return {
              ...el,
              bosSaatler: el.bosSaatler,
            };
          return el;
        });
        props.setItemsAddedToCart(updatedCart);
      } else {
        const itemToBeAddedToCart = {
          ...props.selected,
          bosSaatler: props.quantity,
        };
        props.setItemsAddedToCart([
          ...props.itemsAddedToCart,
          itemToBeAddedToCart,
        ]);
      }
      props.setSelected(null);
      dispatch({
        type: "SUCCESS",
        title: "Rezervasyon sepete eklendi",
        message: "Seçili rezervasyon sepetinize eklendi",
        duration: 4,
      });
    } else {
      dispatch({
        type: "ERROR",
        title: "Sepetiniz boş",
        message: "Lütfen önce sepetinize rezervasyon ekleyin",
        duration: 4,
      });
    }
  };

  // daha once sepete eklenmis bir urunun miktarini secilen yeni sayi ile gunceller
  const handleDeleteSelected = () => {
    if (props.selected) {
      const isAlreadyExists = checkIsAlreadyExists();
      if (isAlreadyExists) {
        const updatedCart = props.itemsAddedToCart.map((el) => {
          if (el.id === props.selected.id)
            return {
              ...el,
              adet: 1,
            };
          return el;
        });
        props.setItemsAddedToCart(updatedCart);
        props.setSelected(null);
      } else {
        dispatch({
          type: "ERROR",
          title: "Ürün sepette yok",
          message:
            "Seçili rezervasyon sepetinizde yok. Silmek yerine eklemeyi deneyebilirsiniz.",
          duration: 3,
        });
      }
    } else {
      dispatch({
        type: "ERROR",
        title: "Rezervasyon seçili değil",
        message: "Lütfen önce bir rezervasyon seçiniz",
        duration: 5,
      });
    }
  };

  // secili olan rezervasyon halihazirda sepette mevcut mu diye kontrol eder
  const checkIsAlreadyExists = () => {
    const isFound = props.itemsAddedToCart.some((el) => {
      if (el.id === props.selected.id) {
        return true;
      } else {
        return false;
      }
    });
    return isFound;
  };

  return (
    <>
      <div className="flex items-center justify-center shrink-0 h-12 lg:h-14 w-full rounded-t-lg">
        <h2 className="text-sm lg:text-lg font-medium text-gray-800">
          <strong>SEÇİLİ REZERVASYON</strong>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-4 lg:px-6">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-3 grid-rows-3 lg:grid-rows-1 gap-2 lg:gap-4">
            <div className="col-span-3 row-span-2 lg:col-span-1">
              <div className="lg:hidden lg:h-full w-full rounded-lg bg-white">
                {props.selected ? (
                  <div className="flex items-center justify-center space-x-3 lg:h-10 w-full rounded-lg bg-gray-200">
                    <div className="truncate text-sm text-gray-800">
                    <span className="text-xs">{props.selected.sahaismi}/</span>
                      <span className="text-xs">{props.selected.fiyat}₺/</span>
                      <span className="text-xs">{props.selected.sahakonumu}/</span>
                      <span className="text-xs">{props.selected.bosSaatler}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-16 w-full items-center justify-center space-x-1 text-xs lg:text-lg font-semibold text-gray-800">
                    <span>SEÇİLİ REZERVASYON YOK</span>
                  </div>
                )}
              </div>
              <div className="hidden lg:block h-36 w-full rounded-lg">
                {props.selected ? (
                  <div className="relative group lg:justify-center lg:items-center h-36 w-full overflow-hidden rounded-lg bg-white">
                    <div className="h-full w-full bg-none bg-center bg-cover cursor-pointer scale-90 group-hover:scale-100 transition-transform duration-200 ease-in-out" />
                    <div className="flex justify-between items-end h-20 px-4 pb-3 absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-b from-transparent to-gray-900/70 text-gray-100">
                      
                      <span className="text-xs">{props.selected.sahaismi}/</span>
                      <span className="text-xs">{props.selected.fiyat}₺/</span>
                      <span className="text-xs">{props.selected.sahakonumu}/</span>
                      <span className="text-xs">{props.selected.bosSaatler}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col h-full w-full items-center justify-center p-2 space-y-1.5 rounded-lg text-sm lg:text-lg font-semibold text-gray-800 bg-white">
                    <span className="text-center">SEÇİLİ REZERVASYON YOK</span>
                  </div>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={handleDeleteSelected}
              className="lg:row-span-2 flex h-full w-full items-center justify-center rounded-lg text-xs lg:text-xl font-semibold text-gray-100 bg-green-500"
            >
              SİL
            </button>
            <button
              type="button"
              onClick={handleAddToCart}
              className="lg:row-span-2 flex h-full w-full items-center justify-center rounded-lg text-xs lg:text-xl font-semibold text-gray-100 bg-green-600"
            >
              EKLE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedItem;
