/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-catch */
import axios from "axios";
import { AnswerHashApi, createTeamApi, DISQ, LIVES, loginTeamApi } from "../api/team.apis";

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

export const POSTDISQ = async(teamId : string) => {
    try {
        const res = await axios.post(DISQ, { teamId : teamId })
        return res;
    } catch (error) {
        throw error
    }
}

export const UPDATELIVES= async(data : {teamId:string, lives: number}) => {
    try {
        const res = await axios.patch(LIVES, data)
        return res;
    } catch (error) {
        throw error
    }
}

export const GETLIVES = async(teamId : string) => {
    try {
        const res = await axios.get(LIVES, { params : {
            teamId : teamId
        } 
    })
        return res;
    } catch (error) {
        throw error
    }
}