import { useRouter } from 'next/router'

// localhost/news/whatever

function DetailPage() {

	const router = useRouter();

	const newsId = router.query.newsId;

	return <h1>Detail Page for: ;</h1>
}

export default DetailPage;