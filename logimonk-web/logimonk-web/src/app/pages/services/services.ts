import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  protected readonly services = [
    { title: 'Generative AI Solutions', text: 'Content, copilots and domain-specific AI tools that unlock real-world adoption.' },
    { title: 'AI Agents & Workflow Automation', text: 'Autonomous agents that act across your systems and remove manual effort.' },
    { title: 'Custom LLM Development', text: 'Tailored models on OpenAI, Claude, Gemini, Llama and private models.' },
    { title: 'Enterprise AI Integration', text: 'Plug AI into CRMs, ERPs and internal platforms without rewrites.' },
    { title: 'RAG & Knowledge AI Systems', text: 'Accurate, context-aware answers grounded in your business data.' },
    { title: 'Conversational AI & Copilots', text: 'Assistants for customers and employees across web, mobile and enterprise.' },
    { title: 'Intelligent Document Processing', text: 'OCR, extraction and classification for invoices, contracts and reports.' },
    { title: 'AI-Powered SaaS Development', text: 'AI-first SaaS platforms built to scale from MVP to enterprise.' },
    { title: 'Cloud & AI Infrastructure', text: 'Secure, scalable infrastructure from Kubernetes to Azure OpenAI.' },
  ];
}
