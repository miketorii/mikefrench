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
       	     { "key": "19", "sentence": "Il y a (des crepes)", "translated": "(クレープ)があります" },
       	     { "key": "20", "sentence": "On y va!", "translated": "行きましょう" },
       	     { "key": "21", "sentence": "Bon appètit", "translated": "どうぞ召し上がれ" },
       	     { "key": "22", "sentence": "Pardon", "translated": "すみません" },
       	     { "key": "23", "sentence": "Je ne sais pas", "translated": "分かりません" },
       	     { "key": "24", "sentence": "Valià (le parc)", "translated": "これが(公園)です" },
       	     { "key": "25", "sentence": "Joyeux anniversaire", "translated": "お誕生日おめでとう" },
       	     { "key": "26", "sentence": "Excusez moi", "translated": "すみません" },
       	     { "key": "27", "sentence": "Bien sur", "translated": "もちろん" },
       	     { "key": "28", "sentence": "Je viens de (Paris)", "translated": "私は(パリ)出身です" },	     
       	     { "key": "29", "sentence": "Je m'appelle Paul", "translated": "私の名前はポールです" },
       	     { "key": "30", "sentence": "Il/Elle s'appelle Marie", "translated": "彼女の名前はマリーです" },
       	     { "key": "31", "sentence": "Comment tu t'appelles?", "translated": "あなたの名前は何ですか？" },
       	     { "key": "32", "sentence": "Je suis en France/en Chine", "translated": "私はフランスにいます" },
       	     { "key": "33", "sentence": "Je suis au Japon", "translated": "私は日本にいます" },
       	     { "key": "34", "sentence": "Je suis à Tokyo/à Berlin", "translated": "私は東京にいます" },
       	     { "key": "35", "sentence": "Au revoir", "translated": "さようなら" },
       	     { "key": "36", "sentence": "à bientot", "translated": "またね" },
       	     { "key": "37", "sentence": "Bonne soirée", "translated": "良い夜を" },
       	     { "key": "38", "sentence": "Bonne journée", "translated": "良い一日を" },
       	     { "key": "39", "sentence": "Bienvenue", "translated": "ようこそ" },
       	     { "key": "40", "sentence": "à demain", "translated": "また明日" },
       	     { "key": "41", "sentence": "Ah d'accord", "translated": "なるほど" },
       	     { "key": "42", "sentence": "Sil vous plait", "translated": "お願いします" },
       	     { "key": "43", "sentence": "Tu arrives quand?", "translated": "いつ着きますか？" },
       	     { "key": "44", "sentence": "Pourquoi pas!", "translated": "いいですね" },	     	     
       	     { "key": "45", "sentence": "Vous voulez un verre d'eau", "translated": "水を一杯ください" },
       	     { "key": "46", "sentence": "Nous sommes perdus", "translated": "私たちは道に迷いました" },
       	     { "key": "47", "sentence": "Vous arrivez quand?", "translated": "あなたはいつ着きますか？" },
       	     { "key": "48", "sentence": "", "translated": "" }
       ];

       return Response.json( sentences );

/*
       	     { "key": "", "sentence": "", "translated": "" },
       	     { "key": "", "sentence": "", "translated": "" },
       	     { "key": "", "sentence": "", "translated": "" },
       	     { "key": "", "sentence": "", "translated": "" },	     
	     
       const filePath = path.join(__dirname,'data.json');

       console.log(filePath);
       console.log("------api get---------");
       
       const data = fs.readFileSync(filePath, 'utf8');
       
       return Response.json( data );       
*/

}
