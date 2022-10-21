import Layout from '../components/layout/Layout';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUP = [
	{
		id: 'm1',
		title: 'Primer Voluntariado',
		image: 'https://cflvdg.avoz.es/sc/5DavlrYbHd2wP96OH_AlPRuExuY=/480x/2022/07/18/00121658136482783886612/Foto/i18l2012.jpg',
		address: 'Pueblo Villalejana'
	},
	{
		id: 'm1',
		title: 'Segundo Voluntariado',
		image: 'https://cflvdg.avoz.es/sc/5DavlrYbHd2wP96OH_AlPRuExuY=/480x/2022/07/18/00121658136482783886612/Foto/i18l2012.jpg',
		address: 'Pueblo Villacercana'
	},
	{
		id: 'm1',
		title: 'Tercer Voluntariado',
		image: 'https://cflvdg.avoz.es/sc/5DavlrYbHd2wP96OH_AlPRuExuY=/480x/2022/07/18/00121658136482783886612/Foto/i18l2012.jpg',
		address: 'Pueblo Villablanca'
	}
]

function HomePage() {
	return (
			<MeetupList meetups={DUMMY_MEETUP} />
			);
}

export default HomePage;