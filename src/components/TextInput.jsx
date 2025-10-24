import React, { useState } from 'react';
import { Loader2, Wand2, FileText } from 'lucide-react';

const TextInput = ({ onGenerate, isGenerating }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && !isGenerating) {
      onGenerate(text);
    }
  };

  const sampleText = `## Slide: Introduction to Machine Learning
**Subtitle:** Understanding the basics
**Content:**
- Machine learning is a subset of artificial intelligence
- It enables computers to learn from data without explicit programming
- Key applications include image recognition, natural language processing, and recommendation systems
- Mathematical foundation: $$f(x) = \\theta^T x + b$$`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            <FileText className="inline-block w-10 h-10 mr-3 text-blue-600" />
            Slide Generator
          </h1>
          <p className="text-xl text-gray-600">
            Enter your content and let AI create beautiful slides
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/30">
            <label htmlFor="slideContent" className="block text-lg font-semibold text-gray-700 mb-4">
              Slide Content (Markdown Format)
            </label>
            <textarea
              id="slideContent"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={sampleText}
              className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm"
              disabled={isGenerating}
            />
            <p className="text-sm text-gray-500 mt-2">
              Use markdown format similar to the placeholder above. Include slide title, subtitle, and content.
            </p>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!text.trim() || isGenerating}
              className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-lg font-semibold"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5 mr-2" />
                  Generate Slides
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Format Guidelines</h3>
          <ul className="text-blue-700 space-y-1">
            <li>• Start with "## Slide: [Title]" for each slide</li>
            <li>• Add subtitle with "**Subtitle:** [text]"</li>
            <li>• Use bullet points for content</li>
            <li>• Include math with $$formula$$ syntax</li>
            <li>• Each slide will be generated as a React component</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TextInput;