export type AgentIntent =
  | "casual_chat"
  | "assessment"
  | "booking"
  | "support"
  | "schedule"
  | "pricing"
  | "trainers"
  | "female_batch"
  | "diet"
  | "face_yoga"
  | "posture";

export interface AssessmentProgress {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  isComplete: boolean;
}

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

/**
 * Global state schema for the Xanso AI Wellness Concierge LangGraph engine.
 * Defined in AGENT.MD Section 3.A.
 */
export interface AgentState {
  messages: ChatMessage[];
  userId: string;
  intent: AgentIntent;
  assessmentProgress: AssessmentProgress;
  recommendedProgramId: string | null;
  responseOutput?: string;
}
