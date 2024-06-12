const authParams = new URLSearchParams(window.location.search);

if (!authParams.get('auth')) {
    alert('Logueate Primero')
    window.location.href = '../index.html'
}