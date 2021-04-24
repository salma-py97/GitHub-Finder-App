// Instantiate GitHub class (github.js)
const github = new GitHub;

// Instantiate UI class (ui.js)
const ui = new UI;


// Search input
const searchUser = document.getElementById('search-user');
const profile = document.getElementById('profile');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;
    // console.log(userText);

    if(userText !== ""){
        // Make HTTP call (github.js)
        // getUser() is a method inside the class GitHub
        // we are calling the method on the instance of the class = github 
        // call the method getUser using userText
        github.getUser(userText)
        // from github.js, we have our key:value pair {profile: profileData (in the format of json())} which is in the format of a promise because we used async and async return a promise, so we need to use .then To actually consume the value returned when the promise fulfills  data = {profile: profileData}
        .then(data => {
            console.log(data);
            console.log(data.profile);
            console.log(data.profile.name);
            console.log(data.profile.bio);
            console.log(data.profile.company);
            console.log(data.repos);

            if(data.profile.message === 'Not Found'){
                // Show an alert
                ui.showAlert('User Not Found', 'alert alert-dismissible alert-danger');
                ui.clearProfile();
            } else {
                // Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })

    } else {
        // Clear Profile
        ui.clearProfile();
        // console.log('input something!');
    }
})
