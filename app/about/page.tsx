"use client"

import Link from 'next/link';
import { useState } from 'react';

export interface Item {
       id:	 number;
       name:	 string;
};

export default function AboutPage(){

       const data: Item[] = [{id: 1, name: "Item 1"},
       	     	   	    {id: 2, name: "Item 2"},
       	     	   	    {id: 3, name: "Item 3"},
       	     	   	    {id: 4, name: "Item 4"},
       	     	   	    {id: 5, name: "Item 5"},
       	     	   	    {id: 6, name: "Item 6"},
       	     	   	    {id: 7, name: "Item 7"},
       	     	   	    {id: 8, name: "Item 8"},
       	     	   	    {id: 9, name: "Item 9"}   
			    ];

       const ITEMS_PER_PAGE = 3;
       const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

       const [currentPage, setCurrentPage] = useState(1);

       const handlePageChange = (page: number) => {
	     if (page <= 0){
	     	page = 1;
	     }
       	     if (page > totalPages){
	     	page = totalPages;
	     }

	     setCurrentPage(page);
       };

       const getPaginatedData = () => {
       	     const startIndex = (currentPage-1) * ITEMS_PER_PAGE;
	     const endIndex   = startIndex + ITEMS_PER_PAGE;
	     return data.slice(startIndex, endIndex);
       };
       
       return (
       <div>
              <h1>This is About page</h1>
	      <h2>Page: {currentPage} / {totalPages}</h2>
       	      <p />
	      <ul>
		      { getPaginatedData().map( (item: Item) => ( <li key={item.id}>{item.name}</li> ) ) }
	      </ul>	      
	      <button key="but1" onClick={ () => handlePageChange( currentPage+1 ) } >next</button>
	      <p />
	      <button key="but2" onClick={ () => handlePageChange( currentPage-1 ) } >back</button>	      
	      <Link href="/"><button className="mk-button mk-light-gray mk-right">back</button></Link>
       </div>
       );
};

