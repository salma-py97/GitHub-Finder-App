class UI{
    constructor() {
        this.profile = document.getElementById('profile');
    }
    // if user found, show their profile
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2 w-100 d-flex justify-content-center" src="${user.avatar_url}">
                    <a href="${user.html_url} target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>            
                <div class="col-md-9">
                    <span class="badge badge-dark">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-success">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-warning">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>

                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: <span class="font-weight-bold">${user.company}</span></li>
                        <li class="list-group-item">Website/Blog: <span class="font-weight-bold"><a href="${user.blog}" target="_blank">${user.blog}</a></span></li>
                        <li class="list-group-item">Location: <span class="font-weight-bold">${user.location}</span></li>
                        <li class="list-group-item">Member since: <span class="font-weight-bold">${user.created_at}</span></li>
                    </ul>
                </div>            
            </div>
        </div>
        <h3 class="page-heading mb-3">10 Latest Repos</h3>
        <div id="repos">
        
        </div>
        `;
    }
    showRepos(repos){
        let output ='';
        repos.forEach(repo => {
            output += `
            <div class='card card-body mb-2'>
                <div class='row'>
                    <div class = 'col-md-6'>
                        <a href="${repo.html_url}" target="_blank">${repo.name}
                        </a>
                    </div>
                    <div class='col-md-6'>
                        <span class="badge badge-dark">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-success">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-warning">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
        });

        // Output repos
        document.getElementById('repos').innerHTML = output;

    }









    // Show alert if user not found
    showAlert(message, className){
        // Clear Current Alert
        this.clearAlertMessage();
        // Create div
        const div = document.createElement('div');
        
        // Add class to div
        div.className = className;

        // Create button element
        const button = document.createElement('button');
        button.className = 'close';
        button.setAttribute('data-dismiss', 'alert');
        button.setAttribute('type', 'button');
        button.innerHTML = '&times;';
        // Add Text
        const text = document.createTextNode(message);

        // Append Text
        div.appendChild(text);

        // Append button
        div.appendChild(button);

        // Insert button before text
        div.insertBefore(button, text)

        // Get a parent
        const container = document.querySelector('.search-container');

        // Get Search Box
        const search = document.querySelector('.search');

        // Insert div before search
        container.insertBefore(div, search);

        // Timeout after 1s
        setTimeout(() => {
            this.clearAlertMessage();
        }, 1000)
    }

    clearAlertMessage(){
        const currentAlert = document.querySelector(".alert");
        if (currentAlert){
            currentAlert.remove();
        }

    }
    // When user is not found, clear profile.innerHTML
    clearProfile(){
        this.profile.innerHTML = "";
    }
}