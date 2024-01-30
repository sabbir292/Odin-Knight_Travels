const createBoard = () => {
    let boardArr = []
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            boardArr.push([i, j])
        }
    }
    return boardArr
}
const board = createBoard()
console.log(board)



const isValidMoves = (move) => {
    if ((move[0] >= 0 && move[0] <= 7) && (move[1] >= 0 && move[1] <= 7)) return true
    else return false
}

console.log(isValidMoves([0, 5]))

