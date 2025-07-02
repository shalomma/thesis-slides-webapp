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
                  <p className="text-gray-600">Bounded Likelihood Ratio vs. Decodability.</p>
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
    id: 'supervised_learning_intro',
    title: 'How Supervised Learning Works',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-cyan-800 mb-4">How Supervised Learning Works</h1>
            <p className="text-xl text-cyan-600">Learning from labeled examples</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">📚</div>
                <h2 className="text-2xl font-bold text-gray-800">Problem Setup</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
                  <p className="text-lg text-center text-gray-700 mb-4">
                    <strong>Learn a function from inputs to known outputs</strong>
                  </p>
                  <div className="text-center">
                    <MathJax>
                      {`\\(
                      \\text{Image} \\rightarrow \\text{"cat"} \\quad\\text{Image} \\rightarrow \\text{"dog"}
                      \\)`}
                    </MathJax>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <p className="text-lg text-center text-gray-700 mb-4">
                    <strong>Training data:</strong> (x, y) pairs where y is given
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <p className="text-lg text-center text-gray-700">
                    <strong>Objective:</strong> Learn f(x) ≈ y that performs well on <strong>new, unseen x</strong>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🎯 Common Applications</h2>
              
              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <div className="text-4xl mb-3 text-center">🖼️</div>
                  <h3 className="font-bold text-purple-800 text-center">Image Classification</h3>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <div className="text-4xl mb-3 text-center">📧</div>
                  <h3 className="font-bold text-orange-800 text-center">Spam Detection</h3>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <div className="text-4xl mb-3 text-center">🩺</div>
                  <h3 className="font-bold text-red-800 text-center">Medical Diagnosis</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">Labeled Dataset</div>
              <span className="text-2xl">→</span>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">ML Model</div>
              <span className="text-2xl">→</span>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg font-bold">Predictions on New Image</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'generalization_intro',
    title: 'What Does It Mean to Generalize?',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-800 mb-4">What Does It Mean to Generalize?</h1>
            <p className="text-xl text-purple-600">From memorization to real-world success</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-2xl font-bold text-gray-800">Good Generalization</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <p className="text-lg text-center text-gray-700 mb-4">
                    <strong>Captures patterns, not just specific examples</strong>
                  </p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-12 h-12 bg-green-200 rounded border-2 border-green-400 flex items-center justify-center text-xs">📈</div>
                    <div className="w-12 h-12 bg-green-200 rounded border-2 border-green-400 flex items-center justify-center text-xs">🎯</div>
                    <div className="w-12 h-12 bg-green-200 rounded border-2 border-green-400 flex items-center justify-center text-xs">✨</div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <p className="text-lg text-center text-gray-700">
                    <strong>Works on new data!</strong>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">❌</div>
                <h2 className="text-2xl font-bold text-gray-800">Poor Generalization (Overfitting)</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <p className="text-lg text-center text-gray-700 mb-4">
                    <strong>Memorizes training data, fails on new inputs</strong>
                  </p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-12 h-12 bg-red-200 rounded border-2 border-red-400 flex items-center justify-center text-xs">📝</div>
                    <div className="w-12 h-12 bg-red-200 rounded border-2 border-red-400 flex items-center justify-center text-xs">💭</div>
                    <div className="w-12 h-12 bg-red-200 rounded border-2 border-red-400 flex items-center justify-center text-xs">❓</div>
                  </div>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <p className="text-lg text-center text-gray-700">
                    <strong>Fails on new data!</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 mb-8">
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <p className="text-xl text-center text-gray-700 italic">
              🎓  "Cramming for an exam vs. truly understanding the material"
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">🔑 Key Question</h3>
            <div className="text-xl">
              After training, will the model <strong>work on new data?</strong>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'agent_learning_intro',
    title: 'How Do Machines Learn to Act?',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-teal-800 mb-4">How Do Machines Learn to Act?</h1>
            <p className="text-xl text-teal-600">Learning through trial and error</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 mb-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🤖</div>
              <h2 className="text-2xl font-bold text-gray-800">Reinforcement Learning (RL)</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                <h3 className="font-bold text-teal-800 mb-3">🔑 Key Characteristics:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• No labels — only experience</li>
                  <li>• Feedback comes in the form of <strong>reward or cost</strong></li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-3">🎯 Key Idea:</h3>
                <p className="text-gray-700">
                  Learn a <strong>policy</strong>: how to act in any given situation
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🔄 Agent-Environment Feedback Loop</h2>
            
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="bg-teal-100 p-6 rounded-lg text-center w-64">
                <Brain className="w-12 h-12 mx-auto mb-3 text-teal-600" />
                <p className="font-semibold text-lg">Agent</p>
                <p className="text-sm text-gray-600">Makes decisions</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Action</p>
                  <ArrowRight className="w-8 h-8 text-gray-500 transform rotate-90" />
                </div>
                <div className="text-center">
                  <ArrowLeft className="w-8 h-8 text-gray-500 transform rotate-90" />
                  <p className="text-sm font-semibold text-gray-700 mt-1">Reward & Next State</p>
                </div>
              </div>

              <div className="bg-green-100 p-6 rounded-lg text-center w-64">
                <Globe className="w-12 h-12 mx-auto mb-3 text-green-600" />
                <p className="font-semibold text-lg">Environment</p>
                <p className="text-sm text-gray-600">Responds to actions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🌟 Examples</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center border border-blue-200">
                <div className="text-4xl mb-3">🚶</div>
                <h3 className="font-bold text-blue-800">Robot Learning to Walk</h3>
                <p className="text-sm text-gray-600 mt-2">Trial and error movement</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center border border-purple-200">
                <div className="text-4xl mb-3">♟️</div>
                <h3 className="font-bold text-purple-800">Agent Playing Chess</h3>
                <p className="text-sm text-gray-600 mt-2">Learning winning strategies</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center border border-orange-200">
                <div className="text-4xl mb-3">🦾</div>
                <h3 className="font-bold text-orange-800">Factory Arm Optimization</h3>
                <p className="text-sm text-gray-600 mt-2">Optimizing motions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'rl_lifecycle',
    title: 'A Day in the Life of an RL Agent',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-amber-800 mb-4">A Day in the Life of an RL Agent</h1>
            <p className="text-xl text-amber-600">From exploration to policy improvement</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/30 mb-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 p-6 rounded-lg mb-4 border-2 border-blue-300">
                  <Eye className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                  <h3 className="font-bold text-blue-800 text-lg">1</h3>
                  <p className="text-blue-700">Agent observes state</p>
                </div>
                <p className="text-sm text-gray-600">What's the current situation?</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 p-6 rounded-lg mb-4 border-2 border-green-300">
                  <Zap className="w-12 h-12 mx-auto mb-3 text-green-600" />
                  <h3 className="font-bold text-green-800 text-lg">2</h3>
                  <p className="text-green-700">Chooses action</p>
                </div>
                <p className="text-sm text-gray-600">Decision making</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 p-6 rounded-lg mb-4 border-2 border-orange-300">
                  <BarChart3 className="w-12 h-12 mx-auto mb-3 text-orange-600" />
                  <h3 className="font-bold text-orange-800 text-lg">3</h3>
                  <p className="text-orange-700">Receives feedback (reward/cost)</p>
                </div>
                <p className="text-sm text-gray-600">Environment response</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 p-6 rounded-lg mb-4 border-2 border-purple-300">
                  <Brain className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                  <h3 className="font-bold text-purple-800 text-lg">4</h3>
                  <p className="text-purple-700">Updates its policy</p>
                </div>
                <p className="text-sm text-gray-600">Learning happens here</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">🎯 Goal</h2>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <p className="text-xl text-center text-gray-800 font-semibold">
                Learn to choose actions that lead to <strong>low cost</strong> (or high reward), aka <strong>Optimal Policy</strong>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    )
  },
  {
    id: 'generalization_rl_intro',
    title: 'Why Generalization Matters in RL',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-rose-800 mb-4">Why Generalization Matters in RL</h1>
            <p className="text-xl text-rose-600">Training in one world, acting in another</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">🔄 The Reality</h2>
              <p className="text-xl text-gray-700">
                Train in a <strong>few simulated environments</strong>, deploy in the <strong>real world</strong>
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🏗️</div>
                  <h2 className="text-2xl font-bold text-gray-800">In Practice</h2>
                  <p className="text-gray-600 mt-2">Where we train our agents</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex items-center">
                    <div className="text-2xl mr-3">🤖</div>
                    <div>
                      <p className="font-semibold text-blue-800">A robot is trained in a lab</p>
                      <p className="text-sm text-gray-600">Controlled environment</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-center">
                    <div className="text-2xl mr-3">🚗</div>
                    <div>
                      <p className="font-semibold text-green-800">A car is trained in California</p>
                      <p className="text-sm text-gray-600">Specific traffic patterns</p>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 flex items-center">
                    <div className="text-2xl mr-3">🎮</div>
                    <div>
                      <p className="font-semibold text-purple-800">A game agent is trained on one set of maps</p>
                      <p className="text-sm text-gray-600">Limited scenarios</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🌍</div>
                  <h2 className="text-2xl font-bold text-gray-800">At Deployment</h2>
                  <p className="text-gray-600 mt-2">Where they actually need to work</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200 flex items-center">
                    <div className="text-2xl mr-3">🏠</div>
                    <div>
                      <p className="font-semibold text-red-800">New rooms, new layouts</p>
                      <p className="text-sm text-gray-600">Different furniture, obstacles</p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 flex items-center">
                    <div className="text-2xl mr-3">🏙️</div>
                    <div>
                      <p className="font-semibold text-yellow-800">New cities, new traffic</p>
                      <p className="text-sm text-gray-600">Different road rules, behaviors</p>
                    </div>
                  </div>
                  
                  <div className="bg-pink-50 p-4 rounded-lg border border-pink-200 flex items-center">
                    <div className="text-2xl mr-3">🗺️</div>
                    <div>
                      <p className="font-semibold text-pink-800">New levels, new challenges</p>
                      <p className="text-sm text-gray-600">Unseen game mechanics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 mb-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-gray-800">Key Challenge</h2>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <p className="text-xl text-center text-gray-800">
                The test environment <strong>is not</strong> the same as the training ones
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-3xl font-bold mb-4">🤔 Question</h3>
            <p className="text-2xl italic">
              "Will the agent succeed anyway?"
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'mdp_definition',
    title: 'What Is a Markov Decision Process (MDP)?',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">What Is a Markov Decision Process (MDP)?</h1>
            <p className="text-xl text-slate-600">A simple model of sequential decision-making</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 mb-8">
            <div className="text-center mb-8">
              <p className="text-xl text-slate-800">🤖 An MDP models an environment where an agent makes a sequence of decisions over <strong>H steps</strong></p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">📋 Defined by 6 components:</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="font-bold text-blue-800 mb-2">
                  <MathJax inline>{"\\(\\mathcal{S}\\)"}</MathJax>: States
                </h3>
                <p className="text-gray-700 text-sm">What the agent sees</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-green-800 mb-2">
                  <MathJax inline>{"\\(\\mathcal{A}\\)"}</MathJax>: Actions
                </h3>
                <p className="text-gray-700 text-sm">What the agent can do</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
                <div className="text-3xl mb-3">⏱️</div>
                <h3 className="font-bold text-purple-800 mb-2">
                  <MathJax inline>{"\\(H\\)"}</MathJax>: Horizon
                </h3>
                <p className="text-gray-700 text-sm">Number of time steps</p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold text-yellow-800 mb-2">
                  <MathJax inline>{"\\(\\mu_1\\)"}</MathJax>: Initial Distribution
                </h3>
                <p className="text-gray-700 text-sm">Starting state</p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-center">
                <div className="text-3xl mb-3">🔄</div>
                <h3 className="font-bold text-orange-800 mb-2">
                  <MathJax inline>{"\\(T_h(s' \\mid s, a)\\)"}</MathJax>: Transitions
                </h3>
                <p className="text-gray-700 text-sm">How the world evolves</p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border border-red-200 text-center">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-bold text-red-800 mb-2">
                  <MathJax inline>{"\\(c_h(s, a)\\)"}</MathJax>: Cost Function
                </h3>
                <p className="text-gray-700 text-sm">How bad an action is</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">🔄 Agent's Interaction:</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-slate-800 mb-3">1. Start in state <MathJax inline>{"\\(s_1 \\sim \\mu_1\\)"}</MathJax></h3>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-slate-800 mb-3">2. For each step <MathJax inline>{"\\(h = 1, \\dots, H\\)"}</MathJax>:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>See state <MathJax inline>{"\\(s_h\\)"}</MathJax></li>
                  <li>Choose action <MathJax inline>{"\\(a_h \\in \\mathcal{A}\\)"}</MathJax></li>
                  <li>Pay cost <MathJax inline>{"\\(c_h(s_h, a_h)\\)"}</MathJax></li>
                  <li>Move to new state <MathJax inline>{"\\(s_{h+1} \\sim T_h(\\cdot \\mid s_h, a_h)\\)"}</MathJax></li>
                </ul>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg">
              <MathJax>
                {"\\[ s_1 \\xrightarrow{a_1, c_1} s_2 \\xrightarrow{a_2, c_2} \\dots \\xrightarrow{a_H, c_H} s_{H+1} \\]"}
              </MathJax>
            </div>

          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">💰 Value Function:</h2>
            
            <div className="space-y-4">
              <p className="text-lg text-slate-700 text-center">
                Given this setup, the cost of a policy <MathJax inline>{"\\(\\pi\\)"}</MathJax> in environment <MathJax inline>{"\\(M\\)"}</MathJax> is defined as
              </p>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <MathJax>
                  {"\\[ V_{\\pi;M} = \\mathbb{E}_{\\pi;M}\\!\\left[\\sum_{h=1}^{H} c_{M}(s_{h}, a_{h})\\right] \\]"}
                </MathJax>
              </div>
              
              <p className="text-gray-700 text-center">
                where the expectation is taken over the trajectory distribution induced by the environment dynamics <MathJax inline>{"\\(T_M\\)"}</MathJax> and the randomness in the policy's action choices.
              </p>
            </div>
          </div>

        </div>
      </div>
    )
  },
  {
    id: 'problem',
    title: 'Modeling Generalization in RL',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-800 mb-4">Modeling Generalization in RL</h1>
            <p className="text-xl text-indigo-600">The Learning Problem Setup</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8 items-start">
            <div className="lg:col-span-3 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 space-y-6">
              <div>
                <h3 className="font-bold text-xl text-indigo-700 mb-2">Environment Distribution</h3>
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <MathJax>{"\\[ \\mathcal{D} \\quad \\text{(unknown distribution over MDPs)} \\]"}</MathJax>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-xl text-indigo-700 mb-2">Training Phase</h3>
                <div className="bg-indigo-50 p-4 rounded-lg mb-3">
                  <MathJax>{"\\[ \\mathcal{M} = \\{M_1, \\dots, M_m\\} \\sim \\mathcal{D}^m \\]"}</MathJax>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Each training MDP is <strong>fully known</strong>: transition + cost</li>
                  <li>No exploration needed: learner gets full access</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl text-indigo-700 mb-2">Test Phase</h3>
                 <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>A fresh <MathJax inline>{"\\(M \\sim \\mathcal{D}\\)"}</MathJax> is sampled</li>
                  <li>The learner must act <strong>without knowing</strong> which <MathJax inline>{"\\(M\\)"}</MathJax> was drawn</li>
                  <li>Only observations and rewards are visible</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="font-bold text-xl text-red-700 mb-2">Challenge</h3>
                <p className="text-gray-700">Epistemic uncertainty ⇒ must generalize to unseen MDPs</p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Learning Protocol</h3>
                  <div className="flex flex-col items-center space-y-1">
                      <div className="bg-blue-100 p-6 rounded-lg w-full">
                          <BookOpen className="w-12 h-12 mx-auto mb-3 text-blue-600"/>
                          <h4 className="font-bold text-lg text-blue-800">Train on Known MDPs</h4>
                          <p className="text-sm text-gray-600"><MathJax inline>{"\\(M_1, ..., M_m\\)"}</MathJax></p>
                      </div>

                      <ArrowRight className="w-12 h-12 text-gray-400 transform rotate-90"/>

                      <div className="bg-purple-100 p-6 rounded-lg w-full">
                          <Eye className="w-12 h-12 mx-auto mb-3 text-purple-600"/>
                          <h4 className="font-bold text-lg text-purple-800">Test on Hidden MDP</h4>
                          <p className="text-sm text-gray-600">Act in a new <MathJax inline>{"\\(M \\sim \\mathcal{D}\\)"}</MathJax></p>
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
        </div>
      </div>
    )
  },
  {
    id: 'epistemic_pomdp',
    title: "The Epistemic POMDP Perspective",
    subtitle: "Planning under hidden environment identity",
    content: (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">The Epistemic POMDP Perspective</h1>
            <p className="text-xl text-gray-600">Planning under hidden environment identity</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Core Idea</h2>
              <p className="text-lg text-gray-700">
                When an agent doesn't know which environment it's in, the problem of finding an optimal policy is equivalent to solving a Partially Observable Markov Decision Process (POMDP).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg mb-3 text-gray-700">The State Space is Enlarged</h3>
                <ul className="space-y-3 text-gray-600">
                  <li><strong>Latent state:</strong> <MathJax inline>{"\\((M, s_h)\\)"}</MathJax></li>
                  <li>Environment identity <MathJax inline>{"\\(M \\sim \\mathcal{D}\\)"}</MathJax> is fixed but <strong>unknown</strong>.</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg mb-3 text-gray-700">Agent Receives Only</h3>
                <ul className="space-y-3 text-gray-600">
                    <li>Observable state <MathJax inline>{"\\(s_h\\)"}</MathJax></li>
                    <li>Cost <MathJax inline>{"\\(c(s_h, a_h)\\)"}</MathJax></li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Implication for Generalization</h2>
              <div className="bg-indigo-100 text-indigo-800 p-6 rounded-lg text-center text-xl font-semibold border border-indigo-200">
                Generalization = planning in a <strong>partially observable</strong> space
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">A Visual Analogy</h2>
                <div className="text-center font-mono text-xl bg-gray-800 text-white p-6 rounded-lg">
                    <div>
                        <span className="text-gray-400">Hidden:</span> <span className="text-yellow-400">M</span>
                    </div>
                    <div className="my-2 text-gray-500">
                        (determines costs)
                    </div>
                    <div>
                        <span className="text-gray-400">Observable Rollout:</span> <span className="text-green-400">s₁ → s₂ → s₃ → ...</span>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    )
  },
  {
    id: 'rl_risk',
    title: 'Measuring Performance: Risk and Empirical Risk',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-800 mb-4">Measuring Performance: Risk and Empirical Risk</h1>
            <p className="text-xl text-indigo-600">Expected cost under environment uncertainty</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Population Risk</h2>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg mb-4 text-center">
                <MathJax>
                  {"\\[ L_{\\mathcal D}(\\pi) = \\mathbb E_{M\\sim\\mathcal D}\\!\\left[ V_{\\pi;M} \\right] \\]"}
                </MathJax>
              </div>
              <p className="text-lg text-gray-700 pl-4 border-l-4 border-indigo-200">
                Expected cost of policy π on a new test MDP.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <div className="flex items-center mb-6">
                <BarChart3 className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Empirical Risk</h2>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg mb-4 text-center">
                <MathJax>
                  {"\\[ L_{\\mathcal M}(\\pi) = \\frac{1}{m} \\sum_{i=1}^{m} V_{\\pi; M_i} \\]"}
                </MathJax>
              </div>
               <p className="text-lg text-gray-700 pl-4 border-l-4 border-purple-200">
                Average cost on training environments.
              </p>
            </div>
          </div>

          {/* <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <p className="text-xl">
              The ERM policy <MathJax inline>{"\\(\\hat\\pi \\in \\arg\\min_{\\pi \\in \\Pi} L_{\\mathcal M}(\\pi)\\)"}</MathJax> is the one that minimizes the empirical risk.
            </p>
          </div> */}

          <div className="mt-8 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
            <div className="flex items-center mb-6">
              {/* <CheckCircle className="w-8 h-8 text-green-600 mr-3" /> */}
              <h2 className="text-2xl font-bold text-gray-800">🎯 Performance Guarantee</h2>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              A policy <MathJax inline>{"\\(\\hat\\pi_{\\mathcal M}\\)"}</MathJax> is <strong>ε-suboptimal with confidence <MathJax inline>{"\\(1-\\delta\\)"}</MathJax></strong> if:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 mb-6">
              <MathJax>
                {"\\[ \\mathbb{P}\\left[ L_{\\mathcal D}(\\hat\\pi_{\\mathcal M}) - \\min_{\\pi \\in \\Pi} L_{\\mathcal D}(\\pi) \\le \\epsilon \\right] \\ge 1 - \\delta \\]"}
              </MathJax>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <div className="flex items-center">
                  <Lightbulb className="w-8 h-8 text-yellow-600 mr-4 flex-shrink-0" />
                  <div>
                      <h3 className="text-xl font-bold text-yellow-800 mb-1">Key Question</h3>
                      <p className="text-lg text-gray-700">
                          How large must <MathJax inline>{"\\(m\\)"}</MathJax> be to guarantee this inequality?
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
    id: 'env_family',
    title: 'Construction of a Hard Instance',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-red-800 mb-4">Construction of a Hard Instance</h1>
            <p className="text-xl text-red-600">Same dynamics, exponentially many hidden cost masks</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-red-700">State Space (Layered, Deterministic)</h3>
                <div className="flex items-center justify-center bg-red-50 p-4 rounded-lg">
                  <p className="font-mono text-lg">s₁ → s₂ → … → sₕ</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-red-700">Action Space</h3>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="font-mono text-lg text-center"><MathJax inline>{"\\(\\mathcal{A} = \\{0,1\\}\\)"}</MathJax></p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-orange-700">Transition Dynamics</h3>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <MathJax>{"\\[ T(s_{h+1} | s_h, a) = 1 \\]"}</MathJax>
                  <p className="text-sm text-center text-gray-600">(for all a and h=1,...,H-1)</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30 space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-orange-700">Cost Structure (Varies per environment)</h3>
                 <div className="bg-orange-50 p-4 rounded-lg space-y-4">
                   <p>For each MDP, define binary mask <MathJax inline>{"\\(\\alpha \\in \\{0,1\\}^{H-1}\\)"}</MathJax></p>
                   <div>
                    <p>For steps <MathJax inline>{"\\(h < H\\)"}</MathJax>:</p>
                    <div className="text-center"><MathJax inline>{"\\(c(s_h, a) = \\alpha_h\\)"}</MathJax></div>
                   </div>
                   <div>
                    <p>At step <MathJax inline>{"\\(H\\)"}</MathJax>:</p>
                    <div className="text-center"><MathJax inline>{"\\(c(s_H, a) = \\mathbf{1}[a \\ne f(\\alpha)]\\)"}</MathJax></div>
                    <p className="text-xs text-center text-gray-600 mt-1">for some unknown function <MathJax inline>{"\\(f: \\{0,1\\}^{H-1} \\to \\{0,1\\}\\)"}</MathJax></p>
                   </div>
                </div>
              </div>
               <div className="text-center bg-gray-100 p-4 rounded-2xl border">
                  <h3 className="text-xl font-bold text-gray-800">Shared Across All Environments</h3>
                  <p className="text-lg mt-2 text-gray-600">Transitions, actions, initial state</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-2xl text-center shadow-lg">
              <h3 className="text-2xl font-bold">Number of Environments</h3>
              <p className="text-4xl font-mono mt-2"><MathJax>{"\\(2^{H-1}\\)"}</MathJax></p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'proof_outline',
    title: 'Proof Outline: Why Generalization Fails',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-red-800 mb-4">Proof Outline: Why Generalization Fails</h1>
            <p className="text-xl text-red-600">Even with shared dynamics, cost uncertainty breaks ERM</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-red-200">
                  <th className="p-4 text-left text-lg font-semibold text-red-800 w-1/4">Step</th>
                  <th className="p-4 text-left text-lg font-semibold text-red-800 w-1/2">Argument</th>
                  <th className="p-4 text-left text-lg font-semibold text-red-800 w-1/4">Insight</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-red-100">
                  <td className="p-4 align-top font-bold text-gray-700">1️⃣ Unseen masks</td>
                  <td className="p-4 align-top text-gray-700">If <MathJax inline>{"\\(m < 2^{H-2}\\)"}</MathJax>, at least half of <MathJax inline>{"\\(\\alpha \\in \\{0,1\\}^{H-1}\\)"}</MathJax> remain unseen.</td>
                  <td className="p-4 align-top text-gray-600">High epistemic uncertainty</td>
                </tr>
                <tr className="border-b border-red-100">
                  <td className="p-4 align-top font-bold text-gray-700">2️⃣ Learner's guess</td>
                  <td className="p-4 align-top text-gray-700">For unseen <MathJax inline>{"\\(\\alpha\\)"}</MathJax>, learner cannot infer <MathJax inline>{"\\(f(\\alpha)\\)"}</MathJax> ⇒ guesses wrong at step <MathJax inline>{"\\(H\\)"}</MathJax> with prob. 1/2.</td>
                  <td className="p-4 align-top text-gray-600">Expected cost ≥ 0.5</td>
                </tr>
                <tr className="border-b border-red-100">
                  <td className="p-4 align-top font-bold text-gray-700">3️⃣ Gap in risk</td>
                  <td className="p-4 align-top text-gray-700">Optimal policy (knows <MathJax inline>{"\\(f\\)"}</MathJax>) gets 0 cost; learner gets ≥ 0.5 ⇒ expected generalization gap ≥ 0.25.</td>
                  <td className="p-4 align-top text-gray-600"></td>
                </tr>
                <tr>
                  <td className="p-4 align-top font-bold text-gray-700">4️⃣ From expectation to probability</td>
                  <td className="p-4 align-top text-gray-700">Total cost ≤ <MathJax inline>{"\\(H\\)"}</MathJax> ⇒ Markov's inequality yields <MathJax inline>{"\\(\\mathbb{P}[\\text{gap} \\ge 1/(4H)] \\ge 1/(4H)\\)"}</MathJax>.</td>
                  <td className="p-4 align-top text-gray-600">Weak bound still shows exponential hardness</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-3xl font-bold mb-4">A takeaway we will use later</h3>
            <p className="text-xl">
              Shared transitions do not ensure generalization—<strong>cost structure matters deeply</strong>.
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
                <h2 className="text-2xl font-bold text-blue-800">🔄 Bounded Likelihood Ratio</h2>
                <p className="text-gray-600">All environments look similar</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-blue-800 mb-2">💡 Intuition:</p>
                  <p className="text-gray-700 text-center">Environments behave similarly under any policy</p>
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
                  <p className="text-gray-700 text-center">Identify the environment early</p>
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
    title: 'Bounded Likelihood Ratio Assumption',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-emerald-800 mb-4">Bounded Likelihood Ratio Assumption</h1>
            <p className="text-xl text-emerald-600">Environments behave similarly under any policy</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-blue-200 mb-6">
            <h3 className="font-semibold text-lg mb-4 text-blue-800">Previous Work: Tamar et al. (2022)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-blue-800 mb-2">Their Contribution:</p>
                <p className="text-gray-700">Introduced the bounded likelihood ratio assumption</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-blue-800 mb-2">Their Result:</p>
                <p className="text-gray-700">Regularized ERM achieves <MathJax inline>{"\\(\\tilde{O}(1/m^{1/4})\\)"}</MathJax> sample complexity</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-emerald-200 mb-8">
            <h3 className="font-semibold text-lg mb-3 text-emerald-800">Bounded Likelihood Ratio</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              The instance space <MathJax inline>{"\\(\\mathcal{Z}\\)"}</MathJax> is <em><MathJax inline>{"\\(\\kappa\\)"}</MathJax>-uniformly similar</em> if there exists <MathJax inline>{"\\(\\kappa < \\infty\\)"}</MathJax> such that, for every pair of MDPs <MathJax inline>{"\\(M, M' \\in \\mathcal{Z}\\)"}</MathJax>, every policy <MathJax inline>{"\\(\\pi\\)"}</MathJax>, every horizon <MathJax inline>{"\\(h \\in [H]\\)"}</MathJax>, and every length-<MathJax inline>{"\\(h\\)"}</MathJax> trajectory <MathJax inline>{"\\(\\tau\\)"}</MathJax> with <MathJax inline>{"\\(P^{\\pi}_{M'}(\\tau) > 0\\)"}</MathJax>:
            </p>
            <div className="text-center text-2xl mt-4">
              <MathJax>
                {"\\[ \\frac{P^{\\pi}_{M}(\\tau)}{P^{\\pi}_{M'}(\\tau)} \\;\\le\\; \\kappa. \\]"}
              </MathJax>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 p-2">
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
                    <p className="text-gray-700">Analysis reveals assumption enforces shared cost structure</p>
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
            <p className="text-xl text-sky-600">Proof Sketch – Bounded Likelihood Ratio</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/30 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">🧮 Proof Strategy</h2>
            
            <div className="space-y-6">
              <div className="bg-sky-50 p-6 rounded-lg border border-sky-200">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">1️⃣</span>
                  <h3 className="text-xl font-bold text-sky-800">Shared Costs from Similar Trajectories</h3>
                </div>
                <div className="ml-8 space-y-4 text-gray-700">
                  <p>
                    If two MDPs are <strong>uniformly similar</strong> (bounded likelihood ratio), then they <strong>must</strong> have the <strong>same cost function</strong>.
                  </p>
                  
                  <div className="bg-white p-3 rounded-lg border border-sky-200">
                    <p className="font-bold text-sky-900 mb-1">Key Claim:</p>
                    <div className="text-center">
                      <MathJax>
                        {"\\[ c_M(s, a) = c_{M'}(s, a) \\quad \\forall (s, a, h) \\]"}
                      </MathJax>
                    </div>
                  </div>

                  <div className="bg-sky-100 border-l-4 border-sky-500 p-3 rounded-r-lg mt-3">
                    <p className="mt-1">Similar trajectory distributions ⇒ indistinguishable costs ⇒ <strong>shared cost function</strong>.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">2️⃣</span>
                  <h3 className="text-xl font-bold text-blue-800">Bounding Complexity ⇒ Generalization</h3>
                </div>
                <div className="ml-8 space-y-4 text-gray-700">
                  <p>ERM generalizes because cost-invariant policies are simple.</p>
                  
                  <div>
                    <p className="font-bold text-blue-900 mb-1">Goal: Bound Rademacher Complexity</p>
                    <div className="bg-white p-2 rounded-lg border border-blue-200 text-center">
                      <MathJax>
                        {"\\[ R_m(\\mathcal{F}) = \\mathbb{E}\\left[ \\sup_{\\pi \\in \\Pi^{\\text{inv}}} \\frac{1}{m} \\sum_{i=1}^m \\sigma_i V_{\\pi; M_i} \\right] \\]"}
                      </MathJax>
                    </div>
                  </div>

                  <div>
                      <p className="font-bold text-blue-900 mb-2 mt-2">Key Ideas:</p>
                      <ul className="space-y-1 list-disc list-inside">
                          <li>Use cost-invariance + shared costs</li>
                          <li>Apply variance bounds from likelihood ratio κ</li>
                          <li>Apply sub-Gaussian + maximal inequality over trajectory class</li>
                      </ul>
                  </div>
                  
                  <div>
                      <p className="font-bold text-blue-900 mb-1 mt-2">Result:</p>
                      <div className="bg-white p-2 rounded-lg border border-blue-200 text-center">
                          <MathJax>
                              {"\\[ R_m(\\mathcal{F}) \\le H^{3/2} \\sqrt{ \\frac{ \\kappa^2 \\log(|S||A|) }{m} } \\]"}
                          </MathJax>
                      </div>
                  </div>

                  <div className="bg-blue-100 border-l-4 border-blue-500 p-3 rounded-r-lg mt-4">
                      <p className="font-bold text-blue-900">Generalization Theorem:</p>
                      <div className="text-center text-sm">
                          <MathJax>
                              {"\\[ L_{\\mathcal D}(\\hat\\pi) - \\min_{\\pi \\in \\Pi^{\\mathrm{inv}}} L_{\\mathcal D}(\\pi) \\;\\le\\; \\widetilde{\\mathcal{O}}\\left( \\frac{\\kappa H^{3/2}}{\\sqrt{m}} \\right) \\]"}
                          </MathJax>
                      </div>
                  </div>
                </div>
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
    id: 'similarity_bound',
    title: 'Formal Guarantee: Bounded Likelihood Ratio',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-violet-800 mb-4">Formal Guarantee: Bounded Likelihood Ratio</h1>
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
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-amber-200 mb-8">
            <h3 className="font-semibold text-lg mb-3 text-amber-800">Formal Definition: Decodability</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              An instance space <MathJax inline>{"\\(\\mathcal{Z}\\)"}</MathJax> is <em><MathJax inline>{"\\(\\bar h\\)"}</MathJax>-decodable</em> if there exists <MathJax inline>{"\\(\\bar h \\le H\\)"}</MathJax> such that for every trajectory prefix <MathJax inline>{"\\(\\tau=(s_1,a_1,c_1,\\dots,s_{\\bar h})\\)"}</MathJax> that is feasible in at least one <MathJax inline>{"\\(M \\in \\mathcal Z\\)"}</MathJax> there is a decoding map <MathJax inline>{"\\(\\phi(\\tau) \\in \\mathcal Z\\)"}</MathJax> satisfying:
            </p>
            <div className="text-center text-2xl mt-4">
              <MathJax>
                {"\\[ P^{\\pi}_{\phi(\\tau)}(\\tau)=1 \\quad\\text{and}\\quad \\forall M \\neq \\phi(\\tau):\\; P^{\\pi}_{M}(\\tau)=0, \\]"}
              </MathJax>
            </div>

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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">📊 Main Result</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg text-center">
                  <p className="text-lg font-semibold text-green-800 mb-2">ERM achieves:</p>
                  <p className="text-4xl font-bold text-green-600 mb-2">
                    <MathJax inline>{"\\(\\tilde{O}(1/\\sqrt{m})\\)"}</MathJax>
                  </p>
                  <p className="text-gray-600">same optimal rate!</p>
                </div>
                
                {/* <div className="bg-yellow-100 border-2 border-yellow-300 p-4 rounded-lg">
                  <p className="text-center font-semibold text-yellow-800">
                    🎉 No regularization needed!
                  </p>
                </div> */}
                
                <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                  <p><strong>💡 Key insight:</strong> Bounded likelihood ratios → reduced variance → small Rademacher complexity</p>
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
              {/* Step 1 */}
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">1️⃣</span>
                  <h3 className="text-xl font-bold text-teal-800">Decodability Enables Policy Truncation</h3>
                </div>
                <div className="ml-8 space-y-4 text-gray-700">
                  <p>
                    <strong>Key assumption:</strong> There exists <MathJax inline>{"\\(\\bar{h} \\ll H\\)"}</MathJax> such that the first <MathJax inline>{"\\(\\bar{h}\\)"}</MathJax> steps <strong>uniquely identify</strong> the MDP.
                  </p>
                  <div>
                    <p><strong>Truncation insight:</strong> Any history-dependent policy <MathJax inline>{"\\(\\pi \\in \\Pi_H\\)"}</MathJax> can be converted into a truncated policy <MathJax inline>{"\\(\\bar\\pi \\in \\Pi_{\\bar h}\\)"}</MathJax>:</p>
                    <div className="bg-white p-3 rounded-lg border border-teal-200 mt-2">
                      <div className="text-center">
                        <MathJax>
                          {"\\[ \\bar\\pi_h = \\begin{cases} \\pi_h & h \\le \\bar{h} \\\\ \\text{Markov policy for } M_i & h > \\bar{h} \\end{cases} \\]"}
                        </MathJax>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p><strong>Why it works:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
                      <li>After <MathJax inline>{"\\(\\bar{h}\\)"}</MathJax> steps, the environment is fully identified.</li>
                      <li>From then on, <strong>standard MDP optimal control</strong> can take over.</li>
                    </ul>
                  </div>
                  <div className="bg-teal-100 border-l-4 border-teal-500 p-3 rounded-r-lg mt-3">
                    <p className="font-bold text-teal-900 mb-1">Result: No value loss from truncation</p>
                    <div className="text-center">
                      <MathJax>
                        {"\\[ V_{\\bar\\pi; M_i} = V_{\\pi; M_i} \\quad \\forall i \\]"}
                      </MathJax>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">2️⃣</span>
                  <h3 className="text-xl font-bold text-cyan-800">Reduced Complexity via Truncation</h3>
                </div>
                <div className="ml-8 space-y-4 text-gray-700">
                  <p>We only need to consider the class of truncated policies <MathJax inline>{"\\(\\Pi_{\\bar h}\\)"}</MathJax>. These policies depend on:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Full trajectory history up to step <MathJax inline>{"\\(\\bar h\\)"}</MathJax></li>
                      <li>Then <strong>Markovian</strong> thereafter</li>
                  </ul>
                  <div>
                    <p><strong>Key idea:</strong> The space of truncated policies is <strong>finite and small</strong>:</p>
                    <div className="bg-white p-3 rounded-lg border border-cyan-200 mt-2 text-center">
                      <MathJax>
                        {"\\[ |\\Pi_{\\bar h}| \\le |A|^{(|S||A||C|)^{2\\bar h}} \\]"}
                      </MathJax>
                    </div>
                  </div>
                  <div>
                    <p>Apply <strong>Massart's Lemma</strong> to bound complexity:</p>
                    <div className="bg-white p-3 rounded-lg border border-cyan-200 mt-2 text-center">
                      <MathJax>
                        {"\\[ R_m(\\mathcal{F}) \\le H \\sqrt{ \\frac{2 \\log |\\Pi_{\\bar h}| }{m} } \\]"}
                      </MathJax>
                      <p className="text-sm mt-1 text-gray-600">⇒ Polynomial in <MathJax inline>{"\\((|S||A||C|)^{\\bar h}\\)"}</MathJax></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">3️⃣</span>
                  <h3 className="text-xl font-bold text-blue-800">Generalization under Decodability</h3>
                </div>
                <div className="ml-8 space-y-4 text-gray-700">
                  <p>Plug in the complexity bound into the uniform convergence framework.</p>
                  <div>
                    <p>With probability ≥ <MathJax inline>{"\\(1 - \\delta\\)"}</MathJax>:</p>
                    <div className="bg-white p-3 rounded-lg border border-blue-200 mt-2 text-center">
                      <MathJax>
                        {"\\[ L_{\\mathcal D}(\\hat\\pi) - \\min_{\\pi \\in \\Pi_H} L_{\\mathcal D}(\\pi) \\le \\mathcal{O}\\left( H \\sqrt{\\frac{ (|S||A||C|)^{2\\bar h} \\log |A| }{m}} + H \\sqrt{\\frac{ \\log(1/\\delta) }{m}} \\right) \\]"}
                      </MathJax>
                    </div>
                  </div>
                  <div className="bg-blue-100 border-l-4 border-blue-500 p-3 rounded-r-lg mt-3">
                    <p><strong>Conclusion:</strong> Decodability reduces the hypothesis class ⇒ ERM achieves <MathJax inline>{"\\(\\mathcal{O}(1/\\sqrt{m})\\)"}</MathJax> generalization</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">🔑 Key Insight</h3>
            <p className="text-xl">
              Decodability reduces the hypothesis class ⇒ ERM achieves <MathJax inline>{"\\(\\tilde{\\mathcal{O}}(1/\\sqrt{m})\\)"}</MathJax> generalization
            </p>
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
    id: 'unification',
    title: 'Summary: Two Paths to Tractable Generalization',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-800 mb-4">Summary: Two Paths to Tractable Generalization</h1>
            <p className="text-xl text-indigo-600">Both roads lead to a simpler policy search problem.</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/30 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Unifying Insight: Reducing Policy Complexity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              {/* Similarity */}
              <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-800 mb-3">🔄 Bounded Likelihood Ratio</h3>
                <p className="text-lg text-gray-700 mb-4">Forces all environments to behave alike.</p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-emerald-900">Key Mechanism:</p>
                  <p className="text-gray-600">Suppresses variance, making simple policies (ERM) effective.</p>
                </div>
              </div>

              {/* Decodability */}
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-orange-800 mb-3">🔍 Decodability</h3>
                <p className="text-lg text-gray-700 mb-4">Allows quick identification of the environment.</p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-orange-900">Key Mechanism:</p>
                  <p className="text-gray-600">Allows truncating complex policies, shrinking the search space.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">The Common Thread</h3>
            <p className="text-xl">
              Both structures, in different ways, ensure that a small, effective set of policies can be learned from a feasible number of examples, achieving <MathJax inline>{"\\(\\tilde{O}(1/\\sqrt{m})\\)"}</MathJax> sample complexity.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'limitations',
    title: 'Limitations or Future Work',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Limitations or Future Work</h1>
            <p className="text-xl text-gray-600">Honest assessment of current approach</p>
          </div>
          
          <div className="lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Reality Check</h2>
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
            <h3 className="text-2xl font-bold mb-4">Concluding Perspective</h3>
            <p className="text-xl">
              Strong theoretical foundation, but bridging to practice remains an open challenge
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
                <h3 className="text-xl font-bold">Discussion Prompt</h3>
              </div>
              <p className="opacity-90">
                How common is structure in real tasks? Can we design environments to satisfy our assumptions?
              </p>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold">Practical Impact</h3>
              </div>
              <p className="opacity-90">
                Simple methods can be surprisingly effective when the environment has the right structure
              </p>
            </div>
          </div>
          
          <div className="text-center bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
            <h3 className="text-2xl font-bold mb-4">🙏 Thank You!</h3>
            <p className="text-lg mb-4">Questions & Discussion</p>
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

