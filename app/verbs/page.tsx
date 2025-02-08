'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Verb {
  key: 	  	string;
  org:		string;
  translation:	string;
  je:		string;
  tu:		string;
  il:		string;
  nous:		string;
  vous:		string;
  ils:		string;  
};

export default function VerbsPage(){

       const [verbsdata, setData] = useState<Verb[] | null>(null);
       const [currentPage, setCurrentPage] = useState(1);
       
       const ITEMS_PER_PAGE = 2;

       let totalPages = 0;
       if (verbsdata != null ){
       	  totalPages = Math.ceil(verbsdata.length / ITEMS_PER_PAGE);
	}

       useEffect( () => {

       	async function getVerbs(){
       	     const res = await fetch("/api/getverbs");
	     const data = await res.json();
	     setData(data);
       	};
       
       	getVerbs();
	
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
       
             const dispverbs = [];
       	     const startIndex = (currentPage-1) * ITEMS_PER_PAGE;
	     const endIndex   = startIndex + ITEMS_PER_PAGE;

	     if( verbsdata != null ){
	     	 for (let i = startIndex; i < endIndex; i++ ){
		     if( i < verbsdata.length ){

			const key1 = verbsdata[i].key + "a";
       	       		const key2 = verbsdata[i].key + "b";
			
		     	 dispverbs.push(
			    <table key={i}>
		     	    <thead><tr><th>{verbsdata[i].org}</th><th>{verbsdata[i].translation}</th><th></th><th></th></tr></thead>
			    <tbody>			 
				<tr key={verbsdata[i].key}><td>je</td><td>{verbsdata[i].je}</td><td>nous</td><td>{verbsdata[i].nous}</td></tr>
				<tr key={key1}><td>tu</td><td>{verbsdata[i].tu}</td><td>vous</td><td>{verbsdata[i].vous}</td></tr>
				<tr key={key2}><td>il</td><td>{verbsdata[i].il}</td><td>ils</td><td>{verbsdata[i].ils}</td></tr>
			    </tbody>
		     	    </table>				
			 );
		     }
		 }
             }

	     return dispverbs;
	};

       return (
       <div>
		<button className="mk-next-button mk-border mk-light-gray" key="buttonback" onClick={ () => handlePageChange( currentPage-1 ) } >&lt;&lt;</button>
		{currentPage} / {totalPages} 	
		<button className="mk-next-button mk-border mk-light-gray" key="buttonnext" onClick={ () => handlePageChange( currentPage+1 ) } >&gt;&gt;</button>       
      		 { createPaginatedVerbData() }
		<p />
		<Link href="/"><button className="mk-button mk-light-gray mk-left">back</button></Link>
       </div>
       );
};