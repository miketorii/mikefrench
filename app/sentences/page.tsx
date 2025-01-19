import Link from 'next/link';

export default function SentencesPage(){

       const sentences = [
       	     { sentence: 'Ca coute cinq euros?', translated: 'これは５ユーロですか？' },
       	     { sentence: 'Tu veux quoi?', translated: '何が欲しいですか？' },
       	     { sentence: 'Pourquoi Leo est ici?', translated: 'レオは何故ここにいますか？' }
       ];

       return (
       <div>
              <h1>This is Sentences page</h1>
	      <table>
	      	<thead>
			<tr><th>Sentences</th><th>Translated</th></tr>
		</thead>
		<tbody>
			{ sentences.map( (obj) => ( <tr key={obj.sentence} ><td>{obj.sentence}</td><td>{obj.translated}</td></tr> )  ) }
		</tbody>
	      </table>
       	      <p />
	      <Link href="/"><button>back</button></Link>
       </div>
       );
};