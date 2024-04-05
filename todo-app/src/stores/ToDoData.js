import axios from 'axios'

async function GetToDoList(){
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return response.data
    }
    catch (err){
        console.error("Error: ",err)
        return err
    }
}

export const ToDoList = GetToDoList()