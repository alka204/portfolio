import { motion, type Variants } from "framer-motion";

const name = "Alka Kumari";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letter: Variants = {
  hidden: {
    y: 120,
    opacity: 0,
    rotateX: -90,
  },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Hero() {
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
        color:white;
      }

      .letter-wrapper{
        display:inline-block;
        overflow:hidden;
      }

      .subtitle{
        margin-top:28px;
        color:#9CA3AF;
        font-size:1.15rem;
        text-align:center;
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
      }
      `}</style>

      <section className="hero" id="home">
        <div className="wrapper">
          <motion.h1
            className="name"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {name.split("").map((char, index) =>
              char === " " ? (
                <span key={index} style={{ width: "0.35em" }} />
              ) : (
                <span key={index} className="letter-wrapper">
                  <motion.span
                    variants={letter}
                    whileHover={{
                      color: "#00BCD4",
                      y: -10,
                      scale: 1.08,
                    }}
                    animate={{
                      y: [0, -14, 0],
                      rotateX: [0, -25, 0],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatDelay: name.length * 0.12,
                      delay: index * 0.12,
                      ease: "easeInOut",
                    }}
                    style={{
                      display: "inline-block",
                      transformOrigin: "50% 100%",
                    }}
                  >
                    {char}
                  </motion.span>
                </span>
              ),
            )}
          </motion.h1>

          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
              duration: 0.7,
            }}
          >
            Everything I touch is left improved.
          </motion.p>
        </div>
      </section>
    </>
  );
}
