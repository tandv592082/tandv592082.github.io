import countapi from 'countapi-js';

const increaseCountAsync = async () =>{
    try {
        const info = await countapi.visits();   
        return info.value;     
    } catch (_) {
        
    }
}

export default increaseCountAsync;