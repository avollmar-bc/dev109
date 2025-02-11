// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upRight(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
    upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    upperShape(pHeight, pColorEven, pColorOdd, pSymbol);
    lowerShape(pHeight, pColorEven, pColorOdd, pSymbol));
    }

    //Upper Right Area
    function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
    var rLine ="";
    for (i=0;i<pHeight;i++){
    rLine +="<p>";
    //Create each line on the Rhombus
    for(j=0;j<=i;j++){
    
    //Is the position even or odd so we change the color
    if (j%2)
    //even
    rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
    else
    //odd
    rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
    
    }
    rLine +="</p>";
    // console.log(rLine);
    
    }
    
    document.getElementById("upRight").innerHTML = rLine;
    }

    //Lower  Right Area
    function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
    var rLine ="";
    for (i=pHeight;i > 0;i--){
    rLine +="<p>";
    //Create each line on the Rhombus
    for(j=0;j<i;j++){
    
    //Is the position even or odd so we change the color
    if (j%2)
    //even
    rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
    else
    //odd
    rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
    
    }
    rLine +="</p>";
    // console.log(rLine);
    
    }
    
    document.getElementById("downRight").innerHTML = rLine;
    }

    //Upper Left Area
    function upLeft(pHeight, pColorEven, pColorOdd, pSymbol){
        var rLine ="";
        for (i=0;i<pHeight;i++){
        rLine +="<p>";
        //Create each line on the Rhombus
        for(j=0;j<=i;j++){
        
        //Is the position even or odd so we change the color
        if (j%2)
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
        else
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
        
        }
        rLine +="</p>";
        // console.log(rLine);
        
        }
        
        document.getElementById("upLeft").innerHTML = rLine;
        }

    //Lower Left Area
    function downLeft(pHeight, pColorEven, pColorOdd, pSymbol){
        var rLine ="";
        for (i=pHeight;i > 0;i--){
        rLine +="<p>";
        //Create each line on the Rhombus
        for(j=0;j<i;j++){
        
        //Is the position even or odd so we change the color
        if (j%2)
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
        else
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
        
        }
        rLine +="</p>";
        // console.log(rLine);
        
        }
        
        document.getElementById("downLeft").innerHTML = rLine;
        }

        //Top Area
        function upperShape(pHeight, pColorEven, pColorOdd, pSymbol) {
            var rLine = "";
            for (i = 0; i < pHeight*2; i++) {
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

            document.getElementById("upperShape").innerHTML = rLine;

        }

        function lowerShape(pHeight, pColorEven, pColorOdd, pSymbol) {
            var rLine = "";
            for (i=pHeight*2; i > 0; i--) {
                rLine += "<p>";

                for (j = 0; j < i; j++) {
        
                    //Is the position even or odd so we change the color
                    if (j%2)
                    //even
                    rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
                    else
                    //odd
                    rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
                    
                    }
                rLine +="</p>";
            }

            document.getElementById("lowerShape").innerHTML = rLine;

        }