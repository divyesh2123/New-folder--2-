import axios from "axios";

const baseUrlInfo= "http://localhost:8080/api";
  const tokeninfo = JSON.parse(localStorage.getItem("userInfo")??"{}");
const authFetch = axios.create({
    baseURL: baseUrlInfo
})

authFetch.interceptors.request.use((config: any)=>
{

  
    if (tokeninfo) {
      config.headers["x-access-token"] = tokeninfo.accessToken;
    }
    return config;

},(error)=>{

    console.log(error)
});


authFetch.interceptors.response.use((response:any)=>{

    if(response.status === 403){
      

       axios.post(`${baseUrlInfo}/auth/refreshtoken`,{
         "refreshToken":tokeninfo.refreshToken
       }).then(a=>{

        localStorage.setItem("userInfo",JSON.stringify(a.data));
        window.location.reload();

       });


       //code to call the refresh token api
       //  and get new access token and update the local storage

    }   
    else if(response.status === 401){
          axios.post(`${baseUrlInfo}/auth/refreshtoken`,{
         "refreshToken":tokeninfo.refreshToken
       }).then(a=>{

        localStorage.setItem("userInfo",JSON.stringify(a.data));
        window.location.reload();

       })
    }
    else if(response.status === 400)
    {

        //logs the error in cloud
    }
    else if(response.status === 500)
    {//logs the error in cloud
        
    }


    return response;
},(error)=>{
    
     axios.post(`${baseUrlInfo}/auth/refreshtoken`,{
         "refreshToken":tokeninfo.refreshToken
       }).then(a=>{

        localStorage.setItem("userInfo",JSON.stringify(a.data));
        window.location.reload();

       })
    return Promise.reject(error);
});

export default authFetch;

