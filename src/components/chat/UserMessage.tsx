import React from 'react';
    import { motion } from 'framer-motion';
    import { User } from 'lucide-react';
    import { MessageProps } from '../../types/chat';
    import { slideInFromRight } from '../../utils/animations';

    export function UserMessage({ content }: MessageProps) {
      return (
        <motion.div
          {...slideInFromRight}
          className="flex items-start gap-2 px-4 py-2 justify-end"
        >
          <p className="text-sm text-white">{content}</p>
          <User className="w-4 h-4 mt-1 text-gray-400" />
        </motion.div>
      );
    }
