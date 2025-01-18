// 'use client';

import Link from 'next/link';

export function NavLinks() {
       return (
       	      <div>
       	      <nav>
		<Link href="/">
		      Home
		</Link>
		<p/>
		<Link href="/words">
		      Moi
		</Link>
		<p/>
		<Link href="/verbs">
		      Verbs
		</Link>
		<p/>
		<Link href="/sentences">
		      Sentences
		</Link>
		<p/>
		<Link href="/about">
		      About
		</Link>
		<p/>
              </nav>
	      </div>
       );
};