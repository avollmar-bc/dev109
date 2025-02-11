// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upperShape(pHeight, pColorEven, pColorOdd, pSymbol);
    lowerShape(pHeight, pColorEven, pColorOdd, pSymbol);
    }

        //Top Area
        function upperShape(pHeight, pColorEven, pColorOdd, pSymbol) {
            var rLine = "";
            for (i = 0; i <= pHeight*2; i++) {
                if (i%2) { //Only populate on even numbers
                    rLine += "<p>";
                    for (j = 0; j <=i; j++) {
                        if (j%2)
                            //even
                            rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
                            else
                            //odd
                            rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
                            
                    }
                    rLine +="</p>";
                }

            }

            document.getElementById("upperShape").innerHTML = rLine;

        }

        function lowerShape(pHeight, pColorEven, pColorOdd, pSymbol) {
            var rLine = "";
            var fullWidth = pHeight * 2; 
            for (i = fullWidth; i >= 0; i--) { //For some reason the countdown was a pain. Logged odd numbers with modulo argument
                if (i%2) { //Only populate on even numbers
                    rLine += "<p>";
                    for (j = 0; j <= i; j++) {
                        if (j%2)
                        //even
                        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
                        else
                        //odd
                        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
                        
                    }
                    rLine +="</p>";
                }

            }

            document.getElementById("lowerShape").innerHTML = rLine;

        }