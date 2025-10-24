import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { ChevronLeft, ChevronRight, Plus, X, Brain, TrendingUp, Cog, AlertTriangle, Eye, Search, Lightbulb, Target, ArrowRight, ArrowLeft, CheckCircle, Users, MessageCircle, Layers, BarChart3, Zap, BookOpen, Globe, Activity, RotateCcw } from 'lucide-react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';
import SlideInput from './components/SlideInput';
import { generateSlides, generateSlidesMock } from './services/llm';
import { parseSlideCode } from './utils/slideParser.jsx';

const defaultSlide = {
  id: 'title',
  title: 'Generalization in Reinforcement Learning with Structural Priors',
  content: (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-10"></div>
      </div>
      
      <div className="text-center text-white z-10 max-w-4xl px-8">
        <h1 className="text-6xl font-bold mb-8 leading-tight">
          Generalization in Reinforcement Learning with Structural Priors
        </h1>
        
        <div className="rounded-lg border border-white/20 bg-black/20 p-8 shadow-lg backdrop-blur-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Master Thesis Research</h2>
          <p className="text-xl mb-4">Statistical Learning Theory for RL Generalization</p>
          <p className="text-lg text-yellow-300 font-semibold italic">
            "When an agent is deployed in a new environment, will it still work?"
          </p>
        </div>
        
        <div className="flex justify-center items-center space-x-8">
          <div className="flex items-center">
            <Brain className="w-8 h-8 mr-3 text-yellow-300" />
            <span className="text-lg">Machine Learning Theory</span>
          </div>
          <div className="flex items-center">
            <TrendingUp className="w-8 h-8 mr-3 text-green-300" />
            <span className="text-lg">Reinforcement Learning</span>
          </div>
          <div className="flex items-center">
            <Cog className="w-8 h-8 mr-3 text-blue-300" />
            <span className="text-lg">Statistical Analysis</span>
          </div>
        </div>
      </div>
    </div>
  )
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideInputs, setSlideInputs] = useState([{ text: '', generated: false }]);
  const [generatedSlides, setGeneratedSlides] = useState([defaultSlide]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatingSlideIndex, setGeneratingSlideIndex] = useState(null);
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_OPENAI_API_KEY || '');

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % generatedSlides.length);
  }, [generatedSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + generatedSlides.length) % generatedSlides.length);
  }, [generatedSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleGenerate = async (textInput, slideIndex) => {
    setIsGenerating(true);
    setGeneratingSlideIndex(slideIndex);
    
    try {
      let generatedCode;
      if (apiKey) {
        generatedCode = await generateSlides(textInput, apiKey);
      } else {
        // Use mock service for development
        generatedCode = await generateSlidesMock(textInput);
      }
      
      const newSlide = parseSlideCode(generatedCode);
      
      // Update the generated slides array
      setGeneratedSlides(prev => {
        const newSlides = [...prev];
        if (slideIndex === 0) {
          // Replace the default slide for the first input
          newSlides[0] = newSlide;
        } else {
          // Add or replace slide at the appropriate index
          newSlides[slideIndex] = newSlide;
        }
        return newSlides;
      });
      
      // Mark this input as generated
      setSlideInputs(prev => {
        const newInputs = [...prev];
        newInputs[slideIndex] = { ...newInputs[slideIndex], generated: true };
        return newInputs;
      });
      
      // Navigate to the generated slide
      setCurrentSlide(slideIndex);
      
    } catch (error) {
      console.error('Generation error:', error);
      alert('Error generating slides: ' + error.message);
    } finally {
      setIsGenerating(false);
      setGeneratingSlideIndex(null);
    }
  };

  const handleTextChange = (slideIndex, text) => {
    setSlideInputs(prev => {
      const newInputs = [...prev];
      newInputs[slideIndex] = { ...newInputs[slideIndex], text };
      return newInputs;
    });
  };

  const addSlideInput = () => {
    setSlideInputs(prev => [...prev, { text: '', generated: false }]);
  };

  const removeSlideInput = (slideIndex) => {
    if (slideInputs.length <= 1) return; // Keep at least one input
    
    setSlideInputs(prev => prev.filter((_, index) => index !== slideIndex));
    
    // Remove corresponding generated slide if it exists
    setGeneratedSlides(prev => {
      const newSlides = [...prev];
      if (slideIndex < newSlides.length) {
        newSlides.splice(slideIndex, 1);
      }
      return newSlides;
    });
    
    // Adjust current slide if needed
    setCurrentSlide(prev => {
      if (prev >= generatedSlides.length - 1) {
        return Math.max(0, generatedSlides.length - 2);
      }
      return prev >= slideIndex ? Math.max(0, prev - 1) : prev;
    });
  };

  const resetAll = () => {
    setSlideInputs([{ text: '', generated: false }]);
    setGeneratedSlides([defaultSlide]);
    setCurrentSlide(0);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const config = {
    loader: { load: ["input/tex", "output/chtml"] },
  };

  return (
    <MathJaxContext config={config}>
      <div className="flex h-screen bg-gradient-to-br from-slate-50 to-gray-100">
        {/* Left Panel - Slide Inputs */}
        <div className="w-2/5 p-6 overflow-y-auto bg-white/50 backdrop-blur-sm border-r border-gray-200">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Slide Generator
            </h1>
            <p className="text-gray-600">
              Enter content for each slide and generate beautiful presentations
            </p>
          </div>

          <div className="space-y-4">
            {slideInputs.map((slideInput, index) => (
              <SlideInput
                key={index}
                slideIndex={index}
                onGenerate={handleGenerate}
                isGenerating={isGenerating && generatingSlideIndex === index}
                onRemove={removeSlideInput}
                initialText={slideInput.text}
                onTextChange={handleTextChange}
                isActive={currentSlide === index}
                canRemove={slideInputs.length > 1}
              />
            ))}
          </div>

          <div className="mt-6 flex space-x-3">
            <button
              onClick={addSlideInput}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Slide
            </button>
            <button
              onClick={resetAll}
              className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset All
            </button>
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="text-sm font-semibold text-blue-800 mb-2">Format Guidelines</h3>
            <ul className="text-blue-700 text-xs space-y-1">
              <li>• Start with "## Slide: [Title]" for each slide</li>
              <li>• Add subtitle with "**Subtitle:** [text]"</li>
              <li>• Use bullet points for content</li>
              <li>• Include math with $$formula$$ syntax</li>
            </ul>
          </div>
        </div>

        {/* Right Panel - Slide Preview */}
        <div className="flex-1 relative">
          {/* Navigation Controls */}
          <div className="absolute top-4 left-4 z-50">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-medium">
                {currentSlide + 1} / {generatedSlides.length}
              </span>
            </div>
          </div>

          <div className="absolute top-4 right-4 z-50 flex space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === generatedSlides.length - 1}
              className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Navigation Menu */}
          <div className="absolute bottom-4 left-4 z-50">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 max-w-xs">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Slides</h3>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {generatedSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`w-full text-left p-2 rounded text-xs transition-all ${
                      currentSlide === index
                        ? 'bg-blue-100 text-blue-800 font-medium'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {index + 1}. {slide.title.substring(0, 30)}...
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Slide Content */}
          <div className="w-full h-full">
            {generatedSlides[currentSlide]?.content}
          </div>
        </div>
      </div>
    </MathJaxContext>
  );
}

export default App;

