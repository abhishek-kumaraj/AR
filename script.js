// Get the XRSession object.
const session = await navigator.xr.requestSession('immersive-ar');

// Create a XRReferenceSpace object for the real world.
const referenceSpace = await session.requestReferenceSpace('local');

// Create a XRFrame object.
const frame = await session.requestAnimationFrame(referenceSpace);

// Get the pose of the camera.
const cameraPose = frame.getPose(referenceSpace, 'viewer');

// Update the position and rotation of the camera in the scene.
const camera = document.querySelector('#camera');
camera.setAttribute('position', cameraPose.position);
camera.setAttribute('rotation', cameraPose.orientation);

// Start the camera and display the video feed.
const video = document.getElementById('video');
navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    video.srcObject = stream;
  })
  .catch(function(error) {
    console.log(error);
  });
