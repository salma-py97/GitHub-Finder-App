// Classes & Promises/Async Await
// Classes/ Prototypes
// AJAX / Fetch(return promises) / Async Await(return promises)


class GitHub {
    constructor() {
        this.client_id = 'd589b0893046486b2282';
        this.client_secret = '5ea6f7999cdf4fb568aa34378fc257511e7e25d6';
        this.repos_count = 10;
        this.repos_sort = "created: asc";
    }
    async getUser(user){
        // Fetch returns a promise that we're gonna call profileResponse 

        const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // console.log(profileResponse); ==> object with a lot of properties/methods, one of them is json()

        // so we need to wait for the fetch to complete and then map profileResponse to json()

        const profileData = await profileResponse.json();

        const reposResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const reposData = await reposResponse.json();
    
        // we have to wait for profileResponse to complete then we are gonna return it as an object called profile

        return {
                profile : profileData,
                repos: reposData
                };
        
    }
    // async return a Promise so we need to use .then on it in app.js
}

// https://api.github.com/users/user  ==> user profile details
// https://api.github.com/users/user/repos ==> user repositories details

// query string:  ? => separator, & => and