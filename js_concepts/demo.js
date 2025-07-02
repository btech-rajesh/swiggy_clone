
function x(){
    var b=20;
    console.log(b);
    function y(){
        var c=30;
        console.log(c);
    }   
  return y
}
x()();