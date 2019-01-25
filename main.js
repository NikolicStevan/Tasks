var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 'q', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var randomNumbers = [];

    var hit = 0;
    var missed = 0;
    var left = 26;

    var i = 0;

    var timeout = 5000;

    var gameInProgress = false;
    var timer;

    function init() {
      var keypressHandler = function (event) {
        if (left > 0 && gameInProgress) {
          letterTyped(event);
        }
      };

      var keyupHandler = function (event) {
        document.getElementById('letter').value = '';
      };

      document.addEventListener('keypress', keypressHandler);

      document.addEventListener('keyup', keyupHandler);


    }

    function printAndWait(letterWasTyped) {
      if (left > 0) {

        if (!letterWasTyped) {
          left--;
          missed++;
          printScore();
          document.getElementById(alphabet[randomNumbers[i] - 1]).style.color = 'red';
          timer = setTimeout(function () {
            printAndWait(false);
          }, timeout);
        }

        document.getElementById('number').innerHTML = '<b>' + randomNumbers[++i] + '</b>';
        document.getElementById('letter').value = '';
      } else {
        document.getElementById('number').innerHTML = 'Game Over';
      }
    }

    function letterTyped(event) {
      var typedLetter = event.key;
      if (typedLetter.toLowerCase() === alphabet[randomNumbers[i] - 1]) {
        hit++;
        left--;
        document.getElementById(alphabet[randomNumbers[i] - 1]).style.color = 'green';
      } else {
        missed++;
        left--;
        document.getElementById(alphabet[randomNumbers[i] - 1]).style.color = 'red';
      }

      printScore();

      if (timer) {
        clearTimeout(timer);
      }
      printAndWait(true);
      timer = setTimeout(function () {
        printAndWait(false);
      }, timeout);
    }

    function stopGame(startBtn) {
      gameInProgress = false;

      hit = 0;
      missed = 0;
      left = 26;
      startBtn.innerHTML = 'Start Game';

      document.getElementById('easy').disabled = false;
      document.getElementById('medium').disabled = false;
      document.getElementById('hard').disabled = false;



      for (var i = 0; i < 26; i++) {
        document.getElementById(alphabet[i]).style.color = 'black';
      }

      printScore();
      document.getElementById('number').innerHTML = '';

      if (timer) {
        clearTimeout(timer);
      }
    }

    function shuffle() {
      var o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
      for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    }

    function getTimeout() {
      var level = document.querySelector('#control input[name="level"]:checked').value;
      if (level === 'easy') {
        return 5000;
      } else if (level === 'medium') {
        return 3500;
      } else {
        return 2000;
      }
    }

    function startGame(startBtn) {
      i = 0;
      if (gameInProgress) {
        stopGame(startBtn);
        return;
      }

      gameInProgress = true;
      randomNumbers = shuffle();
      startBtn.innerHTML = 'Stop';
      document.getElementById('easy').disabled = true;
      document.getElementById('medium').disabled = true;
      document.getElementById('hard').disabled = true;



      timeout = getTimeout();

      document.getElementById('letter').focus();

      document.getElementById('number').innerHTML = '<b>' + randomNumbers[i] + '</b>';
      timer = setTimeout(function () {
        printAndWait(false);
      }, timeout);
    }

    function printScore() {
      document.getElementById('hit').innerHTML = 'Hit: ' + hit;
      document.getElementById('miss').innerHTML = 'Miss: ' + missed;
      document.getElementById('left').innerHTML = 'Left: ' + left;
    }