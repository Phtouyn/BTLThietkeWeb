document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.querySelector('.comment-form-wrap form');
    
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Lấy giá trị từ các trường nhập
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Kiểm tra xem tất cả các trường đã được điền đầy đủ hay chưa
        if (name && email && message) {
            // Thông báo thành công
            alert('Comment thành công!');
            // Nếu muốn có thể thêm logic gửi dữ liệu đến máy chủ ở đây
            
            // Reset giá trị các trường nhập
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } else {
            // Thông báo lỗi nếu có trường nào đó chưa điền
            alert('Vui lòng điền đầy đủ thông tin trước khi gửi comment.');
        }
    });
});
