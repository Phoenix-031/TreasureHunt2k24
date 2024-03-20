/* eslint-disable no-useless-catch */
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { createTeamApi, loginTeamApi } from "../api/team.apis";

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