
const useProucts = (url="https://fakestoreapi.com/products") => {
    const fetchProducts = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error({ status: response.status, statusText: response.statusText })
            }
            const dataResponse = await response.json();
          
            return dataResponse
        } catch (error) {
            console.log(error)
        }
    }

    return {
        fetchProducts
    }
}

export default useProucts;