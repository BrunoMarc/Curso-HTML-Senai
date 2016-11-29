(function() {
   
          function minhaprimeirafn() {
        setTimeout(imprimirConsole, 3000);

        function imprimirConsole() {
            this.x = 9;

            var module = {
                x: 81,
                getX: function() {
                    return this.x;
                }
            };

            var module2 = {
                x: 16,
                y: 21
            };

            console.log('x: ' + module.getX());

            var getX = module.getX;
            console.log('x: ' + getX());

            var getX2 = getX.bind(module2);
            console.log('x: ' + getX2());
        }
    }

    


minhaprimeirafn();
minhaprimeirafn();
minhaprimeirafn();
})();


