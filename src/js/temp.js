import * as THREE from "three";


/**
 * three.js로 무엇이든 표시하려면 scene, camera, render 세가지가 필요
 * 3d모델의 구성요소 : bone, mesh, material ,weight
 */

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xf0f0f0 );

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/**
 * BoxGeometry 정육면체를 만들 때 쓰이는 객체
 * @type {BoxGeometry}
 * geometry는 점, 면을 의미
 * MeshBasicMateiral
 */
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material)
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();


/**
 * 그리드 바닥 만들기
 */

