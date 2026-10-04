import { useEffect, useRef } from "react";
import gsap from "gsap";

const words = [
  { text: "Alka", startIndex: 0 },
  { text: "Kumari", startIndex: 5 },
];

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
          min-height:100dvh;
          display:flex;
          justify-content:center;
          align-items:center;
          background:#000;
          overflow:hidden;
          padding:5rem 1.5rem 2rem 1.5rem;
        }

        .wrapper{
          position:relative;
          display:flex;
          flex-direction:column;
          align-items:center;
          width:100%;
          max-width:72rem;
        }

        .name{
          display:flex;
          flex-wrap:wrap;
          justify-content:center;
          align-items:center;
          gap:0.25em 0.4em;
          font-size:clamp(2.5rem, 11vw, 10rem);
          font-weight:900;
          line-height:1.05;
          letter-spacing:-0.04em;
          color:#fff;
          text-align:center;
        }

        .word-wrapper{
          display:inline-flex;
          white-space:nowrap;
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

        .tagline{
          margin-top:1.75rem;
          font-size:clamp(0.95rem, 2.8vw, 1.25rem);
          color:#9ca3af;
          text-align:center;
          max-width:32rem;
          line-height:1.6;
          font-weight:400;
          padding:0 1rem;
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

        @media(max-width:640px){
          .hero{
            padding-top:6rem;
          }
          .name{
            font-size:clamp(2.25rem, 13vw, 4.5rem);
          }
        }
      `}</style>

      <section className="hero" id="home">
        <div className="wrapper">
          <div className="shine" />

          <h1 className="name">
            {words.map((wordObj) => (
              <span key={wordObj.text} className="word-wrapper">
                {wordObj.text.split("").map((char, charIndex) => {
                  const globalIndex = wordObj.startIndex + charIndex;
                  return (
                    <span key={charIndex} className="letter-wrapper">
                      <span
                        ref={(el) => {
                          lettersRef.current[globalIndex] = el;
                        }}
                        className="letter"
                      >
                        {char}
                      </span>
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>
          <p className="tagline">Everything I touch is left improved.</p>
        </div>
      </section>
    </>
  );
}
