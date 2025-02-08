// 'use client';

import Link from 'next/link';

export function NavLinks() {
       return (
       	      <div className="mk-bar mk-light-gray mk-border">
       	      <nav>
		<Link className="mk-bar-item" href="/">
		      Home
		</Link>
		<p/>
		<Link className="mk-bar-item" href="/words">
		      Words
		</Link>
		<p/>
		<Link className="mk-bar-item" href="/verbs">
		      Verbs
		</Link>
		<p/>
		<Link className="mk-bar-item" href="/sentences">
		      Sentences
		</Link>
		<p/>
		<Link className="mk-bar-item" href="/about">
		      About
		</Link>
		<p/>
		<i className="fa fa-search mk-right"></i>
              </nav>
	      </div>
       );
};