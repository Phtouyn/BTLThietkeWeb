document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;

    var errorMessageUser = document.getElementById("errorMessageUser");
    var errorMessagePassword = document.getElementById("errorMessagePassword");
    var errorMessageConfirm = document.getElementById("errorMessageConfirm");

    var valid = true; // Biến để kiểm tra tính hợp lệ

    if (username.trim().length < 4) {
        errorMessageUser.innerText = 'Username must be longer than 4 characters.';
        valid = false;
    } else {
        errorMessageUser.innerText = "";
    }

    if (password.length < 6) {
        errorMessagePassword.innerText = "Password must be at least 6 characters long.";
        valid = false;
    } else {
        errorMessagePassword.innerText = "";
    }

    if (password !== confirm) {
        errorMessageConfirm.innerText = "Confirm password does not match the password.";
        valid = false;
    } else {
        errorMessageConfirm.innerText = "";
    }

    if (valid) {
        // Lưu thông tin đăng ký vào localStorage
        var user = {
            username: username,
            email: email,
            password: password
        };
        localStorage.setItem('user', JSON.stringify(user));

        // Hiển thị thông báo đăng ký thành công
        alert("Account successfully registered.");

        // Chuyển hướng về trang đăng nhập sau khi đăng ký thành công
        window.location.href = 'login.html';
    }
});
