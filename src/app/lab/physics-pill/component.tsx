"use client";

import Matter from "matter-js";
import LabItemContainer from "../components/LabItemContainer";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import { useIsomorphicEffect } from "@/hooks/use-isomorphic-effect";

const defaultDomMatterClassName = "absolute pointer-events-none cursor-pointer";

export default function PhysicsPillComponent() {
  const scene = useRef<HTMLDivElement>(null);
  const engine = useRef(
    Matter.Engine.create({
      gravity: {
        x: 0,
        y: 0,
      },
    })
  );
  const isContainerPressed = useRef(false);
  const container = useRef<HTMLDivElement>(null);
  const disturbers = useRef<
    {
      block: Matter.Body;
      velocity: {
        x: number;
        y: number;
      };
    }[]
  >([]);

  const handleGravity = () => {
    if (isContainerPressed.current) return;
    engine.current.gravity.y = 0.1;
    isContainerPressed.current = true;
  };

  useIsomorphicEffect(() => {
    const mainScene = scene.current;
    const engineCore = engine.current;
    const disturbersDom = disturbers.current;

    let domAnimationFrame: number;

    if (mainScene == null || engineCore == null) return;

    const cw = mainScene.clientWidth;
    const ch = mainScene.clientHeight;

    const VIEWPORT = {
      centerX: cw / 2,
      centerY: ch / 2,
      width: cw,
      height: ch,
    };

    // Main renderer
    const render = Matter.Render.create({
      element: mainScene,
      engine: engineCore,
      options: {
        width: VIEWPORT.width,
        height: VIEWPORT.height,
        wireframes: false,
        background: "transparent",
      },
    });

    const wallOpts = {
      isStatic: true,
      render: {
        visible: false,
      },
      restitution: 0.8,
      friction: 1,
    };

    // Static Boundaries or we normally call it wall :)
    Matter.Composite.add(engineCore.world, [
      Matter.Bodies.rectangle(cw / 2, 0, cw, 20, wallOpts), // Top Bound
      Matter.Bodies.rectangle(-10, ch / 2, 20, ch - 20, wallOpts), // Left Bound
      Matter.Bodies.rectangle(cw / 2, ch + 10, cw, 20, wallOpts), // Bottom Bound
      Matter.Bodies.rectangle(cw + 10, ch / 2, 20, ch - 20, wallOpts), // Right Bound
    ]);

    // Mouse control
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engineCore, {
      mouse,
      constraint: {
        stiffness: 0.1,
        render: {
          visible: false,
        },
      },
    });

    Matter.Composite.add(engineCore.world, mouseConstraint);

    //#region main simulation function
    function addMatterDom() {
      if (mainScene == null) return;
      const matterDom = mainScene.querySelectorAll("[data-matter]");
      matterDom.forEach((dom) => {
        addBlock(dom as HTMLElement);
      });
    }

    function addBlock(dom: HTMLElement) {
      if (mainScene == null) return;
      const domWidth = dom.clientWidth;
      const domHeight = dom.clientHeight;
      const randomPosX =
        VIEWPORT.centerX +
        Math.floor(Math.random() * 10 + VIEWPORT.width / 2) -
        VIEWPORT.width / 2;
      const randomPosY =
        VIEWPORT.centerY +
        Math.floor(Math.random() * 10 + VIEWPORT.height / 2) -
        VIEWPORT.height / 2;

      const block = Matter.Bodies.rectangle(
        randomPosX,
        randomPosY,
        domWidth,
        domHeight,
        {
          label: dom.getAttribute("data-matter") ?? "",
          restitution: 0.5,
          friction: 0.2,
          frictionAir: 0.01,
          density: 1,
          chamfer: {
            radius: domHeight / 2,
          },
          render: {
            fillStyle: "transparent",
            strokeStyle: "transparent",
          },
          angle: Math.random() * 1.5 - 1.0,
        }
      );
      if (dom.getAttribute("data-disturb") === "true") pushDisturbance(block);
      Matter.Composite.add(engineCore.world, block);
    }

    // Add element to disturbance list
    function pushDisturbance(block: Matter.Body) {
      const initialVelocityX = (Math.random() - 0.5) * 0.05; // Adjust the initial velocity for desired speed
      const initialVelocityY = (Math.random() - 0.5) * 0.05;

      disturbers.current.push({
        block: block,
        velocity: {
          x: initialVelocityX,
          y: initialVelocityY,
        },
      });
    }

    // Make element randomly moving
    function disturbance() {
      if (isContainerPressed.current) return;
      disturbersDom.forEach((disturb) => {
        const { block, velocity } = disturb;
        Matter.Body.setVelocity(block, {
          x: velocity.x,
          y: velocity.y,
        });
      });
    }

    function syncSimulationWithHtml() {
      if (mainScene == null) return;
      const allBlocks = Matter.Composite.allBodies(engineCore.world);
      allBlocks.forEach((block) => {
        const targetDom = mainScene.querySelector(
          `[data-matter="${block.label}"]`
        ) as HTMLElement;
        if (block.label == null || !targetDom) return;
        // the -1 is the border width
        targetDom.style.transform = `translate3d(${
          block.position.x - targetDom.clientWidth / 2 - 1
        }px,${block.position.y - targetDom.clientHeight / 2 - 1}px,0)`;
        targetDom.style.transform += `rotate(${block.angle}rad)`;
      });
      disturbance();
      domAnimationFrame = requestAnimationFrame(syncSimulationWithHtml);
    }

    addMatterDom();
    syncSimulationWithHtml();
    //#endregion

    // Run engine and renderer
    Matter.Runner.run(engine.current);
    Matter.Render.run(render);

    // Cleaning up all processes
    return () => {
      Matter.Render.stop(render);
      Matter.Composite.clear(engineCore.world, false);
      Matter.Engine.clear(engineCore);
      render.canvas.remove();
      render.canvas = null as any;
      render.context = null as any;
      render.textures = {};
      cancelAnimationFrame(domAnimationFrame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useIsomorphicEffect(() => {
    let ctx = gsap.context((self) => {
      const pillsCanvas = self.selector?.("#pills-canvas");

      gsap.to(pillsCanvas, {
        autoAlpha: 1,
        duration: 0.8,
        ease: "power2.inOut",
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <LabItemContainer>
      <div
        ref={container}
        className="relative h-[300px] flex w-full items-center justify-center"
        onClick={handleGravity}
      >
        <div id="pills-canvas" className="w-full h-full opacity-0 invisible">
          <div ref={scene} id="canvas" className="w-full h-full relative">
            {/* Add Object Here */}
            <Asterisk />
            <LetItBounce />
            <PhysicsIsFun />
          </div>
        </div>
      </div>
    </LabItemContainer>
  );
}

function Asterisk() {
  return (
    <div
      className={twMerge(
        "px-8 py-6 holographic-bg rounded-full flex items-center justify-center",
        defaultDomMatterClassName
      )}
      data-matter="matter-item-1"
      data-disturb="true"
    >
      <svg
        width="40"
        height="29"
        viewBox="0 0 90 89"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-neutral-100"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.1798 44.2105L0 33.7058L13.3996 10.5048L31.59 20.9914L31.6003 0H58.3997L58.41 20.9914L76.6003 10.5048L90 33.7058L71.82 44.2105L90 54.7153L76.6003 77.9163L58.41 67.4297L58.3997 88.421H31.6003L31.59 67.4297L13.3996 77.9163L0 54.7153L18.1798 44.2105Z"
        />
      </svg>
    </div>
  );
}

function LetItBounce() {
  return (
    <div
      className={twMerge(
        "px-8 py-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm md:text-base",
        defaultDomMatterClassName
      )}
      data-matter="matter-item-2"
      data-disturb="true"
    >
      <p>Let it bounce 🦘</p>
    </div>
  );
}

function PhysicsIsFun() {
  return (
    <div
      className={twMerge(
        "px-8 py-4 bg-white text-blue-500 rounded-full flex items-center justify-center text-sm md:text-base",
        defaultDomMatterClassName
      )}
      data-matter="matter-item-3"
      data-disturb="true"
    >
      <p>
        Physics is <span className="line-through inline-block">not</span> fun
      </p>
    </div>
  );
}
