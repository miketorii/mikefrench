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
       	     { "key": "8", "sentence": "C'est l'oncle d'Omar?", "translated": "オマールのおじさんですか？" }	     
       ];

       return Response.json( sentences );

/*
       const filePath = path.join(__dirname,'data.json');

       console.log(filePath);
       console.log("------api get---------");
       
       const data = fs.readFileSync(filePath, 'utf8');
       
       return Response.json( data );       
*/

}
