$(document).ready(function() {

	function createGrid() {
		var gridSize = parseInt(prompt("Enter a size for your grid's rows and columns from 1 to 250"), 10);
		var gridHeight = $('#mainContainer').height() / gridSize;
		var frag = document.createDocumentFragment();
		
		if (gridSize<=250 && gridSize>0) {
			for (var i=1; i <= gridSize; i++) {
				var newRow = document.createElement("div");
				newRow.className = "row";

				for (var j=1; j <= gridSize; j++) {
					var newCell = document.createElement("div");
					newCell.className = "cell";
					newRow.appendChild(newCell);
				};
	
			frag.appendChild(newRow);
			};

			$('#mainContainer')[0].appendChild(frag);
			$('#mainContainer').find('.row').height(gridHeight);
			$('#mainContainer').find('.cell').width($('.row').width() / gridSize).height(gridHeight);
		}
		else {
			alert('Your size should be from 1 to 250');

		};
	};

	createGrid();

	$('#newGrid').click(function() {
		$('#mainContainer').find('.cell').removeClass('green');
		$('#mainContainer').find('.row').remove();
		createGrid();
	});

$('#reset').click(function() {
	$("#mainContainer").find('cell').removeClass('green');
});


	$('#mainContainer').find('.cell').mouseover(function() {
		$(this).toggleClass('green');
	});
	
});


