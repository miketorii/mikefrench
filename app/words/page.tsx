'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Word {
  key: 	  	string;
  word:		string;
  translation:	string;
};

export default function WordsPage() {

       const [wordsdata, setData] = useState<Word[] | null>(null);
       const [currentPage, setCurrentPage] = useState(1);
       const [searchResult, setResult] = useState('');
       const [searchValue, setSearchValue] = useState('');       
       
       const ITEMS_PER_PAGE = 10;

       let totalPages = 0;
       if (wordsdata != null ){
       	  totalPages = Math.ceil(wordsdata.length / ITEMS_PER_PAGE);
	}

       useEffect( () => {

       	async function getWords(){
       	     const res = await fetch("/api/getwords");
	     const data = await res.json();
	     setData(data);
       	};
       
       	getWords();
	
       },[]);

       const handlePageChange = (page: number) => {
	     
	     if (page <= 0){
	     	page = 1;
	     }
       	     if (page > totalPages){
	     	page = totalPages;
	     }

	     setCurrentPage(page);
       };

       const createPaginatedWordData = () => {
       	     const dispwords = [];
       
       	     const startIndex = (currentPage-1) * ITEMS_PER_PAGE;
	     const endIndex   = startIndex + ITEMS_PER_PAGE;

	     if( wordsdata != null ){
	     	 for (let i = startIndex; i < endIndex; i+=2 ){
		     if( i+1 < wordsdata.length ){
		     	 dispwords.push( <tr key={wordsdata[i].key} ><td>{wordsdata[i].word}</td><td>{wordsdata[i].translation}</td><td>{wordsdata[i+1].word}</td><td>{wordsdata[i+1].translation}</td></tr> );
		     }
		 }
             }

	     return dispwords;
       };

       const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
       	     setSearchValue(event.target.value);
       };

       const searchWord = () => {

       	     let findword = "";

	     if( ( wordsdata != null ) && (searchValue != "") ){
	     	 const result = wordsdata.filter( value => { return value.word.includes(searchValue) } );
		 if( result != null && result[0] != null){
		      findword = result[0].translation;
		 }
	     }
	     
       	     setResult(findword);
       };

       return (
       <div>
	<i className="fa fa-search"></i>	
	<input type="text" value={searchValue} onChange={handleSearchValue} className="mk-search-box" />
	{ searchResult } <button className="mk-next-button mk-light-grey" onClick={searchWord} >Search</button>
	<p />       
	<button className="mk-next-button mk-border mk-light-grey" key="buttonback" onClick={ () => handlePageChange( currentPage-1 ) } >&lt;&lt;</button>
	{currentPage} / {totalPages} 	
	<button className="mk-next-button mk-border mk-light-grey" key="buttonnext" onClick={ () => handlePageChange( currentPage+1 ) } >&gt;&gt;</button>
	<table>
	<thead>
		<tr><th>mot</th><th>意味</th><th>mot</th><th>意味</th></tr>		
	</thead>
	<tbody>
		{ createPaginatedWordData() }	
	</tbody>
	</table>
	<p />
	<Link href="/"><button className="mk-button mk-light-grey mk-left">back</button></Link>
       </div>
       );
};