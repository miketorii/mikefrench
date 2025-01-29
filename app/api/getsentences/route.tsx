export async function GET() {

/*
       const sentences = [
       	     { "key": "1", "sentence": "Ca coute cinq euros?", "translated": "これは５ユーロですか？" },
       	     { "key": "2", "sentence": "Tu veux quoi?", "translated": "何が欲しいですか？" },
       	     { "key": "3", "sentence": "Pourquoi Leo est ici?", "translated": "レオは何故ここにいますか？" }
       ];
*/

       return Response.json(
       	     { "key": "1", "sentence": "Ca coute dix euros?", "translated": "これは１０ユーロですか？" }
	);
}
