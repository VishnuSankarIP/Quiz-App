import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./server_url";

// get questions

export const  getAllQuestionAPI=async()=>{

    return await commonAPI("GET",`${SERVER_URL}/question `,"")
}