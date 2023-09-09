// Khai báo biến
let balance = 1000;

// Lấy các phần tử DOM
const balanceDisplay = document.getElementById('balance');
const taiButton = document.getElementById('taiButton');
const xiuButton = document.getElementById('xiuButton');
const betAmountInput = document.getElementById('betAmount');
const resultDisplay = document.getElementById('result');

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
            result = `Bạn đã thắng! Kết quả: ${randomValue}`;
            resultDisplay.className = 'win-message';
        } else {
            balance -= betAmount;
            result = `Bạn đã thua! Kết quả: ${randomValue}`;
            resultDisplay.className = 'lose-message';
        }

        // Cập nhật số tiền, kết quả, và mức cược
        balanceDisplay.textContent = balance;
        resultDisplay.textContent = result;
        betAmountInput.value = '';
        // Tải lại trang web hiện tại
        // location.reload();

    }

}