import React from 'react';
    import { AIMessage } from './AIMessage';
    import { UserMessage } from './UserMessage';
    import { Message } from '../../types/chat';

    interface ChatMessageProps extends Message {
      isChatMode: boolean;
    }

    export function ChatMessage({ content, isAI, isChatMode }: ChatMessageProps) {
      if (isAI) {
        return <AIMessage content={content} isChatMode={isChatMode} />;
      }
      return <UserMessage content={content} />;
    }
