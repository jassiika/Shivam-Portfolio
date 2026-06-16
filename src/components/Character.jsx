import { useRef, useEffect } from "react";
import { useFBX, useAnimations } from "@react-three/drei";

export default function Character() {
  const group = useRef();

  const model = useFBX("/models/Remy.fbx");
  const greeting = useFBX("/models/Greeting.fbx");
  const thinking = useFBX("/models/Thinking.fbx");

  const currentAnimation = thinking;// try greeting or thinking

  const { actions } = useAnimations(
    currentAnimation.animations,
    group
  );

  useEffect(() => {
    const action = actions?.[Object.keys(actions)[0]];

    if (action) {
      action.reset();
      action.fadeIn(0.5);
      action.play();
    }

    return () => action?.fadeOut(0.5);
  }, [actions]);

  return (
    <group ref={group}>
      <primitive
        object={model}
        scale={0.01}
        position={[0, -1.5, 0]}
      />
    </group>
  );
}