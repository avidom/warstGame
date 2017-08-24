(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/bottle.png", id:"bottle"},
		{src:"images/glass.png", id:"glass"},
		{src:"images/light.png", id:"light"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/warn.png", id:"warn"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,222);


(lib.glass = function() {
	this.initialize(img.glass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,207);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,77);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,67);


(lib.warn = function() {
	this.initialize(img.warn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,73);


(lib.Symbol113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhECJQgdgcAAgpIAAiGQAAgpAdgdQAcgdAoAAQAoAAAdAdQAdAdAAApIAACGQAAApgdAcQgdAdgoAAQgoAAgcgdgAgzh2QgWAVAAAfIAACGQAAAeAWAWQAWAVAdABQAegBAWgVQAWgWAAgeIAAiGQAAgfgWgVQgWgXgeAAQgdAAgWAXgAgKgeQgGgFAAgHIAAgjQAAgGAGgGQAEgEAGgBQAGABAGAEQAFAGAAAGIAAAjQAAAIgFAEQgGAFgGAAQgFAAgFgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-16.6,19.8,33.3);


(lib.Symbol112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSA6IgygyQgDgEAAgEQAAgEADgDIAygyQADgDAGAAQAEAAAEADQABAEAAAFQAAAFgBAEIgcAcIBaAAQAEAAAEAEQADADAAAEQAAAEgDAEQgEADgEAAIhaAAIAcAdQABAEAAAFQAAAFgBAEQgEADgEAAQgGAAgDgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-6.2,14.6,12.4);


(lib.Symbol111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACA6QgCgEAAgFQAAgFACgEIAdgdIhaAAQgFAAgEgDIgDgEIgBgEIABgEIADgDQAEgEAFAAIBaAAIgdgcQgCgEAAgFQAAgFACgEQAEgDAFAAQAFAAADADIAyAyQAEADAAAEQAAAEgEAEIgyAyQgDADgFAAQgFAAgEgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-6.2,14.7,12.4);


(lib.Symbol109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F3ECD8","#D9CA9F","#F3ECD8"],[0,0.482,1],-62.1,-11.1,61.7,-11.1).s().rr(-60,-33,120,66,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-33,120,66);


(lib.Symbol108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAtQgHgDgFgEQgEgFgDgHQgDgGAAgKQAAgKAEgIQADgKAHgJQAGgIAKgFQALgFALgBQAQAAAKAJQAJAJAAARQAAALgEAKQgDALgHAIQgHAIgKAFQgKAEgKABQgIAAgGgCgAgEgeQgFAFgDAJIgEAQIgBARQAAAJAEAFQADAFAGABQAEAAAEgFQAEgFADgHQAEgHACgKQABgHAAgLQAAgKgDgFQgDgGgGAAQgGAAgEAGg");
	this.shape.setTransform(38,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAJAsQgCgDgBgCIACgJIACgIIADgSIgaAAIgIApIgZAAIAPhMIgLgCIAAgGIAHgCIAJgCIAKgCIAJAAIAEACIgIAnIAaAAIAIgnIAZAAIgQBLIANAAIAAAGIgFADIgHADIgIACIgIAAQgFAAgDgCg");
	this.shape_1.setTransform(28.6,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAJAsQgCgDgBgCIACgJIACgIIADgSIgaAAIgIApIgaAAIAQhMIgKgCIAAgGIAGgCIAJgCIAKgCIAJAAIAEACIgIAnIAaAAIAIgnIAZAAIgQBLIANAAIAAAGIgFADIgHADIgIACIgIAAQgFAAgDgCg");
	this.shape_2.setTransform(18.8,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAmQgJgJAAgQQABgMAEgKQADgKAHgJQAIgIAJgFQAIgFAMAAQALAAAGAFQAIAFgBAJQABAMgMAIQgMAHgaABIgBAFIAAAFQAAAKAFAGQAGAFAFAAIAHgBIAHgCIAFgFIAGgDIADAEIgFAHIgJAHIgLAGQgGACgFAAQgQAAgJgJgAAAgdQgGAHgDAQQALgBAIgFQAIgFAAgKQAAgEgCgCQgCgDgEAAQgGABgEAGg");
	this.shape_3.setTransform(10.2,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhBAtQgCgBgBgEIAAgJIACgFIACgFIAPAFIAGgLIAGgPIAFgPIAEgRIgHgDIgEgEIAAgGIAnAAIAGAtIAAANIABAAIAHgNIAdgtIAaAAIgPBMIANAAIAAAGIgFADIgGACIgIACIgIABQgGAAgCgCQgDgDAAgDIABgJIACgKIAHgdIABgDIACgFIABgEIABgEIgBAAIgrBGIgKAAIgGg5IgBgNIgBAAIgEARIgFAQQgDAJgEAIQgDAIgFAGQgEAFgHACIgJACIgDgBg");
	this.shape_4.setTransform(-1,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRAuIgJgCIgHgDQgEgBgCgDIABgGIADgGIAEgEIAEgDIAMASIADAAIADABIAIgCIAFgEQADgDACgEQACgDAAgGQAAgFgDgEQgEgDgFgBIgMADIgBgFIABgFIAMAAQAIgDAEgFQADgHAAgEQAAgMgMAAIgCABIgDABIgHAHIgFAJIgEgDIgDgFIgBgGQgBgDACgDQACgCAJgDQAKgDALAAQANAAAIAFQAJAEAAAJQAAAJgGAGQgFAGgNAFQAFAAAEABQAEABADACIAEAFIACAGQAAAIgEAGQgDAGgGAEQgGAFgIACQgJACgJABIgKgBg");
	this.shape_5.setTransform(-11.3,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoAqQgFgEAAgIIABgLIADgQIAEgQIAEgSIgLgCIAAgGIAHgCIAJgCIAKgCIAJgBIAEADIgGAZIgGAYIgBAJIgBALQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAABAAQAEABAEgEIAHgIIAGgLIAEgIIAJgtIAZAAIgPBLIANAAIAAAGIgFADIgGACIgIADIgHAAQgHAAgCgDQgDgCAAgDIABgJQABgGACgHIgBAAIgGAJQgDAGgDAFQgFAEgGADQgHAEgHAAQgHAAgFgFg");
	this.shape_6.setTransform(-19.5,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAmQgIgJAAgQQAAgMADgKQAEgKAIgJQAHgIAJgFQAIgFAMAAQAKAAAIAFQAGAFABAJQAAAMgNAIQgMAHgZABIgBAFIAAAFQAAAKAFAGQAFAFAHAAIAHgBIAGgCIAGgFIAEgDIAFAEIgGAHIgJAHIgLAGQgGACgFAAQgQAAgJgJgAAAgdQgGAHgEAQQALgBAJgFQAIgFAAgKQAAgEgCgCQgCgDgFAAQgFABgEAGg");
	this.shape_7.setTransform(-28.1,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAJAsQgCgDgBgCIACgJIACgIIADgSIgaAAIgIApIgaAAIAQhMIgKgCIAAgGIAGgCIAJgCIAKgCIAJAAIAEACIgIAnIAaAAIAIgnIAZAAIgQBLIANAAIAAAGIgFADIgHADIgIACIgIAAQgFAAgDgCg");
	this.shape_8.setTransform(-37,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.3,-13.9,88.7,27.9);


(lib.Symbol107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAnQgIgEgGgFQgFgGgDgIQgCgHAAgJQAAgJADgHQADgIAFgFQAGgGAIgCQAIgDAIAAQALAAAIADQAIADAFAGQAFAFACAHQADAJAAAHQAAAJgDAIQgDAIgFAGQgGAEgHAEQgIADgKAAQgKAAgHgDgAgHgdQgDABgCAEIgDALIgBANIABANIACAKQADAEAEADQAEACAEAAQAEgBACgBQADgCACgDIAEgKIABgPIgBgMIgEgKQgCgEgDgCQgEgCgEAAQgEAAgDABg");
	this.shape.setTransform(28.6,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCAoIgGAAIgFAAIgDAAIgYAAIAAgGIALgEIAAg6QgGgBgFgEIAAgFIAXAAIANgBIAJAAQAQAAAIAEQAHAFABAKQgBAEgBADQgCADgDACQgCACgDACIgHACIAJABIAHACIAEAGQACAEAAAFQAAAGgCAFQgDAEgFADQgFADgGACIgOABIgHAAgAgFAfIAEAAIADAAQAHAAADgEQAFgDAAgIQAAgGgFgDQgEgEgHAAIgGAAgAgFgdIAAAbIAMgBQACgCACgEQADgEAAgFQAAgMgOAAIgCAAIgDABg");
	this.shape_1.setTransform(20.1,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAoIAAgGIAFgDIAGgBIAAg7IgMAAIgHAVIgHAAIgBgHIgBgJIgBgHIAAgHIBQAAIgBAHIgBAHIgBAJIgCAHIgGAAIgHgVIgMAAIAAA7IAGACIAFACIAAAGg");
	this.shape_2.setTransform(12,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKAnQgIgDgFgGQgFgFgCgJQgDgHAAgJQAAgTAMgKQALgLASAAQAIAAAHACIALADIgBAGIgBAHIgDAGIgCAGIgHAAIgHgTIgDgCIgDAAQgEAAgDABQgBABgCAEQgDAEgBAGIgBAPIABAKQACAGADAEQACAEAEACQAEACAGAAQAGAAAEgBIAHgDIADACQgCAEgCADIgGAEIgIAEIgKABQgIAAgIgDg");
	this.shape_3.setTransform(4.6,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNAnQgHgDgGgGQgEgGgEgHQgCgIAAgJQAAgTAKgKQALgLASAAQAHAAAIACQAHACAFAFQAFAGABAHQACAJgCAKIgvAAQAAANAHAHQAEAIAMgBIALgBQAGgBADgDIADADIgEAGIgHAEIgKAEQgFABgGABQgIAAgIgDgAgCgeQgDABgBADQgCADgBAFIgCAMIAYAAQABgMgCgHQgDgGgHAAQgCAAgCABg");
	this.shape_4.setTransform(-2.8,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAAoIAAgGQAFgDAHgBIAAgZQgEAEgGACQgFADgHAAQgLAAgGgGQgHgHAAgIIAAgVQgGgBgEgEIAAgFIAqAAIAAAFQgEADgFACIAAARQAAAHADAEQACACAGAAQACAAADgCIAHgBIAAgbIgFgCIgEgDIAAgFIAqAAIAAAFQgEAEgGABIAAA6IAFABIAFADIAAAGg");
	this.shape_5.setTransform(-11.3,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAoQgEgCgDgDQgEgCgCgFQgBgEAAgFQgBgHADgFQADgFAFgCQAGgBAKgBIAUgCQABgOgCgHQgDgHgFABQgFAAgEACIgIATIgIAAIgCgFIgCgFIgBgGIgCgFQAGgEAKgDQAKgCAIAAQAJAAAGACQAGACADADQAEADABAFIABAKIAAAPIgBAQIABAHIAAAFIALACIAAAFIgGACIgGACIgHABIgHABIgFAAQgCgEAAgDIgBgJIgBAAIgCAGIgEAFIgGAEQgEABgFABQgFgBgFgBgAgDABIgIAEQgCABgBADIgCAHQAAAGADADQADADAFAAIAFgBIADgCIACgEIACgEIAAgQIgKAAg");
	this.shape_6.setTransform(-19.5,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAUAoIgFgEQgHgIgFgJIgHgQIgGAAIAAAbIAJAEIAAAGIgrAAIAAgGIALgEIAAg6QgGgBgFgEIAAgFIApAAIAAAFIgDADIgEACIAAAaIAHgCIAIgMIAIgMIgEgCIgEgDIAAgFIAkAAIAAAFIgEADIgGACIgLAMIgLAMIAHAGIAHAKIAIAJIAHAJIAHAEIAAAGg");
	this.shape_7.setTransform(-27.8,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-12.6,69.5,25.2);


(lib.Symbol106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAnQgIgDgFgGQgFgGgDgHQgCgIAAgJQAAgTAKgKQAMgLAQAAQAIAAAIACQAHACAEAFQAGAGABAHQACAJgCAKIgvAAQAAANAGAHQAFAIAMgBIALgBQAGgBADgDIADADIgEAGIgHAEIgJAEQgGABgGABQgIAAgIgDgAgCgeQgCABgCADQgCADgBAFIgCAMIAYAAQABgMgDgHQgCgGgHAAQgCAAgCABg");
	this.shape.setTransform(33.4,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRAnQgJgEgFgFQgFgGgCgIQgDgHAAgJQAAgJADgHQADgIAGgFQAFgGAIgCQAHgDAJAAQALAAAIADQAIADAFAGQAGAFABAHQADAJAAAHQAAAJgDAIQgDAIgFAGQgFAEgIAEQgJADgJAAQgKAAgHgDgAgHgdQgDABgCAEIgEALIgBANIABANIADAKQADAEAEADQADACAFAAQADgBADgBQADgCACgDIAEgKIABgPIgBgMIgDgKQgDgEgDgCQgEgCgEAAQgEAAgDABg");
	this.shape_1.setTransform(25.2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUAoIgFgEQgHgIgFgJIgHgQIgGAAIAAAbIAJAEIAAAGIgrAAIAAgGIALgEIAAg6QgGgBgFgEIAAgFIApAAIAAAFIgDADIgEACIAAAaIAHgCIAIgMIAIgMIgEgCIgEgDIAAgFIAkAAIAAAFIgEADIgGACIgLAMIgLAMIAHAGIAHAKIAIAJIAHAJIAHAEIAAAGg");
	this.shape_2.setTransform(16.7,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAoAzIgJgXIhQAAIAAgGIALgEIAAg6QgGgBgFgDIAAgGIArAAIAAAGIgEACIgEACIAAA7IAZAAIAAg7IgFgCIgEgCIAAgGIAqAAIAAAGIgFACIgGACIAAA7IAQAAIgBAQIgCAQg");
	this.shape_3.setTransform(7.4,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNAnQgIgDgEgGQgGgGgCgHQgDgIAAgJQAAgTALgKQAKgLARAAQAJAAAHACQAHACAFAFQAEAGACAHQACAJgCAKIgvAAQAAANAGAHQAFAIAMgBIALgBQAGgBADgDIADADIgEAGIgHAEIgKAEQgFABgGABQgIAAgIgDgAgCgeQgDABgBADQgCADgBAFIgCAMIAYAAQABgMgDgHQgCgGgHAAQgCAAgCABg");
	this.shape_4.setTransform(-1.6,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AARAoIAAgGIAFgCIAFgCIgDg4IgBAAIgXBCIgIAAIgZhCIgCAAIgCA4IAJAEIAAAGIgfAAIAAgGIALgEIACg5IgGgCIgEgEIAAgFIAoAAIAOAmIACAJIAAAAIADgJIANgmIApAAIAAAFIgFADIgGACIAEA6QAFABAFADIAAAGg");
	this.shape_5.setTransform(-11.5,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAnQgIgDgEgGQgGgGgCgHQgDgIAAgJQAAgTALgKQAKgLARAAQAJAAAHACQAHACAEAFQAFAGACAHQACAJgCAKIgvAAQAAANAGAHQAFAIAMgBIALgBQAGgBADgDIADADIgEAGIgHAEIgKAEQgFABgGABQgIAAgIgDgAgCgeQgDABgBADQgCADgBAFIgCAMIAYAAQABgMgDgHQgCgGgHAAQgCAAgCABg");
	this.shape_6.setTransform(-21.4,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAJA4IAAgGIAGgDIAFgCIAAgpIgnAAIAAApIAFACIAGADIAAAGIgxAAIAAgGIAGgDIAHgCIAAhZIgHgCIgGgCIAAgHIAxAAIAAAHIgGACIgFACIAAAnIAnAAIAAgnIgFgCIgGgCIAAgHIAxAAIAAAHIgGACIgIACIAABZIAIACIAGADIAAAGg");
	this.shape_7.setTransform(-31,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-12.6,78.4,25.2);


(lib.Symbol105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1C996").s().p("AglEQIAJgNIAAohIA9glIAACCIBJAAIgoA3IghAAIAAF9IAcAVIAHgLIAHAGIgtBBgAjUDIIAlgzIBBAtQAIgRABgXQAAgjg2gwQg3gwAAguQAAgmAagfQAYgbAlgOIA9AzIglAtIg1gqQgIAMAAASQAAAVARAUQAHAIAfAaQA3AxAAA1QAAAlgcAkQgXAfgkAVgAMiDHIAHgJIAAj3IgbgUIAmg3IAyAlIAAADIAngoIArAsIgrAuIgWgWIgPAOIAADaIAeAXIAIgKIAHAGIgtBBgAJwC3IAAjzIBXhIQAgAWAMANQAVAYAAAdQAAA9hZBPIAAAvIBGAwIAHgKIAIAGIguBBgAKvA0QAmgnAAgdQAAghgmgZgAH7DOIAAj5IgdgVIgUAVIAADjIAQANIgnA3IgxglIAJgMIAAkEIgcgUIAmg3IAyAlIAAAKIAugvIBFA1IAAD4IAdAWIAHgKIAHAGIgtBBgAEEDHIAJgNIAAj1IgZgSIAng3IAxAlIAAEJIAcAVIAHgKIAIAGIgtBBgABUC3IAAjzIBXhIQAgAWAMANQAVAYAAAdQAAA+hZBOIAAAvIBGAwIAHgKIAIAGIguBBgACTA0QAmgnAAgdQAAgggmgagAlbDHIAGgJIAAj3IgbgUIAmg3IAyAlIAAADIAngoIAsAsIgsAuIgWgWIgPAOIAADaIAfAXIAHgKIAIAGIguBBgAnPDSIgpAqIhGg1IAAkDIBhhJIBPBDIAADuIAYAQIAGgHIAIAGIguBBgAn/hBIAADkIAdAWIAVgWIAAjJIgoglgAsYDGIg1A2IhNg6IALgQIAAlxIgogeIAog4IBMA6IgKAPIAAFxIAWASIAZgaIAAmLIBDAAIAAGLIAhAZIAPgOIAAmWIBBgnIAAGpIhmBog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.2,-32.4,190.5,65);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bottle();
	this.instance.setTransform(-33,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-111,66,222);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glass();
	this.instance.setTransform(-37,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-103,74,207);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.warn();
	this.instance.setTransform(-120,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-36,240,73);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.light();
	this.instance.setTransform(-40.5,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-38.5,81,77);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Symbol110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol113();

	this.a1 = new lib.Symbol112();
	this.a1.setTransform(-24.8,-0.4);

	this.a2 = new lib.Symbol111();
	this.a2.setTransform(24.8,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.a2},{t:this.a1},{t:this.mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.1,-16.7,64.3,33.3);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.b1 = new lib.Symbol60();
	this.b1.setTransform(-66,-5);

	this.timeline.addTween(cjs.Tween.get(this.b1).wait(1));

	// Layer 1
	this.b2 = new lib.Symbol59();
	this.b2.setTransform(-18,-6);

	this.timeline.addTween(cjs.Tween.get(this.b2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-116,118,222);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqTHRIAAuhIUnAAIAAOhg");
	mask.setTransform(-9.2,4.3);

	// t123
	this.t3 = new lib.Symbol108();
	this.t3.setTransform(-11.8,15.3);

	this.t2 = new lib.Symbol107();
	this.t2.setTransform(-21.4,-0.7);

	this.t1 = new lib.Symbol106();
	this.t1.setTransform(-17,-15.4);

	this.t3.mask = this.t2.mask = this.t1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

	// pl
	this.pl = new lib.Symbol109();
	this.pl.setTransform(-4,0);

	this.pl.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.pl).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-33,120,66);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.instance = new lib.Symbol105();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.2,-32.4,190.5,65);


(lib.Symbol10 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-38.5,81,77);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.l6 = new lib.Symbol10();
	this.l6.setTransform(34,-84.7,0.241,0.241);
	this.l6.compositeOperation = "lighter";

	this.l1 = new lib.Symbol10();
	this.l1.setTransform(-86,-54,0.682,0.682);
	this.l1.compositeOperation = "lighter";

	this.l2 = new lib.Symbol10();
	this.l2.setTransform(-32.6,-101.1,0.522,0.522);
	this.l2.compositeOperation = "lighter";

	this.l5 = new lib.Symbol10();
	this.l5.setTransform(65.9,-30.2,0.321,0.321);
	this.l5.compositeOperation = "lighter";

	this.l4 = new lib.Symbol10();
	this.l4.setTransform(-7,-8.5,0.602,0.602);
	this.l4.compositeOperation = "lighter";

	this.l3 = new lib.Symbol10();
	this.l3.setTransform(99,-58,0.401,0.401);
	this.l3.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l3},{t:this.l4},{t:this.l5},{t:this.l2},{t:this.l1},{t:this.l6}]}).wait(1));

	// Layer 1
	this.instance = new lib.bg();
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var r = this;
		var count = 1;
		var repeat = 200;
		var currep = 0;
		
		var tl = new TimelineMax();
		tl.to(r.blk, 0.5, {alpha:0, ease:Power0.easeNone}, 0.0)
		  .from(r.bg, 1.5, {scaleX:3, scaleY:3, ease:Expo.easeOut}, 0.0)
		  .from(r.logo, 0.8, {x:"+=200", alpha:0, ease:Expo.easeOut}, 0.5)
		  
		  .staggerFrom([r.prod.b2, r.prod.b1], 1.6, {x:"-=300", ease:Expo.easeOut}, 0.2, 0.8)
		  .staggerFrom([r.sl.pl, r.sl.t1, r.sl.t2, r.sl.t3], 0.9, {x:"+=300", ease:Expo.easeOut}, 0.1, 2.0)
		  
		  
		  .from(r.cur.a1, 0.7, {scaleX:0, scaleY:0, x:0, ease:Expo.easeOut}, 3.0)
		  .from(r.cur.a2, 0.7, {scaleX:0, scaleY:0, x:0, ease:Expo.easeOut}, 3.1)
		  .from(r.cur.mc, 1.0, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 3.2)
		  
		  
		  
		  //.staggerTo([r.q1, r.a1], 0.05, {alpha:1, ease:Power0.easeNone}, 0.0, 0.0)
		  //.staggerFrom([r.logo.l1, r.logo.l2, r.sl.t1, r.sl.t2, r.sl.t3, r.prod.b1, r.prod.b2], 1.5, {x:"+=100", alpha:0, ease:Expo.easeOut}, 0.1, 0.5)
		  
		  .call(cursor)
		  
		  
		  //.call(replay)
		  .to(this.blk, 0.9, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 10)
		  ;
		
		
		function replay() {
		  if (count == repeat){
			  tl.kill();
			  TweenMax.killAll();
			  createjs.Ticker.setFPS(1);
		  } else {
		  if (count != repeat) {
			  count++;
			  tl.play();
		  }
		  }
		}
		
		function restart() {
			var currep = 0;
			tl.play(0);
		}
		
		
		function cursor() {
			tl.pause();
			TweenMax.to(r.cur, 0.3, {delay:1.0, x:-40, ease:Sine.easeOut})
			TweenMax.to(r.cur, 0.5, {delay:1.3, x:-60, ease:Sine.easeInOut})
			TweenMax.to(r.cur, 0.5, {delay:1.8, x:-40, ease:Sine.easeInOut})
			TweenMax.to(r.cur, 0.5, {delay:2.3, x:-60, ease:Sine.easeInOut})
			TweenMax.to(r.cur, 0.5, {delay:2.8, x:-40, ease:Sine.easeInOut})
			TweenMax.to(r.cur, 1.4, {delay:3.3, x:-50, ease:Expo.easeOut})
			if (currep<2) {
				currep++;
				TweenMax.delayedCall(5, cursor);
			} else {
				tl.play();
			}
		}
		
		
		var qs = [r.bg.l1, r.bg.l2, r.bg.l3, r.bg.l4, r.bg.l5, r.bg.l6];
		
		var i = 1;
			for (i=0; i<5; i++) {
				//TweenMax.from(qs[i], 1.0, {y:"+=250", ease:Expo.easeOut, delay:6.4});
				TweenMax.to(qs[i], 3.2, {alpha:0.3, yoyo:true, repeat:-1, repeatDelay:0.0, ease:RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: true})})
			 }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// blk
	this.blk = new lib.blk();

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// warn
	this.instance = new lib.Symbol42();
	this.instance.setTransform(0,163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.cur = new lib.Symbol110();
	this.cur.setTransform(-49.9,122.9);

	this.timeline.addTween(cjs.Tween.get(this.cur).wait(1));

	// prod
	this.prod = new lib.Symbol58();
	this.prod.setTransform(94,51);

	this.timeline.addTween(cjs.Tween.get(this.prod).wait(1));

	// logo
	this.logo = new lib.logo_1();
	this.logo.setTransform(-35,-167,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// sl
	this.sl = new lib.Symbol54();
	this.sl.setTransform(-39.9,56.2);

	this.timeline.addTween(cjs.Tween.get(this.sl).wait(1));

	// bg
	this.bg = new lib.Symbol61();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// black
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-201,242,402);


// stage content:
(lib.warst_240x400 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	mask.setTransform(120,200);

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(120,200);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120,200,240,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;