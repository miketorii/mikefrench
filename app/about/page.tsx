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
       	     	   	    {id: 6, name: "Item 6"}			    
			    ];

       const ITEMS_PER_PAGE = 3;
       const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

       const [currentPage, setCurrentPage] = useState(1);

       const handlePageChange = (page: number) => { setCurrentPage(page); };

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
	      <button key="but1" onClick={ () => handlePageChange( 2 ) } >next</button>
	      <p />
	      <button key="but2" onClick={ () => handlePageChange( 1 ) } >back</button>	      
	      <Link href="/"><button className="mk-button mk-light-gray mk-right">back</button></Link>
       </div>
       );
};

