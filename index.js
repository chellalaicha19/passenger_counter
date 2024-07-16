let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save")
let s = ""

function increment(){
    count += 1
    document.getElementById("inc").innerText = count
}

function save(){
    s = count + " - "
    saveEl.textContent += s
    count = 0
    document.getElementById("inc").textContent = 0

}
