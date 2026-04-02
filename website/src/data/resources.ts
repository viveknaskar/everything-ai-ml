export interface Resource {
  title: string;
  url: string;
  description?: string;
  badge?: string;
}

export interface SubSection {
  heading: string;
  resources: Resource[];
}

export interface Section {
  id: string;
  title: string;
  icon: string;
  resources?: Resource[];
  subsections?: SubSection[];
}

export const sections: Section[] = [
  {
    id: "key-concepts",
    title: "AI/ML Key Concepts",
    icon: "🧠",
    resources: [
      { title: "Supervised Learning", url: "https://medium.com/@kodeinkgp/supervised-learning-a-comprehensive-guide-7032b34d5097" },
      { title: "Unsupervised Learning", url: "https://cloud.google.com/discover/what-is-unsupervised-learning" },
      { title: "Reinforcement Learning", url: "https://spinningup.openai.com/en/latest/user/introduction.html" },
      { title: "Deep Learning", url: "https://www.datacamp.com/tutorial/tutorial-deep-learning-tutorial" },
      { title: "Natural Language Processing (NLP)", url: "https://medium.com/@ageitgey/natural-language-processing-is-fun-9a0bff37854e" },
      { title: "Computer Vision", url: "https://www.geeksforgeeks.org/computer-vision/" },
      { title: "Generative Adversarial Networks (GANs)", url: "https://aws.amazon.com/what-is/gan/" },
      { title: "Dimensionality Reduction", url: "https://scikit-learn.org/stable/modules/decomposition.html" },
      { title: "Clustering Algorithms", url: "https://scikit-learn.org/stable/modules/clustering.html" },
      { title: "Bayesian Inference", url: "https://www.statlect.com/fundamentals-of-statistics/Bayesian-inference" },
      { title: "Time Series Analysis", url: "https://otexts.com/fpp3/" },
      { title: "Self-Supervised Learning", url: "https://lilianweng.github.io/posts/2021-05-31-self-supervised-learning/" },
    ],
    subsections: [
      {
        heading: "Interactive Visualizations",
        resources: [
          { title: "MLU-Explain", url: "https://mlu-explain.github.io", description: "Interactive visual explanations of core ML concepts" },
          { title: "CNN Explainer", url: "https://poloclub.github.io/cnn-explainer/", description: "In-browser interactive explainer for Convolutional Neural Networks" },
          { title: "Transformer Explainer", url: "https://poloclub.github.io/transformer-explainer/", description: "Interactive visualization of the Transformer architecture" },
        ],
      },
    ],
  },
  {
    id: "building-blocks",
    title: "AI/ML Building Blocks",
    icon: "🔧",
    resources: [
      { title: "Mathematics for Machine Learning (UC Berkeley)", url: "https://gwthomas.github.io/docs/math4ml.pdf" },
      { title: "Linear Algebra for ML – MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/" },
      { title: "Probability & Statistics – Stanford", url: "https://www.youtube.com/watch?v=2MuDZIAzBMY&list=PLoROMvodv4rOpr_A7B9SriE_iZmkanvUg" },
      { title: "Calculus for Optimization – Khan Academy", url: "https://www.khanacademy.org/math/multivariable-calculus" },
      { title: "Python for ML – Coursera", url: "https://www.coursera.org/learn/ai-python-for-beginners" },
      { title: "Optimization Techniques", url: "https://www.geeksforgeeks.org/optimization-algorithms-in-machine-learning/" },
      { title: "Data Preprocessing & Feature Engineering", url: "https://www.geeksforgeeks.org/what-is-feature-engineering/" },
      { title: "Model Evaluation & Metrics", url: "https://scikit-learn.org/stable/modules/model_evaluation.html" },
      { title: "Regularization Techniques", url: "https://www.geeksforgeeks.org/regularization-in-machine-learning/" },
      { title: "Loss Functions", url: "https://www.datacamp.com/tutorial/loss-function-in-machine-learning" },
      { title: "Activation Functions", url: "https://ml-cheatsheet.readthedocs.io/en/latest/activation_functions.html" },
      { title: "Hyperparameter Tuning", url: "https://www.geeksforgeeks.org/hyperparameter-tuning/" },
    ],
  },
  {
    id: "roadmap",
    title: "AI/ML Roadmap",
    icon: "🗺️",
    subsections: [
      {
        heading: "1. Learn Python and Core Libraries",
        resources: [
          { title: "Intro Python – Harvard CS50", url: "https://cs50.harvard.edu/python/2022/" },
          { title: "Advanced Python – Harvard AI with Python", url: "https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python" },
          { title: "NumPy Quickstart", url: "https://numpy.org/devdocs/user/quickstart.html" },
          { title: "Pandas Tutorial", url: "https://www.w3schools.com/python/pandas/default.asp" },
          { title: "Matplotlib Tutorials", url: "https://matplotlib.org/stable/tutorials/index.html" },
          { title: "Scikit-learn Tutorial", url: "https://scikit-learn.org/1.4/tutorial/index.html" },
        ],
      },
      {
        heading: "2. Build a Strong Math Foundation",
        resources: [
          { title: "Linear Algebra – MIT", url: "https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/" },
          { title: "Probability & Statistics – Stanford", url: "https://web.stanford.edu/class/stats116/syllabus.html" },
          { title: "Multivariable Calculus – Khan Academy", url: "https://www.khanacademy.org/math/multivariable-calculus" },
        ],
      },
      {
        heading: "3. Learn ML Fundamentals",
        resources: [
          { title: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
          { title: "Machine Learning by Andrew Ng", url: "https://www.coursera.org/learn/machine-learning" },
          { title: "The Hundred-Page ML Book", url: "http://ema.cri-info.cm/wp-content/uploads/2019/07/2019BurkovTheHundred-pageMachineLearning.pdf" },
        ],
      },
      {
        heading: "4. Build Practical Experience",
        resources: [
          { title: "Practical Deep Learning for Coders – fast.ai", url: "https://course.fast.ai/" },
          { title: "Structured ML Projects – Coursera", url: "https://www.coursera.org/learn/machine-learning-projects" },
          { title: "Build GPT from Scratch – Karpathy", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" },
        ],
      },
      {
        heading: "5. Specialize",
        resources: [
          { title: "NLP Course – Hugging Face", url: "https://huggingface.co/learn/nlp-course/chapter1/1" },
          { title: "Deep RL Course – Hugging Face", url: "https://huggingface.co/learn/deep-rl-course/unit0/introduction" },
          { title: "Computer Vision – Kaggle", url: "https://www.kaggle.com/learn/computer-vision" },
          { title: "Deep Learning – CS231n Stanford", url: "https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PLSVEhWrZWDHQTBmWZufjxpw3s8sveJtnJ" },
          { title: "Computer Vision, LLM, VLM Courses – PixelBank", url: "https://pixelbank.dev" },
        ],
      },
      {
        heading: "6. Learn MLOps",
        resources: [
          { title: "Intro to MLOps", url: "https://ml-ops.org/" },
          { title: "Three Levels of ML Software", url: "https://ml-ops.org/content/three-levels-of-ml-software" },
          { title: "Full Stack Deep Learning", url: "https://fullstackdeeplearning.com/course/2022/" },
        ],
      },
      {
        heading: "7. Read Research Papers",
        resources: [
          { title: "ArXiv", url: "https://arxiv.org/", description: "Preprint server for ML and AI research" },
        ],
      },
    ],
  },
  {
    id: "genai-general",
    title: "Generative AI – General",
    icon: "✨",
    subsections: [
      {
        heading: "Recommended Talks",
        resources: [
          { title: "Andrej Karpathy – How I Use LLMs", url: "https://www.youtube.com/watch?v=EWvNQjAaOHw" },
          { title: "Andrej Karpathy – Intro to Large Language Models (1hr)", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g" },
        ],
      },
      {
        heading: "Visual Explainers",
        resources: [
          { title: "The Illustrated Transformer – Jay Alammar", url: "http://jalammar.github.io/illustrated-transformer/", description: "Definitive visual guide to the Transformer architecture" },
          { title: "3D Visualization of LLMs – Brendan Bycroft", url: "http://bbycroft.net/llm", description: "Step-by-step 3D walkthrough of transformer execution" },
        ],
      },
      {
        heading: "Learning Paths",
        resources: [
          { title: "Beginner: Introduction to Generative AI", url: "https://www.cloudskillsboost.google/paths/118", badge: "Beginner" },
          { title: "Intermediate: Gemini for Google Cloud", url: "https://www.cloudskillsboost.google/paths/236", badge: "Intermediate" },
          { title: "Advanced: Generative AI for Developers", url: "https://www.cloudskillsboost.google/paths/183", badge: "Advanced" },
        ],
      },
      {
        heading: "Coursera Courses",
        resources: [
          { title: "GenAI for Executives & Business Leaders: An Introduction", url: "https://www.coursera.org/learn/genai-for-executives-and-business-leaders-an-introduction" },
          { title: "GenAI for Execs & Business Leaders: Integration Strategy", url: "https://www.coursera.org/learn/genai-for-execs-and-business-leaders-integration-strategy" },
          { title: "GenAI for Product R&D Teams", url: "https://www.coursera.org/learn/genai-for-product-rd-teams" },
          { title: "GenAI for Product Managers", url: "https://www.coursera.org/learn/genai-for-product-managers" },
        ],
      },
    ],
  },
  {
    id: "genai-advanced",
    title: "Generative AI – Advanced",
    icon: "🚀",
    subsections: [
      {
        heading: "Gemini",
        resources: [
          { title: "Large Multimodal Model Prompting with Gemini – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/large-multimodal-model-prompting-with-gemini/" },
          { title: "Gemini for Application Developers – Coursera", url: "https://www.coursera.org/learn/gemini-for-application-developers" },
          { title: "Gemini CLI: Code & Create with an Open-Source Agent", url: "https://www.deeplearning.ai/short-courses/gemini-cli-code-and-create-with-an-open-source-agent/" },
        ],
      },
      {
        heading: "Google ADK",
        resources: [
          { title: "Building Live Voice Agents with Google's ADK – DeepLearning.AI", url: "https://learn.deeplearning.ai/courses/building-live-voice-agents-with-googles-adk/information" },
          { title: "Understand Google Cloud Agents – Coursera", url: "https://www.coursera.org/learn/understand-google-cloud-agents" },
        ],
      },
      {
        heading: "Model Context Protocol (MCP)",
        resources: [
          { title: "Intro to Model Context Protocol (MCP) – Coursera (Scrimba)", url: "https://www.coursera.org/learn/intro-to-model-context-protocol-mcp", badge: "NEW" },
        ],
      },
    ],
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    icon: "💬",
    resources: [
      { title: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/", description: "Comprehensive guide to prompt engineering techniques" },
      { title: "Prompt Engineering – OpenAI API", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
      { title: "ChatGPT Prompt Engineering for Developers – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" },
      { title: "Google Prompting Essentials", url: "https://grow.google/prompting-essentials/" },
    ],
  },
  {
    id: "rag",
    title: "RAG (Retrieval-Augmented Generation)",
    icon: "🔍",
    resources: [
      { title: "Building and Evaluating Advanced RAG Applications – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/" },
      { title: "Knowledge Graphs for RAG – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/knowledge-graphs-rag/" },
      { title: "Building Agentic RAG with LlamaIndex – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/" },
    ],
  },
  {
    id: "fine-tuning",
    title: "Fine-tuning",
    icon: "⚙️",
    resources: [
      { title: "Finetuning Large Language Models – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/finetuning-large-language-models/" },
      { title: "Generative AI Advanced Fine-Tuning for LLMs – Coursera (IBM)", url: "https://www.coursera.org/learn/generative-ai-advanced-fine-tuning-for-llms" },
      { title: "Fine-tuning & RL for LLMs: Intro to Post-Training – DeepLearning.AI", url: "https://www.deeplearning.ai/courses/fine-tuning-and-reinforcement-learning-for-llms-intro-to-post-training/" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    icon: "🛠️",
    subsections: [
      {
        heading: "LangChain",
        resources: [
          { title: "GitHub – langchain-ai/langchain", url: "https://github.com/langchain-ai/langchain" },
          { title: "LangChain Documentation", url: "https://python.langchain.com/docs/get_started/introduction" },
          { title: "LangChain for LLM Application Development – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/" },
          { title: "LangChain: Chat with Your Data – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/" },
          { title: "Functions, Tools and Agents with LangChain – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/" },
        ],
      },
      {
        heading: "LangGraph",
        resources: [
          { title: "GitHub – langchain-ai/langgraph", url: "https://github.com/langchain-ai/langgraph" },
          { title: "LangGraph Tutorials", url: "https://langchain-ai.github.io/langgraph/tutorials/introduction/" },
          { title: "AI Agents in LangGraph – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/" },
        ],
      },
      {
        heading: "CrewAI",
        resources: [
          { title: "GitHub – crewAIInc/crewAI", url: "https://github.com/crewAIInc/crewAI" },
          { title: "CrewAI Official Site", url: "https://www.crewai.com/" },
          { title: "Multi AI Agent Systems with crewAI – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/" },
          { title: "Practical Multi AI Agents and Advanced Use Cases with crewAI", url: "https://www.deeplearning.ai/short-courses/practical-multi-ai-agents-and-advanced-use-cases-with-crewai/" },
        ],
      },
      {
        heading: "Google Agent Development Kit (ADK)",
        resources: [
          { title: "Google ADK Documentation", url: "https://google.github.io/adk-docs/" },
          { title: "GitHub – google/adk-python", url: "https://github.com/google/adk-python" },
        ],
      },
      {
        heading: "Agno (formerly Phidata)",
        resources: [
          { title: "Agno Documentation – Agents", url: "https://docs.agno.com/introduction/agents" },
          { title: "GitHub – agno-agi/agno", url: "https://github.com/agno-agi/agno" },
        ],
      },
    ],
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    icon: "🤖",
    resources: [
      { title: "Agent Skills – Open Standard for Extending AI Agent Capabilities", url: "https://agentskills.io/home", description: "Open standard for building reusable skills that extend AI agents across 30+ platforms including Claude, GitHub Copilot, and OpenAI Codex", badge: "NEW" },
      { title: "Introduction to Agent2Agent (A2A) Protocol – Google Cloud", url: "https://www.youtube.com/watch?v=Fbr_Solax1w" },
      { title: "AI Agents Series – FuturMinds (YouTube Playlist)", url: "https://www.youtube.com/playlist?list=PL51gEhIbWzJESLuGJUGkG2VZzrPO0H0Rc" },
      { title: "Evaluating AI Agents – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/evaluating-ai-agents/" },
      { title: "LLMs as Operating Systems: Agent Memory – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/llms-as-operating-systems-agent-memory/" },
      { title: "AI Agents in LangGraph – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/" },
      { title: "AI Agentic Design Patterns with AutoGen – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/ai-agentic-design-patterns-with-autogen/" },
      { title: "Multi AI Agent Systems with crewAI – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/" },
      { title: "Building Agentic RAG with LlamaIndex – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/" },
      { title: "Event-Driven Agentic Document Workflows – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/event-driven-agentic-document-workflows/" },
    ],
  },
  {
    id: "mlops",
    title: "MLOps and GenAIOps",
    icon: "⚡",
    resources: [
      { title: "MLOps for Generative AI – Google Cloud Skill Boost", url: "https://www.cloudskillsboost.google/course_templates/927" },
      { title: "GenAIOps: Operationalize Generative AI (YouTube)", url: "https://www.youtube.com/watch?v=UfUoG_Ijgq4" },
      { title: "MLOps.org", url: "https://ml-ops.org/" },
      { title: "Full Stack Deep Learning", url: "https://fullstackdeeplearning.com/course/2022/" },
      { title: "Systems & Networking for AI Engineers – PixelBank", url: "https://pixelbank.dev/systems" },
    ],
  },
  {
    id: "security",
    title: "Security",
    icon: "🔒",
    resources: [
      { title: "OWASP Top 10 for Large Language Model Applications", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
      { title: "Google's Secure AI Framework (SAIF)", url: "https://safety.google/cybersecurity-advancements/saif/" },
      { title: "The Dawn of Agentic AI in Security Operations – Google Cloud", url: "https://cloud.google.com/blog/products/identity-security/the-dawn-of-agentic-ai-in-security-operations-at-rsac-2025" },
    ],
  },
  {
    id: "google-cloud",
    title: "Google Cloud AI and ML",
    icon: "☁️",
    subsections: [
      {
        heading: "Learning Paths on Cloud Skills Boost",
        resources: [
          { title: "Gemini for Google Cloud", url: "https://www.cloudskillsboost.google/paths/236" },
          { title: "Beginner: Introduction to Generative AI", url: "https://www.cloudskillsboost.google/paths/118", badge: "Beginner" },
          { title: "Intermediate: Generative AI Labs with Gemini", url: "https://www.cloudskillsboost.google/paths/1872", badge: "Intermediate" },
          { title: "Deploy and Manage Generative AI Models", url: "https://www.cloudskillsboost.google/paths/887" },
          { title: "Machine Learning Engineer Learning Path", url: "https://www.cloudskillsboost.google/paths/17" },
          { title: "Build and Modernize Applications With Generative AI", url: "https://www.cloudskillsboost.google/paths/878" },
          { title: "Integrate Generative AI Into Your Data Workflow", url: "https://www.cloudskillsboost.google/paths/882" },
          { title: "Generate Smarter Generative AI Outputs", url: "https://www.cloudskillsboost.google/paths/880" },
        ],
      },
    ],
  },
  {
    id: "cost-optimization",
    title: "AI Cost Optimization",
    icon: "💰",
    resources: [
      { title: "Three Proven Strategies for Optimizing AI Costs – Google Cloud", url: "https://cloud.google.com/transform/three-proven-strategies-for-optimizing-ai-costs" },
      { title: "Reduce Cost and Improve Your AI Workloads – Google Cloud", url: "https://cloud.google.com/blog/products/ai-machine-learning/reduce-cost-and-improve-your-ai-workloads" },
      { title: "Vertex AI Pricing", url: "https://cloud.google.com/vertex-ai/pricing" },
    ],
  },
  {
    id: "adopting-genai",
    title: "Adopting GenAI in Organizations",
    icon: "🏢",
    resources: [
      { title: "Generative AI for Executives and Business Leaders Specialization – Coursera (IBM)", url: "https://www.coursera.org/specializations/generative-ai-for-executives-and-business-leaders" },
      { title: "GenAI for Execs & Business Leaders: Integration Strategy – Coursera", url: "https://www.coursera.org/learn/generative-ai-for-executives-and-business-leaders-integration-strategy" },
      { title: "GenAI for Everyone – Coursera (DeepLearning.AI)", url: "https://www.coursera.org/learn/genai-for-everyone" },
    ],
  },
  {
    id: "ai-productivity",
    title: "AI Tools for Productivity",
    icon: "⚡",
    resources: [
      { title: "Maximize Productivity with AI Tools – Coursera (Google)", url: "https://www.coursera.org/learn/google-maximize-productivity-with-ai-tools" },
      { title: "Google AI Professional Certificate – Coursera", url: "https://www.coursera.org/professional-certificates/google-ai" },
      { title: "Microsoft 365 Copilot for Productivity – Coursera (Microsoft)", url: "https://www.coursera.org/professional-certificates/microsoft-365-copilot-for-productivity" },
    ],
  },
  {
    id: "quantum",
    title: "Quantum Computing and PQC",
    icon: "⚛️",
    resources: [
      { title: "Introduction to Post-Quantum Cryptography – edX (UMBC)", url: "https://www.edx.org/learn/computer-science/university-system-of-maryland-introduction-to-post-quantum-cryptography" },
      { title: "Practical Introduction to Quantum-Safe Cryptography – IBM Quantum", url: "https://learning.quantum.ibm.com/course/practical-introduction-to-quantum-safe-cryptography/quantum-safe-cryptography" },
    ],
  },
  {
    id: "ai-sdlc",
    title: "AI Augmented SDLC",
    icon: "💻",
    resources: [
      { title: "Generative AI for Software Development Specialization – DeepLearning.AI", url: "https://www.deeplearning.ai/courses/generative-ai-for-software-development/" },
      { title: "AI-Powered Software Development – Coursera", url: "https://www.coursera.org/specializations/ai-powered-software-development-certification" },
      { title: "GitHub Copilot Fundamentals – Microsoft Learn", url: "https://learn.microsoft.com/en-us/training/paths/copilot/" },
    ],
  },
  {
    id: "innovations",
    title: "Coming Innovations in LLMs",
    icon: "🔮",
    resources: [
      { title: "Google DeepMind Blog", url: "https://deepmind.google/discover/blog/", description: "Latest research and announcements from Google DeepMind" },
    ],
  },
  {
    id: "courses",
    title: "Courses",
    icon: "🎓",
    resources: [
      { title: "Machine Learning by Andrew Ng (Coursera)", url: "https://www.coursera.org/learn/machine-learning" },
      { title: "AI For Everyone by Andrew Ng (Coursera)", url: "https://www.coursera.org/learn/ai-for-everyone" },
      { title: "Deep Learning Specialization (Coursera)", url: "https://www.coursera.org/specializations/deep-learning" },
      { title: "Machine Learning with Python (edX – IBM)", url: "https://www.edx.org/course/machine-learning-with-python-a-practical-introduct" },
      { title: "Reinforcement Learning Specialization (Coursera)", url: "https://www.coursera.org/specializations/reinforcement-learning" },
      { title: "CS231n: CNNs for Visual Recognition (Stanford)", url: "https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PLSVEhWrZWDHQTBmWZufjxpw3s8sveJtnJ" },
      { title: "RL Course by David Silver", url: "https://www.youtube.com/watch?v=2pWv7GOvuf0&list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ" },
      { title: "NLP with Deep Learning – Stanford CS224n", url: "https://www.youtube.com/watch?v=rmVRLeJRkl4&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4" },
      { title: "Practical Deep Learning for Coders – fast.ai", url: "https://course.fast.ai/" },
      { title: "CV, LLM, VLM Courses – PixelBank", url: "https://pixelbank.dev" },
    ],
  },
  {
    id: "certifications",
    title: "Certifications",
    icon: "🏆",
    resources: [
      { title: "AWS Certified Machine Learning Engineer – Associate", url: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/" },
      { title: "AWS Certified AI Practitioner – Skill Builder", url: "https://skillbuilder.aws/" },
      { title: "Microsoft Certified: Azure AI Engineer Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/" },
      { title: "Stanford AI and Machine Learning Certificate", url: "https://online.stanford.edu/programs/artificial-intelligence-professional-program" },
    ],
  },
  {
    id: "books",
    title: "Books",
    icon: "📚",
    resources: [
      { title: "Hands-On Large Language Models – Jay Alammar & Maarten Grootendorst", url: "https://www.amazon.com/Hands-Large-Language-Models-Understanding/dp/1098150961", description: "GitHub notebooks available" },
      { title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow", url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/" },
      { title: "AI Engineering: Building Applications with Foundational Models", url: "https://www.oreilly.com/library/view/ai-engineering/9781098166298/" },
      { title: "Introduction to Machine Learning Interviews – Chip Huyen", url: "https://huyenchip.com/ml-interviews-book/" },
      { title: "Designing Data-Intensive Applications", url: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/" },
      { title: "Designing Machine Learning Systems", url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/" },
      { title: "Deep Learning (Goodfellow, Bengio, Courville)", url: "https://www.deeplearningbook.org/" },
      { title: "Patterns, Predictions, and Actions – Hardt & Recht", url: "https://mlstory.org/pdf/patterns.pdf", description: "Free textbook covering supervised learning, deep learning, causal inference, and RL" },
    ],
  },
  {
    id: "papers",
    title: "Must-Read Research Papers",
    icon: "📄",
    resources: [
      { title: "Attention Is All You Need (Google)", url: "https://arxiv.org/pdf/1706.03762" },
      { title: "DeepSeek R1: Incentivizing Reasoning Capability in LLMs", url: "https://arxiv.org/pdf/2501.12948" },
      { title: "Monolith: Real Time Recommendation System (TikTok/ByteDance)", url: "https://arxiv.org/pdf/2209.07663" },
      { title: "BERT: Pre-training of Deep Bidirectional Transformers", url: "https://arxiv.org/pdf/1810.04805" },
      { title: "Understanding Deep Learning Requires Rethinking Generalization", url: "https://arxiv.org/pdf/1611.03530" },
      { title: "Playing Atari with Deep Reinforcement Learning", url: "https://arxiv.org/pdf/1312.5602" },
      { title: "Distilling the Knowledge in a Neural Network", url: "https://arxiv.org/pdf/1503.02531" },
      { title: "OpenAI Key Papers in Deep RL", url: "https://spinningup.openai.com/en/latest/spinningup/keypapers.html" },
    ],
    subsections: [
      {
        heading: "Research Discovery Tools",
        resources: [
          { title: "Ai2 Asta", url: "https://asta.allen.ai", description: "Agentic research assistant by Allen Institute for AI; discovers and synthesizes literature across 200M+ papers" },
        ],
      },
    ],
  },
  {
    id: "tools-frameworks",
    title: "Tools and Frameworks",
    icon: "🔨",
    resources: [
      { title: "PyTorch", url: "https://www.youtube.com/watch?v=V_xro1bcAuA" },
      { title: "TensorFlow", url: "https://www.youtube.com/watch?v=tPYj3fFJGjk" },
      { title: "TensorFlow Playground", url: "https://playground.tensorflow.org", description: "Browser-based neural network experimentation tool" },
      { title: "Scikit-Learn", url: "https://scikit-learn.org/stable/getting_started.html" },
      { title: "XGBoost", url: "https://xgboost.readthedocs.io/en/latest/" },
      { title: "Keras", url: "https://keras.io/getting_started/" },
      { title: "Whisper – OpenAI", url: "https://github.com/openai/whisper" },
    ],
  },
  {
    id: "youtube",
    title: "YouTube Channels",
    icon: "▶️",
    resources: [
      { title: "Stanford Online", url: "https://www.youtube.com/watch?v=jGwO_UgTS7I&list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU" },
      { title: "Andrej Karpathy", url: "https://www.youtube.com/watch?v=VMj-3S1tku0&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ" },
      { title: "FreeCodeCamp", url: "https://www.youtube.com/watch?v=i_LwzRVP7bg" },
      { title: "3Blue1Brown", url: "https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" },
      { title: "Sentdex", url: "https://www.youtube.com/watch?v=OGxgnH8y2NM&list=PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v" },
    ],
  },
  {
    id: "research-blogs",
    title: "Research Blogs",
    icon: "🔬",
    resources: [
      { title: "OpenAI Blog", url: "https://openai.com/news/" },
      { title: "Google DeepMind", url: "https://deepmind.google/discover/blog/" },
      { title: "Google Research", url: "https://research.google/blog/" },
      { title: "Apple ML Research", url: "https://machinelearning.apple.com/" },
      { title: "Amazon Science", url: "https://www.amazon.science/blog" },
      { title: "Microsoft AI", url: "https://www.microsoft.com/en-us/ai/blog/" },
      { title: "Meta AI Blog", url: "https://ai.meta.com/blog/" },
    ],
  },
  {
    id: "applied-blogs",
    title: "Applied ML Blogs",
    icon: "📝",
    resources: [
      { title: "AWS Machine Learning Blog", url: "https://aws.amazon.com/blogs/machine-learning/" },
      { title: "NVIDIA Deep Learning Blog", url: "https://blogs.nvidia.com/blog/category/deep-learning/" },
      { title: "AirBnB Engineering – AI & ML", url: "https://medium.com/airbnb-engineering/ai/home" },
      { title: "Spotify Engineering", url: "https://engineering.atspotify.com/" },
      { title: "Uber Engineering – AI", url: "https://eng.uber.com/category/articles/ai/" },
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com/" },
      { title: "Google AI Blog", url: "https://blog.google/technology/ai/" },
    ],
  },
  {
    id: "communities",
    title: "Communities",
    icon: "👥",
    resources: [
      { title: "r/LearnMachineLearning", url: "https://www.reddit.com/r/learnmachinelearning/" },
      { title: "Chip Huyen MLOps Discord", url: "https://discord.com/invite/dzh728c5t3" },
      { title: "Hugging Face Discord", url: "https://discord.com/invite/hugging-face-879548962464493619" },
    ],
  },
  {
    id: "practice",
    title: "Practice Problems",
    icon: "🏋️",
    subsections: [
      {
        heading: "Easy",
        resources: [
          { title: "Matrix times Vector", url: "https://www.deep-ml.com/problems/1", badge: "Easy" },
          { title: "Titanic: ML from Disaster – Kaggle", url: "https://www.kaggle.com/c/titanic", badge: "Easy" },
          { title: "Predicting House Prices – Kaggle", url: "https://www.kaggle.com/competitions/home-data-for-ml-course", badge: "Easy" },
        ],
      },
      {
        heading: "Medium",
        resources: [
          { title: "Single Neuron", url: "https://www.deep-ml.com/problems/24", badge: "Medium" },
          { title: "K-Means Clustering", url: "https://www.deep-ml.com/problems/17", badge: "Medium" },
          { title: "Predicting Loan Default Risk – Kaggle", url: "https://www.kaggle.com/c/home-credit-default-risk", badge: "Medium" },
          { title: "Sentiment Analysis on Movie Reviews – Kaggle", url: "https://www.kaggle.com/c/sentiment-analysis-on-movie-reviews", badge: "Medium" },
        ],
      },
      {
        heading: "Hard",
        resources: [
          { title: "Decision Tree Learning", url: "https://www.deep-ml.com/problems/20", badge: "Hard" },
          { title: "Implement a Simple RNN with Backpropagation", url: "https://www.deep-ml.com/problems/62", badge: "Hard" },
          { title: "GANs for Image Synthesis – Kaggle", url: "https://www.kaggle.com/c/generative-dog-images", badge: "Hard" },
        ],
      },
    ],
  },
  {
    id: "interview",
    title: "Interview Preparation",
    icon: "🎯",
    resources: [
      { title: "Introduction to Machine Learning Interviews – Chip Huyen", url: "https://huyenchip.com/ml-interviews-book/" },
      { title: "ML Interviews MVP – GitHub", url: "https://github.com/khangich/machine-learning-interview" },
      { title: "Designing Machine Learning Systems", url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/" },
      { title: "ML System Design: 650 Case Studies – GitHub", url: "https://github.com/mallahyari/ml-practical-usecases", description: "Real-world ML use cases from 100+ companies including Netflix, Airbnb, and Uber" },
      { title: "ML Coding Questions – PixelBank", url: "https://pixelbank.dev/collections" },
    ],
  },
];
