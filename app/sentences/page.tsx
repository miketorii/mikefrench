'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Sentence {
  key: 	  	string;
  sentence:	string;
  translated:	string;
};

export default function SentencesPage(){

       const [sentencesdata, setData] = useState<Sentence[] | null>(null);
       const [currentPage, setCurrentPage] = useState(1);

       const ITEMS_PER_PAGE = 4;

       let totalPages = 0;
       if (sentencesdata != null ){
       	  totalPages = Math.ceil(sentencesdata.length / ITEMS_PER_PAGE);
	}

       useEffect( () => {

       	async function getSentences(){
       	     const res = await fetch("/api/getsentences");
	     const data = await res.json();
	     setData(data);
       	};
       
       	getSentences();
	
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

       const createPaginatedVerbData = () => {
       
             const dispsentences = [];
       	     const startIndex = (currentPage-1) * ITEMS_PER_PAGE;
	     const endIndex   = startIndex + ITEMS_PER_PAGE;

	     if( sentencesdata != null ){
	     	 for (let i = startIndex; i < endIndex; i++ ){
		     if( i < sentencesdata.length ){
		     	 dispsentences.push(
				<tr key={sentencesdata[i].key}><td>{sentencesdata[i].sentence}</td><td>{sentencesdata[i].translated}</td></tr>
			 );
		     }
		 }
             }

	     return dispsentences;
	};



       return (
       <div>
	<button className="mk-next-button mk-border mk-light-grey" key="buttonback" onClick={ () => handlePageChange( currentPage-1 ) } >&lt;&lt;</button>
	{currentPage} / {totalPages} 	
	<button className="mk-next-button mk-border mk-light-grey" key="buttonnext" onClick={ () => handlePageChange( currentPage+1 ) } >&gt;&gt;</button>       
        
	<table>
       	<thead>
		<tr><th className="mk-sentence">Sentences</th><th className="mk-sentence">Translated</th></tr>
	</thead>
	<tbody>
		{ createPaginatedVerbData() }
	
	</tbody>
	</table>
	<p />
	<Link href="/"><button className="mk-button mk-light-grey mk-left">back</button></Link>
	<p />
       </div>
       );
};
