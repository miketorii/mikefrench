export async function GET() {

       const words = `
       [
       	     { "key": "1", "word": "velo", "translation": "自転車"},
       	     { "key": "2", "word": "duex", "translation": "2"},
       	     { "key": "3", "word": "la serviette", "translation": "ナプキン"},	
       	     { "key": "4", "word": "miam", "translation": "おいしそう"},
       	     { "key": "5", "word": "verre", "translation": "グラス"},
       	     { "key": "6", "word": "trois", "translation": "3"},
       	     { "key": "7", "word": "aujourd'hui", "translation": "今日"},
       	     { "key": "8", "word": "placard", "translation": "戸棚"},
       	     { "key": "9", "word": "gâteau", "translation": "ケーキ"},
       	     { "key": "10", "word": "quatre", "translation": "4"},
       	     { "key": "11", "word": "ouvert", "translation": "開いている"},
       	     { "key": "12", "word": "tasse", "translation": "カップ"},
       	     { "key": "13", "word": "cadeau", "translation": "プレゼント"},
       	     { "key": "14", "word": "cinq", "translation": "5"},
       	     { "key": "15", "word": "maintenant", "translation": "今"},
       	     { "key": "16", "word": "De rien", "translation": "どういたしまして"},
       	     { "key": "17", "word": "quand", "translation": "いつ"},
       	     { "key": "18", "word": "près d'ici", "translation": "この近く"},
       	     { "key": "19", "word": "la boulangerie", "translation": "パン屋"},
       	     { "key": "20", "word": "la banque", "translation": "銀行"},
       	     { "key": "21", "word": "l'appartement", "translation": "アパート"},
       	     { "key": "22", "word": "le jardin", "translation": "庭"},
       	     { "key": "23", "word": "la musique", "translation": "音楽"},
       	     { "key": "24", "word": "chocolat", "translation": "チョコレート"}	     
	]
	`;       


       return Response.json( words );
}
