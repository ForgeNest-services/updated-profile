import { Object3DNode } from '@react-three/fiber';
import * as THREE from 'three';

declare module '@react-three/fiber' {
  interface ThreeElements {
    group: Object3DNode<THREE.Group, typeof THREE.Group>;
    mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
    ambientLight: Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>;
    directionalLight: Object3DNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>;
    spotLight: Object3DNode<THREE.SpotLight, typeof THREE.SpotLight>;
    pointLight: Object3DNode<THREE.PointLight, typeof THREE.PointLight>;
    primitive: Object3DNode<THREE.Object3D, typeof THREE.Object3D> & { object: THREE.Object3D };
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      ambientLight: any;
      directionalLight: any;
      spotLight: any;
      pointLight: any;
      primitive: any;
    }
  }
}

export {};