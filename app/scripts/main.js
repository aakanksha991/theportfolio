$(document).ready(function() {

    var items = ["Front End Engineer","UX Engineer", "User Interface Developer", "Design Prototyper", "GUI Developer", "Front End Developer"],
        $text = $( '#my-job' ),
        delay = 1; //seconds
    
    function loop (delay) {
        $.each( items, function ( i, elm ){
            $text.delay(delay).fadeOut(400);
            $text.queue(function(){
                $text.html( items[i] );
                $text.dequeue();
            });
            $text.fadeIn(400);
            // $text.queue(function(){
            //     if ( i == items.length -1 ) {
            //         loop(delay);   
            //     }
            //     $text.dequeue();
            // });
        });
    }

    loop(delay);

    $("#ife1").css('opacity','1');
    $("#ndca").css('opacity','1');
    $("#saa").css('opacity','1');
    $("#vcba").css('opacity','1');
    
});