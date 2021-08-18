import React,{createContext,useEffect,useReducer} from 'react';
import uuid from 'uuid/dist/v1';
import { BookReducers } from './../reducers/BookReducers';
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books,dispatch] = useReducer(BookReducers,[],()=>{
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) :[];
    });
    
    useEffect(() => {
        localStorage.setItem('books',JSON.stringify(books))
    },[books]);
    return ( 
        <BookContext.Provider value ={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
