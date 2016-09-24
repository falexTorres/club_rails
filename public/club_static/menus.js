function refreshItems(item, items) {
	for (var i = 0; i < items.length; i++) {
		$('#' + items[i]).hide();
	}
	$('#' + item).show();
}

document.addEventListener("turbolinks:load", function() {
	console.log("\n\nin the menu js file yeeeeeee");
	console.log("FUUSDA;OFKJACKKKKK\n\n");
		
	$('#headSelect').change(function() {
		var selected = $('#headSelect').find(':selected').text();
		if (selected == "food") {
			$('#wineDiv').hide();
			$('#beerDiv').hide();
			$('#foodDiv').show();
		}
		else if (selected == "beer") {
			$('#wineDiv').hide();
			$('#foodDiv').hide();
			$('#beerDiv').show();
		}
		else {
			$('#foodDiv').hide();
			$('#beerDiv').hide();
			$('#wineDiv').show();
		}
	})
	
	$('#foodSelect').change(function() {
		var selected = $('#foodSelect').find(':selected').text();
		var foods = ["food1", "food2", "food3", "food4", "food5"];
		
		switch(selected) {
			case foods[0]:
				refreshItems(foods[0], foods);
				break;
			case foods[1]:
				refreshItems(foods[1], foods);
				break;
			case foods[2]:
				refreshItems(foods[2], foods);
				break;
			case foods[3]:
				refreshItems(foods[3], foods);
				break;
			case foods[4]:
				refreshItems(foods[4], foods);
				break;
		}
	})

	$('#beerSelect').change(function() {
		var selected = $('#beerSelect').find(':selected').val();
		var beers = ["beer1_1", "beer1_2", "beer1_3", "beer1_4", "beer1_5", "beer2_1", "beer2_2", "beer2_3", "beer2_4", "beer2_5", "beer3_1", "beer3_2", "beer3_3", "beer3_4", "beer3_5"];
		
		switch(selected) {
			case beers[0]:
				refreshItems(beers[0], beers);
				break;
			case beers[1]:
				refreshItems(beers[1], beers);
				break;
			case beers[2]:
				refreshItems(beers[2], beers);
				break;
			case beers[3]:
				refreshItems(beers[3], beers);
				break;
			case beers[5]:
				refreshItems(beers[5], beers);
				break;
			case beers[6]:
				refreshItems(beers[6], beers);
				break;
			case beers[7]:
				refreshItems(beers[7], beers);
				break;
			case beers[8]:
				refreshItems(beers[8], beers);
				break;
			case beers[9]:
				refreshItems(beers[9], beers);
				break;
			case beers[10]:
				refreshItems(beers[10], beers);
				break;
			case beers[11]:
				refreshItems(beers[11], beers);
				break;
			case beers[12]:
				refreshItems(beers[12], beers);
				break;
			case beers[13]:
				refreshItems(beers[13], beers);
				break;
			case beers[14]:
				refreshItems(beers[14], beers);
				break;
		}
	})

	$('#wineSelect').change(function() {
		var selected = $('#wineSelect').find(':selected').val();
		var wines = ["wine1_1", "wine1_2", "wine1_3", "wine1_4", "wine1_5", "wine2_1", "wine2_2", "wine2_3", "wine2_4", "wine2_5", "wine3_1", "wine3_2", "wine3_3", "wine3_4", "wine3_5"];
		
		switch(selected) {
			case wines[0]:
				refreshItems(wines[0], wines);
				break;
			case wines[1]:
				refreshItems(wines[1], wines);
				break;
			case wines[2]:
				refreshItems(wines[2], wines);
				break;
			case wines[3]:
				refreshItems(wines[3], wines);
				break;
			case wines[5]:
				refreshItems(wines[5], wines);
				break;
			case wines[6]:
				refreshItems(wines[6], wines);
				break;
			case wines[7]:
				refreshItems(wines[7], wines);
				break;
			case wines[8]:
				refreshItems(wines[8], wines);
				break;
			case wines[9]:
				refreshItems(wines[9], wines);
				break;
			case wines[10]:
				refreshItems(wines[10], wines);
				break;
			case wines[11]:
				refreshItems(wines[11], wines);
				break;
			case wines[12]:
				refreshItems(wines[12], wines);
				break;
			case wines[13]:
				refreshItems(wines[13], wines);
				break;
			case wines[14]:
				refreshItems(wines[14], wines);
				break;
		}
	})

})
