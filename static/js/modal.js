let modal =null

const openModal = function (e){
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute('id'))
    target.removeAttribute('class')
    target.setAttribute('class','modal')
    target.style.display = null
    modal = target
    modal.querySelector('.js-modal-close').addEventListener('click',closeModal)
}

const closeModal = function (e){
    if (modal === null) return
    e.preventDefault()
    modal.setAttribute('class',"hidden")
    modal.querySelector('.js-modal-close').removeEventListener('click',closeModal)
    modal = null
}

setTimeout(function(){
    document.querySelectorAll('.js-modal').forEach(a => {
        a.addEventListener('click',openModal)
        
    })
},
      3500);




