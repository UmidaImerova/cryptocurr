import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { topCryptoAPI } from "../data/topCoinSlice";

const CryptoRating = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(topCryptoAPI());
  }, []);
  console.log(data.topCrypto);

  return (
    <>
      <h1>this is my Raiting</h1>
      <div>
        {data.topCrypto.map((currency) => (
          <div key={currency.currency_ID}>
            <h3>{currency.fullname}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default CryptoRating;
