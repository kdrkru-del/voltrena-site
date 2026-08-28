'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import NodeNetwork from '@/components/ui/NodeNetwork'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const rotators = [
  'Мы создаем сайты.',
  'Мы генерируем спрос.',
  'Мы автоматизируем продажи.',
  'Мы строим системы роста.'
]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    if (currentIndex >= rotators.length - 1) return
    
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [currentIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.3 }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-bg-primary">
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <NodeNetwork />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/20 via-bg-primary/50 to-bg-primary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Content layer */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-display-xl font-bold tracking-tight text-text-primary mb-6"
        >
          <span className="block mb-2">От первого клика до продажи.</span>
          <div className="h-[3.5em] min-[360px]:h-[2.4em] lg:h-[1.2em] relative overflow-hidden flex justify-center text-accent-light text-[clamp(2rem,7vw,4rem)] leading-[1.1]">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={currentIndex < rotators.length - 1 ? { opacity: 0, y: -40 } : undefined}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center px-1"
              >
                {rotators[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
        >
          Сайты, маркетинг, ИИ, автоматизация и данные — объединенные в единую систему роста.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/contact">
            Обсудить проект
          </Button>
          <Button href="#capabilities" variant="secondary">
            Посмотреть услуги
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs uppercase tracking-widest text-text-muted font-medium">Вниз</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent"
        />
      </motion.div>
    </section>
  )
}
