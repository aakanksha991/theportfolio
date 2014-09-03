$(document).ready(function() {

    var items = ["Front End Engineer","UX Engineer", "User Interface Developer", "Design Prototyper", "GUI Developer", "Front End Developer"],
        $text = $( '#my-job' ),
        delay = 1; //seconds
    
    function loop (delay) {
        $.each( items, function ( i, elm ){
            $text.delay(delay).fadeOut(500);
            $text.queue(function(){
                $text.html( items[i] );
                $text.dequeue();
            });
            $text.fadeIn(500);
        });
    }
    loop(delay);
});