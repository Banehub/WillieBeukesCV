import { useGLTF } from "@react-three/drei";

export function Sentinel(props) {
  const { scene } = useGLTF("/models/Sentinel_Blaze_vill_1012182737_texture.glb");

  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/Sentinel_Blaze_vill_1012182737_texture.glb");

export default Sentinel;

