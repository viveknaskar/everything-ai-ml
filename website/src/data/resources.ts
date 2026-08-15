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
      { title: "Supervised Learning", url: "https://medium.com/@kodeinkgp/supervised-learning-a-comprehensive-guide-7032b34d5097", description: "Comprehensive guide to supervised learning algorithms and use cases" },
      { title: "Unsupervised Learning", url: "https://cloud.google.com/discover/what-is-unsupervised-learning", description: "Google Cloud's explainer on unsupervised learning techniques" },
      { title: "Reinforcement Learning", url: "https://spinningup.openai.com/en/latest/user/introduction.html", description: "OpenAI Spinning Up's introduction to reinforcement learning concepts" },
      { title: "Deep Learning", url: "https://www.datacamp.com/tutorial/tutorial-deep-learning-tutorial", description: "DataCamp tutorial covering deep learning fundamentals" },
      { title: "Natural Language Processing (NLP)", url: "https://medium.com/@ageitgey/natural-language-processing-is-fun-9a0bff37854e", description: "Beginner-friendly introduction to natural language processing" },
      { title: "Computer Vision", url: "https://www.geeksforgeeks.org/computer-vision/", description: "GeeksforGeeks overview of computer vision fundamentals" },
      { title: "Generative Adversarial Networks (GANs)", url: "https://aws.amazon.com/what-is/gan/", description: "AWS explainer on how generative adversarial networks work" },
      { title: "Dimensionality Reduction", url: "https://scikit-learn.org/stable/modules/decomposition.html", description: "Scikit-learn guide to PCA and other dimensionality reduction methods" },
      { title: "Clustering Algorithms", url: "https://scikit-learn.org/stable/modules/clustering.html", description: "Scikit-learn documentation on clustering algorithms" },
      { title: "Bayesian Inference", url: "https://www.statlect.com/fundamentals-of-statistics/Bayesian-inference", description: "StatLect lecture notes on Bayesian inference fundamentals" },
      { title: "Time Series Analysis", url: "https://otexts.com/fpp3/", description: "Free online textbook on forecasting and time series analysis" },
      { title: "Self-Supervised Learning", url: "https://lilianweng.github.io/posts/2021-05-31-self-supervised-learning/", description: "Lilian Weng's deep dive into self-supervised learning methods" },
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
      { title: "Mathematics for Machine Learning (UC Berkeley)", url: "https://gwthomas.github.io/docs/math4ml.pdf", description: "UC Berkeley lecture notes covering the math foundations for ML" },
      { title: "Linear Algebra for ML – MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/", description: "MIT's full linear algebra course, free and self-paced" },
      { title: "Probability & Statistics – Stanford", url: "https://www.youtube.com/watch?v=2MuDZIAzBMY&list=PLoROMvodv4rOpr_A7B9SriE_iZmkanvUg", description: "Stanford lecture series on probability and statistics" },
      { title: "Calculus for Optimization – Khan Academy", url: "https://www.khanacademy.org/math/multivariable-calculus", description: "Khan Academy's free multivariable calculus course" },
      { title: "Python for ML – Coursera", url: "https://www.coursera.org/learn/ai-python-for-beginners", description: "Coursera course teaching Python fundamentals for AI" },
      { title: "Optimization Techniques", url: "https://www.geeksforgeeks.org/optimization-algorithms-in-machine-learning/", description: "Overview of optimization algorithms used in machine learning" },
      { title: "Data Preprocessing & Feature Engineering", url: "https://www.geeksforgeeks.org/what-is-feature-engineering/", description: "Guide to feature engineering and data preprocessing techniques" },
      { title: "Model Evaluation & Metrics", url: "https://scikit-learn.org/stable/modules/model_evaluation.html", description: "Scikit-learn documentation on model evaluation metrics" },
      { title: "Regularization Techniques", url: "https://www.geeksforgeeks.org/regularization-in-machine-learning/", description: "Overview of regularization methods used to prevent overfitting" },
      { title: "Loss Functions", url: "https://www.datacamp.com/tutorial/loss-function-in-machine-learning", description: "DataCamp tutorial on common loss functions in machine learning" },
      { title: "Activation Functions", url: "https://ml-cheatsheet.readthedocs.io/en/latest/activation_functions.html", description: "Cheat sheet covering neural network activation functions" },
      { title: "Hyperparameter Tuning", url: "https://www.geeksforgeeks.org/hyperparameter-tuning/", description: "Guide to hyperparameter tuning strategies" },
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
          { title: "Intro Python – Harvard CS50", url: "https://cs50.harvard.edu/python/2022/", description: "Harvard's CS50 introduction to Python programming" },
          { title: "Advanced Python – Harvard AI with Python", url: "https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python", description: "Harvard's CS50 course on AI with Python" },
          { title: "NumPy Quickstart", url: "https://numpy.org/devdocs/user/quickstart.html", description: "Official NumPy quickstart tutorial" },
          { title: "Pandas Tutorial", url: "https://www.w3schools.com/python/pandas/default.asp", description: "W3Schools tutorial on the Pandas library" },
          { title: "Matplotlib Tutorials", url: "https://matplotlib.org/stable/tutorials/index.html", description: "Official Matplotlib tutorials for data visualization" },
          { title: "Scikit-learn Tutorial", url: "https://scikit-learn.org/1.4/tutorial/index.html", description: "Official scikit-learn getting-started tutorial" },
        ],
      },
      {
        heading: "2. Build a Strong Math Foundation",
        resources: [
          { title: "Linear Algebra – MIT", url: "https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/", description: "MIT's full linear algebra course, free and self-paced" },
          { title: "Probability & Statistics – Stanford", url: "https://web.stanford.edu/class/stats116/syllabus.html", description: "Stanford course syllabus for probability and statistics" },
          { title: "Multivariable Calculus – Khan Academy", url: "https://www.khanacademy.org/math/multivariable-calculus", description: "Khan Academy's free multivariable calculus course" },
        ],
      },
      {
        heading: "3. Learn ML Fundamentals",
        resources: [
          { title: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course", description: "Google's free crash course covering core ML concepts" },
          { title: "Machine Learning by Andrew Ng", url: "https://www.coursera.org/learn/machine-learning", description: "Andrew Ng's foundational machine learning course on Coursera" },
          { title: "The Hundred-Page ML Book", url: "http://ema.cri-info.cm/wp-content/uploads/2019/07/2019BurkovTheHundred-pageMachineLearning.pdf", description: "Concise book covering the essentials of machine learning" },
        ],
      },
      {
        heading: "4. Build Practical Experience",
        resources: [
          { title: "Practical Deep Learning for Coders – fast.ai", url: "https://course.fast.ai/", description: "fast.ai's hands-on deep learning course for coders" },
          { title: "Structured ML Projects – Coursera", url: "https://www.coursera.org/learn/machine-learning-projects", description: "Andrew Ng's course on structuring machine learning projects" },
          { title: "Build GPT from Scratch – Karpathy", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY", description: "Andrej Karpathy's video walkthrough building a GPT model from scratch" },
        ],
      },
      {
        heading: "5. Specialize",
        resources: [
          { title: "NLP Course – Hugging Face", url: "https://huggingface.co/learn/nlp-course/chapter1/1", description: "Hugging Face's free course on NLP with transformers" },
          { title: "Deep RL Course – Hugging Face", url: "https://huggingface.co/learn/deep-rl-course/unit0/introduction", description: "Hugging Face's free course on deep reinforcement learning" },
          { title: "Computer Vision – Kaggle", url: "https://www.kaggle.com/learn/computer-vision", description: "Kaggle's hands-on computer vision mini-course" },
          { title: "Deep Learning – CS231n Stanford", url: "https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PLSVEhWrZWDHQTBmWZufjxpw3s8sveJtnJ", description: "Stanford's CS231n course on CNNs for visual recognition" },
          { title: "Computer Vision, LLM, VLM Courses – PixelBank", url: "https://pixelbank.dev", description: "PixelBank's course collection on CV, LLMs, and VLMs" },
        ],
      },
      {
        heading: "6. Learn MLOps",
        resources: [
          { title: "Intro to MLOps", url: "https://ml-ops.org/", description: "Introduction to MLOps principles and practices" },
          { title: "Three Levels of ML Software", url: "https://ml-ops.org/content/three-levels-of-ml-software", description: "ml-ops.org's breakdown of the three levels of ML software maturity" },
          { title: "Full Stack Deep Learning", url: "https://fullstackdeeplearning.com/course/2022/", description: "Course on building and deploying production ML systems" },
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
          { title: "Andrej Karpathy – How I Use LLMs", url: "https://www.youtube.com/watch?v=EWvNQjAaOHw", description: "Andrej Karpathy's walkthrough of his personal LLM workflow" },
          { title: "Andrej Karpathy – Intro to Large Language Models (1hr)", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g", description: "Andrej Karpathy's hour-long introduction to large language models" },
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
          { title: "Beginner: Introduction to Generative AI", url: "https://www.cloudskillsboost.google/paths/118", description: "Google Cloud Skills Boost path introducing generative AI fundamentals", badge: "Beginner" },
          { title: "Intermediate: Gemini for Google Cloud", url: "https://www.cloudskillsboost.google/paths/236", description: "Learning path on using Gemini within Google Cloud", badge: "Intermediate" },
          { title: "Advanced: Generative AI for Developers", url: "https://www.cloudskillsboost.google/paths/183", description: "Advanced Google Cloud path on building with generative AI", badge: "Advanced" },
        ],
      },
      {
        heading: "Coursera Courses",
        resources: [
          { title: "GenAI for Executives & Business Leaders: An Introduction", url: "https://www.coursera.org/learn/genai-for-executives-and-business-leaders-an-introduction", description: "Coursera course introducing generative AI concepts for business leaders" },
          { title: "GenAI for Execs & Business Leaders: Integration Strategy", url: "https://www.coursera.org/learn/genai-for-execs-and-business-leaders-integration-strategy", description: "Coursera course on integrating generative AI into business strategy" },
          { title: "GenAI for Product R&D Teams", url: "https://www.coursera.org/learn/genai-for-product-rd-teams", description: "Coursera course on applying generative AI in product R&D" },
          { title: "GenAI for Product Managers", url: "https://www.coursera.org/learn/genai-for-product-managers", description: "Coursera course on generative AI for product management" },
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
          { title: "Large Multimodal Model Prompting with Gemini – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/large-multimodal-model-prompting-with-gemini/", description: "DeepLearning.AI short course on prompting Gemini's multimodal capabilities" },
          { title: "Gemini for Application Developers – Coursera", url: "https://www.coursera.org/learn/gemini-for-application-developers", description: "Coursera course on building applications with Gemini" },
          { title: "Gemini CLI: Code & Create with an Open-Source Agent", url: "https://www.deeplearning.ai/short-courses/gemini-cli-code-and-create-with-an-open-source-agent/", description: "DeepLearning.AI course on using the open-source Gemini CLI agent" },
        ],
      },
      {
        heading: "Google ADK",
        resources: [
          { title: "Building Live Voice Agents with Google's ADK – DeepLearning.AI", url: "https://learn.deeplearning.ai/courses/building-live-voice-agents-with-googles-adk/information", description: "DeepLearning.AI course on building live voice agents with Google's Agent Development Kit" },
          { title: "Understand Google Cloud Agents – Coursera", url: "https://www.coursera.org/learn/understand-google-cloud-agents", description: "Coursera course explaining Google Cloud's agent-building blocks" },
        ],
      },
      {
        heading: "Model Context Protocol (MCP)",
        resources: [
          { title: "Intro to Model Context Protocol (MCP) – Coursera (Scrimba)", url: "https://www.coursera.org/learn/intro-to-model-context-protocol-mcp", description: "Scrimba course on Coursera introducing the Model Context Protocol", badge: "NEW" },
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
      { title: "Prompt Engineering – OpenAI API", url: "https://platform.openai.com/docs/guides/prompt-engineering", description: "OpenAI's official guide to prompt engineering techniques" },
      { title: "Prompt Engineering – OpenAI Developer Docs", url: "https://developers.openai.com/api/docs/guides/prompt-engineering", description: "Official OpenAI developer documentation on prompt engineering best practices" },
      { title: "Prompt Engineering Overview – Anthropic", url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview", description: "Official Anthropic guide to prompt engineering for Claude" },
      { title: "Claude Code Prompt Library", url: "https://code.claude.com/docs/en/prompt-library", description: "Copy-paste prompt examples for Claude Code, tagged by task and role" },
      { title: "ChatGPT Prompt Engineering for Developers – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/", description: "DeepLearning.AI short course on prompt engineering with ChatGPT" },
      { title: "Google Prompting Essentials", url: "https://grow.google/prompting-essentials/", description: "Google's free course on prompting essentials" },
      { title: "The Prompt Report: A Systematic Survey of Prompting Techniques", url: "https://arxiv.org/abs/2406.06608", description: "Comprehensive survey of 58 LLM prompting techniques with a unified taxonomy and vocabulary" },
      { title: "Anthropic Prompt Engineering Interactive Tutorial", url: "https://github.com/anthropics/prompt-eng-interactive-tutorial", description: "Hands-on Jupyter notebook tutorial covering prompt engineering techniques for Claude" },
      { title: "OpenAI Tokenizer", url: "https://platform.openai.com/tokenizer", description: "Interactive tool to visualize how text is tokenized and count tokens for OpenAI models" },
    ],
  },
  {
    id: "rag",
    title: "RAG (Retrieval-Augmented Generation)",
    icon: "🔍",
    resources: [
      { title: "Building and Evaluating Advanced RAG Applications – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/", description: "DeepLearning.AI short course on building and evaluating RAG systems" },
      { title: "Knowledge Graphs for RAG – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/knowledge-graphs-rag/", description: "DeepLearning.AI short course on combining knowledge graphs with RAG" },
      { title: "Building Agentic RAG with LlamaIndex – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/", description: "DeepLearning.AI short course on building agentic RAG pipelines with LlamaIndex" },
    ],
  },
  {
    id: "fine-tuning",
    title: "Fine-tuning",
    icon: "⚙️",
    resources: [
      { title: "Finetuning Large Language Models – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/finetuning-large-language-models/", description: "DeepLearning.AI short course on fine-tuning LLMs" },
      { title: "Generative AI Advanced Fine-Tuning for LLMs – Coursera (IBM)", url: "https://www.coursera.org/learn/generative-ai-advanced-fine-tuning-for-llms", description: "IBM's Coursera course on advanced LLM fine-tuning techniques" },
      { title: "Fine-tuning & RL for LLMs: Intro to Post-Training – DeepLearning.AI", url: "https://www.deeplearning.ai/courses/fine-tuning-and-reinforcement-learning-for-llms-intro-to-post-training/", description: "DeepLearning.AI course covering post-training techniques including fine-tuning and RL" },
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
          { title: "GitHub – langchain-ai/langchain", url: "https://github.com/langchain-ai/langchain", description: "Framework for building applications powered by LLMs" },
          { title: "LangChain Documentation", url: "https://python.langchain.com/docs/get_started/introduction", description: "Official LangChain documentation" },
          { title: "LangChain for LLM Application Development – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/", description: "DeepLearning.AI short course on building LLM apps with LangChain" },
          { title: "LangChain: Chat with Your Data – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/", description: "DeepLearning.AI short course on building RAG chatbots with LangChain" },
          { title: "Functions, Tools and Agents with LangChain – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/", description: "DeepLearning.AI short course on building agents with LangChain" },
        ],
      },
      {
        heading: "LangGraph",
        resources: [
          { title: "GitHub – langchain-ai/langgraph", url: "https://github.com/langchain-ai/langgraph", description: "Library for building stateful, multi-actor LLM agent workflows" },
          { title: "LangGraph Tutorials", url: "https://langchain-ai.github.io/langgraph/tutorials/introduction/", description: "Official LangGraph tutorials and getting-started guides" },
          { title: "AI Agents in LangGraph – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/", description: "DeepLearning.AI short course on building agents with LangGraph" },
        ],
      },
      {
        heading: "CrewAI",
        resources: [
          { title: "GitHub – crewAIInc/crewAI", url: "https://github.com/crewAIInc/crewAI", description: "Framework for orchestrating role-playing autonomous AI agents" },
          { title: "CrewAI Official Site", url: "https://www.crewai.com/", description: "Official site for the CrewAI multi-agent framework" },
          { title: "Multi AI Agent Systems with crewAI – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/", description: "DeepLearning.AI short course on building multi-agent systems with crewAI" },
          { title: "Practical Multi AI Agents and Advanced Use Cases with crewAI", url: "https://www.deeplearning.ai/short-courses/practical-multi-ai-agents-and-advanced-use-cases-with-crewai/", description: "DeepLearning.AI course on advanced multi-agent crewAI use cases" },
        ],
      },
      {
        heading: "Google Agent Development Kit (ADK)",
        resources: [
          { title: "Google ADK Documentation", url: "https://google.github.io/adk-docs/", description: "Official documentation for Google's Agent Development Kit" },
          { title: "GitHub – google/adk-python", url: "https://github.com/google/adk-python", description: "Python SDK for Google's Agent Development Kit" },
        ],
      },
      {
        heading: "Agno (formerly Phidata)",
        resources: [
          { title: "Agno Documentation – Agents", url: "https://docs.agno.com/introduction/agents", description: "Official documentation for building agents with Agno" },
          { title: "GitHub – agno-agi/agno", url: "https://github.com/agno-agi/agno", description: "Lightweight framework for building multi-agent systems" },
        ],
      },
    ],
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    icon: "🤖",
    resources: [
      { title: "Zero – Open-Source Coding Agent", url: "https://github.com/gitlawb/zero", description: "The coding agent that answers to you, your model, your machine, your rules", badge: "NEW" },
      { title: "Agent Skills – Open Standard for Extending AI Agent Capabilities", url: "https://agentskills.io/home", description: "Open standard for building reusable skills that extend AI agents across 30+ platforms including Claude, GitHub Copilot, and OpenAI Codex", badge: "NEW" },
      { title: "Caveman – Token-Saving Output Compression Skill", url: "https://github.com/juliusbrussee/caveman", description: "Agent skill that compresses AI output ~65% with terse, fragment-based responses while preserving reasoning; works across Claude Code, Codex, Gemini, Cursor and 30+ agents", badge: "NEW" },
      { title: "Ponytail – Minimal-Code Agent Skill", url: "https://github.com/DietrichGebert/ponytail", description: "Agent skill enforcing a 'lazy senior developer' philosophy: check YAGNI, codebase, stdlib, platform and existing deps before writing new code (~54% less code); works across 16+ agents", badge: "NEW" },
      { title: "Omnigraph – Lakehouse Graph Database for Agents", url: "https://github.com/ModernRelay/omnigraph", description: "Operational state and coordination layer for agent fleets with multimodal retrieval, Git-style branching, and object-storage-native deployment", badge: "NEW" },
      { title: "Claude SEO – AI-Powered SEO Audit Skill", url: "https://github.com/AgricIDaniel/claude-seo", description: "Open-source Claude Code skill that runs 25 sub-skills and 18 parallel agents to audit technical SEO, content quality, schema markup, and AI search optimization with falsifiable recommendations", badge: "NEW" },
      { title: "Introduction to Agent2Agent (A2A) Protocol – Google Cloud", url: "https://www.youtube.com/watch?v=Fbr_Solax1w", description: "Google Cloud video introducing the Agent2Agent protocol for agent interoperability" },
      { title: "AI Agents Series – FuturMinds (YouTube Playlist)", url: "https://www.youtube.com/playlist?list=PL51gEhIbWzJESLuGJUGkG2VZzrPO0H0Rc", description: "YouTube playlist covering AI agent concepts and tutorials" },
      { title: "Evaluating AI Agents – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/evaluating-ai-agents/", description: "DeepLearning.AI short course on evaluating AI agent performance" },
      { title: "LLMs as Operating Systems: Agent Memory – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/llms-as-operating-systems-agent-memory/", description: "DeepLearning.AI short course on agent memory architectures" },
      { title: "AI Agents in LangGraph – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/", description: "DeepLearning.AI short course on building agents with LangGraph" },
      { title: "AI Agentic Design Patterns with AutoGen – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/ai-agentic-design-patterns-with-autogen/", description: "DeepLearning.AI short course on agentic design patterns using AutoGen" },
      { title: "Multi AI Agent Systems with crewAI – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/", description: "DeepLearning.AI short course on building multi-agent systems with crewAI" },
      { title: "Building Agentic RAG with LlamaIndex – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/", description: "DeepLearning.AI short course on building agentic RAG pipelines with LlamaIndex" },
      { title: "Event-Driven Agentic Document Workflows – DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/event-driven-agentic-document-workflows/", description: "DeepLearning.AI short course on event-driven agentic document processing" },
    ],
  },
  {
    id: "mlops",
    title: "MLOps and GenAIOps",
    icon: "⚡",
    resources: [
      { title: "MLOps for Generative AI – Google Cloud Skill Boost", url: "https://www.cloudskillsboost.google/course_templates/927", description: "Google Cloud Skills Boost course on MLOps for generative AI" },
      { title: "GenAIOps: Operationalize Generative AI (YouTube)", url: "https://www.youtube.com/watch?v=UfUoG_Ijgq4", description: "Video overview of operationalizing generative AI systems" },
      { title: "MLOps.org", url: "https://ml-ops.org/", description: "Community resource hub for MLOps best practices" },
      { title: "Full Stack Deep Learning", url: "https://fullstackdeeplearning.com/course/2022/", description: "Course on building and deploying production ML systems" },
      { title: "Systems & Networking for AI Engineers – PixelBank", url: "https://pixelbank.dev/systems", description: "PixelBank course on systems and networking fundamentals for AI engineers" },
    ],
  },
  {
    id: "security",
    title: "Security",
    icon: "🔒",
    resources: [
      { title: "OWASP Top 10 for Large Language Model Applications", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/", description: "OWASP's list of the top 10 security risks for LLM applications" },
      { title: "Google's Secure AI Framework (SAIF)", url: "https://safety.google/cybersecurity-advancements/saif/", description: "Google's framework for building AI systems securely" },
      { title: "The Dawn of Agentic AI in Security Operations – Google Cloud", url: "https://cloud.google.com/blog/products/identity-security/the-dawn-of-agentic-ai-in-security-operations-at-rsac-2025", description: "Google Cloud blog on agentic AI's role in security operations" },
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
          { title: "Gemini for Google Cloud", url: "https://www.cloudskillsboost.google/paths/236", description: "Learning path on using Gemini within Google Cloud" },
          { title: "Beginner: Introduction to Generative AI", url: "https://www.cloudskillsboost.google/paths/118", description: "Google Cloud Skills Boost path introducing generative AI fundamentals", badge: "Beginner" },
          { title: "Intermediate: Generative AI Labs with Gemini", url: "https://www.cloudskillsboost.google/paths/1872", description: "Hands-on labs for generative AI with Gemini", badge: "Intermediate" },
          { title: "Deploy and Manage Generative AI Models", url: "https://www.cloudskillsboost.google/paths/887", description: "Learning path on deploying and managing generative AI models on Google Cloud" },
          { title: "Machine Learning Engineer Learning Path", url: "https://www.cloudskillsboost.google/paths/17", description: "Google Cloud's learning path for machine learning engineers" },
          { title: "Build and Modernize Applications With Generative AI", url: "https://www.cloudskillsboost.google/paths/878", description: "Learning path on modernizing applications with generative AI" },
          { title: "Integrate Generative AI Into Your Data Workflow", url: "https://www.cloudskillsboost.google/paths/882", description: "Learning path on integrating generative AI into data workflows" },
          { title: "Generate Smarter Generative AI Outputs", url: "https://www.cloudskillsboost.google/paths/880", description: "Learning path on improving generative AI output quality" },
        ],
      },
    ],
  },
  {
    id: "cost-optimization",
    title: "AI Cost Optimization",
    icon: "💰",
    resources: [
      { title: "Three Proven Strategies for Optimizing AI Costs – Google Cloud", url: "https://cloud.google.com/transform/three-proven-strategies-for-optimizing-ai-costs", description: "Google Cloud blog on strategies to reduce AI costs" },
      { title: "Reduce Cost and Improve Your AI Workloads – Google Cloud", url: "https://cloud.google.com/blog/products/ai-machine-learning/reduce-cost-and-improve-your-ai-workloads", description: "Google Cloud blog on optimizing AI workload cost and performance" },
      { title: "Vertex AI Pricing", url: "https://cloud.google.com/vertex-ai/pricing", description: "Official pricing page for Google Cloud's Vertex AI" },
    ],
  },
  {
    id: "adopting-genai",
    title: "Adopting GenAI in Organizations",
    icon: "🏢",
    resources: [
      { title: "Generative AI for Executives and Business Leaders Specialization – Coursera (IBM)", url: "https://www.coursera.org/specializations/generative-ai-for-executives-and-business-leaders", description: "Coursera specialization on generative AI strategy for executives" },
      { title: "GenAI for Execs & Business Leaders: Integration Strategy – Coursera", url: "https://www.coursera.org/learn/generative-ai-for-executives-and-business-leaders-integration-strategy", description: "Coursera course on integrating generative AI into business strategy" },
      { title: "GenAI for Everyone – Coursera (DeepLearning.AI)", url: "https://www.coursera.org/learn/genai-for-everyone", description: "DeepLearning.AI's beginner-friendly course on generative AI for everyone" },
    ],
  },
  {
    id: "ai-productivity",
    title: "AI Tools for Productivity",
    icon: "⚡",
    resources: [
      { title: "Maximize Productivity with AI Tools – Coursera (Google)", url: "https://www.coursera.org/learn/google-maximize-productivity-with-ai-tools", description: "Google's Coursera course on using AI tools to boost productivity" },
      { title: "Google AI Professional Certificate – Coursera", url: "https://www.coursera.org/professional-certificates/google-ai", description: "Google's professional certificate covering practical AI skills" },
      { title: "Microsoft 365 Copilot for Productivity – Coursera (Microsoft)", url: "https://www.coursera.org/professional-certificates/microsoft-365-copilot-for-productivity", description: "Microsoft's Coursera course on using Copilot in Microsoft 365" },
    ],
  },
  {
    id: "quantum",
    title: "Quantum Computing and PQC",
    icon: "⚛️",
    resources: [
      { title: "Introduction to Post-Quantum Cryptography – edX (UMBC)", url: "https://www.edx.org/learn/computer-science/university-system-of-maryland-introduction-to-post-quantum-cryptography", description: "University of Maryland's edX course on post-quantum cryptography" },
      { title: "Practical Introduction to Quantum-Safe Cryptography – IBM Quantum", url: "https://learning.quantum.ibm.com/course/practical-introduction-to-quantum-safe-cryptography/quantum-safe-cryptography", description: "IBM Quantum's course on quantum-safe cryptography" },
    ],
  },
  {
    id: "ai-sdlc",
    title: "AI Augmented SDLC",
    icon: "💻",
    resources: [
      { title: "Generative AI for Software Development Specialization – DeepLearning.AI", url: "https://www.deeplearning.ai/courses/generative-ai-for-software-development/", description: "DeepLearning.AI specialization on using generative AI in software development" },
      { title: "AI-Powered Software Development – Coursera", url: "https://www.coursera.org/specializations/ai-powered-software-development-certification", description: "Coursera specialization on AI-powered software development practices" },
      { title: "GitHub Copilot Fundamentals – Microsoft Learn", url: "https://learn.microsoft.com/en-us/training/paths/copilot/", description: "Microsoft Learn path covering GitHub Copilot fundamentals" },
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
      { title: "Machine Learning by Andrew Ng (Coursera)", url: "https://www.coursera.org/learn/machine-learning", description: "Andrew Ng's foundational machine learning course on Coursera" },
      { title: "AI For Everyone by Andrew Ng (Coursera)", url: "https://www.coursera.org/learn/ai-for-everyone", description: "Andrew Ng's non-technical introduction to AI for business" },
      { title: "Deep Learning Specialization (Coursera)", url: "https://www.coursera.org/specializations/deep-learning", description: "Andrew Ng's five-course specialization on deep learning" },
      { title: "Machine Learning with Python (edX – IBM)", url: "https://www.edx.org/course/machine-learning-with-python-a-practical-introduct", description: "IBM's edX course on practical machine learning with Python" },
      { title: "Reinforcement Learning Specialization (Coursera)", url: "https://www.coursera.org/specializations/reinforcement-learning", description: "University of Alberta's Coursera specialization on reinforcement learning" },
      { title: "CS231n: CNNs for Visual Recognition (Stanford)", url: "https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PLSVEhWrZWDHQTBmWZufjxpw3s8sveJtnJ", description: "Stanford's CS231n course on CNNs for visual recognition" },
      { title: "RL Course by David Silver", url: "https://www.youtube.com/watch?v=2pWv7GOvuf0&list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ", description: "David Silver's classic reinforcement learning lecture series" },
      { title: "NLP with Deep Learning – Stanford CS224n", url: "https://www.youtube.com/watch?v=rmVRLeJRkl4&list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4", description: "Stanford's CS224n course on deep learning for NLP" },
      { title: "Practical Deep Learning for Coders – fast.ai", url: "https://course.fast.ai/", description: "fast.ai's hands-on deep learning course for coders" },
      { title: "CV, LLM, VLM Courses – PixelBank", url: "https://pixelbank.dev", description: "PixelBank's course collection on CV, LLMs, and VLMs" },
    ],
  },
  {
    id: "certifications",
    title: "Certifications",
    icon: "🏆",
    resources: [
      { title: "AWS Certified Machine Learning Engineer – Associate", url: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/", description: "AWS certification validating machine learning engineering skills" },
      { title: "AWS Certified AI Practitioner – Skill Builder", url: "https://skillbuilder.aws/", description: "AWS certification covering foundational AI and ML knowledge" },
      { title: "Microsoft Certified: Azure AI Engineer Associate", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/", description: "Microsoft certification for building AI solutions on Azure" },
      { title: "Stanford AI and Machine Learning Certificate", url: "https://online.stanford.edu/programs/artificial-intelligence-professional-program", description: "Stanford's professional certificate program in AI and machine learning" },
    ],
  },
  {
    id: "books",
    title: "Books",
    icon: "📚",
    resources: [
      { title: "Hands-On Large Language Models – Jay Alammar & Maarten Grootendorst", url: "https://www.amazon.com/Hands-Large-Language-Models-Understanding/dp/1098150961", description: "GitHub notebooks available" },
      { title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow", url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/", description: "Practical guide to ML and deep learning with popular Python libraries" },
      { title: "AI Engineering: Building Applications with Foundational Models", url: "https://www.oreilly.com/library/view/ai-engineering/9781098166298/", description: "O'Reilly book on building applications with foundation models" },
      { title: "Introduction to Machine Learning Interviews – Chip Huyen", url: "https://huyenchip.com/ml-interviews-book/", description: "Chip Huyen's free book preparing candidates for ML interviews" },
      { title: "Designing Data-Intensive Applications", url: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/", description: "Classic book on building reliable, scalable data systems" },
      { title: "Designing Machine Learning Systems", url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/", description: "Chip Huyen's book on building production-ready ML systems" },
      { title: "Deep Learning (Goodfellow, Bengio, Courville)", url: "https://www.deeplearningbook.org/", description: "The definitive textbook on deep learning theory and practice" },
      { title: "Patterns, Predictions, and Actions – Hardt & Recht", url: "https://mlstory.org/pdf/patterns.pdf", description: "Free textbook covering supervised learning, deep learning, causal inference, and RL" },
    ],
  },
  {
    id: "papers",
    title: "Must-Read Research Papers",
    icon: "📄",
    resources: [
      { title: "Attention Is All You Need (Google)", url: "https://arxiv.org/pdf/1706.03762", description: "The paper that introduced the Transformer architecture" },
      { title: "Language Models are Few-Shot Learners – GPT-3 (OpenAI)", url: "https://arxiv.org/abs/2005.14165", description: "Introduces GPT-3, a 175B parameter model demonstrating strong few-shot learning across NLP tasks" },
      { title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models (Google)", url: "https://arxiv.org/abs/2201.11903", description: "Introduces chain-of-thought prompting, showing intermediate reasoning steps significantly improve LLM performance on complex tasks" },
      { title: "DeepSeek R1: Incentivizing Reasoning Capability in LLMs", url: "https://arxiv.org/pdf/2501.12948", description: "Paper detailing DeepSeek's reasoning-focused R1 model trained with reinforcement learning" },
      { title: "Monolith: Real Time Recommendation System (TikTok/ByteDance)", url: "https://arxiv.org/pdf/2209.07663", description: "TikTok/ByteDance's paper on their real-time recommendation system" },
      { title: "BERT: Pre-training of Deep Bidirectional Transformers", url: "https://arxiv.org/pdf/1810.04805", description: "Paper introducing BERT, a bidirectional transformer for language understanding" },
      { title: "Understanding Deep Learning Requires Rethinking Generalization", url: "https://arxiv.org/pdf/1611.03530", description: "Paper challenging traditional views of generalization in deep learning" },
      { title: "Playing Atari with Deep Reinforcement Learning", url: "https://arxiv.org/pdf/1312.5602", description: "DeepMind's paper introducing deep Q-networks for Atari games" },
      { title: "Distilling the Knowledge in a Neural Network", url: "https://arxiv.org/pdf/1503.02531", description: "Hinton et al.'s paper introducing knowledge distillation" },
      { title: "OpenAI Key Papers in Deep RL", url: "https://spinningup.openai.com/en/latest/spinningup/keypapers.html", description: "OpenAI's curated reading list of foundational deep RL papers" },
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
      { title: "PyTorch", url: "https://www.youtube.com/watch?v=V_xro1bcAuA", description: "Video introduction to the PyTorch deep learning framework" },
      { title: "TensorFlow", url: "https://www.youtube.com/watch?v=tPYj3fFJGjk", description: "Video introduction to the TensorFlow deep learning framework" },
      { title: "TensorFlow Playground", url: "https://playground.tensorflow.org", description: "Browser-based neural network experimentation tool" },
      { title: "Scikit-Learn", url: "https://scikit-learn.org/stable/getting_started.html", description: "Official getting-started guide for the scikit-learn library" },
      { title: "XGBoost", url: "https://xgboost.readthedocs.io/en/latest/", description: "Official documentation for the XGBoost gradient boosting library" },
      { title: "Keras", url: "https://keras.io/getting_started/", description: "Official getting-started guide for the Keras deep learning API" },
      { title: "Whisper – OpenAI", url: "https://github.com/openai/whisper", description: "OpenAI's open-source automatic speech recognition model" },
      { title: "Can I Run AI?", url: "https://www.canirun.ai/", description: "Check if your hardware can run AI models locally" },
    ],
  },
  {
    id: "youtube",
    title: "YouTube Channels",
    icon: "▶️",
    resources: [
      { title: "Stanford Online", url: "https://www.youtube.com/watch?v=jGwO_UgTS7I&list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU", description: "Stanford's YouTube channel featuring AI and ML lecture series" },
      { title: "Andrej Karpathy", url: "https://www.youtube.com/watch?v=VMj-3S1tku0&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ", description: "Andrej Karpathy's channel on deep learning and LLMs from scratch" },
      { title: "FreeCodeCamp", url: "https://www.youtube.com/watch?v=i_LwzRVP7bg", description: "FreeCodeCamp's channel with full-length coding and ML courses" },
      { title: "3Blue1Brown", url: "https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", description: "Grant Sanderson's channel known for visual, intuitive math explanations" },
      { title: "Sentdex", url: "https://www.youtube.com/watch?v=OGxgnH8y2NM&list=PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v", description: "Channel with practical Python and machine learning tutorials" },
    ],
  },
  {
    id: "research-blogs",
    title: "Research Blogs",
    icon: "🔬",
    resources: [
      { title: "OpenAI Blog", url: "https://openai.com/news/", description: "Official news and research updates from OpenAI" },
      { title: "Google DeepMind", url: "https://deepmind.google/discover/blog/", description: "Official blog covering DeepMind's research and announcements" },
      { title: "Google Research", url: "https://research.google/blog/", description: "Google's official blog on research across AI and computer science" },
      { title: "Apple ML Research", url: "https://machinelearning.apple.com/", description: "Apple's official machine learning research blog" },
      { title: "Amazon Science", url: "https://www.amazon.science/blog", description: "Amazon's blog covering science and ML research across the company" },
      { title: "Microsoft AI", url: "https://www.microsoft.com/en-us/ai/blog/", description: "Microsoft's official blog on AI research and products" },
      { title: "Meta AI Blog", url: "https://ai.meta.com/blog/", description: "Meta's official blog on AI research and models" },
    ],
  },
  {
    id: "applied-blogs",
    title: "Applied ML Blogs",
    icon: "📝",
    resources: [
      { title: "AWS Machine Learning Blog", url: "https://aws.amazon.com/blogs/machine-learning/", description: "AWS's blog on applied machine learning and ML services" },
      { title: "NVIDIA Deep Learning Blog", url: "https://blogs.nvidia.com/blog/category/deep-learning/", description: "NVIDIA's blog covering deep learning research and applications" },
      { title: "AirBnB Engineering – AI & ML", url: "https://medium.com/airbnb-engineering/ai/home", description: "Airbnb Engineering's posts on applied AI and ML" },
      { title: "Spotify Engineering", url: "https://engineering.atspotify.com/", description: "Spotify's engineering blog covering ML and platform work" },
      { title: "Uber Engineering – AI", url: "https://eng.uber.com/category/articles/ai/", description: "Uber Engineering's articles on applied AI" },
      { title: "Netflix Tech Blog", url: "https://netflixtechblog.com/", description: "Netflix's engineering blog covering ML and recommendation systems" },
      { title: "Google AI Blog", url: "https://blog.google/technology/ai/", description: "Google's blog on applied AI products and research" },
    ],
  },
  {
    id: "communities",
    title: "Communities",
    icon: "👥",
    resources: [
      { title: "r/LearnMachineLearning", url: "https://www.reddit.com/r/learnmachinelearning/", description: "Reddit community for people learning machine learning" },
      { title: "Chip Huyen MLOps Discord", url: "https://discord.com/invite/dzh728c5t3", description: "Discord community focused on MLOps discussions" },
      { title: "Hugging Face Discord", url: "https://discord.com/invite/hugging-face-879548962464493619", description: "Official Hugging Face community Discord server" },
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
          { title: "Matrix times Vector", url: "https://www.deep-ml.com/problems/1", description: "Deep-ML coding problem on matrix-vector multiplication", badge: "Easy" },
          { title: "Titanic: ML from Disaster – Kaggle", url: "https://www.kaggle.com/c/titanic", description: "Kaggle's classic beginner competition predicting Titanic survival", badge: "Easy" },
          { title: "Predicting House Prices – Kaggle", url: "https://www.kaggle.com/competitions/home-data-for-ml-course", description: "Kaggle competition on predicting house prices with regression", badge: "Easy" },
        ],
      },
      {
        heading: "Medium",
        resources: [
          { title: "Single Neuron", url: "https://www.deep-ml.com/problems/24", description: "Deep-ML coding problem implementing a single neuron", badge: "Medium" },
          { title: "K-Means Clustering", url: "https://www.deep-ml.com/problems/17", description: "Deep-ML coding problem implementing K-Means clustering from scratch", badge: "Medium" },
          { title: "Predicting Loan Default Risk – Kaggle", url: "https://www.kaggle.com/c/home-credit-default-risk", description: "Kaggle competition on predicting loan default risk", badge: "Medium" },
          { title: "Sentiment Analysis on Movie Reviews – Kaggle", url: "https://www.kaggle.com/c/sentiment-analysis-on-movie-reviews", description: "Kaggle competition on classifying movie review sentiment", badge: "Medium" },
        ],
      },
      {
        heading: "Hard",
        resources: [
          { title: "Decision Tree Learning", url: "https://www.deep-ml.com/problems/20", description: "Deep-ML coding problem implementing decision tree learning", badge: "Hard" },
          { title: "Implement a Simple RNN with Backpropagation", url: "https://www.deep-ml.com/problems/62", description: "Deep-ML coding problem implementing an RNN with backpropagation from scratch", badge: "Hard" },
          { title: "GANs for Image Synthesis – Kaggle", url: "https://www.kaggle.com/c/generative-dog-images", description: "Kaggle competition on generating images with GANs", badge: "Hard" },
        ],
      },
    ],
  },
  {
    id: "interview",
    title: "Interview Preparation",
    icon: "🎯",
    resources: [
      { title: "Introduction to Machine Learning Interviews – Chip Huyen", url: "https://huyenchip.com/ml-interviews-book/", description: "Chip Huyen's free book preparing candidates for ML interviews" },
      { title: "ML Interviews MVP – GitHub", url: "https://github.com/khangich/machine-learning-interview", description: "Curated GitHub repo of resources for ML interview preparation" },
      { title: "Designing Machine Learning Systems", url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/", description: "Chip Huyen's book on building production-ready ML systems" },
      { title: "ML System Design: 650 Case Studies – GitHub", url: "https://github.com/mallahyari/ml-practical-usecases", description: "Real-world ML use cases from 100+ companies including Netflix, Airbnb, and Uber" },
      { title: "AI Engineering from Scratch – GitHub", url: "https://github.com/rohitg00/ai-engineering-from-scratch", description: "GitHub repo teaching AI engineering concepts from first principles" },
      { title: "ML Coding Questions – PixelBank", url: "https://pixelbank.dev/collections", description: "PixelBank's collection of ML coding interview questions" },
    ],
  },
];
