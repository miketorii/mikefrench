"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function WordsPage() {

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
       	     { "key": "12", "word": "tasse", "translation": "カップ"},
       	     { "key": "13", "word": "cadeau", "translation": "プレゼント"},
       	     { "key": "14", "word": "cinq", "translation": "5"},
       	     { "key": "15", "word": "maintenant", "translation": "今"},
       	     { "key": "16", "word": "De rien", "translation": "どういたしまして"},
       	     { "key": "17", "word": "quand", "translation": "いつ"},
       	     { "key": "18", "word": "près d'ici", "translation": "この近く"},
       	     { "key": "19", "word": "la boulangerie", "translation": "パン屋"},
       	     { "key": "20", "word": "la banque", "translation": "銀行"},
       	     { "key": "21", "word": "l'appartement", "translation": "アパート"},
       	     { "key": "22", "word": "le jardin", "translation": "庭"},
       	     { "key": "23", "word": "la musique", "translation": "音楽"},
       	     { "key": "24", "word": "chocolat", "translation": "チョコレート"}	     
	]
	`;       

       const wordstmp = JSON.parse(words);
       
       const ITEMS_PER_PAGE = 8;
       const totalPages = Math.ceil(wordstmp.length / ITEMS_PER_PAGE);

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

       const createPaginatedWordData = () => {
       	     const dispwords = [];
       
       	     const startIndex = (currentPage-1) * ITEMS_PER_PAGE;
	     const endIndex   = startIndex + ITEMS_PER_PAGE;
	     
	      for (let i = startIndex; i < endIndex; i+=2 ){
	      	  if( i+1 < words.length ){
		      dispwords.push( <tr key={wordstmp[i].key} ><td>{wordstmp[i].word}</td><td>{wordstmp[i].translation}</td><td>{wordstmp[i+1].word}</td><td>{wordstmp[i+1].translation}</td></tr> );
		  }
	      }

	      return dispwords;
      };

       return (
       <div>
	<h2>Page: {currentPage} / {totalPages}</h2>
	<table>
	<thead>
		<tr><th>mot</th><th>意味</th><th>mot</th><th>意味</th></tr>		
	</thead>
	<tbody>
	      	 { createPaginatedWordData() }		
	</tbody>
	</table>
	<p />
	<button key="buttonnext" onClick={ () => handlePageChange( currentPage+1 ) } >next</button>
	<p />
	<button key="buttonback" onClick={ () => handlePageChange( currentPage-1 ) } >back</button>
	<p />
	<Link href="/"><button className="mk-button mk-light-gray mk-left">back</button></Link>
       </div>
       );
};