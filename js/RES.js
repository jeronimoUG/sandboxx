
// Created by Jeronimo UG. //

// Test Voxel Engine //

// Globals //

var tracer;
var scr;
var cam;

// Main function and loop //

function ready(e) {
	
	// Set globals //
	
	tracer = document.getElementById('tracer');
	scr = document.getElementById('screen');
	scr = scr.getContext("2d");
	
	// Init //

	trace('App start.');
	
	pixel(160, 120);
	
	cam = new Camera();
	
	cube = new Cube(16);
	
	//trace(cube.v[0][0][0].x + ', ' + cube.v[0][0][0].b);
	
}

// Classes //

// Camera class //

function Camera() {
	
	// Camera propierties //
	
	this.p = new Vector(0, 0, -24);
	this.r = new Vector(0, 0, -1);
	
	trace('Camera initialized.');
}

// Shape classes //

function Cube(size) {
	
	// Position propierties //
	
	this.p = new Vector(0, 0, 0);
	this.r = new Vector(0, 0, 0);
	
	// Generate voxels //
	
	this.v = [];
	
	for (i = 0; i < size; i++) {
		this.v.push([]);
	    for (j = 0; j < size; j++) {
	    	this.v[i].push([]);
		    for (k = 0; k < size; k++) {
		    	var fill = Math.round(Math.random());
		    	var mid = size/2;
			    this.v[i][j].push({x: i-mid, y: j-mid, z: k-mid, b: fill});
			}
		}
	}
	
	trace('Cube created.');
	
}

// Logic classes //

function Vector(x, y, z) {
	this.x = x;
	this.y = y;
	this.x = x;
}

// Utilities //

function trace(info) {
	tracer.innerText += info + '\n';
}

function pixel(x,y) {
	var id = scr.createImageData(1,1); // only do this once per page
	var d  = id.data;                        // only do this once per page
	d[0]   = 255;
	d[1]   = 0;
	d[2]   = 0;
	d[3]   = 255;
	scr.putImageData( id, x, y );
	
	//trace('Pixel.');
	
}

function clr() {
	for (i = 0; i < (320); i++) {
		for (j = 0; j < (240); j++) {
			pixel(i,j);
		}
	}
	
	trace('Cleared.');
	
}
