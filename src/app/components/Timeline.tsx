import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  details?: string[];
  icon: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 dark:from-blue-800 dark:via-blue-600 dark:to-blue-800" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <TimelineItemComponent key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineItemComponent({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className={`flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
        {/* Content */}
        <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} pl-20 md:pl-0`}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
          >
            <div className="mb-2">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                {item.period}
              </span>
            </div>
            <h3 className="text-xl mb-1 text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-lg text-blue-600 dark:text-blue-400 mb-3">{item.organization}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{item.description}</p>
            {item.details && (
              <ul className={`space-y-1 text-gray-600 dark:text-gray-400 text-sm ${isLeft ? 'md:text-right' : 'md:text-left'} text-left`}>
                {item.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`${isLeft ? 'md:order-2' : ''} order-1`}>•</span>
                    <span className="flex-1">{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>

        {/* Icon in the middle */}
        <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            whileHover={{ scale: 1.2, rotate: 360 }}
            className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 rounded-full flex items-center justify-center text-white shadow-lg"
          >
            {item.icon}
          </motion.div>
        </div>

        {/* Spacer for the other side */}
        <div className="hidden md:block md:w-5/12" />
      </div>
    </motion.div>
  );
}