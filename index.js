createShapes(20);

function createShapes(n) {
	for (var i = 0; i < n; i++) {
    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var c2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");    
		var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
		helix.appendChild(g);
		g.appendChild(c1);
		g.appendChild(c2);
		g.appendChild(l);
		gsap.set(g, {y:i/n*400})
 		gsap.set(c1, {attr:{cx:100, cy:9, r:5}});
 		gsap.set(c2, {attr:{cx:300, cy:9, r:5}});
 		gsap.set(l, {attr:{x1:120, y1:10, x2:280, y2:7, stroke:'#fff', strokeWidth:'10', 'stroke-dasharray':'70 12'}});
    gsap.timeline({defaults:{transformOrigin:'50%'}, repeat:-1})
      .to(c1, {duration:0.5, scale:0.5, yoyo:true, repeat:1}, 0)
      .to(c1, {duration:1.0, x:200, ease:'power1.inOut'}, 0)
      .to(c2, {duration:0.5, scale:1.5, yoyo:true, repeat:1}, 0)
      .to(c2, {duration:1.0, x:-200, ease:'power1.inOut'}, 0)
      .to(l,  {duration:0.5, attr:{x1:200, x2:200, 'stroke-dasharray':'9 2'}, ease:'power1.in', yoyo:true, repeat:1}, 0)
      .play(i/n)
      .timeScale(.75)
	}
}

gsap.set('svg', {rotate:45});
