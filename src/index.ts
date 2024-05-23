import * as THREE from 'three';

const RotationSpeed = 0.5; // Speed factor for rotation

/**
 * Sets up the Three.js scene with a renderer, camera, cube, lights, and renders it on a canvas.
 * @returns An object containing the renderer, scene, camera, and cube.
 */
function setupScene() {
	// Get the width and height of the window
	const width = window.innerWidth;
	const height = window.innerHeight;

	// Create a WebGL renderer and set its size to match the window
	const renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById('app') as HTMLCanvasElement
	});
	renderer.setSize(width, height);

	// Create a box geometry with dimensions of 1x1x1
	const geometry = new THREE.BoxGeometry(1, 1, 1);

	// Create a material for the cube with a green color
	const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

	// Create a mesh using the geometry and material
	const cube = new THREE.Mesh(geometry, material);

	// Create a scene and set its background color to sky blue
	const scene = new THREE.Scene();
	scene.background = new THREE.Color('skyblue');

	// Add the cube to the scene
	scene.add(cube);

	// Create a perspective camera with a field of view of 60 degrees, aspect ratio based on window size, and near/far clipping planes
	const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
	// Set the camera position to (0, 0, 5) and make it look at the origin
	camera.position.z = 2.5;
	camera.lookAt(0, 0, 0);
	// Update the camera aspect ratio when the window is resized
	window.addEventListener('resize', () => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	});

	// Create a point light and position it at (0, 0, 2)
	const light = new THREE.PointLight(0xffffff, 1, 1000);
	light.position.set(0, 0, 2);

	// Add the point light to the scene
	scene.add(light);

	// Create an ambient light with a soft white color
	const ambientLight = new THREE.AmbientLight(0x404040);
	
	// Add the ambient light to the scene
	scene.add(ambientLight);

	// Render the scene with the camera
	renderer.render(scene, camera);

	// Return the renderer, scene, camera, and cube as an object
	return { renderer, scene, camera, cube };
}

// Setup the scene
const { renderer, scene, camera, cube } = setupScene();

/**
 * Updates the scene by rotating the cube.
 * @param cube - The cube mesh to be rotated.
 */
function updateScene(cube: THREE.Mesh) {
	const time = performance.now(); // Get the current time in milliseconds
	const rotation = RotationSpeed * time / 1000; // Calculate the rotation based on time and speed

	cube.rotation.x = rotation; // Rotate the cube around the x-axis
	cube.rotation.y = rotation; // Rotate the cube around the y-axis
}

/**
 * Animation loop that updates and renders the scene.
 */
function tick() {
	// Update the scene by rotating the cube
	updateScene(cube);
	
	// Render the scene with the camera
	renderer.render(scene, camera);
	
	// Request the next animation frame to continue the animation loop
	requestAnimationFrame(tick);
}

// Start updating the scene for the first time
tick();