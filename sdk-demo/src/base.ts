import fetch from "isomorphic-unfetch";

type Config = {
    apiKey: string;
    baseUrl?:string;
}

export abstract class Base {
    private apikey: string;
    private baseUrl: string;

    constructor(config: Config) {
       this.apikey= config.apiKey;
       this.baseUrl= config.baseUrl || "https://jsonplaceholder.typicode.com"; 
    }

    protected invoke<JSON>(endpoint: string, options?:RequestInit): Promise<JSON>{
        const url= `${this.baseUrl}${endpoint}`;
        const headers = {
            "Content-Type":"application/json",
            "api-key": this.apikey
        }
        const config={
            ...options,
            headers
        }

        return fetch(url,config).then((response)=>{
           if(response.ok){
            return response.json();
           }else{
            throw new Error(response.statusText);
           }
        }).catch((err)=>{
           console.log(err);
           
        })
    }
}