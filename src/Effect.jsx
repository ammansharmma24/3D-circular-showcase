import React from "react";
import {
  EffectComposer,
  RenderPass,
  UnrealBloomPass,
} from "three/examples/jsm/Addons.js";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
const Effect = () => {
  const composer = useRef();
  const renderPass = useRef();
  const bloomPass = useRef();
  useFrame(() => {
    composer.current.render();
  });
  return <EffectComposer ref>

  </EffectComposer>;
};

export default Effect;
