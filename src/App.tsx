import React from 'react';
    import { ChatMessage } from './components/chat/ChatMessage';
    import { ChatInput } from './components/chat/ChatInput';
    import { ShiftMode } from './components/chat/ShiftMode';
    import { BrandLogo } from './components/brand/BrandLogo';
    import { LoadingContainer } from './components/loading/LoadingContainer';
    import { useChat } from './hooks/useChat';

    export default function App() {
      const { messages, isChatMode, isLoading, setChatMode, handleSendMessage } = useChat();

      return (
        <div 
          className="min-h-screen bg-black text-white"
          style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
        >
          <main className="relative h-screen flex flex-col" style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
            <BrandLogo />
            <LoadingContainer isVisible={isLoading} />
            <div className="absolute top-4 right-4 z-10">
              <ShiftMode isChatMode={isChatMode} onToggle={() => setChatMode(!isChatMode)} />
            </div>
            <div className="flex-1 flex items-center justify-center p-4">
              {isChatMode ? (
                <div className="w-full max-w-4xl space-y-4 overflow-y-auto pb-20">
                  {messages.map((message) => (
                    <ChatMessage 
                      key={message.id} 
                      {...message}
                      isChatMode={isChatMode}
                    />
                  ))}
                </div>
              ) : (
                messages.length > 0 && (
                  <ChatMessage 
                    {...messages[messages.length - 1]}
                    isChatMode={isChatMode}
                  />
                )
              )}
            </div>
            <div className="p-4 w-full fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-transparent">
              <ChatInput 
                onSendMessage={handleSendMessage} 
                isLoading={isLoading} 
              />
            </div>
          </main>
        </div>
      );
    }
