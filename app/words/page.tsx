import Link from 'next/link';

export default function WordsPage() {

       const words = `
       [
       	     { "key": "1", "word": "velo", "translation": "自転車"},
       	     { "key": "2", "word": "duex", "translation": "2"},
       	     { "key": "3", "word": "la serviette", "translation": "ナプキン"},	
       	     { "key": "4", "word": "miam", "translation": "おいしそう"},
       	     { "key": "5", "word": "verre", "translation": "グラス"},
       	     { "key": "6", "word": "trois", "translation": "3"},
       	     { "key": "7", "word": "aujourd&#39;hui", "translation": "今日"},
       	     { "key": "8", "word": "placard", "translation": "戸棚"},
       	     { "key": "9", "word": "gâteau", "translation": "ケーキ"},
       	     { "key": "10", "word": "quatre", "translation": "4"},
       	     { "key": "11", "word": "ouvert", "translation": "開いている"},
       	     { "key": "12", "word": "tasse", "translation": "カップ"},
       	     { "key": "13", "word": "cadeau", "translation": "プレゼント"},
       	     { "key": "14", "word": "cinq", "translation": "5"},
       	     { "key": "15", "word": "maintenant", "translation": "今"},
       	     { "key": "16", "word": "De rien", "translation": "どういたしまして"}
	]
	`;       

       const wordstmp = JSON.parse(words);
       const dispwords = [];
       for (let i = 0; i < wordstmp.length; i+=2 ){
       	   if( i+1 < words.length ){
	     dispwords.push( <tr key={wordstmp[i].key} ><td>{wordstmp[i].word}</td><td>{wordstmp[i].translation}</td><td>{wordstmp[i+1].word}</td><td>{wordstmp[i+1].translation}</td></tr> );
	   }
	}

       return (
       <div>
	<table>
	<thead>
		<tr><th>mot</th><th>意味</th><th>mot</th><th>意味</th></tr>		
	</thead>
	<tbody>
		{ dispwords }
	</tbody>
	</table>	
	<Link href="/"><button className="mk-button mk-light-gray mk-left">back</button></Link>
       </div>
       );
};