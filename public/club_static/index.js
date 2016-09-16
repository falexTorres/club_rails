/** 
*
* controls index.html
*
**/

var divs = ['#homeDiv', '#aboutDiv', '#photosDiv', '#contactDiv'];
var links = ['homeLink', '#aboutLink', '#photosLink', '#contactLink'];
var actives = ['#homeActive', '#aboutActive', '#photosActive', '#contactActive'];
var menuLinks = ['#food1', '#food2', '#food3', '#beer1_1', '#beer1_2', '#beer1_3', '#beer1_4', '#beer1_5', '#beer2_1', '#beer2_2', '#beer2_3', '#beer2_4', '#beer2_5', '#beer3_1', '#beer3_2', '#beer3_3', '#beer3_4', '#beer3_5', '#wine1_1', '#wine1_2', '#wine1_3', '#wine1_4', '#wine1_5', '#wine2_1', '#wine2_2', '#wine2_3', '#wine2_4', '#wine2_5', '#wine3_1', '#wine3_2', '#wine3_3', '#wine3_4', '#wine3_5'];

var food1Description = "this is food1's description.";
var food1Img = "food1_img.png";
var food2Description = "this is food2's description.";
var food2Img = "food2_img.png";
var food3Description = "this is food3's description.";
var food3Img = "food3_img.png";
var beer1_1Description = "this is beer1_1's description.";
var beer1_1Img = "beer1_1_img.png";
var beer1_2Description = "this is beer1_2's description.";
var beer1_2Img = "beer1_2_img.png";
var beer1_3Description = "this is beer1_3's description.";
var beer1_3Img = "beer1_3_img.png";
var beer1_4Description = "this is beer1_4's description.";
var beer1_4Img = "beer1_4_img.png";
var beer1_5Description = "this is beer1_5's description.";
var beer1_5Img = "beer1_5_img.png";
var beer2_1Description = "this is beer2_1's description.";
var beer2_1Img = "beer2_1_img.png";
var beer2_2Description = "this is beer2_2's description.";
var beer2_2Img = "beer2_2_img.png";
var beer2_3Description = "this is beer2_3's description.";
var beer2_3Img = "beer2_3_img.png";
var beer2_4Description = "this is beer2_4's description.";
var beer2_4Img = "beer2_4_img.png";
var beer2_5Description = "this is beer2_5's description.";
var beer2_5Img = "beer2_5_img.png";
var beer3_1Description = "this is beer3_1's description.";
var beer3_1Img = "beer3_1_img.png";
var beer3_2Description = "this is beer3_2's description.";
var beer3_2Img = "beer3_2_img.png";
var beer3_3Description = "this is beer3_3's description.";
var beer3_3Img = "beer3_3_img.png";
var beer3_4Description = "this is beer3_4's description.";
var beer3_4Img = "beer3_4_img.png";
var beer3_5Description = "this is beer3_5's description.";
var beer3_5Img = "beer3_5_img.png";
var wine1_1Description = "this is wine1_1's description.";
var wine1_1Img = "wine1_1_img.png";
var wine1_2Description = "this is wine1_2's description.";
var wine1_2Img = "wine1_2_img.png";
var wine1_3Description = "this is wine1_3's description.";
var wine1_3Img = "wine1_3_img.png";
var wine1_4Description = "this is wine1_4's description.";
var wine1_4Img = "wine1_4_img.png";
var wine1_5Description = "this is wine1_5's description.";
var wine1_5Img = "wine1_5_img.png";
var wine2_1Description = "this is wine2_1's description.";
var wine2_1Img = "wine2_1_img.png";
var wine2_2Description = "this is wine2_2's description.";
var wine2_2Img = "wine2_2_img.png";
var wine2_3Description = "this is wine2_3's description.";
var wine2_3Img = "wine2_3_img.png";
var wine2_4Description = "this is wine2_4's description.";
var wine2_4Img = "wine2_4_img.png";
var wine2_5Description = "this is wine2_5's description.";
var wine2_5Img = "wine2_5_img.png";
var wine3_1Description = "this is wine3_1's description.";
var wine3_1Img = "wine3_1_img.png";
var wine3_2Description = "this is wine3_2's description.";
var wine3_2Img = "wine3_2_img.png";
var wine3_3Description = "this is wine3_3's description.";
var wine3_3Img = "wine3_3_img.png";
var wine3_4Description = "this is wine3_4's description.";
var wine3_4Img = "wine3_4_img.png";
var wine3_5Description = "this is wine3_5's description.";
var wine3_5Img = "wine3_5_img.png";

var menuMap = [];
menuMap["#food1"] = [food1Description, food1Img];
menuMap["#food2"] = [food2Description, food2Img];
menuMap["#food3"] = [food3Description, food3Img];
menuMap["#beer1_1"] = [beer1_1Description, beer1_1Img];
menuMap["#beer1_2"] = [beer1_2Description, beer1_2Img];
menuMap["#beer1_3"] = [beer1_3Description, beer1_3Img];
menuMap["#beer1_4"] = [beer1_4Description, beer1_4Img];
menuMap["#beer1_5"] = [beer1_5Description, beer1_5Img];
menuMap["#beer2_1"] = [beer2_1Description, beer2_1Img];
menuMap["#beer2_2"] = [beer2_2Description, beer2_2Img];
menuMap["#beer2_3"] = [beer2_3Description, beer2_3Img];
menuMap["#beer2_4"] = [beer2_4Description, beer2_4Img];
menuMap["#beer2_5"] = [beer2_5Description, beer2_5Img];
menuMap["#beer3_1"] = [beer3_1Description, beer3_1Img];
menuMap["#beer3_2"] = [beer3_2Description, beer3_2Img];
menuMap["#beer3_3"] = [beer3_3Description, beer3_3Img];
menuMap["#beer3_4"] = [beer3_4Description, beer3_4Img];
menuMap["#beer3_5"] = [beer3_5Description, beer3_5Img];
menuMap["#wine1_1"] = [wine1_1Description, wine1_1Img];
menuMap["#wine1_2"] = [wine1_2Description, wine1_2Img];
menuMap["#wine1_3"] = [wine1_3Description, wine1_3Img];
menuMap["#wine1_4"] = [wine1_4Description, wine1_4Img];
menuMap["#wine1_5"] = [wine1_5Description, wine1_5Img];
menuMap["#wine2_1"] = [wine2_1Description, wine2_1Img];
menuMap["#wine2_2"] = [wine2_2Description, wine2_2Img];
menuMap["#wine2_3"] = [wine2_3Description, wine2_3Img];
menuMap["#wine2_4"] = [wine2_4Description, wine2_4Img];
menuMap["#wine2_5"] = [wine2_5Description, wine2_5Img];
menuMap["#wine3_1"] = [wine3_1Description, wine3_1Img];
menuMap["#wine3_2"] = [wine3_2Description, wine3_2Img];
menuMap["#wine3_3"] = [wine3_3Description, wine3_3Img];
menuMap["#wine3_4"] = [wine3_4Description, wine3_4Img];
menuMap["#wine3_5"] = [wine3_5Description, wine3_5Img];


function showBeerMenu() {
	$('#food-nav-bar').hide();
	$('#beer-wine-nav-bar').show();
	$('#beerImg').hide();
	$('#foodImg').hide();
	$('#wineImg').show();
	$('#beerDescription').hide();
	$('#foodDescription').hide();
	$('#wineDescription').show();
	$('#wineButton').click();
	$('#wineDefault').click();
	$('#foodPager').hide();
	$('#beerPager').hide();
	$('#winePager').show();
}


function showFoodMenu() {
	$('#beer-wine-nav-bar').hide();
	$('#food-nav-bar').show();
	$('#beerImg').hide();
	$('#wineImg').hide();
	$('#foodImg').show();
	$('#beerDescription').hide();
	$('#wineDescription').hide();
	$('#foodDescription').show();
	$('#foodDefault').click();
	$('#winePager').hide();
	$('#beerPager').hide();
	$('#foodPager').show();
}


jQuery(document).ready(function() {
	
	/* INITIALIZATIONS */
	$('.slider').slider();
	
	$('.collapsible').collapsible({
      accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
	
	for (var i = 0; i < links.length; i++) {
		$(divs[i]).hide();
		$(actives[i]).attr('class', 'col l3 m3 nav-button');
	}
	
	$(divs[0]).show();
	$(actives[0]).attr('class', 'col l3 m3 nav-button active nav-active');
	
	/* END OF INITIALIZATIONS */
	
	
	
	/* START OF PAGE NAVIGATION FUNCTIONALITY */
	
	$('a.' + links[0]).click(function() {
		for (var i = 0; i < links.length; i++) {
			$(divs[i]).hide();
			$(actives[i]).attr('class', 'col l3 m3 nav-button');
		}
		$('body.fade-in').attr('class', '');
		$('body').attr('class', 'fade-in');
		$(divs[0]).show();
		$(actives[0]).attr('class', 'col l3 m3 nav-button active nav-active');
	})	
	
	$(links[1]).click(function() {
		for (var i = 0; i < links.length; i++) {
			$(divs[i]).hide();
			$(actives[i]).attr('class', 'col l3 m3 nav-button');
		}
		$('body.fade-in').attr('class', '');
		$('body').attr('class', 'fade-in');
		$(divs[1]).show();
		$(actives[1]).attr('class', 'col l3 m3 nav-button active nav-active');
	})
	
	$(links[2]).click(function() {
		for (var i = 0; i < links.length; i++) {
			$(divs[i]).hide();
			$(actives[i]).attr('class', 'col l3 m3 nav-button');
		}
		$('body.fade-in').attr('class', '');
		$('body').attr('class', 'fade-in');
		$(divs[2]).show();
		$(actives[2]).attr('class', 'col l3 m3 nav-button active nav-active');
	})
	
	$(links[3]).click(function() {
		for (var i = 0; i < links.length; i++) {
			$(divs[i]).hide();
			$(actives[i]).attr('class', 'col l3 m3 nav-button');
		}
		$('body.fade-in').attr('class', '');
		$('body').attr('class', 'fade-in');
		$(divs[3]).show();
		$(actives[3]).attr('class', 'col l3 m3 nav-button active nav-active');
	})
	
	/* END OF PAGE NAVIGATION FUNCTIONALITY */
	
	
	
	/* START OF MENU PAGE FUNCTIONALITY HIDE/SHOW FUNCTIONALITY */
	
	$('.menu-top').click(function() {
		console.log($(this).attr('id') == 'menuTopFood');
		console.log($(this).attr('id'));
		
		if ($(this).attr('id') == 'menuTopBeer') {
			$(this).attr('class', 'menu-active-top waves-effect waves-red btn orange lighten-5 red-text');
			$('#menuTopFood').attr('class', 'menu-top waves-effect waves-red btn orange lighten-5 black-text');
			showBeerMenu();
		}
		else {
			$(this).attr('class', 'menu-active-top waves-effect waves-red btn orange lighten-5 red-text');
			$('#menuTopBeer').attr('class', 'menu-top waves-effect waves-red btn orange lighten-5 black-text');
			showFoodMenu();
		}
	})
	
	$('table.highlight > tbody > tr').click(function() {
		$('#wineImg').hide();
		$('#beerImg').hide();
		$('#wineDescription').hide();
		$('#beerDescription').hide();
		$('#foodImg').show();
		$('#foodDescription').show();
		console.log($(this));
		for (var i = 0; i < menuLinks.length; i++) {
			$(menuLinks[i]).attr('class', '');
		}
		$(this).attr('class','active-menu-select');
		var id = $(this).attr('id');
		var title = $('[id="' + id + '"] > td').html();
		var description = menuMap['#' + id][0];
		var img = menuMap['#' + id][1]
		//show description 
		console.log('title: ' + $(this).html());
		console.log('description: ' + description);
		console.log('img: ' + img);
		$('[id="foodDescription"] > h4').html(title);
		$('[id="foodDescription"] > p').html(description);
		$('[id="foodImg"] > img').attr('src', img);	
	})
	
	$('#beerButton').click(function() {	
		$('#wineButton').attr('class', 'btn light-blue lighten-5 black-text');
		$(this).attr('class', 'btn light-blue lighten-5 red-text');
		$('#wine-nav-bars').hide();
		$('#beer-nav-bars').show();	
		$('#beer1_1').attr('class', 'active-menu-select');	
		$('#wineImg').hide();
		$('#foodImg').hide();
		$('#beerImg').show();
		$('#wineDescription').hide();
		$('#foodDescription').hide();
		$('#beerDescription').show();
		$('#beerDefault').click();
		$('#winePager').hide();
		$('#foodPager').hide();
		$('#beerPager').hide();
		$('#beerPager').show();
		$('#beer-nav-bar-pg2').hide();
		$('#beer-nav-bar-pg3').hide();
		$('#beer-nav-bar-pg1').show();
		$('[id="beerPager"] > .pagination > li').each(function(index, value) {
			if (index == 0) $(this).attr('class', 'active waves-effect');
			else $(this).attr('class', 'waves-effect');
		});
		//show beers
	})
	
	$('#wineButton').click(function() {
		$('#beerButton').attr('class', 'btn light-blue lighten-5 black-text');
		$(this).attr('class', 'btn light-blue lighten-5 red-text');
		$('#beer-nav-bars').hide();
		$('#wine-nav-bars').show();
		$('#wine1_1').attr('class', 'active-menu-select');
		$('#beerImg').hide();
		$('#foodImg').hide();
		$('#wineImg').show();
		$('#beerDescription').hide();
		$('#foodDescription').hide();
		$('#wineDescription').show();
		$('#wineDefault').click();
		$('#beerPager').hide();
		$('#foodPager').hide();
		$('#winePager').hide();
		$('#winePager').show();
		$('#wine-nav-bar-pg2').hide();
		$('#wine-nav-bar-pg3').hide();
		$('#wine-nav-bar-pg1').show();
		$('[id="winePager"] > .pagination > li').each(function(index, value) {
			if (index == 0) $(this).attr('class', 'active waves-effect');
			else $(this).attr('class', 'waves-effect');
		});
		//show wines
	})
	
	// pagination functionality
	$('.pagination > li.waves-effect').click(function() {
		$('.pagination > li.waves-effect.active').attr('class', 'waves-effect');
		var pageNumber;	
		console.log($(this).html());
		if ($(this).html().indexOf('1') < 14) pageNumber = 1;
		else if ($(this).html().indexOf('2') < 14) pageNumber = 2;
		else if ($(this).html().indexOf('3') < 14) pageNumber = 3;
		console.log(pageNumber);
		$(this).attr('class', 'active waves-effect');
		if ($('#beerButton').attr('class').indexOf('red-text') > -1) {
			//show beer page
			for (var i = 1; i <= 3; i++) {
				if (i == pageNumber) $('[id="beer-nav-bar-pg' + i.toString() + '"]').show();
				
				else {
					$('[id="beer-nav-bar-pg' + i.toString() + '"]').hide();
					$('[id="wine-nav-bar-pg' + i.toString() + '"]').hide();
				}
			}
		}
		
		else {
			console.log('showing wine page');
			//show wine page
			for (var i = 1; i <= 3; i++) {
				if (i == pageNumber) $('[id="wine-nav-bar-pg' + i.toString() + '"]').show();
				
				else {
					$('[id="wine-nav-bar-pg' + i.toString() + '"]').hide();
					$('[id="beer-nav-bar-pg' + i.toString() + '"]').hide();
				}
			}
		} 
	})
	// end of pagination functionality
	
	/* END OF MENU PAGE FUNCTIONALITY HIDE/SHOW FUNCTIONALITY */
	
	
})
