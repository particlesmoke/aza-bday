const postsDiv = document.getElementById('postsDiv')
function post(){
    fetch('https://boiling-everglades-42596.herokuapp.com/addentry', { //https://boiling-everglades-42596.herokuapp.com/addentry
        body: new FormData(document.getElementById('inputForm')),
        method: 'post'
    }).then(res=>{
        return res.text()
    }).then(res=>{
        console.log(res)
    })
}
var nextEntrySno = 0
var lastscroll = 0
window.onload = ()=>{
    fetch('https://boiling-everglades-42596.herokuapp.com/entries/latest').then(res=>{return  res.json()}).then(latestEntry=>{
        appendNext(latestEntry.datetime, latestEntry.contents, latestEntry.author)
        nextEntrySno = latestEntry.sno - 1
    })
}
const checkScrollandAdd = ()=>{
    console.log(postsDiv.offsetTop + postsDiv.offsetHeight - window.scrollY - window.innerHeight)
    if(postsDiv.offsetTop + postsDiv.offsetHeight - window.scrollY - window.innerHeight < 0){
        document.querySelector('.heartLoader').style.opacity = '1'
        getNextEntry()
    }
}
function getNextEntry(){
    if(!nextEntrySno) return
    document.removeEventListener('scroll', checkScrollandAdd)
    fetch(`https://boiling-everglades-42596.herokuapp.com/entries/${nextEntrySno}`).then(res=>{return  res.json()}).then(latestEntry=>{
        appendNext(latestEntry.datetime, latestEntry.contents, latestEntry.author)
        document.addEventListener('scroll',checkScrollandAdd)
        nextEntrySno--
    })
}
function appendNext(datetime = 'No DateTNo Time', contents, author){
    const temp = document.querySelector('#postTemplate').content.cloneNode(true)
    date = datetime.split('T')[0]
    time = datetime.split('T')[1].slice(0,5)
    temp.querySelector('div').classList.add(`${author=='R '?'mauve':'ocean'}`)
    author = author=='R '?'Aza':'Jayesh'
    temp.querySelector('.date').innerText = date
    temp.querySelector('.time').innerText = time
    temp.querySelector('.authorName').innerText = `${author}`
    temp.querySelector('.contents').innerText = contents
    postsDiv.appendChild(temp)
    lastscroll = postsDiv.getBoundingClientRect()
}
document.addEventListener('scroll',checkScrollandAdd)
