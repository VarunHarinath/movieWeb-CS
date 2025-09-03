def safe(board, row, col, n):
    for i in range(col):
        if board[row][i] == 1:
            return False
    for i,j in zip(range(row,-1,-1), range(col,-1,-1)):
        if board[i][j] == 1:
            return False
    for i,j in zip(range(row,n), range(col,-1,-1)):
        if board[i][j] == 1:
            return False
    return True
def solve(board, col, n):
    if col >= n:
        return True
    for row in range(n):
        if safe(board, row, col, n):
            board[row][col] = 1
            if solve(board, col+1, n):
                return True
            board[row][col] = 0
    return False
def print_board(board):
    for r in board:
        print(" ".join("Q" if x else "." for x in r))
n = 8
board = [[0]*n for _ in range(n)]
if solve(board, 0, n):
    print_board(board)
else:
    print("No solution")