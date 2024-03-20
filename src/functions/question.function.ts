import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { FetchQuesApi } from "../api/question.apis";

export const FETCHBYID = async(id : string) => {
    const res = await axios.get(FetchQuesApi(id));
    return res;
}