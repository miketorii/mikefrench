export async function GET() {

       const verbs = [
       	     { "key": "1", "org" : "avoir", "translation":"持っている", "je": "ai", "tu": "as", "il": "a", "nous":"avon", "vous":"avez", "ils":"ont"},
       	     { "key": "2", "org" : "veux", "translation":"欲しい", "je": "veux", "tu": "veux", "il": "veut", "nous":"voulons", "vous":"voulez", "ils":"veulent"},
       	     { "key": "3", "org" : "laver", "translation":"洗う", "je": "lave", "tu": "laves", "il": "lave", "nous":"lavons", "vous":"lavez", "ils":"lavent"},
       	     { "key": "4", "org" : "rester", "translation":"残る", "je": "reste", "tu": "restes", "il": "reste", "nous":"restons", "vous":"restez", "ils":"restent"}	     
	];

       return Response.json( verbs );
}
