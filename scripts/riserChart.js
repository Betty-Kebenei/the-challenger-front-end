function drawLineGraph( riserData ) {
    var riserChart = document.getElementById("riserChart");
    riserChart.width = 700;
    riserChart.height = 500;

    var ctx = riserChart.getContext("2d");

    // padding: 25px top and rigth; 75 px left and bottom
    // hence the following measurements
    var GRAPH_TOP = 25;  
    var GRAPH_BOTTOM = 425;  
    var GRAPH_LEFT = 75;  
    var GRAPH_RIGHT = 675; 

    var GRAPH_HEIGHT = 400;   
    var GRAPH_WIDTH = 600;

    ctx.clearRect( 0, 0, 500, 400 );     
    ctx.font = "16px Arial"; 

    // draw X and Y axis 
    ctx.beginPath();  
    ctx.moveTo( GRAPH_RIGHT, GRAPH_BOTTOM );  
    ctx.lineTo( GRAPH_LEFT, GRAPH_BOTTOM );  
    ctx.lineTo( GRAPH_LEFT, GRAPH_TOP );  
    ctx.stroke(); 
    
       
    //label y axis
    ctx.fillText( "Time", GRAPH_LEFT - 67, GRAPH_HEIGHT / 2); 
    //label x axis     
    ctx.fillText( "Day: (28 days per Form)", GRAPH_RIGHT / 3 + 25, GRAPH_BOTTOM + 50); 

    // draw horizontal reference lines  
    ctx.strokeStyle = "#BBB"; 
    var riserTimeFrame = [
        '7:00',
        '6:45',
        '6:30',
        '6:15',
        '6:00',
        '5:45',
        '5:30',
        '5:15',
        '5:00',
        '4:45',
        '4:30',
        '4:15',
        '4:00',  
    ]
    var timeReferences = riserTimeFrame.length;
    var heightInterval = GRAPH_HEIGHT/timeReferences;
    for( var i = 0; i < timeReferences; i++ ) {
        ctx.beginPath();   
        ctx.moveTo( GRAPH_LEFT, GRAPH_BOTTOM - heightInterval * i  );  
        ctx.lineTo( GRAPH_RIGHT, GRAPH_BOTTOM - heightInterval * i ); 
        ctx.fillText( riserTimeFrame[i], GRAPH_LEFT - 35, GRAPH_BOTTOM - heightInterval * i); 
        ctx.stroke();     
    }

    // draw vertical reference lines 
    var widthInterval = GRAPH_WIDTH/28;
    for( var i = 0; i < 28; i++ ) {
        ctx.beginPath();   
        ctx.moveTo( GRAPH_LEFT + widthInterval * i, GRAPH_BOTTOM  );  
        ctx.lineTo( GRAPH_LEFT + widthInterval * i, GRAPH_TOP ); 
        ctx.fillText( i + 1, GRAPH_LEFT + widthInterval * i, GRAPH_BOTTOM + 15); 
        ctx.stroke();   
    }
    
    //Draw the line graph

}

var testValues = [
    { day: 1, time: "7:00"},
    { day: 2, time: "6:00"},
    { day: 3, time: "6:30"},
    { day: 4, time: "7:00"},
    { day: 5, time: "5:00"},
    { day: 6, time: "5:30"},
    { day: 7, time: "7:00"},
]
drawLineGraph( testValues );


