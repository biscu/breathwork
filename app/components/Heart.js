'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Heart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        {/* Static stroke circle showing maximum expansion size */}
        <div 
          className="absolute w-60 h-60 rounded-full border-2 border-gray-300 opacity-30"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(1px)',
          }}
        />
        
        {/* Animated heart sphere */}
        <motion.div
          className="w-40 h-40 rounded-full relative z-10"
          style={{
            background: '#833AB4',
            background: 'radial-gradient(circle, rgba(131, 58, 180, 1) 0%, rgba(168, 49, 133, 1) 15%, rgba(189, 44, 108, 1) 24%, rgba(220, 37, 70, 1) 36%, rgba(253, 29, 29, 1) 50%, rgba(252, 66, 39, 1) 63%, rgba(252, 103, 49, 1) 75%, rgba(252, 138, 59, 1) 87%, rgba(252, 176, 69, 1) 100%)',
            boxShadow: '0 0 30px rgba(131, 58, 180, 0.5)',
            filter: 'blur(1px)',
          }}
          animate={{
            scale: [1, 1.5, 1.5, 1, 1],
          }}
          transition={{
            duration: 16,
            times: [0, 0.25, 0.5, 0.75, 1],
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />
      </div>
    </div>
  );
}
