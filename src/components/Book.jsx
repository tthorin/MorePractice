import { bookText } from "../data/booktext";
import { useState, useEffect } from 'react';
import "./book.css";

const Book = () => {
    const MAX_PAGE_LENGTH = 200;
    const [begin, setBegin] = useState(0);
	const [mid,setMid] = useState(MAX_PAGE_LENGTH);
    const [end, setEnd] = useState(MAX_PAGE_LENGTH *2);
    const [page,setPage] = useState(1);

    useEffect(() => {
		setMid(findSpace(MAX_PAGE_LENGTH,false));
		setEnd(findSpace(mid+MAX_PAGE_LENGTH,false));
	},[])

    function findSpace (index, lookForward) {
        let idx = index;
		if(idx < 0 || idx > bookText.length) idx = idx < 0 ? 0 : bookText.length;
        while(idx < bookText.length && idx > 0 && bookText[idx] !== " ") {
            lookForward? idx++ : idx--;
        }
        return idx;
    }
    const prevPage = () => {
        if(page > 1) setPage(page-2);
        setBegin(findSpace((begin-MAX_PAGE_LENGTH*2),true));
		setMid(findSpace(begin-MAX_PAGE_LENGTH),true);
        setEnd(begin);
    }

    const nextPage = () => {
        setPage(page+2);
        setBegin(end);
        setMid(findSpace(end+MAX_PAGE_LENGTH,false));
		setEnd(findSpace(end+MAX_PAGE_LENGTH*2,false));
    }

    return (
        <section className="book-container">
            <h2>Book</h2>
            {/* <h4>Page: {page}</h4> */}
			<div className="book">
			<div className="page-top left"></div>
			<div className="page-spine"></div>
			<div className="page-top right"></div>
				<div className="book-page left">
					<p>p. {page}</p>
					<section> {bookText.slice(begin, mid)} </section>
                	<button disabled={begin===0} onClick={()=>prevPage()}>Previous page</button>
				</div>
				<div className="book-spine"></div>
				<div className="book-page right">
					<p>p. {page+1}</p>
					<section> {bookText.slice(mid, end)} </section>
                	<button disabled={end>=bookText.length} onClick={()=>{nextPage()}}>Next page</button>
				</div>
				<div className="page-bottom left"></div>
				<div className="book-spine bottom"></div>
				<div className="page-bottom right"></div>
			</div>
            <div className="button-bar">
            </div>
        </section>
    )

}

export default Book;
