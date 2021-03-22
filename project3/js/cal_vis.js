
function load_calvin_visualization1(svg_name, data, avg_satm, avg_satv){

    //console.log("HEREREER");
    let chart = d3.select(svg_name);
    let margin2 = 50;
    let width = $(svg_name).width() - margin2;
    let height = $(svg_name).height()- margin2;

    //grouping
    //let g = chart.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    let g = chart.append("g")
                .attr("transform", "translate(" + 55 + "," + 3 + ")");

    //Adding Label to chart (title)
    g.append("text")
        .attr("text-anchor", "end")
        .attr("font-size", "25px")
        .attr("font-weight", "bold")
        .attr("x", 650)
        .attr("y", 20)
        .text("SATM vs SATV Average Scores");
            
    //x,y scales
    let x = d3.scaleBand()
                .range([0, width])//output
                //.domain(function(d))
                .domain(["SATM", "SATV"])//input
                .padding(0.35);
    

    //Appending x-axis to chart and labeling it 
    g.append("g")
        .attr("transform", "translate(0," + height+")")
        .call(d3.axisBottom(x));
        
    g.append("text")
        .attr("text-anchor", "end")
        .attr("font-size", "15px")
        .attr("font-weight", "bold")
        .attr("transform", "rotate(-90)")
        .attr("x", -height + 250)
        .attr("y", -40)
        .text("Average Score");
        
    let y = d3.scaleLinear()
                .range([height, 0]) //output
                .domain([300,850]); //input
    
    //Appending y-axis to chart and labeling it 
    g.append("g").call(d3.axisLeft(y));

    g.append("text")
        .attr("class", "ylabel")
        .attr("text-anchor", "end")
        .attr("font-size", "15px")
        .attr("font-weight", "bold")
        .attr("x", width-400)
        .attr("y", height+35)
        .text("Test Category");

    //console.log((data.map(function(data) { return data})));
    
    //Creating the "Bars" of the bar chart
    g.selectAll("bar-graph")
         .data(data)
         .enter()
         .append("rect")
            .attr("x", 190)
            .attr("class", function (d) { return "satmbar"} )
            .attr("y", height-260)
            .attr("width", 100)
            .attr("height", 260)
            .attr("fill", "#000000")//filling SATM bar with indigo color;*/
            .on("mouseover", mouseover_event)
            .on("mouseout",mouseout_event)
        
    g.selectAll("bar-graph")
            .data(data)
            .enter()
            .append("rect")
               .attr("x", 555)
               .attr("class", function (d) { return "satvbar"} )
               .attr("y", height-250)
               .attr("width", 100)
               .attr("height", 250)
               .style("fill", "#000000")//filling SATV bar with some color
               .on("mouseover", mouseover_event)
               .on("mouseout",mouseout_event)

    //Interactivity (FUNCTIONS)

    g.append("text")
        .attr("text-anchor", "end")
        .attr("font-size", "15px")
        .attr("font-weight", "bold")
        .style("fill", "#000000")
        .attr("x", width-590)
        .attr("y", height-150)
        .text(Math.round(avg_satm));

    g.append("text")
        .attr("text-anchor", "end")
        .attr("font-size", "15px")
        .attr("font-weight", "bold")
        .style("fill", "#000000")
        .attr("x", width-225)
        .attr("y", height-130)
        .text(Math.round(avg_satv));

    function mouseover_event(d, i){
        d3.select(this)
            .style("fill", "orange");
	}

	function mouseout_event(d, i){
		d3.select(this)
            .transition()
            .duration(250)
            .style("fill", "#000000");
	}
           
}

function load_calvin_visualization2(svg_name, data, tip){
    
    let chart = d3.select(svg_name);
    let margin2 = 50;
    let width = $(svg_name).width() - margin2;
    let height = $(svg_name).height()- margin2;

    //grouping all elements within "Chart/SVG"
    let g = chart.append("g")
                .attr("transform", "translate(" + 70 + "," + 5 + ")");

    //Adding Label to chart (title)
    g.append("text")
        .attr("text-anchor", "end")
        .attr("font-size", "15px")
        .attr("font-weight", "bold")
        .attr("x", 200)
        .attr("y", 10)
        .text("Student GPA Distribution");

    //x,y scales
    let x = d3.scaleLinear()
                .range([0, width])//output
                .domain([0, 280]);//input
    
    //Appending x-axis to chart and labeling it 
    g.append("g")
        .attr("transform", "translate(0," + height+")")
        .call(d3.axisBottom(x));
    
    g.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("font-size", "14px")
        .attr("font-weight", "bold")
        .attr("x", width-400)
        .attr("y", height+35)
        .text("Student Count (#)");   
    
    let y = d3.scaleLinear()
                .range([height, 0]) //output
                .domain([0, 4]); //input
    
    
    //Appending y-axis to chart and labeling it 
    g.append("g").call(d3.axisLeft(y));

   
    g.append("text")
        .attr("text-anchor", "end")
        .attr("font-size", "15px")
        .attr("font-weight", "bold")
        .attr("transform", "rotate(-90)")
        .attr("x", -225)
        .attr("y", -50)
        .text("GPA");
    
    //IMPLEMENTATION OF TOOL TIP FUNCTIONALITY
    //Creating tooltip
    var tooltip = tip;
        tooltip.attr("class", "d3-tip")
               .offset(function() {
                   if(curr_position[0] > 650) {
                       return [-10,50] 
                    } 
                    else { 
                        return [10,10]
                    }
                }).html(
                    "<div id='toolTipDiv'></div>"
                );

    //Calling our tooltip to be used on the Visualization
    g.call(tooltip);


    //Creating the "dots" of the scatter plot
    g.selectAll("circles")
         .data(data)
         .enter()
         .append("circle")
            .attr("cx",function(d,i){ return x(i); })
            .attr("cy",function(d){ return y(d.gpa_data); })
            .attr("r", 4)
            .style("fill", "#50C7C7")
            .style("hover", "stroke: #000000")
            //Defining mouseover function for tooltip
            .on("mouseover", function(d){
                d3.select(this).style("fill", "red");
                curr_position = d3.mouse(this); 
                curr_state = d.gpa_data;

                //Show the tooltip
                tooltip.show();

                //Designing our tooltip via 'toolTipDiv'
                var tool_tip_design = d3.select("#toolTipDiv")
                                        .append("svg")
                                            .attr("width", 500)
                                            .attr("height", 55);

                tool_tip_design.append("text")
                                .text("GPA: " +d.gpa_data)
                                .style("fill", "red")
                                .style("font-weight", "bold")
                                .attr("x", 10)
                                .attr("y", 10)
            })
            //Defining mouseout function for tooltip
            .on("mouseout", function(d) {

                d3.select(this).style("fill", "#50C7C7");
                tooltip.hide();
            })
    



}

function load_calvin_visualization3(svg_name, data,tip_two){

    //console.log("HEREREER");
    let chart = d3.select(svg_name);
    let margin2 = 50;
    let width = $(svg_name).width() - margin2;
    let height = $(svg_name).height()- margin2;

    //grouping
    //let g = chart.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    let g = chart.append("g")
                .attr("transform", "translate(" + 55 + "," + 3 + ")");

    //Adding Label to chart (title)
    g.append("text")
        .attr("text-anchor", "end")
        .attr("font-size", "20px")
        .attr("font-weight", "bold")
        .attr("x", 250)
        .attr("y", 20)
        .text("ACT Score Distribution");
            
    //x,y scales
    //x axis
    let x = d3.scaleLinear()
                .range([0, width])//output
                .domain([10, 37]);//input
                


    //Appending x-axis to chart and labeling it 
    g.append("g")
        .attr("transform", "translate(0," + height+")")
        .call(d3.axisBottom(x));
        
    g.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("font-size", "15px")
        .attr("font-weight", "bold")
        .attr("x", width-400)
        .attr("y", height+35)
        .text("Score on ACT");

    //Creating histogram model & Bins

    var histogram = d3.histogram()
        .value(function(data) {return data.act_data;})
        .domain(x.domain())
        .thresholds(x.ticks(40));
    
    var bin = histogram(data);
        
    //y axis
    let y = d3.scaleLinear()
                .range([height, 0]) //output
                .domain([0,d3.max(bin, function(d){return d.length;})]); //input
    
    //Appending y-axis to chart and labeling it 
    g.append("g").call(d3.axisLeft(y));

    g.append("text")
        .attr("text-anchor", "end")
        .attr("font-size", "15px")
        .attr("font-weight", "bold")
        .attr("transform", "rotate(-90)")
        .attr("x", -height + 250)
        .attr("y", -40)
        .text("Number of People");


    //Creating tooltip
    var tooltipTwo = tip_two;
        tooltipTwo.attr("class", "d3-tip2")
               .offset(function() {
                   if(curr_position[0] > 650) {
                       return [-10,50] 
                    } 
                    else { 
                        return [10,10]
                    }
                }).html(
                    "<div id='toolTipDivision'></div>"
                );
    //Calling our tooltip to be used on the Visualization
    g.call(tooltipTwo);

    //appending bars to the histogram
    g.selectAll("histogram")
            .data(bin)
            .enter()
            .append("rect")
               .attr("x",1)
               .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
               .attr("width", 10)
               .attr("height", function(d) { return height - y(d.length); })
               .style("fill", "#69b3a2")
               //Defining mouseover function for tooltip
               .on("mouseover", function(d,i){
                    d3.select(this).style("fill", "red");
                    curr_position = d3.mouse(this); 
                    curr_state = d.act_data;
                    num_people = d.length;
                    //Show the tooltip
                    tooltipTwo.show();

                    //Designing our tooltip via 'toolTipDiv'
                    var tool_tip_design_two = d3.select("#toolTipDivision")
                                                .append("svg")
                                                    .attr("width", 500)
                                                    .attr("height", 55);

                    tool_tip_design_two.append("text")
                                        .text("# of people: " + num_people)
                                        .style("fill", "red")
                                        .style("font-weight", "bold")
                                        .attr("x", 10)
                                        .attr("y", 10)
            })
            //Defining mouseout function for tooltip
            .on("mouseout", function(d) {

                d3.select(this).style("fill", "#69b3a2");
                tooltipTwo.hide();
            })
}