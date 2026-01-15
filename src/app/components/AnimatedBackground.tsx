import { motion } from 'motion/react';

export function AnimatedBackground() {
  // Generate particles with random positions and sizes
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Aurora Borealis Effect - Main gradient waves */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 opacity-40 dark:opacity-60"
        style={{
          background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 20%, #fbc2eb 40%, #a6c1ee 60%, #fbc2eb 80%, #a1c4fd 100%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Mesh Gradient Layer 1 - Purple to Pink */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30 dark:opacity-40 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.3) 50%, transparent 100%)',
        }}
      />

      {/* Mesh Gradient Layer 2 - Blue to Cyan */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full opacity-30 dark:opacity-40 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(34, 211, 238, 0.3) 50%, transparent 100%)',
        }}
      />

      {/* Mesh Gradient Layer 3 - Yellow to Orange */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-25 dark:opacity-35 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, rgba(251, 146, 60, 0.2) 50%, transparent 100%)',
        }}
      />

      {/* Mesh Gradient Layer 4 - Teal to Green */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 70, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/3 w-[550px] h-[550px] rounded-full opacity-25 dark:opacity-35 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(20, 184, 166, 0.2) 50%, transparent 100%)',
        }}
      />

      {/* Pastel Organic Blobs */}
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -100, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-1/4 w-[400px] h-[400px] opacity-20 dark:opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(ellipse, rgba(255, 182, 193, 0.5) 0%, rgba(255, 218, 224, 0.3) 50%, transparent 100%)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        }}
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 90, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] opacity-20 dark:opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(ellipse, rgba(179, 229, 252, 0.5) 0%, rgba(224, 242, 254, 0.3) 50%, transparent 100%)',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        }}
      />

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/3 w-[350px] h-[350px] opacity-20 dark:opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(ellipse, rgba(221, 214, 254, 0.5) 0%, rgba(237, 233, 254, 0.3) 50%, transparent 100%)',
          borderRadius: '70% 30% 50% 50% / 30% 60% 40% 70%',
        }}
      />

      <motion.div
        animate={{
          x: [0, -90, 0],
          y: [0, 100, 0],
          rotate: [0, -90, -180],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-1/2 w-[380px] h-[380px] opacity-20 dark:opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(ellipse, rgba(254, 215, 226, 0.5) 0%, rgba(252, 231, 243, 0.3) 50%, transparent 100%)',
          borderRadius: '50% 50% 30% 70% / 60% 40% 60% 40%',
        }}
      />

      <motion.div
        animate={{
          x: [0, 110, 0],
          y: [0, -70, 0],
          rotate: [0, 120, 240],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/3 right-1/2 w-[420px] h-[420px] opacity-20 dark:opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(ellipse, rgba(167, 243, 208, 0.5) 0%, rgba(209, 250, 229, 0.3) 50%, transparent 100%)',
          borderRadius: '40% 60% 40% 60% / 50% 30% 70% 50%',
        }}
      />

      {/* Floating small particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
          }}
          animate={{
            y: [`${particle.y}vh`, `${particle.y - 30}vh`, `${particle.y}vh`],
            x: [`${particle.x}vw`, `${particle.x + 15}vw`, `${particle.x}vw`],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
          className="absolute rounded-full bg-white/40 dark:bg-white/20"
          style={{
            width: particle.size,
            height: particle.size,
            filter: 'blur(1px)',
          }}
        />
      ))}

      {/* Subtle geometric shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-1/4 w-24 h-24 border border-white/10 dark:border-white/5"
        style={{ borderRadius: '30%' }}
      />

      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/3 left-1/3 w-20 h-20 border border-white/10 dark:border-white/5 rounded-full"
      />

      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-2/3 right-1/3 w-16 h-16 dark:opacity-50 opacity-30"
        style={{
          clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
        }}
      />

      {/* Additional aurora waves for dark mode */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 opacity-0 dark:opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.2) 25%, rgba(59, 130, 246, 0.2) 50%, rgba(16, 185, 129, 0.2) 75%, transparent 100%)',
          backgroundSize: '200% 100%',
        }}
      />
    </div>
  );
}
