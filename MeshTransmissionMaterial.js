// MeshTransmissionMaterial.js
// Standalone Three.js material inspired by pmndrs/drei MeshTransmissionMaterial
// Usage: import { MeshTransmissionMaterial } from './MeshTransmissionMaterial.js';
// Author: Ech0 Studio (adapted for vanilla Three.js)

import * as THREE from "three";

export class MeshTransmissionMaterial extends THREE.MeshPhysicalMaterial {
  constructor(params = {}) {
    super({
      ...params,
      transmission: params.transmission ?? 1.0,
      thickness: params.thickness ?? 1.0,
      roughness: params.roughness ?? 0.1,
      metalness: params.metalness ?? 0.0,
      ior: params.ior ?? 1.5,
      clearcoat: params.clearcoat ?? 1.0,
      clearcoatRoughness: params.clearcoatRoughness ?? 0.1,
      envMapIntensity: params.envMapIntensity ?? 1.0,
      transparent: true,
      opacity: params.opacity ?? 1.0,
    });
    // Optionally, you can add custom uniforms or shader modifications here
  }
}

// Example usage:
// import { MeshTransmissionMaterial } from './MeshTransmissionMaterial.js';
// const material = new MeshTransmissionMaterial({ color: 0xffffff, thickness: 2 });
// const mesh = new THREE.Mesh(geometry, material);
