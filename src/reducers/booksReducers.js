'use strict'

export function booksReducers(state = {books:[]}, action) {
    switch (action.type) {
        case "POST_BOOK":
            return {books: [...state.books, ...action.payload]}
         case "DELETE_BOOK":
            var filtered = state.books.filter((book) => {
                return book.id != action.payload.id;
            }); 
            return {books: filtered}
         case "UPDATE_BOOK":
            var filtered = state.books.filter((book) => {
                if (book.id === action.payload.id)
                {
                    book.title = action.payload.title;
                    return book;
                }
                else
                {
                    return book;
                }
            }); 
            return {books: filtered}
    }
    return state
}