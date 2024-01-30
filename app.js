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


// take a move as an parameter and return array with it's possible moves.
const getPossibleMoves = (initial, movesArr = []) => {
    let move1 = [initial[0] + 2, initial[1] + 1]
    let move2 = [initial[0] + 2, initial[1] - 1]
    let move3 = [initial[0] + 1, initial[1] - 2]
    let move4 = [initial[0] - 1, initial[1] - 2]
    let move5 = [initial[0] - 2, initial[1] - 1]
    let move6 = [initial[0] - 2, initial[1] + 1]
    let move7 = [initial[0] - 1, initial[1] + 2]
    let move8 = [initial[0] + 1, initial[1] + 2]

    if (isValidMoves(move1)) movesArr.push(move1)
    if (isValidMoves(move2)) movesArr.push(move2)
    if (isValidMoves(move3)) movesArr.push(move3)
    if (isValidMoves(move4)) movesArr.push(move4)
    if (isValidMoves(move5)) movesArr.push(move5)
    if (isValidMoves(move6)) movesArr.push(move6)
    if (isValidMoves(move7)) movesArr.push(move7)
    if (isValidMoves(move8)) movesArr.push(move8)
    return movesArr
}
console.log(getPossibleMoves([0, 0]))


//getGraphList returns a adjacency list, for each move it contains the array of it's possible moves.
const getGraphList = (board, graphList = []) => {
    board.map(item => {
        graphList.push(getPossibleMoves(item))
    })
    return graphList
}
console.log(getGraphList(board))

// getIndex just takes a targeted parameter and returns it's index on the boardArray, returns it's possition.

//motive? - with the index, we can get the possible moves of the taget from the adjacencey list.

const getIndex = (target) => {
    for (let i = 0; i < board.length; i++) {
        let index = isEqual(target, board[i])
        if (index) return i
        else continue
    }
    return false
}

console.log(getIndex([0, 1]))

//checks if two given moves are equal or not.
const isEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i] || arr1[i + 1] !== arr2[i + 1]) {
            return false
        }
        return true
    }
}

// hasVisited checks if a node is visited or not, here the data parameter is a array that contains the visited nodes, 
const hasVisited = (node, data) => {
    for (let i = 0; i < data.length; i++) {
        const [a, b] = node
        const [x, y] = data[i]

        if (a === x && b === y) return true
    }
    return false
}
