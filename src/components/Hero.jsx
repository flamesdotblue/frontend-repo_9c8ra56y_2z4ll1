import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-24" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,224,255,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[80vh] grid place-items-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              Stop wasting hours reproducing bugs. Let AI do it in seconds.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto"
            >
              Upload your crash logs or bug reports. Get instant reproduction steps, probable root cause, and fix suggestions — all powered by AI.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-10 flex items-center justify-center gap-4"
            >
              <a
                href="#pricing"
                className="inline-flex items-center rounded-md bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-6 py-3 transition-colors"
              >
                Try Free
              </a>
              <a
                href="#demo"
                className="inline-flex items-center rounded-md border border-white/20 hover:border-white/40 text-white px-6 py-3"
              >
                Watch Demo
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
