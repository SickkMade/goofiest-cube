class Box{
    constructor(container){
        this.box = container.querySelector('.box');
        this.container = container;
        this.isMouseDown = false;
        this.cursorStartX = 0;
        this.cursorStartY = 0;
        this.posStartX = 0;
        this.posStartY = 0;
        this.rotation = 0;
        this.init();
    }
    init(){
        this.attachEventListeners()
    }

    attachEventListeners(){
        document.addEventListener('mousedown', this.mousedown.bind(this))
        document.addEventListener('mouseup', this.mouseup.bind(this))
        document.addEventListener('mousemove', this.mousemove.bind(this))
    }
    mousemove(event){
        requestAnimationFrame(() => {
            if(!this.isMouseDown) return
            this.box.style.transform = `
            rotateX(${this.posStartY + (event.clientY - this.cursorStartY)}deg) 
            rotateY(${this.posStartX + (event.clientX - this.cursorStartX)}deg)
            `
        })
    }
    mousedown(event){
        this.isMouseDown = true;
        this.cursorStartX = event.clientX
        this.cursorStartY = event.clientY
    }
    mouseup(event){ 
        this.isMouseDown = false;
        this.posStartX += event.clientX - this.cursorStartX
        this.posStartY += event.clientY - this.cursorStartY
    }
}

export default Box;