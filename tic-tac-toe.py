def draw_board(board):
    print('.   0   1   2')
    print(' +---+---+---+')
    for i, row in enumerate(board):
        print(f'{i} | {row[0]} | {row[1]} | {row[2]} |')
        print(' +---+---+---+')

def get_move(player, board):
    while True:
        row = int(input(f'{player}, enter row: '))
        col = int(input(f'{player}, enter col: '))
        if row in [0, 1, 2] and col in [0, 1, 2] and board[row][col] == ' ':
            return row, col
        print('Invalid move, try again.')

board = [[' ' for _ in range(3)] for _ in range(3)]
players = ['X', 'O']
current_player = 0

while True:
    draw_board(board)
    row, col = get_move(players[current_player], board)
    board[row][col] = players[current_player]
    if (board[0][0] == board[0][1] == board[0][2] != ' ' or
        board[1][0] == board[1][1] == board[1][2] != ' ' or
        board[2][0] == board[2][1] == board[2][2] != ' ' or
        board[0][0] == board[1][0] == board[2][0] != ' ' or
        board[0][1] == board[1][1] == board[2][1] != ' ' or
        board[0][2] == board[1][2] == board[2][2] != ' ' or
        board[0][0] == board[1][1] == board[2][2] != ' ' or
        board[0][2] == board[1][1] == board[2][0] != ' '):
        draw_board(board)
        print(f'Player {players[current_player]} wins!')
        break
    if not any(' ' in row for row in board):
        draw_board(board)
        print('It\'s a tie!')
        break
    current_player = (current_player + 1) % 2
