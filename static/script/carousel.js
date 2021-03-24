class Carousel{

    /**
     * 
     * @param {HTMLElement} element 
     * @param {Object} options.slidesToScroll nombre d'éléments à faire défiler
     * @param {Object} options.slidesVisible nombre d'éléments affichés
     */
    constructor(element,options = {}){
       this.element = element
       this.options = Object.assign({},{
           slidesToScroll: 1,
           slidesVisible: 1,

       },options)
       let children = [].slice.call(element.children)
       this.currentItem = 0
       this.root = this.createDivWithClass('carousel')
       this.container = this.createDivWithClass('carouselContainer')
       this.root.appendChild(this.container)
       this.element.appendChild(this.root)
       this.items = children.map((child) => {
           let item = this.createDivWithClass('carouselItem')
           item.appendChild(child)
           this.container.appendChild(item)
           return item
       })
       this.setStyle()
       this.createNavigation()     
    }

    setStyle (){
        let ratio = this.items.length / this.options.slidesVisible
        this.container.style.width = (ratio*100) + "%"
        this.items.forEach(item => item.style.width = ((100/this.options.slidesVisible)/ratio)+"%")   
    }
    
    createNavigation(){
        let nextButton = this.createDivWithClass('carouselNext')
        let prevButton = this.createDivWithClass('carouselPrev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener('click',this.next.bind(this))
        prevButton.addEventListener('click',this.prev.bind(this))
        
    }
    next (){
        this.gotoItem(this.currentItem + this.options.slidesToScroll)
    }
    prev (){
        this.gotoItem(this.currentItem - this.options.slidesToScroll)
    }

    gotoItem(index){
        if (index <0){
            index = this.items.length - this.options.slidesVisible
        }else if (index >= this.items.length || (this.items[this.currentItem + this.options.slidesVisible]===undefined)&& index>this.currentItem){
            index = 0
        }
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3d(' +translateX + '%,0,0)'
        this.currentItem = index
        this.moveCallBacks.forEach(cb =>(index))
    }

    
    /**
     * 
     * @param {string} className 
     * @returns {HTMLElement}
     */

    createDivWithClass (className){
        let div = document.createElement("div")
        div.setAttribute('class',className)
        return div
    }
}


document.addEventListener('DOMContentLoaded',function(){
new Carousel(document.querySelector('#carouselbest'),{
    slidesToScroll: 1,
    slidesVisible : 4,

})
})

document.addEventListener('DOMContentLoaded',function(){
new Carousel(document.querySelector('#carousel1'),{
    slidesToScroll: 1,
    slidesVisible : 4,

})
})

document.addEventListener('DOMContentLoaded',function(){
new Carousel(document.querySelector('#carousel2'),{
    slidesToScroll: 1,
    slidesVisible : 4,

})
})

document.addEventListener('DOMContentLoaded',function(){
new Carousel(document.querySelector('#carousel3'),{
    slidesToScroll: 1,
    slidesVisible : 4,

})
})