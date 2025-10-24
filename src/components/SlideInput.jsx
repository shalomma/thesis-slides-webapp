import React, { useState } from 'react';
import { Loader2, Wand2, Trash2 } from 'lucide-react';

const SlideInput = ({ 
  slideIndex, 
  onGenerate, 
  isGenerating, 
  onRemove, 
  initialText = '', 
  onTextChange,
  isActive = false,
  canRemove = true
}) => {
  const [text, setText] = useState(initialText);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && !isGenerating) {
      onGenerate(text, slideIndex);
    }
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    if (onTextChange) {
      onTextChange(slideIndex, newText);
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
    <div className={`bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border ${
      isActive ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'
    } transition-all`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800">
          Slide {slideIndex + 1}
        </h3>
        {canRemove && (
          <button
            onClick={() => onRemove(slideIndex)}
            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
            title="Remove slide"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder={slideIndex === 0 ? sampleText : "Enter slide content..."}
          className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm"
          disabled={isGenerating}
        />
        
        <button
          type="submit"
          disabled={!text.trim() || isGenerating}
          className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm font-medium"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="w-4 h-4 mr-2" />
              Generate Slide
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default SlideInput; 