d3.csv("colours.csv", function(error, data) {
	if (error) throw error;

	console.table(data)

	var box = d3.select("#container")
		.selectAll(".colourbox")
		.data(data)
		.enter()
		.append("div")
		.classed("colourbox", true)

	box
		.append("div")
		.classed("colourblock", true)
		.style("background-color", function(d) {return d.colour})

	box
		.append("text")
		.html(function(d) {return "<h2>" + d.colour + "</h2>" + d.comment})

})