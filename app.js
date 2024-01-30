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
const getIndex = (target) => {
    for (let i = 0; i < board.length; i++) {
        let index = isEqual(target, board[i])
        if (index) return i
        else continue
    }
    return false
}
console.log(getIndex([0, 1]))

const hasVisited = (node, data) => {
    for (let i = 0; i < data.length; i++) {
        const [a, b] = node
        const [x, y] = data[i]

        if (a === x && b === y) return true
    }
    return false
}
const knightMoves = (origin, target, graph = getGraphList(board)) => {
    let [x, y] = target

    const que = [{ currentPosition: origin, path: [origin] }]
    const visitedNodes = []

    while (que.length > 0) {
        const { currentPosition, path } = que.shift()
        visitedNodes.push(currentPosition)
        let [a, b] = currentPosition

        if (a === x && b === y) return path

        else {
            const idx = getIndex(currentPosition)
            if(!idx) return "Invalid Origin"
            else{
                const moves = graph[idx]

                moves.map(move => {
                    if (!hasVisited(move, visitedNodes)) {
                        que.push({
                            currentPosition: move,
                            path: [...path, move]
                        })
                    }
                })
            }
        }
    }
    return false
}

console.log(knightMoves([1,7], [7, 5]))





const knightMoves = (source, target) => {

    const moves = [
        [2, 1],
        [1, 2],
        [-1, 2],
        [-2, 1],
        [-2, -1],
        [-1, -2],
        [1, -2],
        [2, -1],
      ];

    
    console.log([2, 1].toString())
    const isValidMoves = (x, y) => {
        if (x < 0 || x > 7 || y > 7 || y < 0) return false
        return true
    }
    console.log(isValidMoves(1, 7))

    const que = [{
        currentPostition: source,
        path: [source]
    }]

    while (que.length > 0) {
        const { currentPostition, path } = que.shift()

        if (currentPostition.toString() === target.toString()) {
            return path
        }
        else {
            for (const move of moves) {
                const newX = currentPostition[0] + move[0]
                const newY = currentPostition[1] + move[1]

                if (isValidMoves(newX, newY)) {
                    que.push({
                        currentPostition: [newX, newY],
                        path: [...path, [newX, newY]]
                    })
                }
            }
        }
    }
    return false
}

console.log(knightMoves([0,7], [1,5]))