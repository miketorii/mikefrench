'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Sentence {
  key: 	  	string;
  sentence:	string;
  translated:	string;
};

export default function SentencesPage(){

       const sentences = [
       	     { "key": "1", "sentence": "Ca coute cinq euros?", "translated": "これは５ユーロですか？" },
       	     { "key": "2", "sentence": "Tu veux quoi?", "translated": "何が欲しいですか？" },
       	     { "key": "3", "sentence": "Pourquoi Leo est ici?", "translated": "レオは何故ここにいますか？" }
       ];

//       const [sentencesdata, setData] = useState([ { "key": "", "sentence": "", "translated": "" } ]);
//       const [sentencesdata, setData] = useState([]);
       const [sentencesdata, setData] = useState<Sentence[] | null>(null);

       async function getSentences(){
       	     const res = await fetch("/api/getsentences");
	     const data = await res.json();
//	     setData({ "key": data.key, "sentence": data.sentence, "translated": data.translated });
	     setData(data);
       }

       return (
       <div>
              <h1>This is Sentences page</h1>
	      <button className="mk-button mk-light-gray" onClick={getSentences}>get</button>
	      {sentencesdata && sentencesdata.length>0 ? (
	      <table>
	      <thead></thead>
	      <tbody>
			{ sentencesdata.map( (obj) => ( <tr key={obj.key} ><td>{obj.sentence}</td><td>{obj.translated}</td></tr> )  ) }
	      </tbody>
	      </table>
	      ) : ( <p /> ) }
	      <p />
	      <table>
	      	<thead>
			<tr><th className="mk-sentence">Sentences</th><th className="mk-sentence">Translated</th></tr>
		</thead>
		<tbody>
			{ sentences.map( (obj) => ( <tr key={obj.key} ><td>{obj.sentence}</td><td>{obj.translated}</td></tr> )  ) }
		</tbody>
	      </table>
       	      <p />
	      <Link href="/"><button className="mk-button mk-light-gray mk-left">back</button></Link>
       </div>
       );
};