/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-catch */
import axios from "axios";
import { AnswerHashApi, createTeamApi, loginTeamApi } from "../api/team.apis";

export const CREATE = async(createDto : any) => {
    try {
        const res = await axios.post(createTeamApi, createDto);
        return res;
    } catch (error) {
        throw error;
    }
}

export const LOGIN = async(loginDto: any) => {
    try {
        const res = await axios.post(loginTeamApi, loginDto);
        return res;
    } catch (error) {
        throw error;
    }
}

export const POSTHASH = async(ansdata : any) => {
    try {
        // console.log(ansdata)
        const res = await axios.post(AnswerHashApi, ansdata);
        return res;
    } catch (error) {
        throw error;
    }
}