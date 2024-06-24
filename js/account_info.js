$(document).ready(function() {
    // Hàm lấy thông tin người dùng từ Local Storage
    function getUserInfo() {
        // Lấy thông tin từ Local Storage
        let userInfo = localStorage.getItem('user');
        if (userInfo) {
            return JSON.parse(userInfo);
        } else {
            return null;
        }
    }

    // Hiển thị thông tin người dùng lên giao diện
    function displayUserInfo(userInfo) {
        if (userInfo) {
            let userInfoHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${userInfo.username}</h5>
                        <p class="card-text">Email: ${userInfo.email}</p>
                    </div>
                </div>
            `;
            $('#userInfo').html(userInfoHTML);
        } else {
            $('#userInfo').html('<p class="text-danger">No user information found.</p>');
        }
    }

    // Kiểm tra đăng nhập và hiển thị thông tin người dùng
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        let userInfo = getUserInfo();
        displayUserInfo(userInfo);
    } else {
        // Nếu không đăng nhập, chuyển hướng về trang đăng nhập hoặc trang chủ
        window.location.href = 'index.html';
    }

    // Xử lý sự kiện click nút Logout
    $('#logoutButton').click(function() {
        // Xóa trạng thái đăng nhập và thông tin người dùng từ Local Storage
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        // Chuyển hướng về trang đăng nhập hoặc trang chủ
        window.location.href = 'index.html';
    });
});
