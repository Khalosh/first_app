$(document).ready(function() {

	for (var s=1; s<=12; s++){
		$('#wstatek' + s).draggable({ grid: [62, 62], cursor: 'crosshair', containment: '#plansza' });

	}

	

	for (var x=0; x<8; x++){
		for (var y=0; y<8; y++){
		 	
	    	$("table tr:eq(" + x + ") td:eq(" + y + ")").droppable({ accept: '.white', drop: function(event, ui) {
				
			
		 		$("#poz").val($(this).attr('posx'));
		 		$("#numer_wstatku").val($(ui.draggable).attr('numer'));
 			//	$('#pozycja').submit();
				}
			
			});		
});
