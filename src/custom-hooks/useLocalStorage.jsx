import {useEffect, useState} from 'react'

function useLocalStorage (itemName, initialValue){
    const [error, setError] = useState(true)
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(initialValue);
    
    useEffect(() => {
  
      setTimeout(()=> {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem = [];
    
          !localStorageItem ? localStorage.setItem(itemName, JSON.stringify(initialValue)) : 
          parsedItem = JSON.parse(localStorageItem);
    
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error)
        }  
      }, 2000);
    },);
    
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
  
      } catch{
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  
  }

export { useLocalStorage }