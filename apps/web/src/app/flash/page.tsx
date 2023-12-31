'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Progress, ProgressBar, ProgressIndicator } from 'ui'

const flashCardsTotal = 12

export default function Flash() {
  const [flashCardsCount, setFlashCardsCount] = useState(0)
  const [shouldShowAnswer, setShouldShowAnswer] = useState(false)

  return (
    <div className="bg-gradient-to-t from-marine-600 to-marine-500 h-screen text-mirage-50 flex flex-col md:items-center">
      <div className="flex-1 flex flex-col self-stretch items-center py-20 mr-10 ml-10">
        <div className="space-y-4">
          <span className="text-xl leading-heading font-bold">
            Fundamentos do Javascript
          </span>

          <Progress max={flashCardsTotal} now={flashCardsCount}>
            <ProgressBar />
            <ProgressIndicator />
          </Progress>
        </div>

        <div className="relative mt-20 w-full  max-w-[480px] min-h-[416px]">
          <motion.div
            className="rounded-lg relative inset-0 h-full bg-mirage-50 w-full px-6 py-6 z-20"
            transition={{ duration: 0.4 }}
            animate={
              shouldShowAnswer
                ? {
                    rotateY: 180,
                  }
                : {}
            }
          />

          <div className="absolute z-30 top-1/2 -translate-y-1/2 w-full text-center">
            <AnimatePresence>
              {shouldShowAnswer ? (
                <motion.p
                  key="card-result"
                  className="text-smoke-950 leading-base text-center flex justify-center items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  teste
                </motion.p>
              ) : (
                <motion.p
                  key="card-question"
                  className="text-smoke-950 leading-base text-center flex justify-center items-center"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  Método utilizado para percorrer um array e criar um novo a
                  partir do original com possiceis modificações
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="z-10 rounded-lg bg-mirage-100  mx-6 left-1 right-1 absolute h-full -bottom-3"></div>
          <div className="z-5 rounded-lg bg-mirage-200  mx-6 left-4 right-4 absolute h-full -bottom-6"></div>
        </div>
      </div>
      <button
        onClick={() => {
          setShouldShowAnswer(!shouldShowAnswer)
          setFlashCardsCount((state) => state + 1) //
        }}
        className="bg-mirage-50 text-marine-500 py-8 w-full font-bold uppercase hover:bg-mirage-50/90 md:w-[320px] md:mb-16 md:rounded-full md:py-6"
      >
        Revelar Resposta
      </button>
    </div>
  )
}
