// Inicializar escena 3D
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(300, 300);
document.getElementById('modelo3d').appendChild(renderer.domElement);

// Agregar luz
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

// Cargar modelo GLTF (reemplaza 'anillo.gltf' con tu archivo)
const loader = new THREE.GLTFLoader();
loader.load('anillo.gltf', function(gltf) {
    scene.add(gltf.scene);
    camera.position.z = 5;
    animate();
}, undefined, function(error) {
    console.error(error);
});

// Animación para rotar el modelo
function animate() {
    requestAnimationFrame(animate);
    if (scene.children[1]) scene.children[1].rotation.y += 0.01; // Rota el modelo
    renderer.render(scene, camera);
}
