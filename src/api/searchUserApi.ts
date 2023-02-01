import { instance } from "./profileApi";



export const searchUserApi={
    unfollowUserRequest(id: any) {
        //для отписки нам нужно сделать делит запрос - он отдает команду эндпоинту- удали нашу подписку 
    //в ответ нам придет статус код - и если все хорошо (0) - то выполняем нашу функцию

    //делит запрос примает два параметра как и гет - эндпоинт и визкреденшлс- права что-то менять

    ////инстанс положит параметр визкреденшлс и сделает аксиос запрос и положит туда еще бейсурл
    return (instance.delete(`/follow/${id}`).then((Response) => { return (Response.data) })
    )
},


followUserRequest(id: any) {
    //чтобы подписаться нам нужен постзапрос на сервер, который говорит на, держи, мы хотим подписаться, а сервер бы ответил, хорошо, ты подписан
    // debugger
    //обрати внимание, что здесь принимаются три параметра в запросе - эндпоинт, пустой массив и визкреденшлс- с правами админа что-то менять
    return (instance.post(`/follow/${id}`, {},
        {
            withCredentials: true,
        }
    ).then((Response) => { return (Response.data) })
    )
},

getUsersRequest( pageSize:number, currentPage:number) {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,

    }
    ).then((Response)=>{return(Response.data)})
},

}






