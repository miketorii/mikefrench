"use client"

import Link from 'next/link';
import { useState } from 'react';

/*
interface Word {
  key: 	  	string;
  word:		string;
  translation:	string;
};
*/

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
       	     { "key": "24", "word": "chocolat", "translation": "チョコレート"},
       	     { "key": "25", "word": "une ècole", "translation": "学校"},
       	     { "key": "26", "word": "le parc", "translation": "公園"},
       	     { "key": "27", "word": "la voiture", "translation": "車"},
       	     { "key": "28", "word": "la valise", "translation": "スーツケース"},	     
       	     { "key": "29", "word": "un avion", "translation": "飛行機"},
       	     { "key": "30", "word": "l'aèroport", "translation": "空港"},
       	     { "key": "31", "word": "le train", "translation": "電車"},
       	     { "key": "32", "word": "un billet d'avion", "translation": "航空券"},
       	     { "key": "33", "word": "ici", "translation": "ここに"},
       	     { "key": "34", "word": "la chouette", "translation": "フクロウ"},
       	     { "key": "35", "word": "le animal de campagnie", "translation": "ペット"},
       	     { "key": "36", "word": "père", "translation": "父"},
       	     { "key": "37", "word": "mère", "translation": "母"},
       	     { "key": "38", "word": "frère", "translation": "兄"},
       	     { "key": "39", "word": "sœur", "translation": "姉"},
       	     { "key": "40", "word": "fils", "translation": "息子"}
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
	<button className="mk-next-button mk-border mk-light-gray" key="buttonback" onClick={ () => handlePageChange( currentPage-1 ) } >&lt;&lt;</button>
	{currentPage} / {totalPages} 	
	<button className="mk-next-button mk-border mk-light-gray" key="buttonnext" onClick={ () => handlePageChange( currentPage+1 ) } >&gt;&gt;</button>
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
	<Link href="/"><button className="mk-button mk-light-gray mk-left">back</button></Link>
       </div>
       );
};