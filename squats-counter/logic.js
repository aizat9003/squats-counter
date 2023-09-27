let count = 0
let numEl = document.getElementById("num-el")
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let saveEntries = document.getElementById("save-entries")

incrementBtn.addEventListener("click", function() {
    count++
    numEl.textContent = count
})

saveBtn.addEventListener("click", function() {
    saveEntries.textContent += ` ${count} - `
    numEl.textContent = 0
    count = 0
})