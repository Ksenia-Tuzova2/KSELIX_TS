import axios from "axios";

//instance создает объект с базовыми параметрами для запроса - бейс урл и виз креденшлс 
export const instance=axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0',
}) 


export const profileApi={
 profileDataRequest(id:any) {
    //для отписки нам нужно сделать делит запрос - он отдает команду эндпоинту- удали нашу подписку 
    //в ответ нам придет статус код - и если все хорошо (0) - то выполняем нашу функцию

    //делит запрос примает два параметра как и гет - эндпоинт и визкреденшлс- права что-то менять

    return ( instance.get(`/profile/${id}`
       ).then((Response)=> {return (Response.data)})
    )

},
followUserRequest( id : any) {
    //чтобы подписаться нам нужен постзапрос на сервер, который говорит на, держи, мы хотим подписаться, а сервер бы ответил, хорошо, ты подписан
// debugger
    //обрати внимание, что здесь принимаются три параметра в запросе - эндпоинт, пустой массив и визкреденшлс- с правами админа что-то менять
    return (instance.post(`/follow/${id}`, {} ).then((Response)=> {return (Response.data)})
    )
}
}
