class App {
    create(element) {
        let newElement = document.createElement(element).setAttribute('class', 'value');
    }
    render(newElement) {
        document.body.append(newElement);
    }
    init() {
        
    }
}

export default new App().init();

