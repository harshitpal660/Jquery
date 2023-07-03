(function(){
    let colors = ['red', 'blue', 'yellow', 'lightgrey', 
    'darkorchid', 'black', 'orange', 'deeppink', 'green',
    'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 
    'firebrick', 'crimson'];
    let basket = $('#basket');
    $("button").click(()=>{
        // console.log(basket);
        let randnum = Math.floor(Math.random()*(15-1+1))+1;
        let newBall = $('<div></div>');
        newBall.addClass("balls")
        newBall.css("backgroundColor",colors[randnum-1]);
        $(basket).append(newBall);
    });

})()