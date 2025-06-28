import React, { useState, useEffect } from 'react';
import './App.css';
import { ChevronLeft, ChevronRight, Menu, X, Brain, TrendingUp, Cog, AlertTriangle, Eye, Search, Lightbulb, Target, ArrowRight, ArrowLeft, CheckCircle, Users, MessageCircle, Layers, BarChart3, Zap, BookOpen, Globe, Activity } from 'lucide-react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

// Component for mathematical expressions
// const MathExpr = ({ children, className = "" }) => (
//   <span className={`font-mono text-lg ${className}`} style={{ fontFamily: 'KaTeX_Math, serif' }}>
//     {children}
//   </span>
// );

const slides = [
  {
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
              <span className="text-lg">🧠 Machine Learning Theory</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-green-300" />
              <span className="text-lg">📈 Reinforcement Learning</span>
            </div>
            <div className="flex items-center">
              <Cog className="w-8 h-8 mr-3 text-blue-300" />
              <span className="text-lg">⚙️ Statistical Analysis</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'agenda',
    title: 'Agenda',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Agenda</h1>
            <p className="text-xl text-gray-600">Our journey through RL generalization</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-12 rounded-2xl shadow-xl border border-white/30">
            <ul className="space-y-6">
              <li className="flex items-start">
                <CheckCircle className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Introduction & Motivation</h3>
                  <p className="text-gray-600">Why is generalization in RL a critical problem?</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">The Generalization Problem</h3>
                  <p className="text-gray-600">Formalizing the challenge: A distribution over MDPs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Intractability Without Structure</h3>
                  <p className="text-gray-600">Why the general problem is exponentially hard.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Two Roads to Tractability</h3>
                  <p className="text-gray-600">Uniform Similarity vs. Decodability.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Main Results & Key Insights</h3>
                  <p className="text-gray-600">Formal guarantees and proof sketches.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Conclusion & Future Work</h3>
                  <p className="text-gray-600">Summary, limitations, and what's next.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'motivation',
    title: 'Real-World Motivation',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Real-World Motivation</h1>
            <p className="text-xl text-gray-600">Training on Few, Acting in Many</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏠</div>
                <h2 className="text-2xl font-bold text-gray-800">Robotic Assistant</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <p><strong>Training:</strong> One apartment 🏠</p>
                <p><strong>Deployment:</strong> New layout 📦</p>
                <p><strong>Challenge:</strong> Navigation robustness ❓</p>
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🚗</div>
                <h2 className="text-2xl font-bold text-gray-800">Autonomous Vehicle</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <p><strong>Training:</strong> San Francisco 🏙️</p>
                <p><strong>Deployment:</strong> Tokyo ✈️</p>
                <p><strong>Challenge:</strong> Generalize to new traffic dynamics ❓</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">🌐 The Generalization Gap</h3>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">Training</div>
              <span className="text-2xl">→</span>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg font-bold">GAP</div>
              <span className="text-2xl">→</span>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">Deployment</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'rl_primer',
    title: 'What is Reinforcement Learning?',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-teal-800 mb-4">What is Reinforcement Learning?</h1>
            <p className="text-xl text-teal-600">Learning through interaction with an environment</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🔄 The Learning Loop</h2>
              
              <div className="flex flex-col items-center justify-center space-y-2">
                {/* Agent */}
                <div className="bg-teal-100 p-4 rounded-lg text-center w-64">
                  <Brain className="w-8 h-8 mx-auto mb-2 text-teal-600" />
                  <p className="font-semibold">Agent</p>
                  <p className="text-sm text-gray-600">Makes decisions</p>
                </div>

                {/* Arrows */}
                <div className="flex w-64 justify-between items-center px-4">
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold text-gray-700 -mb-1">Action</p>
                    <ArrowRight className="w-8 h-8 text-gray-500 transform rotate-90" />
                  </div>
                  <div className="flex flex-col items-center">
                     <ArrowLeft className="w-8 h-8 text-gray-500 transform rotate-90" />
                     <p className="text-sm font-semibold text-gray-700 -mt-1">State & Reward</p>
                  </div>
                </div>

                {/* Environment */}
                <div className="bg-green-100 p-4 rounded-lg text-center w-64">
                  <Cog className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="font-semibold">Environment</p>
                  <p className="text-sm text-gray-600">Responds</p>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border border-teal-200 mt-6">
                <h3 className="font-bold mb-3 text-teal-800">📚 Key Terms:</h3>
                <ul className="space-y-2">
                  <li><strong>Policy π:</strong> Agent's decision strategy</li>
                  <li><strong>Reward/Cost:</strong> Feedback signal</li>
                  <li><strong>Return:</strong> Total accumulated reward</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🎯 Single MDP Assumption</h2>
              
              <div className="space-y-10 p-8">
                <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Classical RL</h3>
                  <p className="text-gray-700">Agent learns in the same environment it will be tested in</p>
                </div>
                
                <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg text-center">
                  <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-red-600" />
                  <h3 className="text-xl font-bold text-red-800 mb-2">❌ Reality is Different!</h3>
                  <p className="text-gray-700">Environments change, we need adaptive agents</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'problem',
    title: 'The Generalization Challenge in RL',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-800 mb-4">The Generalization Challenge in RL</h1>
            <p className="text-xl text-indigo-600">A distribution over MDPs</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/30 text-center">
              <div className="text-4xl mb-4">🎲</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Step 1: Nature Draws</h3>
              <p className="text-gray-600">Hidden MDP from unknown distribution <MathJax inline>{"\\(D\\)"}</MathJax></p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/30 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Step 2: Training</h3>
              <p className="text-gray-600">Learner observes sample of <MathJax inline>{"\\(m\\)"}</MathJax> MDPs</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/30 text-center">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Step 3: Testing</h3>
              <p className="text-gray-600">Learns policy to minimize expected cost over <MathJax inline>{"\\(D\\)"}</MathJax></p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🎒 Visual: "Bag of MDPs"</h2>
            
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="bg-indigo-100 p-6 rounded-lg mb-4">
                  <div className="text-3xl mb-2">🎒</div>
                  <p className="font-semibold">Training Sample</p>
                  <p className="text-sm text-gray-600">M₁, M₂, ..., Mₘ</p>
                </div>
              </div>
              
              <ArrowRight className="w-8 h-8 text-gray-400" />
              
              <div className="text-center">
                <div className="bg-green-100 p-6 rounded-lg mb-4">
                  <Brain className="w-12 h-12 mx-auto mb-2 text-green-600" />
                  <p className="font-semibold">Learn Policy π</p>
                  <p className="text-sm text-gray-600">From training data</p>
                </div>
              </div>
              
              <ArrowRight className="w-8 h-8 text-gray-400" />
              
              <div className="text-center">
                <div className="bg-yellow-100 p-6 rounded-lg mb-4">
                  <div className="text-3xl mb-2">❓</div>
                  <p className="font-semibold">Test on M*</p>
                  <p className="text-sm text-gray-600">Hidden identity</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">🔍 Core Question</h3>
            <p className="text-xl">
              How big must <strong>m</strong> be for the learned policy to generalize?
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'hardness',
    title: 'Generalization Is Intractable Without Structure',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-red-800 mb-4">Generalization Is Intractable Without Structure</h1>
            <p className="text-xl text-red-600">The Epistemic-POMDP Barrier</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">👁️ Partial Observability</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="font-semibold text-red-800 mb-2">The Problem:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Hidden environment identity = partial observability</li>
                    <li>• Agent doesn't know which MDP it's in</li>
                    <li>• Must infer environment from observations</li>
                    <li>• Creates epistemic uncertainty</li>
                  </ul>
                </div>
                
                <div className="bg-red-100 p-4 rounded-lg text-center border border-red-300">
                  <p className="text-red-800 font-semibold">
                    📚 This is called an "Epistemic-POMDP"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">⚠️ Worst-Case Result</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <p className="font-semibold text-orange-800 mb-2">📈 Sample Complexity:</p>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-orange-800 mb-2">
                      Exponential in <MathJax inline>{"\\(H\\)"}</MathJax>
                    </p>
                    <p className="text-sm text-gray-600"><MathJax inline>{"\\(H\\)"}</MathJax> = planning horizon</p>
                  </div>
                </div>
                
                <div className="bg-orange-100 p-4 rounded-lg border border-orange-300">
                  <p className="text-sm">
                    <strong>💡 Intuition:</strong> Planning becomes POMDP-solving. 
                    Sample complexity may grow exponentially in horizon <MathJax inline>{"\\(H\\)"}</MathJax>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-3xl font-bold mb-4">🚫 Key Takeaway</h3>
            <p className="text-xl">
              <strong>Without structure, generalization is intractable!</strong>
            </p>
            <p className="text-lg mt-4 opacity-90">
              We need structural assumptions to make the problem learnable
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'roadmap',
    title: 'Two Structural Lenses for Tractability',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">Two Structural Lenses for Tractability</h1>
            <p className="text-xl text-blue-600">Similarity vs. Identifiability</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-blue-800">🔄 Uniform Similarity</h2>
                <p className="text-gray-600">All environments look similar</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-blue-800 mb-2">💡 Intuition:</p>
                  <p className="text-gray-700">Environments behave similarly under any policy</p>
                </div>
                
                <div className="bg-blue-100 p-4 rounded-lg border border-blue-300 text-center">
                  <p className="font-semibold text-blue-800">Sample Complexity:</p>
                  <p className="text-2xl font-bold text-blue-600">
                    <MathJax inline>{"\\(\\tilde{O}(1/\\sqrt{m})\\)"}</MathJax>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-orange-800">🔍 Decodability</h2>
                <p className="text-gray-600">Short trajectory reveals environment</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <p className="font-semibold text-orange-800 mb-2">💡 Intuition:</p>
                  <p className="text-gray-700">Identify the environment early</p>
                </div>
                
                <div className="bg-orange-100 p-4 rounded-lg border border-orange-300 text-center">
                  <p className="font-semibold text-orange-800">Sample Complexity:</p>
                  <p className="text-2xl font-bold text-orange-600">
                    <MathJax inline>{"\\(\\tilde{O}(1/\\sqrt{m})\\)"}</MathJax>
                  </p>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    )
  },
  {
    id: 'similarity',
    title: 'Uniform Similarity Assumption',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-emerald-800 mb-4">Uniform Similarity Assumption</h1>
            <p className="text-xl text-emerald-600">Environments behave similarly under any policy</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">📖 Everyday Analogy</h2>
              
              <div className="space-y-6">
                <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                  <div className="text-4xl mb-4 text-center">📚</div>
                  <p className="text-lg text-center font-semibold text-emerald-800 mb-2">
                    "Environments differ like fonts"
                  </p>
                  <p className="text-gray-700 text-center">
                    Look different up close, but read the same sentence
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                    <p className="text-gray-700">Likelihood ratio between trajectories bounded by κ</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                    <p className="text-gray-700">No policy sees wild differences across MDPs</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                    <p className="text-gray-700">Similar trajectory distributions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">📊 Main Result</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg text-center">
                  <p className="text-lg font-semibold text-green-800 mb-2">ERM achieves:</p>
                  <p className="text-4xl font-bold text-green-600 mb-2">
                    <MathJax inline>{"\\(\\tilde{O}(1/\\sqrt{m})\\)"}</MathJax>
                  </p>
                  <p className="text-gray-600">generalization error</p>
                </div>
                
                <div className="bg-yellow-100 border-2 border-yellow-300 p-4 rounded-lg">
                  <p className="text-center font-semibold text-yellow-800">
                    🎉 No regularization needed!
                  </p>
                </div>
                
                <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                  <p><strong>💡 Key insight:</strong> Bounded likelihood ratios → reduced variance → small Rademacher complexity</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🔍 Visual: Overlapping Trajectory Distributions</h2>
            
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-emerald-200 rounded-full opacity-70 flex items-center justify-center mb-2">
                  <span className="font-bold text-emerald-800">MDP 1</span>
                </div>
                <p className="text-sm text-gray-600">Environment 1</p>
              </div>
              
              <div className="text-center relative">
                <div className="w-32 h-32 bg-purple-200 rounded-full opacity-70 flex items-center justify-center mb-2 relative z-10">
                  <span className="font-bold text-purple-800">Overlap</span>
                </div>
                <div className="w-32 h-32 bg-green-200 rounded-full opacity-70 absolute top-0 left-8 flex items-center justify-center">
                  <span className="font-bold text-green-800">MDP 2</span>
                </div>
                <p className="text-sm text-gray-600 mt-8">Similar distributions</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-green-200 rounded-full opacity-70 flex items-center justify-center mb-2">
                  <span className="font-bold text-green-800">MDP 2</span>
                </div>
                <p className="text-sm text-gray-600">Environment 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'similarity_bound',
    title: 'Formal Guarantee: Uniform Similarity',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-violet-800 mb-4">Formal Guarantee: Uniform Similarity</h1>
            <p className="text-xl text-violet-600">Generalization bound for plain ERM</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-12 rounded-2xl shadow-xl border border-white/30 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">📐 Key Result</h2>
            
            <div className="bg-gradient-to-r from-violet-100 to-purple-100 p-8 rounded-xl border-2 border-violet-300 mb-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-violet-800 mb-4">Sample Complexity:</p>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-violet-200">
                  <p className="text-3xl font-mono text-violet-600">
                    <MathJax inline>{"\\(m = O(H^3\\kappa^2 \\log(|S||A|)/\\epsilon^2)\\)"}</MathJax>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-violet-50 p-6 rounded-lg border border-violet-200 text-center">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="font-bold text-violet-800 mb-2">No Regularization</h3>
                <p className="text-gray-700 text-sm">Plain ERM works without modifications</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold text-purple-800 mb-2">Simpler Policies</h3>
                <p className="text-gray-700 text-sm">Low trajectory variance enables simple solutions</p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-indigo-800 mb-2">Fast Convergence</h3>
                <p className="text-gray-700 text-sm">Optimal <MathJax inline>{"\\(O(1/\\sqrt{m})\\)"}</MathJax> rate achieved</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">✨ Main Insight</h3>
            <p className="text-xl">
              Bounded likelihood ratios ⇒ reduced variance ⇒ tractable generalization
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'decodability',
    title: 'Decodability Assumption',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-amber-800 mb-4">Decodability Assumption</h1>
            <p className="text-xl text-amber-600">Identify the environment early</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">🎵 Musical Analogy</h2>
              
              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <div className="text-4xl mb-4 text-center">🎵</div>
                  <p className="text-lg text-center font-semibold text-amber-800 mb-2">
                    "First three notes reveal the song"
                  </p>
                  <p className="text-gray-700 text-center">
                    Short trajectory prefix uniquely identifies MDP
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                    <p className="text-gray-700">Short trajectory prefix uniquely identifies MDP</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                    <p className="text-gray-700">Practical analogy: signature in early states</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                    <p className="text-gray-700">Policy can switch to optimal control once MDP is known</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">🚀 Truncated Policies</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-lg text-center">
                  <MathJax>
                    {`$$ \\bar\\pi(h_t) = \\begin{cases} \\text{🔍 explore} & \\text{if MDP not identified} \\\\ \\text{⚡ } \\pi^*_{M}(h_t) & \\text{if MDP M identified} \\end{cases}$$`}
                  </MathJax>
                </div>
                
                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg text-center">
                  <p className="text-lg font-semibold text-green-800 mb-2">Result: ERM achieves</p>
                  <p className="text-4xl font-bold text-green-600 mb-2">
                    <MathJax inline>{"\\(\\tilde{O}(1/\\sqrt{m})\\)"}</MathJax>
                  </p>
                  <p className="text-gray-600">same optimal rate!</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
            
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <div className="bg-yellow-100 p-6 rounded-lg mb-4 border-2 border-yellow-300">
                  <Search className="w-12 h-12 mx-auto mb-2 text-yellow-600" />
                  <p className="font-semibold">🔍 Explore</p>
                  <p className="text-sm text-gray-600">for <MathJax inline>{"\\(\\bar{h}\\)"}</MathJax> steps</p>
                </div>
              </div>
              
              <ArrowRight className="w-8 h-8 text-gray-400" />
              
              <div className="text-center">
                <div className="bg-amber-100 p-6 rounded-lg mb-4 border-2 border-amber-300">
                  <Eye className="w-12 h-12 mx-auto mb-2 text-amber-600" />
                  <p className="font-semibold">🔍 Decode</p>
                  <p className="text-sm text-gray-600">identify MDP</p>
                </div>
              </div>
              
              <ArrowRight className="w-8 h-8 text-gray-400" />
              
              <div className="text-center">
                <div className="bg-green-100 p-6 rounded-lg mb-4 border-2 border-green-300">
                  <Target className="w-12 h-12 mx-auto mb-2 text-green-600" />
                  <p className="font-semibold">⚡ Act Optimally</p>
                  <p className="text-sm text-gray-600">use <MathJax inline>{"\\(\\pi^*_{M}\\)"}</MathJax></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'decodability_bound',
    title: 'Formal Guarantee: Decodability',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-rose-800 mb-4">Formal Guarantee: Decodability</h1>
            <p className="text-xl text-rose-600">Truncated policy class enables fast convergence</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-12 rounded-2xl shadow-xl border border-white/30 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">📐 Key Result</h2>
            
            <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-8 rounded-xl border-2 border-rose-300 mb-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-rose-800 mb-4">Sample Complexity:</p>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-rose-200">
                  <p className="text-2xl font-mono text-rose-600">
                    <MathJax inline>{"\\(m = O(H^2(|S||A||C|)^{2\\bar{h}} \\log|A|/\\epsilon^2)\\)"}</MathJax>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-rose-50 p-6 rounded-lg border border-rose-200 text-center">
                <div className="text-3xl mb-3">📏</div>
                <h3 className="font-bold text-rose-800 mb-2">Prefix Length</h3>
                <p className="text-gray-700 text-sm">Complexity grows with prefix length <MathJax inline>{"\\(\\bar{h}\\)"}</MathJax></p>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg border border-pink-200 text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold text-pink-800 mb-2">Class Size</h3>
                <p className="text-gray-700 text-sm">Identifiability reduces effective class size</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-purple-800 mb-2">Fast Convergence</h3>
                <p className="text-gray-700 text-sm">Still achieves <MathJax inline>{"\\(O(1/\\sqrt{m})\\)"}</MathJax> rate</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">🔑 Main Insight</h3>
            <p className="text-xl">
              Truncated policies ⇒ smaller hypothesis class ⇒ better covering number
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'counterexample',
    title: 'When Similarity Fails: A Lower Bound',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-red-800 mb-4">When Similarity Fails: A Lower Bound</h1>
            <p className="text-xl text-red-600">Even identical transitions can't save us</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">🏗️ Construction</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <p className="font-semibold text-red-800 mb-3">Constructed MDP Family:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• ✅ <strong>Shared dynamics:</strong> All MDPs have identical transitions</li>
                    <li>• ❌ <strong>Different costs:</strong> Reward functions vary across environments</li>
                    <li>• 🚫 <strong>No structure:</strong> Neither similarity nor decodability holds</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <p className="text-orange-800 font-semibold text-center">
                    📊 Identical transitions ≠ Generalization
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <div className="flex items-center mb-6">
                <BarChart3 className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">📈 Lower Bound Result</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <p className="font-semibold text-orange-800 mb-3">Sample Complexity:</p>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-orange-800 mb-2">
                      Still Exponential in <MathJax inline>{"\\(H\\)"}</MathJax>
                    </p>
                    <p className="text-sm text-gray-600">No improvement without structure</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-700">
                    <strong>💡 Insight:</strong> Shared dynamics alone are insufficient. 
                    Structure in costs/rewards is crucial for generalization.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-3xl font-bold mb-4">⚠️ Key Lesson</h3>
            <p className="text-xl">
              <strong>Structure is necessary:</strong> Without either similarity or decodability, generalization remains exponentially hard
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'proof_similarity',
    title: 'Why ERM Works under Similarity',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-sky-800 mb-4">Why ERM Works under Similarity</h1>
            <p className="text-xl text-sky-600">Proof Sketch – Uniform Similarity</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/30 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">🧮 Proof Strategy</h2>
            
            <div className="space-y-6">
              <div className="bg-sky-50 p-6 rounded-lg border border-sky-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">1️⃣</span>
                  <h3 className="text-xl font-bold text-sky-800">Rewrite Excess Risk</h3>
                </div>
                <p className="text-gray-700 ml-8">Express generalization error as weighted sum over training MDPs</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">2️⃣</span>
                  <h3 className="text-xl font-bold text-blue-800">Bounded Likelihood Ratio</h3>
                </div>
                <p className="text-gray-700 ml-8">Use uniform similarity to control trajectory distribution differences</p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">3️⃣</span>
                  <h3 className="text-xl font-bold text-indigo-800">Uniform Convergence</h3>
                </div>
                <p className="text-gray-700 ml-8">Apply Rademacher complexity analysis to show fast convergence</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">🔑 Key Insight</h3>
            <p className="text-xl">
              Bounded variance ⇒ Small Rademacher complexity ⇒ Fast convergence
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'proof_decodability',
    title: 'Why ERM Works under Decodability',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-teal-800 mb-4">Why ERM Works under Decodability</h1>
            <p className="text-xl text-teal-600">Proof Sketch – Decodability</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/30 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">🧮 Proof Strategy</h2>
            
            <div className="space-y-6">
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">1️⃣</span>
                  <h3 className="text-xl font-bold text-teal-800">Truncate Policies</h3>
                </div>
                <p className="text-gray-700 ml-8">Restrict to policies that identify MDP after <MathJax inline>{"\\(\\bar{h}\\)"}</MathJax> steps</p>
              </div>
              
              <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">2️⃣</span>
                  <h3 className="text-xl font-bold text-cyan-800">Smaller Hypothesis Class</h3>
                </div>
                <p className="text-gray-700 ml-8">Effective hypothesis space reduces ⇒ better covering number</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">3️⃣</span>
                  <h3 className="text-xl font-bold text-blue-800">Apply Massart's Lemma</h3>
                </div>
                <p className="text-gray-700 ml-8">Use Massart's lemma + union bound for concentration</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">🔑 Key Insight</h3>
            <p className="text-xl">
              Truncated policies ⇒ Smaller hypothesis class ⇒ Better generalization
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'unification',
    title: 'Two Regimes, One Sample Complexity',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-800 mb-4">Two Regimes, One Sample Complexity</h1>
            <p className="text-xl text-indigo-600">What makes generalization possible?</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-emerald-800">🔄 Uniform Similarity</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                  <p className="font-semibold text-emerald-800 mb-2">How it works:</p>
                  <p className="text-gray-700">Suppresses variance across environments</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="font-semibold text-green-800 mb-2">Effect:</p>
                  <p className="text-gray-700">Reduces effective policy class complexity</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-orange-800">🔍 Decodability</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <p className="font-semibold text-orange-800 mb-2">How it works:</p>
                  <p className="text-gray-700">Eliminates epistemic uncertainty</p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-yellow-800 mb-2">Effect:</p>
                  <p className="text-gray-700">Reduces effective policy class size</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🎯 Unified Insight</h2>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg border-2 border-indigo-300">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-purple-600 mr-2" />
                  <h3 className="font-bold text-purple-800">Question 1</h3>
                </div>
                <p className="text-gray-700">
                  How can we automatically detect which structural regime applies in a given environment?
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="font-bold text-green-800">Question 2</h3>
                </div>
                <p className="text-gray-700">
                  Can we combine both assumptions for even better generalization guarantees?
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">🚀 The Journey Continues</h3>
            <p className="text-xl">
              From theory to practice: Many exciting challenges await!
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'limitations',
    title: 'Limitations & Assumptions',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Limitations & Assumptions</h1>
            <p className="text-xl text-gray-600">Honest assessment of current approach</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">⚠️ Current Limitations</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="font-semibold text-red-800 mb-2">🔍 Idealized Setting</p>
                  <p className="text-gray-700 text-sm">Assumes full access to training MDPs</p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <p className="font-semibold text-orange-800 mb-2">📏 Exact Structure</p>
                  <p className="text-gray-700 text-sm">Real-world: approximate structure, not exact</p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-yellow-800 mb-2">⏰ Finite Horizon</p>
                  <p className="text-gray-700 text-sm">Finite horizon + tabular setting only</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">💡 Reality Check</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-blue-800 mb-2">🌍 Real Environments</p>
                  <p className="text-gray-700 text-sm">May only approximately satisfy our assumptions</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <p className="font-semibold text-purple-800 mb-2">🧠 Function Approximation</p>
                  <p className="text-gray-700 text-sm">Neural networks and large state spaces not covered</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="font-semibold text-green-800 mb-2">📚 Theoretical Foundations</p>
                  <p className="text-gray-700 text-sm">Strong theoretical insights, practical gaps remain</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">🎯 Take-Home Message</h3>
            <p className="text-xl">
              Strong theoretical foundation, but bridging to practice remains an open challenge
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'future',
    title: 'Future Directions',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-800 mb-4">Future Directions</h1>
            <p className="text-xl text-green-600">Exciting research opportunities ahead</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/30">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-bold text-green-800">Approximate Structure</h3>
              </div>
              <p className="text-gray-700 text-sm">Explore approximate similarity/decodability in real environments</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/30">
              <div className="flex items-center mb-4">
                <Activity className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold text-blue-800">Automatic Detection</h3>
              </div>
              <p className="text-gray-700 text-sm">Detect structure automatically without prior knowledge</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/30">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-bold text-purple-800">Function Approximation</h3>
              </div>
              <p className="text-gray-700 text-sm">Extend to function approximation & infinite horizon</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/30">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-lg font-bold text-orange-800">Empirical Validation</h3>
              </div>
              <p className="text-gray-700 text-sm">Empirical tests on benchmarks (Meta-World, Procgen)</p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🔬 Research Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-purple-600 mr-2" />
                  <h3 className="font-bold text-purple-800">Question 1</h3>
                </div>
                <p className="text-gray-700">
                  How can we automatically detect which structural regime applies in a given environment?
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="font-bold text-green-800">Question 2</h3>
                </div>
                <p className="text-gray-700">
                  Can we combine both assumptions for even better generalization guarantees?
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">🚀 The Journey Continues</h3>
            <p className="text-xl">
              From theory to practice: Many exciting challenges await!
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'takeaways',
    title: 'Key Take-Aways',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 p-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-10"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-white relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Key Take-Aways</h1>
            <p className="text-2xl opacity-90">When can simple ERM generalize in RL?</p>
          </div>
          
          <div className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center">✨ Main Messages</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Structure Turns Intractability</h3>
                <p className="text-sm opacity-90">Into <MathJax inline className="text-yellow-300">{"\\(\\tilde{O}(1/\\sqrt{m})\\)"}</MathJax> learnability</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Two Assumptions</h3>
                <p className="text-sm opacity-90">Similarity or identifiability enable fast generalization</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Simple ERM Works</h3>
                <p className="text-sm opacity-90">No regularization needed when structure exists</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold">💬 Discussion Prompt</h3>
              </div>
              <p className="opacity-90">
                How common is structure in real tasks? Can we design environments to satisfy our assumptions?
              </p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold">🤝 Practical Impact</h3>
              </div>
              <p className="opacity-90">
                Simple methods can be surprisingly effective when the environment has the right structure
              </p>
            </div>
          </div>
          
          <div className="text-center bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
            <h3 className="text-2xl font-bold mb-4">🙏 Thank You!</h3>
            <p className="text-lg mb-4">Questions & Discussion</p>
            <div className="flex justify-center items-center space-x-8 text-sm opacity-90">
              <span>📧 Contact: [your-email]</span>
              <span>🔗 Paper: [arxiv-link]</span>
              <span>💻 Code: [github-link]</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsMenuOpen(false);
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

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  const config = {
    loader: { load: ["input/tex", "output/chtml"] },
  };

  return (
    <MathJaxContext config={config}>
      <div className="relative">
        {/* Navigation */}
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-white bg-opacity-90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-opacity-100 transition-all"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {isMenuOpen && (
            <div className="absolute top-16 left-0 bg-white rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto">
              <h3 className="font-bold text-lg mb-3">Presentation Outline</h3>
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`w-full text-left p-3 rounded-lg mb-2 transition-all ${
                    currentSlide === index
                      ? 'bg-blue-100 text-blue-800 font-semibold'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <span className="text-sm text-gray-500 block">Slide {index + 1}</span>
                  {slide.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Slide Navigation */}
        <div className="fixed bottom-4 right-4 z-50 flex space-x-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="bg-white bg-opacity-90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-opacity-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="bg-white bg-opacity-90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-opacity-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <span className="text-sm font-medium">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
        </div>

        {/* Slide Content */}
        <div className="w-full">
          {slides[currentSlide].content}
        </div>
      </div>
    </MathJaxContext>
  );
}

export default App;

