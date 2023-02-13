class App {
    constructor(){
        this.element="";
        this.getData=[];              
    }

    create() {
        let elem = document.createElement("div");
        elem.setAttribute("class", "App");
        elem.setAttribute('id',"app");
        this.element=elem;
     }

    render() {
        document.body.appendChild(this.element);
     }

    init() {
    
        let mainScript = document.createElement('script');
        mainScript.defer= true;  
        mainScript.type = 'module';
        mainScript.src='./components/Main.js';
        document.body.appendChild(mainScript);       
        this.create();
        // this.render();  
        this.getDatafunc();
        document.head.innerHTML='<mta http-equiv="Content-Type" content="text/html;charset=UTF-8"><link rel="stylesheet" href="./css/style.css"><title>Shopping</title>'
        return this;
    }

    getDatafunc() {
        let products = localStorage.getItem('products');
          if (products!=null) {
            this.getData=JSON.parse(products);  
            return JSON.parse(products);
        }   
        (async function() {
       
           let response = await fetch('https://fakestoreapi.com/products');
           if (!response.ok) return console.log('don t work api')
     
           let data = response.json();
              data.then(function(products) {
              localStorage.setItem('products', JSON.stringify(products)); 
              this.getData=products;                 
              return products;  
            });
           })();
        }     
     };

export default new App().init();