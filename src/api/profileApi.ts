import axios from "axios";

//instance создает объект с базовыми параметрами для запроса - бейс урл и виз креденшлс 
export const instance=axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0',
}) 


export const profileApi={
 dataRequest(id:number) {
    //для отписки нам нужно сделать делит запрос - он отдает команду эндпоинту- удали нашу подписку 
    //в ответ нам придет статус код - и если все хорошо (0) - то выполняем нашу функцию

    //делит запрос примает два параметра как и гет - эндпоинт и визкреденшлс- права что-то менять

    return ( instance.get(`/profile/${id}`
       ).then((Response)=> {return (Response.data)})
    )

},

updateStatusRequest(status:string){
    return ( instance.put(`/profile/status`,{status:status}
    ).then((Response)=> {return (Response.data)})
 )
},

getStatusRequest(id:number){
    return ( instance.get(`/profile/status/${id}`
    ).then((Response)=> {return (Response.data)})
 )
},
}
