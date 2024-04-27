const btnEle = document.querySelector(".btn")
const inputEle = document.querySelector("#input-field")
const taskEle =document.querySelector(".list-item")
btnEle.addEventListener("click",()=>{
    // console.log(inputEle.value)
    // console.log("you clicked me")
    if(inputEle.value ===""){
        alert("pls add task")
    }else{
        let listEle= document.createElement("li")
        listEle.textContent= inputEle.value
        taskEle.appendChild(listEle)
        // listEle.classList.add("checked")

        let spanEle = document.createElement("span")
        spanEle.textContent = "\u00d7"
        listEle.appendChild(spanEle)
    }
    inputEle.value = ""
    saveEle()
})
taskEle.addEventListener("click",(e)=>{
    if(e.target.tagName == "LI"){
    e.target.classList.toggle("checked")
    saveEle()
    }else if(e.target.tagName == "SPAN"){
      e.target.parentElement.remove()
      saveEle()
    }
})
function saveEle(){
    localStorage.setItem("task",taskEle.innerHTML)
}
function getEle(){
    taskEle.innerHTML = localStorage.getItem("task")
}
getEle()