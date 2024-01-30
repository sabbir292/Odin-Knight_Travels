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
