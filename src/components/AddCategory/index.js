import React, { useState } from 'react'
import PropTypes from 'prop-types';


const AddCategory = (props) => {
    
    const { setCategory } = props

    const [ inputValue, setInputValue ] = useState('');

    const onHandleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if(inputValue.trim().length > 2){
            setCategory((cats) => [inputValue, ...cats]);
            setInputValue('')
        } else {
            console.log('Debes de ingresar un mensaje más largo')
        }      
    };
    
    return (
        <form onSubmit={(e) =>  handleSubmit(e) }>
            <input 
                type='text'
                value={inputValue}
                placeholder='Ingresa un valor'
                onChange={onHandleChange}
            />
        </form>
    );
};


AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired,
};


export default AddCategory;
