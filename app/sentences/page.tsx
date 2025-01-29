'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SentencesPage(){

       const sentences = [
       	     { "key": "1", "sentence": "Ca coute cinq euros?", "translated": "これは５ユーロですか？" },
       	     { "key": "2", "sentence": "Tu veux quoi?", "translated": "何が欲しいですか？" },
       	     { "key": "3", "sentence": "Pourquoi Leo est ici?", "translated": "レオは何故ここにいますか？" }
       ];

       const [sentencesdata, setData] = useState({ "key": "", "sentence": "", "translated": "" });

       async function getSentences(){
       	     const res = await fetch("/api/getsentences");
	     const data = await res.json();
	     setData({ "key": data.key, "sentence": data.sentence, "translated": data.translated });
       }

       return (
       <div>
              <h1>This is Sentences page</h1>
	      <button className="mk-button mk-light-gray" onClick={getSentences}>get</button>
	      <p />
	      { sentencesdata.sentence }
	      { sentencesdata.translated }
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