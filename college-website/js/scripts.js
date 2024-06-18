document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Sample logic for login - replace with actual authentication logic
    if(username === 'student' && password === 'password') {
        window.location.href = 'student-dashboard.html';
    } else if(username === 'professor' && password === 'password') {
        window.location.href = 'professor-dashboard.html';
    } else if(username === 'admin' && password === 'password') {
        window.location.href = 'admin.html';
    } else {
        document.getElementById('error').textContent = 'Invalid username or password';
    }
});

document.getElementById('logout').addEventListener('click', function() {
    // Sample logout logic
    window.location.href = 'login.html';
});
