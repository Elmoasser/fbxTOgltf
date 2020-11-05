const convert = require('fbx2gltf');
convert('c.fbx', 'model.glb', ['--khr-materials-unlit']).then(
  destPath => {
      console.log("YEAH! the file got converted into glb at: ",destPath)
    // yay, do what we will with our shiny new GLB file!
  },
  error => {
    // ack, conversion failed: inspect 'error' for details
  }
);