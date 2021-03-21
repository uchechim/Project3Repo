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
    /*
    let x = d3.scaleLinear()
                .range([0, width]) //output
                .domain([avg_satv,avg]); //input*/
    

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
        .attr("class", "y label")
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
            //console.log(avg_satm);
            //.attr("x", function(d) {return x(data.satv_data);})
            .attr("y", height-260)
            .attr("width", 100)
            .attr("height", 260)
            .attr("class", "bar")//filling SATM bar with indigo color;*/
        
    g.selectAll("bar-graph")
            .data(data)
            .enter()
            .append("rect")
               .attr("x", 555)
               //console.log(avg_satm);
               //.attr("x", function(d) {return x(data.satv_data);})
               .attr("y", height-250)
               .attr("width", 100)
               .attr("height", 250)
               .style("fill", "#50C75D")//filling SATV bar with green color;*/
           
}

function load_calvin_visualization2(svg_name, data){

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
    
    
    //Creating the "dots" of the scatter plot
    g.selectAll("circles")
         .data(data)
         .enter()
         .append("circle")
            .attr("cx",function(d,i){ return x(i); })
            .attr("cy",function(d){ return y(d.gpa_data); })
            .attr("r", 2)
            .style("fill", "#50C7C7");

    
}

function load_calvin_visualization3(svg_name, data){

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
}