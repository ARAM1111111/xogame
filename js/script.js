$(document).ready(function (){

function table(trr){
      var table="<table id='table' class='table table-bordered table-striped table-hover '>";
      for(var i=0;i<trr;i++){
        table+="<tr>";
          for(var j=0;j<trr;j++){
            table+="<td></td>";
          }
        table+="</tr>";
      }
      table+="</table>";
      return table;
}

$("#board").click(function(){
	trr = $("#num").val();
	trr = parseInt(trr);
	var board = table(trr);
	$('.table').html(board);
	$("#table").css({'display':'block'});
});

$('[name=new]').click(function(event) {
	location.reload();
});

$('button').click(function(event)
{
	$("[name=you],[name='pc']").hide();

	var td =$('td');

	td.click(function(event)
	{	
		$(this).html('x').unbind();
		winner();
		datark();
		pc();
			
	});	

	if($(this).attr('name') == "pc")
	{
		pc();
	}

	function datark()
	{
		var pustoy = $('td:empty');
		// console.log(pustoy);
		if(pustoy.length>0){
			return true;
		}else{
			alert("Game is over");
		}
	}	
		
	function pc()
	{	
	 	var pustoy = $('td:empty');
		var p = Math.floor(Math.random()*(pustoy.length));
			// console.log(pustoy);
		$(pustoy[p]).html('o').off('click');	
		winner();
		datark();		
	};

function winner(e)
{
		var win = [];
		var horiz = [];		var y = 0;
		var uxxah = [];		var e = 0;
		var ankyun1 = [];	var s = 0;
		var ankyun2 = [];	var g = trr-1;


for (var k = 0; k < trr; k++)
{

  for (var l = 0; l < trr; l++)
  {
		horiz[l] = y;
		uxxah[l] = e+k;

	if( k == 0)	
	{
	 	ankyun1[l] = s;
	 	s = trr+1+ankyun1[l];
	 	
	 	ankyun2[l] = g;
	 	g = trr-1+ankyun2[l];
	}	 
		y++; 
		e = e + trr;	
  }
	 win.push(horiz);
	 win.push(uxxah);

	 if( k == 0){
	 	win.push(ankyun1);
	 	win.push(ankyun2);
	 }
	 e = 0;
	 uxxah = [];
	 horiz = []; 
}

	var f=d= 0;
	for (var t = 0; t < win.length; t++)
	{

		for (var m = 1; m < trr; m++) {
	
			if( $(td[win[t][0]]).html() == "x" && $(td[win[t][m]]).html() == $(td[win[t][0]]).html())	
			{
				f++;
				if(f == trr-1)
				{
					alert('Won X player');
			 		td.off('click');
			 		e.stopImmediatePropagation();
				}
				 
			}
			else if($(td[win[t][0]]).html() == "o" && $(td[win[t][m]]).html() == $(td[win[t][0]]).html())	
			{
				d++;
				if(d == trr-1)
				{
					alert('Won 0 player');
			 		td.off('click');	 	 
			 		e.stopImmediatePropagation();
				}

			}


		}
		f = 0;d = 0;
	}


}
	
})

});

