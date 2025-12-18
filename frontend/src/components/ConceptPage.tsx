"use client";

import { motion } from "framer-motion";
import ColabButton from "./ColabButton";
import PageNavigation from "./PageNavigation";
import { Clock } from "lucide-react";

interface ConceptPageProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  notebookName?: string;
  timeEstimate?: string;
  reflectionQuestions?: string[];
}

export default function ConceptPage({
  title,
  subtitle,
  children,
  notebookName,
  timeEstimate = "10-15 minutes",
  reflectionQuestions = [],
}: ConceptPageProps) {
  return (
    <article className="max-w-3xl">
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <p className="text-[#8A2BE2] font-medium mb-2 font-mono text-sm">{subtitle}</p>
        <h1 className="text-4xl font-bold text-[#00FFF0]" style={{ fontFamily: 'Space Grotesk, monospace' }}>{title}</h1>
      </motion.header>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="prose prose-lg max-w-none prose-invert prose-headings:text-[#00FFF0] prose-headings:font-['Space_Grotesk'] prose-p:text-[#E6E6E6] prose-strong:text-[#00FFF0] prose-code:text-[#8A2BE2] prose-code:bg-[#8A2BE2]/10 prose-code:px-1 prose-code:rounded prose-li:text-[#E6E6E6]"
      >
        {children}
      </motion.div>

      {notebookName && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 rounded-xl border border-[#00FFF0]/30 bg-gradient-to-br from-[#00FFF0]/5 to-[#8A2BE2]/5"
        >
          <h2 className="text-xl font-bold text-[#00FFF0] mb-2" style={{ fontFamily: 'Space Grotesk, monospace' }}>Hands-On Exercise</h2>
          <p className="text-[#E6E6E6]/70 mb-4">
            <span className="inline-flex items-center gap-1 text-sm bg-[#8A2BE2]/20 text-[#8A2BE2] px-2 py-1 rounded">
              <Clock className="w-4 h-4" />
              {timeEstimate}
            </span>
          </p>
          <ColabButton notebookName={notebookName} />
        </motion.section>
      )}

      {reflectionQuestions.length > 0 && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 p-6 rounded-xl border border-[#8A2BE2]/30 bg-gradient-to-br from-[#8A2BE2]/10 to-[#00FFF0]/5"
        >
          <h2 className="text-xl font-bold text-[#8A2BE2] mb-4" style={{ fontFamily: 'Space Grotesk, monospace' }}>Reflection Questions</h2>
          <ul className="space-y-3">
            {reflectionQuestions.map((question, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#00FFF0] to-[#8A2BE2] text-black rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <span className="text-[#E6E6E6]">{question}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      <PageNavigation />
    </article>
  );
}
