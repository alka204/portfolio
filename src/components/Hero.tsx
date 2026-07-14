import { useEffect, useRef } from "react";
import gsap from "gsap";

const name = "Alka Kumari";

export default function Hero() {
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.set(lettersRef.current, {
      yPercent: 120,
      opacity: 0,
    });

    const tl = gsap.timeline();

    tl.to(lettersRef.current, {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power4.out",
      stagger: 0.07,
    })
      .to(
        lettersRef.current,
        {
          y: -8,
          duration: 0.18,
          stagger: 0.03,
          ease: "power2.out",
        },
        "-=0.45",
      )
      .to(
        lettersRef.current,
        {
          y: 0,
          duration: 0.22,
          stagger: 0.03,
          ease: "back.out(2)",
        },
        "<",
      )
      .fromTo(
        ".shine",
        {
          x: "-120%",
        },
        {
          x: "220%",
          duration: 1.3,
          ease: "power2.inOut",
        },
        "-=0.3",
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
        }

        .wrapper{
          position:relative;
          display:flex;
          flex-direction:column;
          align-items:center;
        }

        .name{
          display:flex;
          justify-content:center;
          align-items:center;
          white-space:nowrap;
          font-size:clamp(5rem,13vw,11rem);
          font-weight:900;
          line-height:1;
          letter-spacing:-0.05em;
          color:#fff;
        }

        .letter-wrapper{
          display:inline-block;
          overflow:hidden;
        }

        .letter{
          display:inline-block;
          will-change:transform;
          cursor:default;
          transition:.25s;
        }

        .letter:hover{
          transform:translateY(-10px);
          color:#00BCD4;
          text-shadow:
            0 0 20px rgba(0,188,212,.45),
            0 0 35px rgba(0,188,212,.25);
        }

        .space{
          display:inline-block;
          width:.35em;
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
            font-size:clamp(3rem,15vw,6rem);
          }

          .space{
            width:.28em;
          }
        }
      `}</style>

      <section className="hero" id="home">
        <div className="wrapper">
          <div className="shine" />

          <h1 className="name">
            {name.split("").map((char, index) =>
              char === " " ? (
                <span key={index} className="space">
                  &nbsp;
                </span>
              ) : (
                <span key={index} className="letter-wrapper">
                  <span
                    ref={(el) => {
                      lettersRef.current[index] = el;
                    }}
                    className="letter"
                  >
                    {char}
                  </span>
                </span>
              ),
            )}
          </h1>
          <p className="tagline">Everything I touch is left improved.</p>
        </div>
      </section>
    </>
  );
}
