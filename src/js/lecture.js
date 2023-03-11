import * as THREE from 'three';

export default function init() {
    const canvas = document.querySelector('#three-canvas')
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();


// const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// );
// camera.position.x = 1;
// camera.position.y = 2;
// camera.position.z = 5;
    const camera = new THREE.OrthographicCamera(
        -(window.innerWidth / window.innerHeight), // left
        window.innerWidth / window.innerHeight, // right
        1, // top
        -1, // bottom
        0.1, // near
        1000 // far
    )
    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 5;
    camera.lookAt(0,0,0)
    camera.zoom = 0.5
    camera.updateProjectionMatrix()
    scene.add(camera)

// Mesh
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
        color: 'red'
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)


    renderer.render(scene, camera)

}

