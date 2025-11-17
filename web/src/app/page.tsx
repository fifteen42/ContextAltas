import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface Resource {
  title: string;
  url: string;
  source: string;
  description: string;
  thumbnail?: string;
}

const tutorials: Resource[] = [
  {
    title: "Effective Context Engineering for AI Agents",
    url: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
    source: "Anthropic",
    description: "Learn how to design and structure context for AI agents to achieve better performance and reliability.",
  },
  {
    title: "Context Engineering for Agents",
    url: "https://blog.langchain.com/context-engineering-for-agents/",
    source: "LangChain",
    description: "Explore practical techniques for managing and optimizing context in agent-based AI systems.",
  },
  {
    title: "Context Engineering for AI Agents: Lessons from Building Manus",
    url: "https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus",
    source: "Manus",
    description: "Real-world insights and lessons learned from building production AI agents with effective context management.",
  },
];

const videos: Resource[] = [
  {
    title: "Context Engineering Fundamentals",
    url: "https://www.youtube.com/watch?v=XFCkrYHHfpQ",
    source: "YouTube",
    description: "Introduction to core concepts and principles of context engineering for AI systems.",
    thumbnail: "https://img.youtube.com/vi/XFCkrYHHfpQ/hqdefault.jpg",
  },
  {
    title: "Advanced Context Management",
    url: "https://www.youtube.com/watch?v=4GiqzUHD5AA",
    source: "YouTube",
    description: "Deep dive into advanced techniques for managing context in complex AI applications.",
    thumbnail: "https://img.youtube.com/vi/4GiqzUHD5AA/hqdefault.jpg",
  },
  {
    title: "Building Context-Aware Agents",
    url: "https://www.youtube.com/watch?v=6_BcCthVvb8",
    source: "YouTube",
    description: "Practical guide to building AI agents that effectively utilize contextual information.",
    thumbnail: "https://img.youtube.com/vi/6_BcCthVvb8/hqdefault.jpg",
  },
  {
    title: "Context Engineering Best Practices",
    url: "https://www.youtube.com/watch?v=nyKvyRrpbyY",
    source: "YouTube",
    description: "Industry best practices and patterns for context engineering in production systems.",
    thumbnail: "https://img.youtube.com/vi/nyKvyRrpbyY/hqdefault.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-gray-900 rounded flex items-center justify-center">
              <span className="text-white font-semibold text-xs">CA</span>
            </div>
            <span className="text-lg font-medium text-gray-900">
              ContextAtlas
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Intro */}
        <section className="mb-20">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Context Engineering Resources
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            A curated collection of tutorials and videos on context engineering
            for AI agents. Learn best practices, patterns, and techniques from
            industry leaders.
          </p>
        </section>

        {/* Tutorials Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Tutorials
          </h2>
          <div className="space-y-6">
            {tutorials.map((tutorial, index) => (
              <a
                key={index}
                href={tutorial.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <article className="border border-gray-200 rounded-lg p-6 transition-all duration-200 hover:border-gray-400 hover:shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                        {tutorial.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {tutorial.description}
                      </p>
                      <span className="text-xs text-gray-500 font-medium">
                        {tutorial.source}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1 group-hover:text-gray-600 transition-colors" />
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Videos</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {videos.map((video, index) => (
              <a
                key={index}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <article className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-gray-400 hover:shadow-sm">
                  {video.thumbnail && (
                    <div className="relative aspect-video bg-gray-100 overflow-hidden">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="text-base font-medium text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {video.description}
                    </p>
                    <span className="text-xs text-gray-500 font-medium">
                      {video.source}
                    </span>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-24">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-sm text-gray-500 text-center">
            © 2025 ContextAtlas. A curated resource for context engineering.
          </p>
        </div>
      </footer>
    </div>
  );
}
