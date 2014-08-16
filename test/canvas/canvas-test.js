test("common", function(){
	var DPChart = Venus.CanvasChart;
	ok(DPChart.isObject({}));
	ok(!DPChart.isObject([]));
	ok(!DPChart.isObject(function(){}));
	ok(DPChart.isArray([]));
	ok(!DPChart.isArray({}));
	ok(!DPChart.isArray(function(){}));

	ok(DPChart.isNumber(1));
	ok(!DPChart.isNumber("1"));
	ok(DPChart.isNumber(1.1));
	ok(DPChart.isNumber(0));
	ok(!DPChart.isNumber(function(){}));

});


test("Series", function(){
	var series = new Venus.CanvasChart.Series([{data:12,label:"chrome"},{data:12,label:"ff"},{data:150,label:"ie"}]);
	deepEqual(series.getRange(),{min:12,max:150});
	deepEqual(series.getSeries(), [{
	    "color": "rgba(47,105,191, 1)",
	    "data": 12,
	    "name": "chrome"
	}, {
	    "color": "rgba(162,191,47, 1)",
	    "data": 12,
	    "name": "ff"
	}, {
	    "color": "rgba(191,90,47, 1)",
	    "data": 150,
	    "name": "ie"
	}]);
	deepEqual(series.getLabels(["chrome","ff", "ie"]));
});