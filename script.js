// Khai báo biến
let balance = 1000;

// Lấy các phần tử DOM
const balanceDisplay = document.getElementById('balance');
const taiButton = document.getElementById('taiButton');
const xiuButton = document.getElementById('xiuButton');
const betAmountInput = document.getElementById('betAmount');
const resultDisplay = document.getElementById('result');
const resultDisplay2 = document.getElementById('result2');
const taitxt = document.getElementById('taitxt');
const xiutxt = document.getElementById('xiutxt');

// Xử lý khi nhấn nút "Tài"
taiButton.addEventListener('click', () => {
    playGame('tai');
});

// Xử lý khi nhấn nút "Xỉu"
xiuButton.addEventListener('click', () => {
    playGame('xiu');
});

// Hàm chơi trò chơi
function playGame(choice) {
    if (balance < 0) {
        alert("Hết tiền cược rồi, nạp thêm tiền cược")
    } else {

        const betAmount = parseInt(betAmountInput.value);

        if (betAmount <= 0 || betAmount > balance || betAmount == "" || !betAmount) {
            alert('Mức cược không hợp lệ!');
            return betAmount = 1;
        }

        const randomValue = Math.floor(Math.random() * 15) + 3; // Số ngẫu nhiên từ 3 đến 17

        let result = '';
        let winMultiplier = 1;

        if ((choice === 'tai' && randomValue >= 11) || (choice === 'xiu' && randomValue <= 10)) {
            winMultiplier = 2;
            balance += betAmount * winMultiplier;
            result = `Thắng!`;
            resultDisplay.className = 'win';
            // taitxt.style = 'animation: zoomout 0.2s ease-in-out infinite alternate;'

        } else {
            balance -= betAmount;
            result = `Thua!`;
            resultDisplay.className = 'loss';
            // xiutxt.style = 'animation: zoomout 0.2s ease-in-out infinite alternate;'
        }

        // Cập nhật số tiền, kết quả, và mức cược
        balanceDisplay.textContent = balance.toLocaleString("vi-VI");
        resultDisplay.textContent = result;
        resultDisplay2.textContent = randomValue;
        betAmountInput.value = '';
        // Tải lại trang web hiện tại
        // location.reload();

    }

}