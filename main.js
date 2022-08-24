class Slider{
    constructor(){
        this.images = [];
        this.images[0] = "img/0.jpg";
        this.images[1] = "img/1.jpg";
        this.images[2] = "img/2.jpg";


        this.links = [];
        this.links[0] = "#";
        this.links[1] = "#";
        this.links[2] = "#";
        this.counter = 0;

        this.playSlider();
        setInterval(()=>{
            this.playSlider();
        },3000);
     
    }
    playSlider(){
        if(this.counter < this.images.length - 1){
            this.counter++
        }else{
            this.counter = 0;
        }
        slider_show.src = this.images[this.counter];
        document.getElementById('linked').href = this.images[this.counter];
    }
}
onload = new Slider();