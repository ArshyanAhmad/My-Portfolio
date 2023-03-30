const sections = document.querySelectorAll(".section")
const secBtns = document.querySelectorAll(".controls")
const secBtn = document.querySelectorAll(".control")
const allSelection = document.querySelector(".main-content")
const darkMode = document.querySelector("#sun") 


function PageTransition() {
    // Button click active class
    for(let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener("click", function(e) {
            let currentBtn = document.querySelectorAll(".active-btn")
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += " active-btn"
        })
    }
    // Section active class
    allSelection.addEventListener("click", function(e){
        const id = e.target.dataset.id;
        if(id){
            // Remove selected from other btns
            secBtn.forEach((btn)=>{
                btn.classList.remove("active")
            })
            e.target.classList.add("active")

            // hide other section
            sections.forEach((section)=>{
                section.classList.remove("active")
            })

            const element = document.getElementById(id)
            element.classList.add('active')
            
        }
    })  
    // toggle theme
    darkMode.addEventListener("click", ()=>{
        let element = document.body;
        element.classList.toggle("light-mode")
    })
}


PageTransition()