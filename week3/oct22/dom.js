const board = document.getElementById('board');
        const status = document.getElementById('status');

        let cells = Array(9).fill(""); // ["X", "O", "X", "", "", "", "", "", ""]
        let currentPlayer = "X";
        let gameOver = false;

        function createBoard() {
            board.innerHTML = '';

            cells.forEach((cell, index) => {
               const button = document.createElement('button');
               button.textContent = cell || '-';
               button.style.width = '50px';
               button.style.height = '50px';
               button.style.fontSize = '20px';
               button.style.margin = '2px';

               button.onclick = () => play(index);
               board.appendChild(button);

               if(index % 3 === 2) {
                   board.appendChild(document.createElement('br'));
               }

            });
        }

        function play(index){
            if(cells[index]|| gameOver) return;

            cells[index] = currentPlayer;

            if(checkwin()){
                status.textContent = `Player ${currentPlayer} wins!`;
                gameOver = true;
            } else if(cells.every(cell => cell)) {
                status.textContent = "It's a draw!";
                gameOver = true;
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                status.textContent = `Player ${currentPlayer}'s turn`;
            }

            createBoard();

        }

        function checkwin() {
            const wins = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            for (const condition of wins) {
                const [a, b, c] = condition;
                if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                    return true;
                }
            }
            return false;
        }

        function resetGame() {
            cells = Array(9).fill("");
            currentPlayer = "X";
            gameOver = false;
            status.textContent = `Player ${currentPlayer}'s turn`;
            createBoard();
        }

        createBoard();
