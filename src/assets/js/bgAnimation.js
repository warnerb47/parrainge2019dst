var w = c.width = window.innerWidth,
  h = c.height = window.innerHeight,
  ctx = c.getContext( '2d' ),

  squares = [],
  color = 'hsl(hue, 80%, bright%)',
  frame = 0;

function anim() {

  window.requestAnimationFrame( anim );

  ctx.fillStyle = 'rgba(0, 0, 0, .1 )';
  ctx.fillRect( 0, 0, w, h );

  ++frame;

  if( squares.length < 80 && Math.random() < .3 ) squares.push( new Square );

  ctx.translate( w/2, h/2 );
  ctx.rotate( frame * .004 );
  squares.map( function( square ) { square.update(); } );
  ctx.rotate( -frame * .004 );
  ctx.translate( -w/2, -h/2 );
}

function Square() {

  this.reset();
}
Square.prototype.reset = function() {

  this.color = color.replace( 'hue', frame % 360 );
  this.bright = Math.random() * Math.PI;
  this.shineSpeed = Math.random() / 10;

  this.rot = Math.random() * Math.PI;
  this.angularSpeed = Math.random() * .04 - .02;

  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;

  var radiant = Math.random() * Math.PI * 2;
  this.ax = Math.cos( radiant ) * ( Math.random() * .01 + .015 );
  this.ay = Math.sin( radiant ) * ( Math.random() * .01 + .015 );
}
Square.prototype.update = function() {

  this.bright += this.shineSpeed;

  this.rot += this.angularSpeed;
  this.rot %= Math.PI * 2;

  this.x += this.vx += this.ax;
  this.y += this.vy += this.ay;

  if( this.x < -w || this.x > w || this.y < -h || this.y > h ) this.reset();

  var speed = this.vx + this.vy;

  ctx.fillStyle = this.color.replace( 'bright', ( 50 + Math.sin( this.bright ) * 15 ) |0 );
  ctx.translate( this.x, this.y );
  ctx.rotate( this.rot );
  ctx.fillRect( -speed / 2 * 20, -speed / 2 * 20, speed * 20, speed * 20 );
  ctx.rotate( -this.rot );
  ctx.translate( -this.x, -this.y );
}
anim();

window.addEventListener( 'resize', function( ) {

  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
} )

for( var i = 0 ; i < 100; ++i ) {
  ++frame;

  if( squares.length < 80 && Math.random() < .3 ) squares.push( new Square );

  squares.map( function( square ) { square.update(); } );
}
