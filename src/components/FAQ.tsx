import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

type FAQProps = {
  data: {
    id: number;
    question: string;
    answer: string;
  }[];
};

const FAQ = ({ data }: FAQProps) => {
  const [isOpen, setIsOpen] = useState<number>(1);

  return (
    <div className="flex flex-col gap-4">
      {data.map((item) => (
        <AnimatePresence key={item.question}>
          <motion.div
            onClick={() => setIsOpen(item.id)}
            transition={{ duration: 0.5 }}
            className="rounded-xl border"
          >
            <motion.div
              key="question"
              className={twMerge(
                `cursor-pointer rounded-xl bg-white p-6`,
                isOpen === item.id && "rounded-b-none border-b"
              )}
            >
              <motion.div className="text-sm font-bold text-gray-800 md:text-base">
                {item.question}
              </motion.div>
            </motion.div>

            {isOpen === item.id && (
              <motion.div
                key="answer"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                className={twMerge(
                  `rounded-xl bg-slate-50 p-6 text-xs md:text-sm`,
                  isOpen === item.id && "rounded-t-none"
                )}
              >
                {item.answer}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  );
};

export default FAQ;
