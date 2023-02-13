export default class App {
    create () {
        const element = document.createElement('div');
        element.classList.add('app');
        document.body.appendChild(element);
    }

    init() {
        this.create();
    };
}