window.onload = function () {

    // var xmlString = "<person id='100'><name>Sam</name><age>20</age></person>"
    // var jsonString = '{ "id":100, "name": sam, "age": 20 }';
    // console.log(jsonString);
    // var jsonObj = JSON.parse(jsonString);
    // console.log(jsonObj);
    function makeReq(username) {
        var req = new XMLHttpRequest();
        
        var url = "https://api.github.com/users/" + username + "/repos"
 
        req.addEventListener('load', repoHandler);
        req.open('GET', url);    //get, put, post, remove
        req.send();
    }
    var repoObject;

    function repoHandler() {
        var responceText = this.responceText;
        // console.log(responceText);
        repoObject = JSON.parse(responceText);
        loadRepo(repoObject);
    }



    function loadRepo(repos) {

        var repoContainer = document.getElementById('repoContainer');
        repoContainer.innerHTML = '';
        for (var i = 0; i < repos.length; i++) {
            var repo = repos[i];

            var newDiv = document.createElement('div');
            var newSpan = document.createElement('span');

            newSpan.textContent = repo.name;

            newDiv.appendChild(newSpan);
            repoContainer.appendChild(newDiv);
        }
    }
    var userform = document.getElementById('usernameForm');

    userform.onsubmit = function () {
        var username = userform['username'].value;
        console.log(username);

makeReq(username);

        return false;

    }
}

var death = 'death.exe has stopped working';