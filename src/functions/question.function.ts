import axios from "axios";
import { FetchQuesApi, VerifyAnsApi } from "../api/question.apis";

export const FETCHBYID = async(id : string) => {
    const res = await axios.get(FetchQuesApi(id));
    return res;
}

export const VERIFYANS = async(questionId:string, answerCode :string) => {
    const res = await axios.post(VerifyAnsApi, {questionId, answerCode});
    return res;
}