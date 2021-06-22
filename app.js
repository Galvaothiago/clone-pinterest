const grids = document.querySelectorAll('.grid')
const headings = document.querySelectorAll('.heading .wrapper .text')

let nextIndex = 0

const backgroundImage = [
	'https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_960_720.jpg',
	'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg',
	'https://cdn.pixabay.com/photo/2013/07/25/13/01/stones-167089_960_720.jpg',
	'https://cdn.pixabay.com/photo/2017/05/11/11/15/workplace-2303851_960_720.jpg',
	'https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg',
	'https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg',
	'https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512_960_720.jpg',
	'https://cdn.pixabay.com/photo/2014/09/19/12/30/pencils-452238_960_720.jpg',
	'https://cdn.pixabay.com/photo/2017/06/21/09/19/spoon-2426623__340.jpg',
	'https://cdn.pixabay.com/photo/2017/01/18/17/14/girl-1990347__340.jpg',
	'https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107__340.jpg',
	'https://cdn.pixabay.com/photo/2016/07/19/04/40/moon-1527501__340.jpg',
    'https://cdn.pixabay.com/photo/2015/07/09/22/44/tree-838666__340.jpg'

]

function changeBackground(obj) {
    obj.forEach(element => {
       const items = element.querySelectorAll('.item')

       items.forEach(item => {
        const ramdomIndex = Math.floor(Math.random() * (backgroundImage.length - 1) )
            console.log(ramdomIndex)
           item.style.backgroundImage = `url(${backgroundImage[ramdomIndex]}`
       })
    })
}

function enterScreen(index) {
    const grid = grids[index]
    const heading = headings[index]
    const gridColumns = grid.querySelectorAll('.column')

    changeBackground(gridColumns)
    grid.classList.add('active')

    gridColumns.forEach(element => {
        element.classList.remove('animate-before', 'animate-after')
    })

    heading.classList.remove('animate-before', 'animate-after')

} 
function exitScreen(index, exitDelay) {
    const grid = grids[index]
    const heading = headings[index]
    const gridColumns = grid.querySelectorAll('.column')

    gridColumns.forEach(element => {
        element.classList.add('animate-after')
    })

    heading.classList.add('animate-after')

    setTimeout(() =>{
        grid.classList.remove('active')
    }, exitDelay)

}

function setupAnimationCycle({ timePerScreen, exitDelay }) {
    const cycleTime = timePerScreen + exitDelay

    function nextCycle() {
        const currentIndex = nextIndex 

        enterScreen(currentIndex)
        


        setTimeout(() => {
            exitScreen(currentIndex, exitDelay)
            console.log(nextIndex)
        }, timePerScreen)

        nextIndex = nextIndex >= (grids.length - 1) ? 0 : (nextIndex + 1)
    }

    nextCycle()

    setInterval(nextCycle, cycleTime);



}

setupAnimationCycle({
    initialScreenIndex: 0,
    timePerScreen: 2000,
    exitDelay: 200 * 7
})