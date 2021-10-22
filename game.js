var start = false;
var level = 0;
var sequence = [];
var i = 0;
$(document).keypress(function(){
	if(!start){
        nextlevel();
	}
});


function nextlevel(){
    level = level + 1;
    $("#level-title").text("Level " + level);
    var random = Math.floor(Math.random() * 4) + 1;
    if(random == 1) { blink("green"); }
    else if(random == 2) { blink("red"); }
    else if(random == 3) { blink("yellow"); }
    else { blink("blue"); }
    sequence.push(random);
    length = sequence.length;
    i = 0;
}

function play(num){
    if(num == sequence[i]){
        i = i + 1;
        if(i == (length)){
            setTimeout(function() {nextlevel();}, 1000);
        }
    }
    else{
        wrong();
    }
}

function wrong(){
	$("#level-title").text("Game Over, Press Any Key to Restart");
	$("#w")[0].play();
	$('body').addClass('game-over');
    setTimeout(function() {$('body').removeClass('game-over')}, 200);
    level = 0;
    sequence = [];
}

$('#green, #red, #yellow, #blue').click(function(){
    var color = this.id;
    $('#' + color).addClass('pressed');
    setTimeout(function() {$('#' + color).removeClass('pressed')}, 100);
    $("#" + color + "sound")[0].play();
    var s;
    if (color === "green") { s = 1;}
    else if (color === "red") { s = 2;}
    else if (color === "yellow") { s = 3;}
    else { s = 4;}
    if(sequence.length == 0){
		wrong();
	}
    else{
        play(s);
    }
    
})

function blink(color){
    $("#"+ color + "sound")[0].play();
    $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
    
}
