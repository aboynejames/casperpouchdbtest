var utils = require('utils');
	
//var baseUrl = "http://localhost/secondvar/sites/playground/casperjs/change/index2.html";
var baseUrl = casper.cli.get('baseUrl');

casper.start(baseUrl , function() {

	this.mouseEvent('click', 'select');
	
});

casper.then(function() {
	
	this.test.comment('the onchange post div is there');
this.echo(this.fetchText('#food'));
	var selected = this.fetchText('#food');
	//casper.test.assertExists("#carmel", 'the element exists');
	casper.test.assertEquals(selected, 'Caramel ');
});

casper.then(function() {
	this.test.comment('the section should be visable');
	this.test.assertExist(".holder", 'holder class exists'); 
//this.echo(this.getHTML());		
	casper.test.assertVisible('.holder', 'the section is visable');
		
});

casper.then(function() {

	this.mouseEvent('click', '#pleaseclick');
	
});

casper.then(function() {
	this.test.comment('the section should NOT be visable');
//this.echo(this.getHTML());	
	casper.test.assertNotVisible('.holder', 'the section is  not visable');
	
});

casper.run(function() {
	//	this.debugHTML();
	this.exit();

	
});
