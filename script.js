/*jshint camelcase: true, quotmark: single, undef: false, unused: vars, latedef: nofunc, asi: false, boss: false, laxbreak: false, laxcomma: false, multistr: false, sub: false, supernew: false, browser: true, devel: true, jquery: true, indent: 4*/

highlightsOn = true;

data =
[
	{
		name: 'main',
		xmlName: 'activity_main.xml',
		javaName: 'MainActivity.java',
		imagePath: 'main.png',
		mapData: [
			{
				shape: 'rectangle',
				coords: [16, 50, 40, 70],
				href: 'settings'
			},
			{
				shape: 'rectangle',
				coords: [30, 115, 170, 190],
				href: 'decks'
			}
		]
	},
	{
		name: 'decks',
		xmlName: 'activity_decks.xml',
		javaName: 'DecksActivity.java',
		imagePath: 'decks.png',
		mapData: [
			{
				shape: 'circle',
				coords: [35, 65, 20],
				href: 'main'
			},
			{
				shape: 'rectangle',
				coords: [35, 90, 85, 120],
				href: 'card'
			},
			{
				shape: 'circle',
				coords: [163, 323, 25],
				href: 'card-edit'
			}
		]
	},
	{
		name: 'card',
		xmlName: 'activity_card.xml',
		javaName: 'CardActivity.java',
		imagePath: 'card.png',
		mapData: [
			{
				shape: 'circle',
				coords: [33, 85, 20],
				href: 'decks'
			}
		]
	},
	{
		name: 'card-edit',
		xmlName: 'activity_card_edit.xml',
		javaName: 'CardEditActivity.java',
		imagePath: 'card-edit.png',
		mapData: [
			{
				shape: 'circle',
				coords: [33, 85, 20],
				href: 'decks'
			}
		]
	},
	{
		name: 'settings',
		xmlName: 'activity_settings.xml',
		javaName: 'SettingsActivity.java',
		imagePath: 'settings.png',
		mapData: [
			{
				shape: 'circle',
				coords: [35, 65, 20],
				href: 'main'
			},
			{
				shape: 'rectangle',
				coords: [25, 110, 175, 140],
				href: 'theme'
			},
			{
				shape: 'rectangle',
				coords: [25, 210, 175, 240],
				href: 'about'
			}
		]
	},
	{
		name: 'about',
		xmlName: 'activity_about.xml',
		javaName: 'AboutActivity.java',
		imagePath: 'about.png',
		mapData: [
			{
				shape: 'circle',
				coords: [35, 65, 20],
				href: 'settings'
			}
		]
	},
	{
		name: 'theme',
		xmlName: 'activity_theme.xml',
		javaName: 'ThemeActivity.java',
		imagePath: 'theme.png',
		mapData: [
			{
				shape: 'circle',
				coords: [35, 65, 20],
				href: 'settings'
			}
		]
	}
];

changeTo = function (name) {
	var index = -1, x;

	for (x in data) {
		if (data[x].name === name) {
			index = x;
		}
	}

	if (index < 0) return;

	$('#xmlName').text(data[index].xmlName);
	$('#javaName').text(data[index].javaName);
	$('#imageArea').html('<img usemap="#map" id="img"/><map name="map"></map>');
	$('#img').attr('src', data[index].imagePath);
	for (x in data[index].mapData) {
		$('map').append('<area shape="' + data[index].mapData[x].shape +
						'" coords="' + JSON.stringify(data[index].mapData[x].coords).slice(1, -1) +
						'" href="javascript:changeTo(\'' + data[index].mapData[x].href + '\')"></area>');
	}

	if (highlightsOn) $.fn.maphilight.defaults.alwaysOn = true;
	$('img[usemap]').maphilight();
};

hotSpotButton = function () {
	highlightsOn = !highlightsOn;
	if (highlightsOn) {
		$.fn.maphilight.defaults.alwaysOn = true;
		$('img[usemap]').maphilight();
	} else {
		$.fn.maphilight.defaults.alwaysOn = false;
		$('img[usemap]').maphilight();
	}
};

// This function will execute once the page is finished loading
$(function () {
	changeTo('main');
});
