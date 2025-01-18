import Link from 'next/link';

export default function WordsPage() {
  return (
    <div>
    <table>
    <thead>
      <tr>
         <th>mot</th><th>意味</th><th>mot</th><th>意味</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>velo</td><td>自転車</td><td>duex</td><td>2</td>
      </tr>
      <tr>
	<td>la serviette</td><td>ナプキン</td><td>miam</td><td>おいしそう</td>
      </tr>      
      <tr>
        <td>verre</td><td>グラス</td><td>trois</td><td>3</td>
      </tr>
      <tr>
        <td>aujourd&#39;hui</td><td>今日</td><td>placard</td><td>戸棚</td>	
      </tr>      
      <tr>
        <td>gâteau</td><td>ケーキ</td><td>quatre</td><td>4</td>
      </tr>
      <tr>
        <td>ouvert</td><td>開いている</td><td>tasse</td><td>カップ</td>	
      </tr>
      <tr>
        <td>cadeau</td><td>プレゼント</td><td>cinq</td><td>5</td>
      </tr>
      <tr>
        <td>maintenant</td><td>今</td><td>De rien</td><td>どういたしまして</td>	
      </tr>      
    </tbody>
    </table>
    <p />
    <Link href="/"><button>back</button></Link>
    </div>
  );
};