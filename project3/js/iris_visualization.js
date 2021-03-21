function load_iris_visualization1(svg_name, data){

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
        .attr("x", 550)
        .attr("y", 20)
        .text("Iris Plant Robustness");
              

    //x,y scales
    let x = d3.scaleBand()
                .range([0, width])//output
                //.domain([0, data.length-1])//change this
                .domain(data.map(function(data) { return data.class; }))//input
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
        .attr("x", -height + 350)
        .attr("y", -40)
        .text("Average Plant Robustness (CM)");
        
    let y = d3.scaleLinear()
                .range([height, 0]) //output
                .domain([0,20]); //input
    
    //Appending y-axis to chart and labeling it 
    g.append("g").call(d3.axisLeft(y));

    g.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("font-size", "15px")
        .attr("font-weight", "bold")
        .attr("x", width-400)
        .attr("y", height+35)
        .text("Iris Plant Class");

    //console.log((data.map(function(data) { return data})));
    
    //Creating the "Bars" of the bar chart
    g.selectAll("bar-graph")
         .data(data)
         .enter()
         .append("rect")
            .attr("x", function(d) { return x(d.class); })
            .attr("y", function(d) { return y(d.robustness); })
            .attr("width", x.bandwidth())
            .attr("height", function(d) { return  height- y(d.robustness); })
            .attr("class", "bar")//filling each bar with indigo color;
}



function load_iris_visualization2(svg_name, data){

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
        .attr("font-size", "25px")
        .attr("font-weight", "bold")
        .attr("x", 575)
        .attr("y", 20)
        .text("Sepal Width vs Petal Width");

    //x,y scales
    let x = d3.scaleLinear()
                .range([0, width])//output
                .domain([2*0.95, 5]);//input
    
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
        .text("Sepal Width (CM)");   
    
    let y = d3.scaleLinear()
                .range([height, 0]) //output
                .domain([0, 3]); //input
    
    
    //Appending y-axis to chart and labeling it 
    g.append("g").call(d3.axisLeft(y));

   
    g.append("text")
        .attr("text-anchor", "end")
        .attr("font-size", "15px")
        .attr("font-weight", "bold")
        .attr("transform", "rotate(-90)")
        .attr("x", -150)
        .attr("y", -50)
        .text("Petal Width (CM)");
    
    //Hue Scale
    let hue = d3.scaleOrdinal()
                       .domain(["setosa", "versicolor", "virginica" ])
                       .range([ "#50C75D", "#C750B5", "#50C7C7"])

    //Creating the legend for this visualization
    
    g.append("circle").attr("cx",680).attr("cy",130).attr("r", 7).style("fill", "#50C75D")
    g.append("circle").attr("cx",680).attr("cy",160).attr("r", 7).style("fill", "#C750B5")
    g.append("circle").attr("cx",680).attr("cy",190).attr("r", 7).style("fill", "#50C7C7")
    
    g.append("text").attr("x", 700).attr("y", 100).text("LEGEND").style("font-size", "15px").style("font-weight", "bold").attr("alignment-baseline","middle")
    g.append("text").attr("x", 700).attr("y", 130).text("iris-setosa").style("font-size", "15px").attr("alignment-baseline","middle")
    g.append("text").attr("x", 700).attr("y", 160).text("iris-versicolor").style("font-size", "15px").attr("alignment-baseline","middle")
    g.append("text").attr("x", 700).attr("y", 190).text("iris-virginica").style("font-size", "15px").attr("alignment-baseline","middle")


 
    //Creating the "dots" of the scatter plot
    g.selectAll("circles")
         .data(data)
         .enter()
         .append("circle")
            .attr("cx",function(d){ return x(d.sepal_width); })
            .attr("cy",function(d){ return y(d.petal_width); })
            .attr("r", 5)
            .style("fill", function(d) { return hue(d.class)});

    
}

function load_iris_visualization3(svg_name, data){

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
        .attr("font-size", "15px")
        .attr("font-weight", "bold")
        .attr("x", 600)
        .attr("y", 20)
        .text("Distribution of Sepal Length Amongst Iris Plants");
            
    //x,y scales
    //x axis
    let x = d3.scaleLinear()
                .range([0, width])//output
                .domain([4, 10]);//input

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
        .text("Sepal Length(CM)");

    //Creating histogram model & Bins

    var histogram = d3.histogram()
        .value(function(data) {return data.sepal_length;})
        .domain(x.domain())
        .thresholds(x.ticks(40));
    

    var bin = histogram(data);
    
    
    //y axis
    let y = d3.scaleLinear()
                .range([height, 0]) //output
                .domain([0,20]); //input
    
    //Appending y-axis to chart and labeling it 
    g.append("g").call(d3.axisLeft(y));

    g.append("text")
        .attr("text-anchor", "end")
        .attr("font-size", "15px")
        .attr("font-weight", "bold")
        .attr("transform", "rotate(-90)")
        .attr("x", -height + 300)
        .attr("y", -40)
        .text("Number of Iris-Setosa Plants");


    //appending bars in bin1 to the histogram
    
    g.selectAll("histogram")
            .data(bin)
            .enter()
            .append("rect")
               .attr("x",1)
               .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
               .attr("width", 10)
               .attr("height", function(d) { return height - y(d.length); })
               .style("fill", "#C78B50")
    
}