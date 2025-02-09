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

       const words = `
       [
       	     { "key": "1", "word": "velo", "translation": "自転車"},
       	     { "key": "2", "word": "duex", "translation": "2"},
       	     { "key": "3", "word": "la serviette", "translation": "ナプキン"},	
       	     { "key": "4", "word": "miam", "translation": "おいしそう"},
       	     { "key": "5", "word": "verre", "translation": "グラス"},
       	     { "key": "6", "word": "trois", "translation": "3"},
       	     { "key": "7", "word": "aujourd'hui", "translation": "今日"},
       	     { "key": "8", "word": "placard", "translation": "戸棚"},
       	     { "key": "9", "word": "gâteau", "translation": "ケーキ"},
       	     { "key": "10", "word": "quatre", "translation": "4"},
       	     { "key": "11", "word": "ouvert", "translation": "開いている"},
       	     { "key": "12", "word": "tasse", "translation": "カップ"}	     
	]
	`;

       ///////////////////////////////////////
       //
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

       ///////////////////////////////////////
       //
       const wordstmp = JSON.parse(words);

       const createPaginatedWordData = () => {
       	     const dispwords = [];
       
       	     const ITEMS_PER_PAGE2 = 4;
       	     const startIndex = (currentPage-1) * ITEMS_PER_PAGE2;
	     const endIndex   = startIndex + ITEMS_PER_PAGE2;
	     
	      for (let i = startIndex; i < endIndex; i+=2 ){
	      	  if( i+1 < words.length ){
		      dispwords.push( <tr key={wordstmp[i].key} ><td>{wordstmp[i].word}</td><td>{wordstmp[i].translation}</td><td>{wordstmp[i+1].word}</td><td>{wordstmp[i+1].translation}</td></tr> );
		  }
	      }

	      return dispwords;
      };

       return (
       <div className="mk-container">
              <h1>This is About page</h1>
	      <Link href="/"><button className="mk-button mk-light-gray mk-right">back</button></Link>	      
	      <h2>Page: {currentPage} / {totalPages}</h2>
       	      <p />
	      <ul>
		      { getPaginatedData().map( (item: Item) => ( <li key={item.id}>{item.name}</li> ) ) }
	      </ul>	      
	      <p />
	      <table>
	      <thead>
		<tr><th>mot</th><th>意味</th><th>mot</th><th>意味</th></tr>
	      </thead>
	      <tbody>
	      	 { createPaginatedWordData() }		
	      </tbody>
	      </table>	
	      <p />
	      <button key="but1" onClick={ () => handlePageChange( currentPage+1 ) } >next</button>
	      <p />
	      <button key="but2" onClick={ () => handlePageChange( currentPage-1 ) } >back</button>	      
       </div>
       );
};

