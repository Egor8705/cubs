'use strict';
function Vertical(X, Y, Z) {
    var geometry = new THREE.SphereGeometry(0.499, 100, 100);
    var material = new THREE.MeshBasicMaterial({color: Math.random() * 0xffffff});
    this.mesh = new THREE.Mesh(geometry, material);

    this.mesh.position.x = X;
    this.mesh.position.y = Y;
    this.mesh.position.z = Z;
}


function Line(X1, Y1, Z1, X2, Y2, Z2 ) {
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(X1, Y1, Z1));
    geometry.vertices.push(new THREE.Vector3(X2, Y2, Z2));
    var material = new THREE.LineBasicMaterial({color: Math.random() * 0xffffff});
    this.mesh = new THREE.Line(geometry, material);
}


function Cube(cubeX, cubeY, cubeZ) {
    this.mesh = new THREE.Object3D();

    this.lineCollection = [
        (new Line(0,0,0,0,0,5)).mesh ,
        (new Line(0,0,5,5,0,5)).mesh ,
        (new Line(5,0,0,0,0,0)).mesh ,
        (new Line(5,0,0,5,0,5)).mesh ,
        (new Line(5,0,5,5,5,5)).mesh ,
        (new Line(5,5,5,5,5,0)).mesh ,
        (new Line(5,5,0,0,5,0)).mesh ,
        (new Line(0,5,0,0,5,5)).mesh ,
        (new Line(0,5,5,5,5,5)).mesh ,
        (new Line(0,5,5,0,0,5)).mesh ,
        (new Line(0,5,0,0,0,0)).mesh ,
        (new Line(5,5,0,5,0,0)).mesh
    ];

    this.lineCollection.forEach( function ( line ) {

        [0,1].forEach( function (point) {
            line.geometry.vertices[point].x += cubeX;
            line.geometry.vertices[point].y += cubeY;
            line.geometry.vertices[point].z += cubeZ;
        } );

        this.mesh.add( line );

    }, this );

    this.objCollection = [
        ( new Vertical(0,0,0)).mesh,
        ( new Vertical(0,0,5)).mesh,
        ( new Vertical(5,0,0)).mesh,
        ( new Vertical(5,0,5)).mesh,
        ( new Vertical(5,5,5)).mesh,
        ( new Vertical(0,5,5)).mesh,
        ( new Vertical(0,5,0)).mesh,
        ( new Vertical(5,5,0)).mesh
    ];

    this.objCollection.forEach( function (obj) {
        obj.position.x += cubeX;
        obj.position.y += cubeY;
        obj.position.z += cubeZ;
        this.mesh.add( obj);
    }, this );

}