import Link from 'next/link';

export default function VerbsPage(){

       const verbs = `
       [
       	     { "key": "1", "org" : "avoir", "translation":"持っている", "je": "ai", "tu": "as", "il": "a", "nous":"avon", "vous":"avez", "ils":"ont"},
       	     { "key": "2", "org" : "veux", "translation":"欲しい", "je": "veux", "tu": "veux", "il": "veut", "nous":"voulons", "vous":"voulez", "ils":"veulent"}
	]
	`;       

       const verbstmp = JSON.parse(verbs);
       const dispverbs = [];
       for (let i = 0; i < verbstmp.length; i++ ){
       	   const key1 = verbstmp[i].key + "a";
       	   const key2 = verbstmp[i].key + "b";
	     dispverbs.push(
	     	<table key={i}>
			<thead><tr><th>{verbstmp[i].org}</th><th>{verbstmp[i].translation}</th><th></th><th></th></tr></thead>
		<tbody>
			<tr key={verbstmp[i].key}><td>je</td><td>{verbstmp[i].je}</td><td>nous</td><td>{verbstmp[i].nous}</td></tr>
			<tr key={key1}><td>tu</td><td>{verbstmp[i].je}</td><td>vous</td><td>{verbstmp[i].vous}</td></tr>
			<tr key={key2}><td>il</td><td>{verbstmp[i].je}</td><td>ils</td><td>{verbstmp[i].ils}</td></tr>
		</tbody>
		</table>	
			);
	}

       return (
       <div>
              <h1>This is verbs page</h1>
	      { dispverbs }
       	      <p />
	      <Link href="/"><button className="mk-button mk-light-gray mk-left">back</button></Link>
       </div>
       );
};