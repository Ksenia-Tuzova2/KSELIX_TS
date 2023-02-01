import { instance } from "./profileApi";

export const authApi= {
    authRequest() {
   return instance.get(`/auth/me`, {
    
    //это позволяет нам делать кроссдоменный запрос
    // и собирать куку - текстовый файл с данными  -
     //креденшлс значит - с разрешением, с правами, с регалиями, 
     //мы разрешаем отослать свой запрос и получить его
        withCredentials: true,
       
        //берем и возвращаем из ретурна дату - 
        //излишние данные из респонса нам не нужны
    }).then((Response)=>{return(Response.data)})
},

}