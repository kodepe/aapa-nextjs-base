import { API_MONEDAS, BASE_URL, PATH_URL } from "@/constants/api";
import axios from "axios";
import { useEffect, useState } from "react";
export const UseMultiMoney = () => {
  const [monedas, setMonedas] = useState();
  const getMonedas = async () => {
    const response: any = await axios.get(
      `${BASE_URL}${PATH_URL}${API_MONEDAS.GET}`
    );
    setMonedas(response);
  };

  useEffect(() => {
    if (!monedas) {
      getMonedas();
    }
  }, [monedas]);

  return { getMonedas, monedas };
};
