export interface Message {
      id: number;
      content: string;
      isAI: boolean;
    }

    export interface ChatState {
      messages: Message[];
      isLoading: boolean;
      isChatMode: boolean;
    }

    export interface ChatActions {
      handleSendMessage: (message: string) => Promise<void>;
      setChatMode: (isChatMode: boolean) => void;
    }

    export interface ChatInputProps {
      onSendMessage: (message: string) => void;
      isLoading?: boolean;
    }

    export interface ShowHistoryProps {
      isChatMode: boolean;
      onToggle: () => void;
    }

    export interface MessageProps {
      content: string;
      isLoading?: boolean;
    }
