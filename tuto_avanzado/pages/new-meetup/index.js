import NewMeetupForm from '../../components/meetups/NewMeetupForm';
function NewMeetupPage() {
	function addMeetUpHandler(enteredMeetupData) {
		console.log(enteredMeetupData);
	}

	return <NewMeetupForm onAddMeetup={addMeetUpHandler}/>
}

export default NewMeetupPage;