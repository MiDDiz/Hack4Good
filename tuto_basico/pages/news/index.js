// localhost/news
import Link from 'next/link';
import { Fragment} from 'react';

function NewsPage() {
	return (
		<Fragment>
			<h1>The News Page</h1>
			<ul>
				<li><Link href="/news/next-js-is-a-great-framework">
					next-js-is-a-great-framework
					</Link>
				</li>
			</ul>
		</Fragment>
		);
}

export default NewsPage;