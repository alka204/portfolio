import { useEffect, useRef } from "react";
import gsap from "gsap";

const name = "Alka Kumari";

export default function Hero() {
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const nameRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    gsap.set(lettersRef.current, {
      transformPerspective: 1200,
      transformOrigin: "50% 100%",
    });

    const tl = gsap.timeline();

    tl.fromTo(
      lettersRef.current,
      {
        opacity: 0,
        y: 160,
        rotateX: -90,
        scale: 0.5,
        filter: "blur(18px)",
      },
      {
        opacity: 1,
        y: -10,
        rotateX: 12,
        scale: 1.08,
        filter: "blur(0px)",
        stagger: 0.06,
        duration: 0.8,
        ease: "power4.out",
      },
    )
      .to(
        lettersRef.current,
        {
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.35,
          stagger: 0.03,
          ease: "back.out(2)",
        },
        "-=0.45",
      )
      .fromTo(
        ".shine",
        {
          x: "-120%",
        },
        {
          x: "220%",
          duration: 1.2,
          ease: "power2.inOut",
        },
        "-=0.15",
      );
  }, []);

  return (
    <>
      <style>{`
        .hero{
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          background:#000;
          overflow:hidden;
          padding:0 2rem;
          perspective:1400px;
        }

        .wrapper{
          position:relative;
          display:inline-block;
        }

        .name{
          position:relative;
          display:flex;
          flex-wrap:wrap;
          justify-content:center;
          align-items:center;

          font-size:clamp(5rem,13vw,11rem);
          font-weight:900;
          line-height:.9;
          letter-spacing:-0.07em;

          color:white;

          user-select:none;

          overflow:hidden;
        }

        .letter{
          display:inline-block;
          position:relative;
          cursor:default;
          transform-origin:center bottom;
          will-change:transform;
          transition:
            transform .3s ease,
            color .3s ease,
            text-shadow .3s ease;
        }

        .letter:hover{
          transform:translateY(-18px) scale(1.12);
          color:#00BCD4;
          text-shadow:
            0 0 20px rgba(0,188,212,.5),
            0 0 40px rgba(0,188,212,.35);
        }

        .space{
          width:1.4rem;
        }

        .shine{
          position:absolute;
          top:-20%;
          left:-35%;
          width:18%;
          height:150%;

          background:linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.45),
            transparent
          );

          transform:skewX(-25deg);
          pointer-events:none;
        }

        @media(max-width:768px){

          .hero{
            padding:0 1rem;
          }

          .name{
            font-size:clamp(3.2rem,15vw,6rem);
          }

          .space{
            width:.8rem;
          }
        }
      `}</style>

      <section className="hero" id="home">
        <div className="wrapper">
          <div className="shine"></div>

          <h1 ref={nameRef} className="name">
            {name.split("").map((char, index) => (
              <span
                key={index}
                ref={(el) => {
                  lettersRef.current[index] = el;
                }}
                className={char === " " ? "space" : "letter"}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>
      </section>
    </>
  );
}
