import axios, { AxiosError } from "axios";
import { generatorPasword } from "../../Utils/generatorPassword";
import { IFiltersTypes, IResponceIDS, IResponceProducts } from "../types";
import { API } from "../Shared/ApiValues";

export const URL = "https://api.valantis.store:41000/";

export const getIds = async () => {
  try {
    const { data } = await axios.post<IResponceIDS>(
      URL,
      {
        action: API.ACTIONS.GET_IDS,
      },
      { headers: { "X-Auth": generatorPasword(), "Content-Type": "application/json" } }
    );
    return data.result;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.message);
    }
  }
};

export const getProducts = async (ids: string[]) => {
  try {
    const { data } = await axios.post<IResponceProducts>(
      URL,
      {
        action: API.ACTIONS.GET_ITEMS,
        params: { ids: ids },
      },
      { headers: { "X-Auth": generatorPasword(), "Content-Type": "application/json" } }
    );
    return data.result;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.message);
    }
  }
};

export const getFilteredItems = async (filters: IFiltersTypes) => {
  try {
    const { data } = await axios.post<IResponceIDS>(
      URL,
      {
        action: API.ACTIONS.GET_FILTERED_ITEMS,
        params: filters,
      },
      { headers: { "X-Auth": generatorPasword(), "Content-Type": "application/json" } }
    );
    return data.result;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.message);
    }
  }
};
