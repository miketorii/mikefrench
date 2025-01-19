import Link from 'next/link';

export default function SentencesPage(){

       const sentences = [
       	     { key: '1', sentence: 'Ca coute cinq euros?', translated: 'これは５ユーロですか？' },
       	     { key: '2', sentence: 'Tu veux quoi?', translated: '何が欲しいですか？' },
       	     { key: '3', sentence: 'Pourquoi Leo est ici?', translated: 'レオは何故ここにいますか？' }
       ];

       return (
       <div>
              <h1>This is Sentences page</h1>
	      <table>
	      	<thead>
			<tr><th className="mk-sentence">Sentences</th><th className="mk-sentence">Translated</th></tr>
		</thead>
		<tbody>
			{ sentences.map( (obj) => ( <tr key={obj.key} ><td>{obj.sentence}</td><td>{obj.translated}</td></tr> )  ) }
		</tbody>
	      </table>
       	      <p />
	      <Link href="/"><button>back</button></Link>
       </div>
       );
};