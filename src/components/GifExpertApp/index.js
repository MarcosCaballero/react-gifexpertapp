import React,{useState} from 'react'
import AddCategory from '../AddCategory';
import GifRead from '../GifRead';

const GifExpertApp = () => {

    const [ category, setCategory ] = useState(['One Punch']);

    // const HandleAdd = () => {
    //     // setCategories( [...categories, 'Hola mundo']);
    //     setCategories( cats => [...cats, 'HunterXHunter']);
    // };

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={ setCategory } />
            <hr />
        <ol>
            {
                category.map(category => ( //Aca lo que hacemos es mandar un array de los elementos que eesten dentro de category 
                    <GifRead 
                    key={ category }
                    category={ category } /> 
                ))
            }
            
        </ol>
        </div>
    )
}

export default GifExpertApp
