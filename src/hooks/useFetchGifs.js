import { useState, useEffect } from "react"
import { getGift } from "../components/helpers/getGifs";

export const useFetchGifs = ( category ) => { //Este Custom hook lo que hace es ejecutar la peticion al servidor y poder mostrarlo en un estado
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGift(category).then(imgs => { 
            setState({
                data: imgs,
                loading: false,
            })    
        })
    }, [category]);

    return state // { data: [], loading: true, }


}