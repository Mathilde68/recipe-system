import axios from "axios";


export async function getRecipes() { 

    const response = await axios.get(`${URL}recipes`);
    if (response.status === 200) {
    return(response.data);
    }else{
        return;
    }
}


export async function getData(endpoint: string) { 

    const response = await axios.get(`${URL}${endpoint}`);
    if (response.status === 200) {
    return(response.data);
    }else{
        return;
    }
}



export async function getRecipe(id: string) { 

    const response = await axios.get(`${URL}recipes/${id}`);
    if (response.status === 200) {
    return(response.data);
    }else{
        return;
    }
}