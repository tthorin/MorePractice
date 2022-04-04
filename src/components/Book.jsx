import { bookText } from "../data/booktext";
import { useState, useEffect } from 'react';
import "./book.css";

const Book = () => {
    const MAX_PAGE_LENGTH = 200;
    const [begin, setBegin] = useState(0);
    const [end, setEnd] = useState(MAX_PAGE_LENGTH);
    const [page,setPage] = useState(1);

    useEffect(() => {findSpace(MAX_PAGE_LENGTH,false)},[])

    function findSpace (index, lookForward) {
        let idx = index;
        while(idx < bookText.length && idx > 0 && bookText[idx] !== " ") {
            lookForward? idx++ : idx--;
        }
        console.log("findspace:",idx);
        return idx;
    }
    const prevPage = () => {
        if(page > 1) setPage(page-1);
        setBegin(findSpace((begin-MAX_PAGE_LENGTH),true));
        setEnd(begin);
    }

    const nextPage = () => {
        console.log("begin nextPage:",begin,end);
        setPage(page+1);
        setBegin(end);
        setEnd(findSpace((end+MAX_PAGE_LENGTH),false));
        console.log("end nextPage:",begin,end);
    }

    return (
        <section className="book-container">
            <h2>Book</h2>
            <h4>Page: {page}</h4>
            <div className="book-page">
                <p> {console.log("book-text:",begin,end)}{bookText.slice(begin, end)}</p>
            </div>
            <div className="button-bar">
                <button disabled={begin===0} onClick={()=>prevPage()}>Prevous page</button>
                <button disabled={end>=bookText.length} onClick={()=>nextPage()}>Next page</button>
            </div>
        </section>
    )

}

export default Book;
