const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams)

const user = urlParams.get("user");
const pass = urlParams.get("pass");

console.log(user)
console.log(pass)


if (user == 'user' && pass == 'pass') {
    // window.open('../html/dashboard.html')
    window.location.href = '../html/dashboard.html'

    
} else {
    // window.open('../index.html')
    window.location.href = '../index.html'

}
