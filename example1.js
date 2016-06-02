var mongojs = require('mongojs');
var db = mongojs('mapReduceDB', ['demo_inge', 'example1_results']);

var mapper = function () {
	emit(this.gender, 1);
};

var reducer = function(gender, count){
	return Array.sum(count);
};

db.demo_inge.mapReduce(
	mapper, 
	reducer,
	{ out : "example1_results" }
);

db.example1_results.find(function (err, docs) {
	if(err) console.log(err);
	console.log(docs);
});