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

       useEffect( () => {

       	async function getSentences(){
       	     const res = await fetch("/api/getsentences");
	     const data = await res.json();
	     setData(data);
       	};
       
       	getSentences();
	
       },[]);
       
       return (
       <div>
	<table>
       	<thead>
		<tr><th className="mk-sentence">Sentences</th><th className="mk-sentence">Translated</th></tr>
	</thead>
	<tbody>
		{sentencesdata && sentencesdata.map((obj) => (
			<tr key={obj.key}><td>{obj.sentence}</td><td>{obj.translated}</td></tr>
		) )}
	</tbody>
	</table>
	<p />
	<Link href="/"><button className="mk-button mk-light-gray mk-left">back</button></Link>
       </div>
       );
};