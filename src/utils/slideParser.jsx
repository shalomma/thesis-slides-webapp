import React from 'react';
import { Brain, TrendingUp, Cog, AlertTriangle, Eye, Search, Lightbulb, Target, ArrowRight, ArrowLeft, CheckCircle, Users, MessageCircle, Layers, BarChart3, Zap, BookOpen, Globe, Activity } from 'lucide-react';
import { MathJax } from 'better-react-mathjax';

// Safe evaluation context for generated code
const createSafeContext = () => {
  return {
    React,
    MathJax,
    // Lucide icons
    Brain, TrendingUp, Cog, AlertTriangle, Eye, Search, Lightbulb, Target, 
    ArrowRight, ArrowLeft, CheckCircle, Users, MessageCircle, Layers, 
    BarChart3, Zap, BookOpen, Globe, Activity,
    // Prevent access to dangerous globals
    window: undefined,
    document: undefined,
    eval: undefined,
    Function: undefined,
    setTimeout: undefined,
    setInterval: undefined,
    fetch: undefined,
    localStorage: undefined,
    sessionStorage: undefined
  };
};

export const parseSlideCode = (generatedCode) => {
  try {
    // Clean up the generated code
    let cleanCode = generatedCode.trim();
    
    // Remove markdown code blocks if present
    cleanCode = cleanCode.replace(/```javascript\n?/g, '').replace(/```\n?/g, '');
    
    // Remove any export statements
    cleanCode = cleanCode.replace(/export\s+default\s+/g, '');
    cleanCode = cleanCode.replace(/export\s+/g, '');
    
    // Validate that it looks like a slide object
    if (!cleanCode.includes('id:') || !cleanCode.includes('title:') || !cleanCode.includes('content:')) {
      throw new Error('Generated code does not match expected slide format');
    }
    
    // Create safe evaluation context
    const context = createSafeContext();
    
    // Create a function that returns the slide object
    const slideFunction = new Function(
      ...Object.keys(context),
      `return ${cleanCode}`
    );
    
    // Execute with safe context
    const slide = slideFunction(...Object.values(context));
    
    // Validate the result
    if (!slide || typeof slide !== 'object') {
      throw new Error('Generated code did not return a valid object');
    }
    
    if (!slide.id || !slide.title || !slide.content) {
      throw new Error('Generated slide missing required properties (id, title, content)');
    }
    
    // Ensure id is a string and unique
    if (typeof slide.id !== 'string' || slide.id.length === 0) {
      slide.id = `generated_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    
    // Ensure title is a string
    if (typeof slide.title !== 'string') {
      slide.title = 'Generated Slide';
    }
    
    // Validate that content is a React element
    if (!React.isValidElement(slide.content)) {
      throw new Error('Generated content is not a valid React element');
    }
    
    return slide;
    
  } catch (error) {
    console.error('Slide parsing error:', error);
    
    // Return a fallback slide with error information
    return {
      id: `error_${Date.now()}`,
      title: 'Generation Error',
      content: (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 p-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-red-800 mb-4">Slide Generation Error</h1>
              <p className="text-xl text-red-600">There was an issue processing the generated slide</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Error Details</h2>
              <p className="text-gray-700 mb-4">{error.message}</p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Generated Code:</h3>
                <pre className="text-sm text-gray-600 whitespace-pre-wrap">
                  {generatedCode.substring(0, 500)}...
                </pre>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                Please try again with different content or check the format.
              </p>
            </div>
          </div>
        </div>
      )
    };
  }
};

export const validateSlideStructure = (slide) => {
  const errors = [];
  
  if (!slide.id) errors.push('Missing slide ID');
  if (!slide.title) errors.push('Missing slide title');
  if (!slide.content) errors.push('Missing slide content');
  
  if (slide.id && typeof slide.id !== 'string') errors.push('Slide ID must be a string');
  if (slide.title && typeof slide.title !== 'string') errors.push('Slide title must be a string');
  if (slide.content && !React.isValidElement(slide.content)) errors.push('Slide content must be a React element');
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const sanitizeSlideId = (id) => {
  if (typeof id !== 'string') return `slide_${Date.now()}`;
  
  // Remove special characters and spaces, convert to lowercase
  const cleaned = id.toLowerCase()
    .replace(/[^a-z0-9_-]/g, '_')
    .replace(/_{2,}/g, '_')
    .replace(/^_|_$/g, '');
  
  return cleaned || `slide_${Date.now()}`;
};