import React, { Component } from "react";
import STLViewer from 'stl-viewer'

const ModelViewer = () => {
  <STLViewer
	url='"http://127.0.0.1:5000/stl"'
	width={400}
	height={400}
	modelColor='#B92C2C'
	backgroundColor='#EAEAEA'
	rotate={true}
	orbitControls={true}
/>
}
export default ModelViewer;
