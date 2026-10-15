
const revealBtn = document.getElementById("revealBtn");
const intro = document.getElementById("intro");
const message = document.getElementById("message");
const messageTitle = document.getElementById("messageTitle");
const messageText = document.getElementById("messageText");

const title = "Thông báo khẩn cấp!";
const content =
    "Hôm nay, các cậu được quyền xinh đẹp, vui vẻ, " +
    "nhận thật nhiều lời chúc và tạm quên mọi deadline. " +
    "Còn bài tập ngày mai... thì chúng ta sẽ tính sau :)) " +
    "Đùa thôi! Chúc các cậu luôn tự tin, hạnh phúc, " +
    "được yêu thương và luôn tỏa sáng theo cách riêng của mình. " +
    "Chúc mừng ngày Phụ nữ Việt Nam 20/10!";

revealBtn.addEventListener("click", () => {
    intro.hidden = true;
    message.hidden = false;

    messageTitle.textContent = title;
    messageText.textContent = "";

    let index = 0;

    function typeWriter() {
        if (index < content.length) {
            messageText.textContent += content[index];
            index++;
            setTimeout(typeWriter, 38);
        }
    }

    typeWriter();
});
