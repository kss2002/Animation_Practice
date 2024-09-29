// 카운트다운 타이머 구현 함수.
function startCountdown(duration) {
  const endTime = Date.now() + duration; // 종료 시간을 현재 시간에 더해 설정

  function updateCountdown() {
    const now = Date.now(); // 현재 시간
    let remainingTime = endTime - now; // 남은 시간 계산

    if (remainingTime <= 0) {
      remainingTime = 0; // 시간이 끝나면 0으로 설정
      clearInterval(countdownInterval); // 타이머 종료
    }

    let hours = Math.floor(
      (remainingTime % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000)
    );
    let minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
    let seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
    let milliseconds = Math.floor((remainingTime % 1000) / 10); // 2자리 밀리세컨드

    // 숫자만 표시
    document.getElementById('hours').textContent =
      hours.toString().padStart(2, '0') + '시간';
    document.getElementById('minutes').textContent =
      minutes.toString().padStart(2, '0') + '분';
    document.getElementById('seconds').textContent =
      seconds.toString().padStart(2, '0') + '초';
    document.getElementById('milliseconds').textContent = milliseconds
      .toString()
      .padStart(2, '0');
  }

  updateCountdown(); // 초기값 설정
  const countdownInterval = setInterval(updateCountdown, 10); // 10ms마다 업데이트
}

const fiveHoursInMilliseconds = (5 * 60 * 60 + 24 * 60 + 44) * 1000; // 5시간 24분 44초를 밀리초로 변환
startCountdown(fiveHoursInMilliseconds);
// 새로고침하면 시간이 다시 리셋됨.
