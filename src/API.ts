
import { useEffect, useState, useContext} from "react"
import { TasksContext } from "./context/tasks.context";
import { Task } from "./types"

type UseFetchState<T> = {
    state: "nothing" | "loading" | "error" | "success";
    data: Task[] | T | null
    error: null | Error
}

export function useFetchData<T> (url:string) {
    const [fetchState,setFetchState] = useState<UseFetchState<T>>({
        state:"nothing",
        data:null,
        error:null,
    })
    const [ids,setIds] = useState<number[]>([])
    const [
		taskToDo, 
		setTaskToDo,
		taskInProg,
		setTaskInProg,
		taskDone,
		setTaskDone,
        id,
        setId
	] = useContext(TasksContext)

    useEffect(() => {
        const fetchData = async() => {
            try{
                setFetchState(val => ({
                    ...val,
                    state:"loading"
                }))
                const res = await fetch(url)
                if(res.ok){
                    const dat = await res.json()
                    setTaskToDo(dat.filter((task:Task) => task.column === 'To do'))
                    setTaskInProg(dat.filter((task:Task) => task.column === 'In progress'))
                    setTaskDone(dat.filter((task:Task) => task.column === 'Done'))
                    
                    dat.map((d:Task) => {
                    ids.push(d.id)
                    return setIds(ids)  
                   })
                   
                   setId(ids.length === 0 ? 1 : Math.max(...ids) + 1 )
               
                    setFetchState({
                        data:dat,
                        state:"success",
                        error: null                   
                    })
               
                }else{
                    setFetchState({
                        data:null,
                        state:"error",
                        error: new Error(res.statusText)                       
                    })
                }
            }catch(err){
                setFetchState({
                    data:null,
                    state:"error",
                    error: err as Error                     
                })
            }
        }
        fetchData()
    },[url])
    return fetchState

}

export function usePostData (){
    const [postState,setPostState] = useState({
        state:"nothing",
        data:null,
        error:null
    })

    const postTask = async(url:string, task:Task) => {
        try{
            setPostState(val => ({
                ...val,
                state:"loading"
            }))
            const res = await fetch(url,{
                method:"post",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(task)
            })
            const dat = await res.json()
            if(res.ok){
                setPostState({
                    state:"success",
                    data:dat,
                    error:null
                })
            }
         
        }catch(err){
            setPostState({
                data:null,
                state:"error",
                error: null                
            })
        }
    }
    return {postTask, postState}
}