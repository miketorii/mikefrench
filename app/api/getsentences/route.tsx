//import * as fs from 'fs';
//import * as path from 'path';

export async function GET() {

       const sentences = [
       	     { "key": "1", "sentence": "Ca coute cinq euros?", "translated": "これは５ユーロですか？" },
       	     { "key": "2", "sentence": "Je suis content parce que tu es avec moi.", "translated": "君がそばにいるから嬉しいです" },
       	     { "key": "3", "sentence": "Merci pour les pizzas.", "translated": "ピザをありがとう" },
       	     { "key": "4", "sentence": "Tu veux quoi?", "translated": "何が欲しいですか？" },
       	     { "key": "5", "sentence": "Peut-etre, je ne sais pas.", "translated": "たぶん、わかりません" },
       	     { "key": "6", "sentence": "Nous sommes perdus.", "translated": "私たちは道に迷いました" },  
       	     { "key": "7", "sentence": "Pourquoi Leo est ici?", "translated": "レオは何故ここにいますか？" },
       	     { "key": "8", "sentence": "C'est l'oncle d'Omar?", "translated": "オマールのおじさんですか？" },

       	     { "key": "9", "sentence": "Je suis toujours à l'heure.", "translated": "私はいつも時間通りです" },
       	     { "key": "10", "sentence": "Pas du tout, Monsieur", "translated": "いいえ、全然です、旦那様" },
       	     { "key": "11", "sentence": "Vous voulez une autre part de pizza?", "translated": "ピザをもう一切れいかがですか？" },
       	     { "key": "12", "sentence": "Vous voulez un autre café", "translated": "コーヒーをもう一杯いかがですか？" },

       	     { "key": "13", "sentence": "Vous payez par carte?", "translated": "カードで払いますか？" },
       	     { "key": "14", "sentence": "Où est la réunion?", "translated": "会議はどこですか？" },
       	     { "key": "15", "sentence": "Notre fils travaille au Japon.", "translated": "私たちの息子は日本で働いています" },
       	     { "key": "16", "sentence": "L'entreprise est à Paris?", "translated": "その会社はパリにありますか？" },	     
	     
       	     { "key": "17", "sentence": "Combien ca coute?", "translated": "いくらですか？" },
       	     { "key": "18", "sentence": "De rien", "translated": "どういたしまして" },
       	     { "key": "19", "sentence": "Il y a des crepes", "translated": "クレープがあります" },
       	     { "key": "20", "sentence": "On y va!", "translated": "行きましょう" }
       ];

       return Response.json( sentences );

/*
       	     { "key": "", "sentence": "", "translated": "" }
	     
       const filePath = path.join(__dirname,'data.json');

       console.log(filePath);
       console.log("------api get---------");
       
       const data = fs.readFileSync(filePath, 'utf8');
       
       return Response.json( data );       
*/

}
