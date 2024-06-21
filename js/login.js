function validatePassword(password) {
    const minLength = 6;
    const hasNumber = /\d/;
    const hasLetter = /[a-zA-Z]/;
    return password.length >= minLength && hasNumber.test(password) && hasLetter.test(password);
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Kiểm tra tính hợp lệ của mật khẩu
    if (!validatePassword(password)) {
        alert('The password must be at least 6 characters long, including both letters and numbers.');
        return;
    }

    // Lấy thông tin người dùng từ Local Storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login successful.');
        
       // Chuyển hướng về trang chủ sau khi đăng ký thành công
       window.location.href = 'index.html';
    } else {
        alert('Invalid email or password.');
    }
});
