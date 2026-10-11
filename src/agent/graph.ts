import { StateGraph, START, END, Annotation } from "@langchain/langgraph";
import { AgentState, AgentIntent, ChatMessage } from "./state";
import { XANSO_KNOWLEDGE } from "./knowledge";

/**
 * State Annotation for LangGraph engine complying with AGENT.MD Section 3.
 */
export const AgentStateAnnotation = Annotation.Root({
  messages: Annotation<ChatMessage[]>({
    reducer: (x, y) => x.concat(y),
    default: () => [],
  }),
  userId: Annotation<string>({
    reducer: (x, y) => y ?? x,
    default: () => "anonymous",
  }),
  intent: Annotation<AgentIntent>({
    reducer: (x, y) => y ?? x,
    default: () => "casual_chat",
  }),
  assessmentProgress: Annotation<AgentState["assessmentProgress"]>({
    reducer: (x, y) => ({ ...x, ...y }),
    default: () => ({
      currentQuestionIndex: 0,
      answers: {},
      isComplete: false,
    }),
  }),
  recommendedProgramId: Annotation<string | null>({
    reducer: (x, y) => y ?? x,
    default: () => null,
  }),
  responseOutput: Annotation<string | undefined>({
    reducer: (x, y) => y ?? x,
    default: () => undefined,
  }),
});

export type State = typeof AgentStateAnnotation.State;

const WHATSAPP_LINK = "https://wa.me/919105837321?text=Hi%20Xanso%20Fitness!%20I%20would%20like%20to%20know%20more%20about%20live%20batches%20and%20the%2010%25%20discount.";

// ==============================================================================
// 1. ClassifierNode: Prioritizes specific domains before general categories
// ==============================================================================
export async function classifierNode(state: State): Promise<Partial<State>> {
  const lastMsg = state.messages[state.messages.length - 1]?.content.toLowerCase().trim() || "";

  // 1. Detect active multi-step assessment from previous assistant message
  const lastAssistantMsg = [...state.messages]
    .reverse()
    .find((m) => m.role === "assistant")?.content || "";

  if (lastAssistantMsg.includes("Diagnostic [Step 1/")) {
    return {
      intent: "assessment",
      assessmentProgress: {
        ...state.assessmentProgress,
        currentQuestionIndex: 1,
      },
    };
  } else if (lastAssistantMsg.includes("Diagnostic [Step 2/")) {
    return {
      intent: "assessment",
      assessmentProgress: {
        ...state.assessmentProgress,
        currentQuestionIndex: 2,
      },
    };
  } else if (lastAssistantMsg.includes("Diagnostic [Step 3/")) {
    return {
      intent: "assessment",
      assessmentProgress: {
        ...state.assessmentProgress,
        currentQuestionIndex: 3,
      },
    };
  }

  // Check if inside active assessment in current state
  if (
    state.assessmentProgress.currentQuestionIndex > 0 &&
    !state.assessmentProgress.isComplete
  ) {
    return { intent: "assessment" };
  }

  // 1. Assessment trigger
  if (
    lastMsg.includes("assess") ||
    lastMsg.includes("quiz") ||
    lastMsg.includes("recommend a flow") ||
    lastMsg.includes("recommend a morning") ||
    lastMsg.includes("diagnostic") ||
    lastMsg.includes("find my flow")
  ) {
    return { intent: "assessment" };
  }

  // 2. Female-only batches (Must precede general "batch" checks)
  if (
    lastMsg.includes("female") ||
    lastMsg.includes("women") ||
    lastMsg.includes("ladies") ||
    lastMsg.includes("girl") ||
    lastMsg.includes("privacy")
  ) {
    return { intent: "female_batch" };
  }

  // 3. Diet & Nutrition (Must precede general "plan" checks)
  if (
    lastMsg.includes("diet") ||
    lastMsg.includes("nutrition") ||
    lastMsg.includes("meal") ||
    lastMsg.includes("food") ||
    lastMsg.includes("ayurved")
  ) {
    return { intent: "diet" };
  }

  // 4. Face Yoga
  if (
    lastMsg.includes("face") ||
    lastMsg.includes("facial") ||
    lastMsg.includes("jaw") ||
    lastMsg.includes("glow") ||
    lastMsg.includes("puffiness")
  ) {
    return { intent: "face_yoga" };
  }

  // 5. Posture & Pain Relief
  if (
    lastMsg.includes("posture") ||
    lastMsg.includes("desk") ||
    lastMsg.includes("back") ||
    lastMsg.includes("spine") ||
    lastMsg.includes("neck") ||
    lastMsg.includes("cervical") ||
    lastMsg.includes("sitting") ||
    lastMsg.includes("stiff") ||
    lastMsg.includes("pain") ||
    lastMsg.includes("ergonomic")
  ) {
    return { intent: "posture" };
  }

  // 6. Trainers & Instructors
  if (
    lastMsg.includes("trainer") ||
    lastMsg.includes("instructor") ||
    lastMsg.includes("teacher") ||
    lastMsg.includes("coach") ||
    lastMsg.includes("neelam") ||
    lastMsg.includes("muskaan") ||
    lastMsg.includes("apeksha") ||
    lastMsg.includes("navya") ||
    lastMsg.includes("arjun") ||
    lastMsg.includes("who teaches")
  ) {
    return { intent: "trainers" };
  }

  // 7. Pricing & Plans
  if (
    lastMsg.includes("price") ||
    lastMsg.includes("pricing") ||
    lastMsg.includes("cost") ||
    lastMsg.includes("fee") ||
    lastMsg.includes("membership") ||
    lastMsg.includes("subscription") ||
    lastMsg.includes("discount") ||
    lastMsg.includes("how much") ||
    lastMsg.includes("offer") ||
    lastMsg.includes("₹") ||
    lastMsg.includes("inr") ||
    lastMsg.includes("rupee")
  ) {
    return { intent: "pricing" };
  }

  // 8. Timings & Batches
  if (
    lastMsg.includes("time") ||
    lastMsg.includes("timing") ||
    lastMsg.includes("schedule") ||
    lastMsg.includes("batch") ||
    lastMsg.includes("slot") ||
    lastMsg.includes("when are") ||
    lastMsg.includes("morning") ||
    lastMsg.includes("evening") ||
    lastMsg.includes("miss")
  ) {
    return { intent: "schedule" };
  }

  // 9. Booking & Trial
  if (
    lastMsg.includes("book") ||
    lastMsg.includes("join") ||
    lastMsg.includes("trial") ||
    lastMsg.includes("whatsapp") ||
    lastMsg.includes("register") ||
    lastMsg.includes("enroll") ||
    lastMsg.includes("sign up")
  ) {
    return { intent: "booking" };
  }

  // 10. Live vs Recorded format / Support
  if (
    lastMsg.includes("zoom") ||
    lastMsg.includes("recorded") ||
    lastMsg.includes("live") ||
    lastMsg.includes("camera") ||
    lastMsg.includes("help") ||
    lastMsg.includes("support")
  ) {
    return { intent: "support" };
  }

  return { intent: "casual_chat" };
}

// ==============================================================================
// 2. AssessmentNode: Interactive Wellness & Asana Diagnostic
// ==============================================================================
export async function assessmentNode(state: State): Promise<Partial<State>> {
  const qIndex = state.assessmentProgress.currentQuestionIndex;
  const lastMsg = state.messages[state.messages.length - 1]?.content || "";

  const assessmentQuestions = [
    "What is your primary wellness focus? (e.g., Desk Posture & Spine, Weight Loss, Stress & Sleep, or Deep Flexibility)",
    "What is your yoga experience level? (Complete beginner with stiff joints, or practicing occasionally?)",
    "Which batch slot fits your daily routine? (Morning 6:00 - 9:00 AM IST or Evening 4:30 - 7:30 PM IST?)",
  ];

  const updatedAnswers = { ...state.assessmentProgress.answers };
  if (qIndex > 0) {
    updatedAnswers[`step_${qIndex}`] = lastMsg;
  }

  if (qIndex < assessmentQuestions.length) {
    const question = assessmentQuestions[qIndex];
    return {
      intent: "assessment",
      assessmentProgress: {
        answers: updatedAnswers,
        currentQuestionIndex: qIndex + 1,
        isComplete: false,
      },
      responseOutput:
        `🌿 **Xanso Sanctuary Diagnostic [Step ${qIndex + 1}/${assessmentQuestions.length}]**\n\n` +
        `${question}\n\n` +
        `_Reply with your choice to calibrate your ideal live batch._`,
    };
  }

  return {
    intent: "assessment",
    assessmentProgress: {
      answers: updatedAnswers,
      currentQuestionIndex: qIndex,
      isComplete: true,
    },
    recommendedProgramId: "personalized-xanso-pathway",
    responseOutput:
      "🙏 **Thank you! Your personalized Xanso journey is calibrated:**\n\n" +
      "• **Recommended Pathway:** Live Interactive Zoom Batch matched to your daily routine\n" +
      "• **Format:** 100% Live with real-time posture cues, safe regressions & breath guidance\n" +
      "• **Included Free:** 1-on-1 Personalized Indian Diet Plan & 7-Day Face Yoga Masterclass\n" +
      "• **Batch Flexibility:** Full freedom to attend any of our 8 daily morning/evening slots\n\n" +
      `Ready to begin? [Book Your Trial Batch on WhatsApp](${WHATSAPP_LINK}) or explore [Live Schedule](#schedule).`,
  };
}

// ==============================================================================
// 3. RAG_Node: High-Precision Knowledge Retrieval Trained on Website
// ==============================================================================
export async function ragNode(state: State): Promise<Partial<State>> {
  const lastMsg = state.messages[state.messages.length - 1]?.content.toLowerCase().trim() || "";
  const intent = state.intent;

  let response = "";

  // 1. Female-Only Batches (Priority check)
  if (intent === "female_batch" || lastMsg.includes("female") || lastMsg.includes("women") || lastMsg.includes("ladies")) {
    response =
      "🌺 **Dedicated Female-Only Batches at Xanso:**\n\n" +
      "• Operating in **both morning and evening slots** for complete convenience.\n" +
      "• Guided exclusively by our senior female certified instructors: **Neelam Rana, Muskaan Wahi, Apeksha Chauhan, and Navya Gupta**.\n" +
      "• A completely private, comfortable, and supportive environment designed for women of all fitness levels.\n\n" +
      `Would you like to reserve your spot? [Join Female Batch on WhatsApp](${WHATSAPP_LINK}) or check [Schedule](#schedule).`;
  }
  // 2. Free Personalized Indian Diet Plan
  else if (intent === "diet" || lastMsg.includes("diet") || lastMsg.includes("nutrition") || lastMsg.includes("food")) {
    response =
      "🥗 **Free Personalized Indian Diet Plan (Included Free When You Join):**\n\n" +
      "• **Custom 1-on-1 Assessment:** Formulated by qualified nutritionists according to your body type and target goals.\n" +
      "• **Sustainable Indian Home Meals:** Balanced macros with everyday food (dal, roti, sabzi, seasonal fruits) and Ayurvedic principles.\n" +
      "• **No Starvation:** Designed for healthy weight loss, gut health, joint lubrication, and steady all-day stamina without crash dieting.\n\n" +
      `[Get Diet Plan with Membership](#pricing) • [Consult Nutritionist on WhatsApp](${WHATSAPP_LINK})`;
  }
  // 3. 7-Day Face Yoga
  else if (intent === "face_yoga" || lastMsg.includes("face") || lastMsg.includes("facial") || lastMsg.includes("jaw")) {
    response =
      "✨ **7-Day Signature Face Yoga Masterclass (Included in Membership):**\n\n" +
      "• Guided by certified Face Yoga Master **Muskaan Wahi**.\n" +
      "• Stimulates facial acupressure points and promotes lymphatic drainage to de-puff and sculpt facial contours.\n" +
      "• Releases jaw tension and stress clenching while naturally restoring skin radiance.\n\n" +
      `[Explore Face Yoga Details](#programs) • [Inquire on WhatsApp](${WHATSAPP_LINK})`;
  }
  // 4. Desk Posture, Back & Spine Relief
  else if (intent === "posture" || lastMsg.includes("posture") || lastMsg.includes("desk") || lastMsg.includes("back") || lastMsg.includes("spine") || lastMsg.includes("neck") || lastMsg.includes("cervical") || lastMsg.includes("pain")) {
    response =
      "🪑 **IT Desk Posture & Spine Decompression:**\n\n" +
      "For laptop fatigue, forward head posture, and sitting stiffness, our targeted batches restore axial spine alignment:\n" +
      "• **Neck & Spine Relief (4:30 PM IST)** led by Neelam Rana\n" +
      "• **Brahma Muhurta & Spine Reset (6:00 AM IST)** led by Apeksha Chauhan\n" +
      "• **Targeted Asanas:** Supported Cat-Cow, Bhujangasana (Cobra), Balasana (Child's Pose), and thoracic opening twists.\n\n" +
      `[See Spine & Posture Batches](#schedule) • [Book 1-on-1 Posture Reset on WhatsApp](${WHATSAPP_LINK})`;
  }
  // 5. Certified Instructors
  else if (intent === "trainers" || lastMsg.includes("instructor") || lastMsg.includes("trainer") || lastMsg.includes("teacher")) {
    response =
      "🌸 **Meet Your Ayush & Yoga Alliance Certified Instructors (25+ Yrs Experience):**\n\n" +
      "• **Neelam Rana:** Certified Yoga Instructor specializing in Hatha, cervical spine & posture correction (Evening 4:30 & 5:30 PM IST).\n" +
      "• **Muskaan Wahi:** Certified Yoga & Face Yoga Master, soothing bedtime pranayama & flows (Morning 9:00 AM & Evening 7:30 PM IST).\n" +
      "• **Apeksha Chauhan:** Brahma Muhurta, classical Hatha & desk posture relief (Morning 6:00 & 7:00 AM IST).\n" +
      "• **Navya Gupta:** National player, safe flexibility, spine mobility & core conditioning (Morning 8:00 AM & Evening 6:30 PM IST).\n\n" +
      `[Meet All Instructors](#instructors) • [Chat With a Trainer on WhatsApp](${WHATSAPP_LINK})`;
  }
  // 6. Pricing & Membership Plans
  else if (intent === "pricing" || lastMsg.includes("price") || lastMsg.includes("pricing") || lastMsg.includes("cost") || lastMsg.includes("fee") || lastMsg.includes("how much")) {
    response =
      "✨ **Simple Membership Plans (All Live Batches Included):**\n\n" +
      "• **2 Months:** ₹3,750 total investment (Includes female batches, 6 daily slots, diet plan)\n" +
      "• **3 Months (Most Popular):** ₹2,899 / month (Includes Face Yoga masterclass, vault, mentor)\n" +
      "• **6 Months (Deep Transformation):** ₹4,950 total investment (Ayurvedic consult, diet tuning)\n\n" +
      "🎁 **Special 10% Extra Discount:** Book directly via WhatsApp to claim an instant 10% off!\n\n" +
      `[View Membership Plans](#pricing) • [Claim 10% Discount on WhatsApp](${WHATSAPP_LINK})`;
  }
  // 7. Schedule & Timings
  else if (intent === "schedule" || lastMsg.includes("timing") || lastMsg.includes("schedule") || lastMsg.includes("time") || lastMsg.includes("slot")) {
    response =
      "🌅 **Xanso Daily Live Batches (Mon - Fri, IST on Zoom):**\n\n" +
      "**Morning Awaken:**\n" +
      "• **6:00 AM:** Brahma Muhurta Flow (Apeksha Chauhan)\n" +
      "• **7:00 AM:** Classical Hatha (Apeksha Chauhan)\n" +
      "• **8:00 AM:** Strength & Alignment (Navya Gupta)\n" +
      "• **9:00 AM:** Gentle Flow & Breath (Muskaan Wahi)\n\n" +
      "**Evening Unwind:**\n" +
      "• **4:30 PM:** Neck & Spine Relief (Neelam Rana)\n" +
      "• **5:30 PM:** Sunset Hatha (Neelam Rana)\n" +
      "• **6:30 PM:** Facial Reboot & Core (Navya Gupta)\n" +
      "• **7:30 PM:** Restorative Yin (Muskaan Wahi)\n\n" +
      "✨ *Flexible Switching:* If you miss your batch, attend any other slot on the same day!\n\n" +
      `[See Daily Batch Timings](#schedule) • [Book Batch on WhatsApp](${WHATSAPP_LINK})`;
  }
  // 8. Beginners
  else if (lastMsg.includes("beginner") || lastMsg.includes("stiff") || lastMsg.includes("never") || lastMsg.includes("new")) {
    response =
      "🌱 **Complete Beginners are Warmly Welcomed:**\n\n" +
      "• **Over 60% of our members** started with zero flexibility and stiff joints.\n" +
      "• Instructors demonstrate step-by-step regressions and show prop usage (cushions, belts, yoga blocks).\n" +
      "• Safe, low-impact posture focus ensures you build strength and mobility without any risk of injury.\n\n" +
      `[Start as a Beginner](#programs) • [Talk With Our Mentor on WhatsApp](${WHATSAPP_LINK})`;
  }
  // 9. Live Format vs Recorded
  else if (intent === "support" || lastMsg.includes("zoom") || lastMsg.includes("recorded") || lastMsg.includes("live")) {
    response =
      "📹 **100% Live Interactive Classes (Not Pre-Recorded):**\n\n" +
      "• All Xanso sessions are conducted live on Zoom.\n" +
      "• Your instructor actively watches your practice and gives **real-time verbal corrections** and alignment cues.\n" +
      "• Experience the accountability, energy, and precision of a personal yoga shala right from home.\n\n" +
      `[View Daily Live Schedule](#schedule) • [Book Trial Class on WhatsApp](${WHATSAPP_LINK})`;
  }
  // 10. Booking, Trials, & WhatsApp
  else if (intent === "booking" || lastMsg.includes("book") || lastMsg.includes("trial") || lastMsg.includes("whatsapp")) {
    response =
      "🧘‍♀️ **Join Xanso Fitness Live Batches:**\n\n" +
      "• **Official WhatsApp Hotline:** +91 91058 37321\n" +
      "• **Instant Perk:** Claim an **extra 10% discount** when booking through WhatsApp!\n" +
      "• Includes all 8 daily live Zoom slots, female-only options, and free personalized Indian diet plan.\n\n" +
      `👉 [Click to Book on WhatsApp Now](${WHATSAPP_LINK}) or explore [Membership Plans](#pricing).`;
  }
  // 11. Casual Greeting / Default Welcome
  else {
    response =
      "Namaste! 🙏 Welcome to **Xanso Fitness** — live interactive yoga from the comfort of your home.\n\n" +
      "How may I guide your practice today?\n" +
      "• **Daily Live Batches:** 8 flexible weekday slots (Morning & Evening IST)\n" +
      "• **Dedicated Female Batches:** Private & comfortable with certified female instructors\n" +
      "• **Free Indian Diet Plan & 7-Day Face Yoga:** Included free with every membership\n" +
      "• **Desk Posture & Pain Relief:** Targeted spine & cervical decompression\n\n" +
      `Ask me any question or [Explore Daily Schedule](#schedule) / [Book on WhatsApp](${WHATSAPP_LINK})!`;
  }

  return {
    responseOutput: response,
  };
}

// ==============================================================================
// 4. Graph Construction & Compilation
// ==============================================================================
export const workflow = new StateGraph(AgentStateAnnotation)
  .addNode("classifier", classifierNode)
  .addNode("assessment", assessmentNode)
  .addNode("rag", ragNode)
  .addEdge(START, "classifier")
  .addConditionalEdges("classifier", (state) => {
    if (state.intent === "assessment") {
      return "assessment";
    }
    return "rag";
  })
  .addEdge("assessment", END)
  .addEdge("rag", END);

export const agentApp = workflow.compile();

/**
 * Convenience execution helper invoked by /api/chat or server actions.
 */
export async function runWellnessAgent(
  messages: ChatMessage[],
  userId: string = "anonymous"
): Promise<{ text: string; intent: AgentIntent }> {
  const apiKey = process.env.OPENAI_API_KEY;
  const isRealOpenAiKey = apiKey && !apiKey.includes("placeholder") && apiKey.startsWith("sk-");

  if (isRealOpenAiKey) {
    try {
      const systemPrompt = `You are the Xanso Wellness Concierge, an elite fitness and wellness guide for Xanso Fitness (https://xanso.in).
BRAND FACTS & PLATFORM DETAILS:
- 100% Live interactive Zoom yoga classes with real-time posture correction (never pre-recorded).
- 8 flexible batches every weekday (IST). 4 morning (6:00, 7:00, 8:00, 9:00 AM) and 4 evening (4:30, 5:30, 6:30, 7:30 PM). Flexible batch switching if you miss a slot.
- Dedicated Female-Only Batches in morning & evening slots.
- Certified Instructors: Neelam Rana, Muskaan Wahi, Apeksha Chauhan, Navya Gupta (Ayush & Yoga Alliance certified, 25+ yrs combined experience).
- Free Personalized Indian Diet Plan formulated by nutritionists included with every membership.
- 7-Day Signature Face Yoga masterclass with Muskaan Wahi included free.
- Pricing: 2 Months (₹3,750), 3 Months (₹2,899/mo), 6 Months (₹4,950). Direct WhatsApp booking gets extra 10% discount!
- WhatsApp Hotline: +91 91058 37321 (${WHATSAPP_LINK}).
- Suitable for complete beginners (over 60% start as beginners, props & gentle modifications provided).
OPERATING RULES:
- Keep responses concise, warm, and highly actionable (under 3-4 sentences or structured bullet points).
- Always map advice to Xanso features (Female batches, diet plan, live slots, WhatsApp booking).
- Use Markdown formatting and include links like [See Schedule](#schedule), [Membership Plans](#pricing), or [WhatsApp](https://wa.me/919105837321).
- Never say 'As an AI...'. You are the Xanso Guide.`;

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: systemPrompt },
            ...messages.map((m) => ({ role: m.role, content: m.content })),
          ],
          temperature: 0.7,
          max_tokens: 450,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const text = data.choices?.[0]?.message?.content;
        if (text) {
          return { text, intent: "casual_chat" };
        }
      }
    } catch (e) {
      console.warn("OpenAI fetch failed, falling back to Xanso StateGraph:", e);
    }
  }

  // Execute LangGraph State Machine (ClassifierNode -> AssessmentNode / RAG_Node)
  const result = await agentApp.invoke({
    messages,
    userId,
    intent: "casual_chat",
    assessmentProgress: {
      currentQuestionIndex: 0,
      answers: {},
      isComplete: false,
    },
    recommendedProgramId: null,
  });

  return {
    text: result.responseOutput || "Namaste. Let us honor your practice at Xanso.",
    intent: result.intent,
  };
}
