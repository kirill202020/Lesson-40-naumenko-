let dragItem = null
const zone = document.querySelector('.zone')
const create = document.querySelector('.create')
const creacard = document.querySelector('.creacard')
// let boardArr

// !localStorage.boardArr ? boardArr = [] : boardArr=JSON.parse(localStorage.getItem('boardArr'))

// const addLocal = () =>{
//     localStorage.setItem('boardArr')
// }

// function boardAdd(){
//     this.name = 'new board'
// }
creacard.addEventListener('click', () =>{
    
})

create.addEventListener('click', () =>{
    zone.innerHTML += createBoard()
    // boardArr.push(new boardAdd())
    // fillBoard()
    // addLocal()

    dragNdrog()
})

// const fillBoard = () =>{
//     zone.innerHTML = ''
//     if (boardArr.length > 0) {
        
//     }
// }


const createBoard = () =>{
    return `
            <div class="board done">
            <h2>DONE</h2>
            
        </div>
    `
}



const dragNdrog = () => {
    const card = document.querySelectorAll('.card')
    const board = document.querySelectorAll('.board')
    for (let index = 0; index < card.length; index++) {
        const item = card[index];

        item.addEventListener('dragstart', () => {
            dragItem = item
            setTimeout(() => {
                item.style.display = 'none'
            }, 0);
        })

        item.addEventListener('dragend', () => {
            setTimeout(() => {
                item.style.display = 'block'
                dragItem = null
            }, 0);
        })

        for (let j = 0; j < board.length; j++) {
            const element = board[j];
            
            element.addEventListener('dragover', e => e.preventDefault())

            // element.addEventListener('dragenter', function (e) {
            //     e.preventDefault()
            //     this.style.backgroundColor = 'rgba(0, 0, 0, .3)'
            // })


            element.addEventListener('drop', function (e) {
                this.style.backgroundColor = 'rgba(255, 255, 255, 0)'
                this.append(dragItem)
            })
        }
    }

}


dragNdrog()


