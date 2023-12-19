import { SCHEDULE_URL } from "../config/api-config";
import axios from "axios";

export async function call(api, method, request){

    axios.interceptors.request.use(
        function (config){
            const accessToken = localStorage.getItem("ACCESS_TOKEN");
            if(accessToken && accessToken != null){
                config.headers["Authorization"] = "Bearer " + accessToken;
            }
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    )

    return await axios
                .post(SCHEDULE_URL + api, request)
                .then((res) => {
                    if(res.status == 403){
                        window.location.href= "/login";
                    }
                    else if(res.status == 200){
                        return res.data;
                    }
                    else{
                        new Error(res);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
}


export async function signin(loginDto){
    return call("/auth/login", "POST", loginDto)
            .then((res) => {
                if(res.body.data.accessToken){
                    localStorage.setItem("ACCESS_TOKEN", res.body.data.accessToken);
                    window.location.href = "/";
                }
            });
}

export async function signout(){
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("NEWS_MEMBER_ID");
    window.location.href = "/login";
}

