const postsDiv = document.getElementById('postsDiv')
function post(){
    fetch('http://localhost/addentry', { //https://boiling-everglades-42596.herokuapp.com/addentry
        body: new FormData(document.getElementById('inputForm')),
        method: 'post'
    }).then(res=>{
        return res.text()
    }).then(res=>{
        console.log(res)
    })
}

window.onload = ()=>{
    fetch('http://localhost/entries/latest').then(res=>{return  res.json()}).then(latestEntry=>{
        appendNext(latestEntry.datetime, latestEntry.contents, latestEntry.author)
    })
}
function appendNext(datetime = 'No DateTNo Time', contents, author){
    const temp = document.querySelector('#postTemplate').content.cloneNode(true)
    date = datetime.split('T')[0]
    time = datetime.split('T')[1].slice(0,4)
    author = author=='R'?'Aza':'Jayesh'
    temp.querySelector('.date').innerText = date
    temp.querySelector('.time').innerText = time
    temp.querySelector('.authorName').innerText = `~${author}`
    temp.querySelector('.contents').innerText = contents
    postsDiv.appendChild(temp)

}