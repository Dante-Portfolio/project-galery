const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams)
const user = urlParams.get("user");
const pass = urlParams.get("pass");

if (user == 'user' && pass == 'pass') {
    window.location.href = '../html/dashboard.html?auth=ok'
} else {
    window.location.href = '../index.html'
}

