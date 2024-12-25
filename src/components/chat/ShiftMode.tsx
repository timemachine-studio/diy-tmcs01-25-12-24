import React from 'react';
    import { motion } from 'framer-motion';
    import { Tv, MessageSquare } from 'lucide-react';

    interface ShiftModeProps {
      isChatMode: boolean;
      onToggle: () => void;
    }

    export function ShiftMode({ isChatMode, onToggle }: ShiftModeProps) {
      return (
        <button
          onClick={onToggle}
          className="px-4 py-2 rounded-full bg-purple-600/20 backdrop-blur-sm
            text-white hover:bg-purple-700/30 transition-all duration-300
            border border-purple-500/30 flex items-center gap-2
            shadow-[0_0_15px_rgba(168,85,247,0.3)]"
        >
          {isChatMode ? (
            <>
              <Tv className="w-4 h-4" />
              <span>Shift to Stage</span>
            </>
          ) : (
            <>
              <MessageSquare className="w-4 h-4" />
              <span>Shift to Chat</span>
            </>
          )}
        </button>
      );
    }
