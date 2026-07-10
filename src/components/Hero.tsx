import { useEffect, useRef } from "react";
import gsap from "gsap";

const name = "Alka Kumari";

export default function Hero() {
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    gsap.set(lettersRef.current, {
      yPercent: 120,
      opacity: 0,
    });

    gsap.set(subtitleRef.current, {
      opacity: 0,
      y: 30,
    });

    const tl = gsap.timeline();

    // Letter-by-letter entrance
    tl.to(lettersRef.current, {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      stagger: {
        each: 0.08,
        from: "start",
      },
    })

      // Small bounce
      .to(
        lettersRef.current,
        {
          y: -8,
          duration: 0.18,
          ease: "power2.out",
          stagger: 0.03,
        },
        "-=0.35",
      )

      .to(
        lettersRef.current,
        {
          y: 0,
          duration: 0.25,
          ease: "back.out(2)",
          stagger: 0.03,
        },
        "<",
      )

      // Shine animation
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
      )

      // Subtitle
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5",
      )

      // Start idle animation after entrance
      .call(() => {
        lettersRef.current.forEach((letter, i) => {
          if (!letter) return;

          // Floating up/down
          gsap.to(letter, {
            y: gsap.utils.random(-8, 8),
            duration: gsap.utils.random(1.8, 3),
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: i * 0.12,
          });

          // Slight rotation
          gsap.to(letter, {
            rotate: gsap.utils.random(-4, 4),
            duration: gsap.utils.random(2.5, 4),
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: i * 0.1,
          });

          // Tiny scale pulse
          gsap.to(letter, {
            scale: gsap.utils.random(0.97, 1.03),
            duration: gsap.utils.random(2, 3.5),
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: i * 0.15,
          });
        });
      });
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

        /* IMPORTANT */
        .letter-wrapper{
          display:inline-block;
          overflow:hidden;
        }

      .letter{
  display:inline-block;
  will-change:transform;
  cursor:default;

  transition:
      color .25s ease,
      text-shadow .25s ease;
}

.letter:hover{
  color:#00BCD4;

  text-shadow:
      0 0 20px rgba(0,188,212,.45),
      0 0 35px rgba(0,188,212,.25);
}

        .space{
          display:inline-block;
          width:.35em;
        }

        .subtitle{
          margin-top:28px;
          color:#9ca3af;
          font-size:1.1rem;
          letter-spacing:.05em;
          text-align:center;
          opacity:0;
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

          .subtitle{
            font-size:1rem;
            margin-top:18px;
            padding:0 1rem;
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

          <p ref={subtitleRef} className="subtitle">
            Everything I touch is left improved.
          </p>
        </div>
      </section>
    </>
  );
}
