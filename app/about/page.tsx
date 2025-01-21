import Link from 'next/link';

export default function AboutPage(){
       return (
       <div>
              <h1>This is About page</h1>
       	      <p />
	      <Link href="/"><button className="mk-button mk-light-gray mk-right">back</button></Link>
       </div>
       );
};