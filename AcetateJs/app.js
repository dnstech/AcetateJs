var MainPage = (function () {
    function MainPage(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    MainPage.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () {
            return _this.span.innerHTML = new Date().toUTCString();
        }, 500);
    };

    MainPage.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return MainPage;
})();

window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new MainPage(el);
    greeter.start();
};
//# sourceMappingURL=app.js.map
