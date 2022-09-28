
        var dragValue;

        function move(id){
            var element = document.getElementById("theDiv");
            element.style.position = "absolute";
            element.onmousedown = function(){
                dragValue = element;
            }
        }

        document.onmouseup = function(e){
            dragValue = null;
        }

        document.onmousemove = function(e){
            var x = e.pageX;
            var y = e.pageY;

            dragValue.style.left = x + "px";
            dragValue.style.top = y + "px";
        }