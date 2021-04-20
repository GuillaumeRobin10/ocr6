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
       this.isMobile = false
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
       this.onWindowResize()
       window.addEventListener('resize', this.onWindowResize.bind(this))
    }

    setStyle (){
        let ratio = this.items.length / this.slidesVisible
        this.container.style.width = (ratio*100)+4 + "%"
        this.items.forEach(item => item.style.width = ((100/this.slidesVisible)/ratio)+"%")
        if (this.isMobile){
            this.container.style.marginLeft="40%"
        }
        else{
            this.container.style.marginLeft="4%"
        }
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
        this.gotoItem(this.currentItem + this.slidesToScroll)
    }
    prev (){
        this.gotoItem(this.currentItem - this.slidesToScroll)
    }

    gotoItem(index){
        if (index <0){
            index = this.items.length - this.slidesVisible
        }else if (index >= this.items.length || (this.items[this.currentItem + this.slidesVisible]===undefined)&& index>this.currentItem){
            index = 0
        }
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3d(' +translateX + '%,0,0)'
        this.currentItem = index
    }

    onWindowResize(){
        if (window.innerWidth < 1000 ){
            this.isMobile = true
            this.setStyle()
        }
        else {
            this.isMobile = false
            this.setStyle()
        }
        
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

    get slidesToScroll(){
        return this.isMobile ?1 : this.options.slidesToScroll
    }
    get slidesVisible(){
        return this.isMobile ?1 : this.options.slidesVisible
    }


}

setTimeout(function(){
    new Carousel(document.querySelector('#carouselbest'),{
        slidesToScroll: 1,
        slidesVisible : 4,
    })
    new Carousel(document.querySelector('#theme1'),{
        slidesToScroll: 1,
        slidesVisible : 4,
    })
    new Carousel(document.querySelector('#theme2'),{
        slidesToScroll: 1,
        slidesVisible : 4,
    })
    new Carousel(document.querySelector('#theme3'),{
        slidesToScroll: 1,
        slidesVisible : 4,
    })
},
      900);

