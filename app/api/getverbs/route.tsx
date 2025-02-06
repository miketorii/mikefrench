export async function GET() {

       const verbs = `
       [
       	     { "key": "1", "org" : "avoir", "translation":"持っている", "je": "ai", "tu": "as", "il": "a", "nous":"avon", "vous":"avez", "ils":"ont"},
       	     { "key": "2", "org" : "veux", "translation":"欲しい", "je": "veux", "tu": "veux", "il": "veut", "nous":"voulons", "vous":"voulez", "ils":"veulent"}
	]
	`;       

       return Response.json( verbs );
}
