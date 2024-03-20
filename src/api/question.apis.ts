import { BASE_URL } from "../constants/baseurl.constant";

export const FetchQuesApi = (id : string)=> {
    return BASE_URL +`/question/${id}`
}