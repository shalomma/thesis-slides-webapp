// LLM service for generating slides from text input
import OpenAI from 'openai';

// Create OpenAI client - will be initialized with API key when needed
let openaiClient = null;

const initializeOpenAI = (apiKey) => {
  if (!openaiClient || openaiClient.apiKey !== apiKey) {
    openaiClient = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true // Required for client-side usage
    });
  }
  return openaiClient;
};

export const generateSlides = async (textInput, apiKey) => {
  if (!apiKey) {
    throw new Error('OpenAI API key is required');
  }

  try {
    const openai = initializeOpenAI(apiKey);
    
    // Create slide generation prompt
    const slidePrompt = `Generate a React slide component for a presentation based on this content:

${textInput}

Requirements:
- Use Tailwind CSS classes with gradients like: from-blue-50 to-purple-100, from-cyan-50 to-blue-100, etc.
- Create responsive layouts with max-w-4xl or max-w-6xl containers
- Use white/80 backdrop-blur-sm cards with rounded-2xl and shadow-xl
- Include Lucide React icons (Brain, TrendingUp, Cog, CheckCircle, etc.)
- For math expressions, use MathJax component syntax
- Use space-y-6, grid layouts, and proper typography classes
- Each slide should be visually distinct with different color schemes
- Add emojis and visual elements to make slides engaging

Return a complete React slide object using React.createElement syntax that can be evaluated safely.`;

    const response = await openai.responses.create({
      model: "gpt-4.1",
      input: slidePrompt
    });

    // Extract the generated content
    const generatedContent = response.content?.[0]?.text || response.text || '';
    
    if (!generatedContent) {
      throw new Error('No content generated from OpenAI');
    }

    // Parse the title from input if available
    const titleMatch = textInput.match(/## Slide: (.+)/);
    const slideTitle = titleMatch ? titleMatch[1] : 'Generated Slide';
    
    // Create slide code format expected by parser
    const slideCode = `{
      id: 'generated_${Date.now()}',
      title: '${slideTitle}',
      content: (
        React.createElement('div', {
          className: 'min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-16'
        },
          React.createElement('div', {
            className: 'max-w-4xl mx-auto'
          },
            React.createElement('div', {
              className: 'text-center mb-12'
            },
              React.createElement('h1', {
                className: 'text-4xl font-bold text-blue-800 mb-4'
              }, '${slideTitle}'),
              React.createElement('div', {
                className: 'bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30'
              },
                React.createElement('div', {
                  className: 'prose prose-lg max-w-none'
                },
                  React.createElement('pre', {
                    className: 'whitespace-pre-wrap text-sm'
                  }, ${JSON.stringify(generatedContent)})
                )
              )
            )
          )
        )
      )
    }`;

    return slideCode;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw error;
  }
};

// Alternative service for different providers
export const generateSlidesWithClaude = async () => {
  // Placeholder for Claude API integration
  throw new Error('Claude integration not yet implemented');
};

// Mock service for development/testing
export const generateSlidesMock = async (textInput) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Extract title from input if possible
  const titleMatch = textInput.match(/## Slide: (.+)/);
  const slideTitle = titleMatch ? titleMatch[1] : 'Generated Slide';
  
  const subtitleMatch = textInput.match(/\*\*Subtitle:\*\* (.+)/);
  const slideSubtitle = subtitleMatch ? subtitleMatch[1].replace(/['"]/g, '') : 'Generated from your content';
  
  const timestamp = Date.now();
  
  return `{
    id: 'generated_${timestamp}',
    title: '${slideTitle}',
    content: (
      React.createElement('div', {
        className: 'min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-16'
      },
        React.createElement('div', {
          className: 'max-w-4xl mx-auto'
        },
          React.createElement('div', {
            className: 'text-center mb-12'
          },
            React.createElement('h1', {
              className: 'text-4xl font-bold text-blue-800 mb-4'
            }, '${slideTitle}'),
            React.createElement('p', {
              className: 'text-xl text-blue-600'
            }, '${slideSubtitle}')
          ),
          React.createElement('div', {
            className: 'bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30'
          },
            React.createElement('h2', {
              className: 'text-2xl font-semibold text-gray-800 mb-4'
            }, 'Generated Content'),
            React.createElement('p', {
              className: 'text-lg text-gray-700 mb-4'
            }, 'This slide was generated from your input. The content has been processed and formatted according to your presentation style.'),
            React.createElement('div', {
              className: 'bg-blue-50 p-4 rounded-lg border border-blue-200'
            },
              React.createElement('p', {
                className: 'text-blue-700 text-sm'
              }, 'Mock generation active - Add OpenAI API key for real generation')
            )
          )
        )
      )
    )
  }`;
};