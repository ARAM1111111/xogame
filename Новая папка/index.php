
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		#table{
			margin:0 auto;
		}
		#board{
			border:5px solid green;
			text-align: center;
			border-collapse: collapse;
		}
		#board td{
			border:1px solid black;
			padding: 2px;
			width: 60px;
			height: 60px;
			font-size: 50px;
			color: silver;
		}
	</style>
</head>
<input type="text">
<input type="text">
<input type="button" value="START GAME" id="start">
<body>
<div id="table"></div>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script  type='text/javascript'>
	$(document).ready(function (){
		// $('#start').click(function(event) {
			

		// });
		var trr = 5;
		var tdd = 5;

		var id = 0;
		var table="<table id='board'>";
				for(var i=1;i<trr;i++)
				{
					table+="<tr>"
					for(var j=1;j<tdd;j++)
					{
						
						table+="<td id="+id+">"+" "+"</td>";
						id++;
					}
					table+="</tr>";
				}
		table+="</table>"

$('#table').html(table);
var player = 1;

	$('td').click(function(event) {
		player++;
		// var arr = ['asasasa'];

		if(player%2 == 0)
		{
			// player+=1;
			$(this).html('x');
			$(this).unbind();
			// var a = $(this).attr('id');
			// arr.push(a);
			// winer();
			 

		}
		else
		{	
			// player-=1;
			$(this).html('o');
			$(this).unbind();
			// winer();	
		}
	

// ========================== XAXI LOGIKA ========================	
 //var win = [[0,1,2],[3,4,5],[6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];	
	var td = $('td');

function winer(){
var win = [];
for(var n = 0;n<trr;n++){
	for(var m = 0;m<tdd;m++){
		win.push()
	}
}

//var win = [[0,1,2],[3,4,5],[6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
var td = $('td');
for (var t = 0; t < td.length; t++)
{
	//console.log(td);
	 if( 
 			$(td[win[t][0]]).html() ==  $(td[win[t][1]]).html() &&
 			$(td[win[t][0]]).html() ==  $(td[win[t][2]]).html() &&
 			$(td[win[t][0]]).html() == "x"
 			
	 	)
	 {
	 		alert('Won X player');
	 		break;
	 }
	 else if(
 			$(td[win[t][0]]).html() ==  $(td[win[t][1]]).html() &&
 			$(td[win[t][0]]).html() ==  $(td[win[t][2]]).html() &&
 			$(td[win[t][0]]).html() == "o"
	 	)
	 {
	 		alert('Won 0 player');
	 		break;
	 } 

}


}


	});

});
</script>
</body>
</html>