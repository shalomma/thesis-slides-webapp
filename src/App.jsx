import React, { useState, useEffect } from 'react';
import './App.css';
import { ChevronLeft, ChevronRight, Menu, X, Brain, TrendingUp, Cog, Car, Home, AlertTriangle, Eye, Search, Lightbulb, Target, ArrowRight, CheckCircle, Users, MessageCircle } from 'lucide-react';

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
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-blue-500">
              <div className="text-center mb-6">
                <Home className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Robotic Assistant</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <p>🏠 <strong>Training:</strong> Works perfectly in one apartment</p>
                <p>📦 <strong>Challenge:</strong> Moves to a new apartment</p>
                <p>❓ <strong>Question:</strong> Will it navigate the new layout?</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-green-500">
              <div className="text-center mb-6">
                <Car className="w-16 h-16 mx-auto mb-4 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">Autonomous Vehicle</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <p>🏙️ <strong>Training:</strong> Learns in San Francisco</p>
                <p>✈️ <strong>Challenge:</strong> Deployed in Tokyo</p>
                <p>❓ <strong>Question:</strong> Will it handle different traffic patterns?</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">The Core Challenge</h3>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <span className="rounded-lg border border-white/20 bg-black/20 shadow-lg backdrop-blur-lg text-white px-4 py-2 mr-4">Training</span>
                <span className="text-2xl">→</span>
              </div>
              <div className="rounded-lg border border-white/20 bg-black/20 shadow-lg backdrop-blur-lg text-white px-6 py-3 font-bold">
                GENERALIZATION GAP
              </div>
              <div className="flex items-center">
                <span className="rounded-lg border border-white/20 bg-black/20 shadow-lg backdrop-blur-lg text-white px-4 py-2 ml-4">Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'rl-primer',
    title: 'What Is Reinforcement Learning? 90-second Primer',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">What Is Reinforcement Learning?</h1>
            <p className="text-xl text-gray-600">90-second Primer</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Agent ↔ Environment Loop</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="bg-blue-100 p-4 rounded-lg flex-1 text-center">
                    <Brain className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <p className="font-semibold">Agent</p>
                    <p className="text-sm text-gray-600">Makes decisions</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-4" />
                  <div className="bg-green-100 p-4 rounded-lg flex-1 text-center">
                    <Cog className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <p className="font-semibold">Environment</p>
                    <p className="text-sm text-gray-600">Responds with state & reward</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-3">Key Vocabulary:</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>State:</strong> Current situation</li>
                    <li><strong>Action:</strong> What the agent does</li>
                    <li><strong>Policy:</strong> Agent's decision strategy</li>
                    <li><strong>Return:</strong> Total reward accumulated</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Traditional RL Assumption</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">One Fixed MDP</h3>
                  <p className="text-gray-700">Agent learns in the same environment it will be tested in</p>
                </div>
                
                <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg text-center">
                  <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-red-600" />
                  <h3 className="text-xl font-bold text-red-800 mb-2">But Reality Is Different!</h3>
                  <p className="text-gray-700">Environments change, and we need agents that can adapt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'problem-statement',
    title: 'Problem Statement: RL with Environment Uncertainty',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Problem Statement</h1>
            <p className="text-xl text-gray-600">RL with Environment Uncertainty</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🎲</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Step 1: Nature Draws</h3>
              <p className="text-gray-600">Unknown MDP each episode</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Step 2: Training</h3>
              <p className="text-gray-600">Sample of m MDPs → learn policy</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Step 3: Testing</h3>
              <p className="text-gray-600">Fresh draw from distribution</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Visual: "Bag of MDPs"</h2>
            
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="bg-blue-100 p-6 rounded-lg mb-4">
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
          
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Core Question</h3>
            <p className="text-xl">
              How big must <strong>m</strong> be for the learned policy to generalize?
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'epistemic-barrier',
    title: 'Why Is This Hard? The Epistemic-POMDP Barrier',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Why Is This Hard?</h1>
            <p className="text-xl text-gray-600">The Epistemic-POMDP Barrier</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-red-500">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Partial Observability</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p><strong>The Problem:</strong></p>
                <ul className="space-y-2 ml-4">
                  <li>• Agent doesn't know which MDP it's in</li>
                  <li>• Task identity is latent/hidden</li>
                  <li>• Must infer environment from observations</li>
                  <li>• Creates partial observability</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg mt-6">
                <p className="text-red-800 font-semibold text-center">
                  This is called an "Epistemic-POMDP"
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-orange-500">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Worst-Case Result</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p><strong>Sample Complexity:</strong></p>
                <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-lg text-center">
                  <p className="text-2xl font-bold text-orange-800 mb-2">
                    Exponential in H
                  </p>
                  <p className="text-sm text-gray-600">H = planning horizon</p>
                </div>
                
                <p className="text-sm">
                  <strong>Intuition:</strong> Without structure, the agent needs exponentially many examples to distinguish between environments and learn good policies.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Key Takeaway</h3>
            <p className="text-xl">
              <strong>Without structure, generalization is intractable!</strong>
            </p>
            <p className="text-lg mt-4 opacity-90">
              We need assumptions to make the problem learnable
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'two-lenses',
    title: 'Two Structural Lenses That Rescue Generalization',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Two Structural Lenses</h1>
            <p className="text-xl text-gray-600">That Rescue Generalization</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">=</span>
                </div>
                <h2 className="text-2xl font-bold text-blue-800">Uniform Similarity</h2>
                <p className="text-gray-600">Bounded Likelihood Ratio</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-2">Intuition:</p>
                  <p className="text-gray-700">"Environments differ like fonts—look different up close, read the same sentence"</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Real-world analogy:</p>
                  <p className="text-gray-700">Different cities, similar traffic rules</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-orange-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-orange-800">Decodability</h2>
                <p className="text-gray-600">Short Trajectory Reveals Task</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-800 mb-2">Intuition:</p>
                  <p className="text-gray-700">"First three notes of a song reveal which song it is"</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Real-world analogy:</p>
                  <p className="text-gray-700">Apartment layout clear from entrance</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-orange-600 text-white p-6">
              <h3 className="text-2xl font-bold text-center">Summary Table</h3>
            </div>
            
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold">Aspect</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-600">Uniform Similarity</th>
                      <th className="text-left py-3 px-4 font-semibold text-orange-600">Decodability</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Key Property</td>
                      <td className="py-3 px-4">Environments are similar</td>
                      <td className="py-3 px-4">Environments are distinguishable</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Generalization Rate</td>
                      <td className="py-3 px-4 text-blue-600 font-bold">Õ(1/√m)</td>
                      <td className="py-3 px-4 text-orange-600 font-bold">Õ(1/√m)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Method</td>
                      <td className="py-3 px-4">Plain ERM</td>
                      <td className="py-3 px-4">Truncated Policies + ERM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'uniform-similarity',
    title: 'Uniform Similarity – Intuition & Result',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">Uniform Similarity</h1>
            <p className="text-xl text-blue-600">Intuition & Result</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-blue-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Everyday Analogy</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-4xl mb-4 text-center">📖</div>
                  <p className="text-lg text-center font-semibold text-blue-800 mb-2">
                    "Environments differ like fonts"
                  </p>
                  <p className="text-gray-700 text-center">
                    Look different up close, but read the same sentence
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <p className="text-gray-700">Same underlying structure</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <p className="text-gray-700">Different surface appearances</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <p className="text-gray-700">Similar trajectory distributions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-green-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Main Result</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg text-center">
                  <p className="text-lg font-semibold text-green-800 mb-2">Plain ERM achieves:</p>
                  <p className="text-4xl font-bold text-green-600 mb-2">Õ(1/√m)</p>
                  <p className="text-gray-600">generalization error</p>
                </div>
                
                <div className="bg-yellow-100 border-2 border-yellow-300 p-4 rounded-lg">
                  <p className="text-center font-semibold text-yellow-800">
                    🎉 No regularization needed!
                  </p>
                </div>
                
                <div className="text-sm text-gray-600">
                  <p><strong>Key insight:</strong> Bounded likelihood ratios → reduced variance → small Rademacher complexity</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Visual: Overlapping Trajectory Distributions</h2>
            
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-200 rounded-full opacity-70 flex items-center justify-center mb-2">
                  <span className="font-bold text-blue-800">MDP 1</span>
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
    id: 'decodability',
    title: 'Decodability – Intuition & Result',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-orange-800 mb-4">Decodability</h1>
            <p className="text-xl text-orange-600">Intuition & Result</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-orange-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Musical Analogy</h2>
              
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="text-4xl mb-4 text-center">🎵</div>
                  <p className="text-lg text-center font-semibold text-orange-800 mb-2">
                    "First three notes reveal the song"
                  </p>
                  <p className="text-gray-700 text-center">
                    Short prefix uniquely identifies the MDP
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <p className="text-gray-700">Environments are distinguishable</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <p className="text-gray-700">Quick identification possible</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <p className="text-gray-700">Switch to optimal control</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-green-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Truncated Policies</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-mono text-center">
                    π<sub>truncated</sub>(h<sub>t</sub>) = {'{'}
                    <br />
                    &nbsp;&nbsp;explore if MDP not identified
                    <br />
                    &nbsp;&nbsp;π*<sub>M</sub>(h<sub>t</sub>) if MDP M identified
                    <br />
                    {'}'}
                  </p>
                </div>
                
                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg text-center">
                  <p className="text-lg font-semibold text-green-800 mb-2">ERM achieves:</p>
                  <p className="text-4xl font-bold text-green-600 mb-2">Õ(1/√m)</p>
                  <p className="text-gray-600">same optimal rate!</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Flow Chart: Explore → Decode → Act Optimally</h2>
            
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <div className="bg-yellow-100 p-6 rounded-lg mb-4 border-2 border-yellow-300">
                  <Search className="w-12 h-12 mx-auto mb-2 text-yellow-600" />
                  <p className="font-semibold">Explore</p>
                  <p className="text-sm text-gray-600">for ĥ steps</p>
                </div>
              </div>
              
              <ArrowRight className="w-8 h-8 text-gray-400" />
              
              <div className="text-center">
                <div className="bg-orange-100 p-6 rounded-lg mb-4 border-2 border-orange-300">
                  <Eye className="w-12 h-12 mx-auto mb-2 text-orange-600" />
                  <p className="font-semibold">Decode</p>
                  <p className="text-sm text-gray-600">identify MDP</p>
                </div>
              </div>
              
              <ArrowRight className="w-8 h-8 text-gray-400" />
              
              <div className="text-center">
                <div className="bg-green-100 p-6 rounded-lg mb-4 border-2 border-green-300">
                  <Target className="w-12 h-12 mx-auto mb-2 text-green-600" />
                  <p className="font-semibold">Act Optimally</p>
                  <p className="text-sm text-gray-600">use π*<sub>M</sub></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'proof-sketches',
    title: 'Proof Sketches at a Glance',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Proof Sketches at a Glance</h1>
            <p className="text-xl text-gray-600">How Structure Reduces Complexity</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">=</span>
                </div>
                <h2 className="text-2xl font-bold text-blue-800">Uniform Similarity</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-2">Key Insight:</p>
                  <p className="text-gray-700">Reduced variance ⇒ small Rademacher complexity</p>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <p>1. Bounded likelihood ratios</p>
                  <p>2. Control trajectory distribution differences</p>
                  <p>3. Uniform convergence follows</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-block bg-blue-100 p-3 rounded-lg">
                    <p className="text-lg font-bold text-blue-800">Complexity ↓</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-orange-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-orange-800">Decodability</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-800 mb-2">Key Insight:</p>
                  <p className="text-gray-700">Policy class shrinks ⇒ small covering number</p>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <p>1. Truncate policies after identification</p>
                  <p>2. Effective hypothesis space reduces</p>
                  <p>3. Covering number becomes manageable</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-block bg-orange-100 p-3 rounded-lg">
                    <p className="text-lg font-bold text-orange-800">Complexity ↓</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Comic-Style: "Complexity Shrinks"</h2>
            
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="bg-red-100 p-6 rounded-lg mb-4 border-2 border-red-300">
                  <div className="text-4xl mb-2">😰</div>
                  <p className="font-bold text-red-800">Without Structure</p>
                  <p className="text-sm text-gray-600">Exponential complexity</p>
                </div>
              </div>
              
              <div className="text-center">
                <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <p className="font-semibold text-gray-800">Add Structure!</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 p-6 rounded-lg mb-4 border-2 border-green-300">
                  <div className="text-4xl mb-2">😊</div>
                  <p className="font-bold text-green-800">With Structure</p>
                  <p className="text-sm text-gray-600">Õ(1/√m) complexity</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-purple-50 p-6 rounded-lg text-center">
              <p className="text-lg font-semibold text-purple-800">
                Structure is the key to tractable generalization!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'practical-implications',
    title: 'Empirical / Practical Implications',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Empirical / Practical Implications</h1>
            <p className="text-xl text-gray-600">When Simple Methods Suffice</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
              <div className="text-center mb-4">
                <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-600" />
                <h3 className="text-xl font-bold text-gray-800">Simple ERM Works</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• No regularization needed</li>
                <li>• No meta-learning required</li>
                <li>• When structure exists</li>
                <li>• Plain empirical risk minimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
              <div className="text-center mb-4">
                <Target className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Benchmark Examples</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Procgen:</strong> Visual similarity</li>
                <li>• <strong>Meta-World:</strong> Task decodability</li>
                <li>• Assumptions roughly hold</li>
                <li>• Validate theoretical insights</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500">
              <div className="text-center mb-4">
                <Lightbulb className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-800">Design Advice</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Look for similarity first</li>
                <li>• Check for easy task IDs</li>
                <li>• Before adding complexity</li>
                <li>• Structure beats algorithms</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Decision Framework</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-blue-800 mb-2">Step 1: Analyze Your Environment</h3>
                <p className="text-gray-700">Do environments share similar structure? Can you quickly identify which environment you're in?</p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-green-800 mb-2">Step 2: Choose Your Approach</h3>
                <p className="text-gray-700">If structure exists → try simple ERM first. If not → consider more complex meta-learning approaches.</p>
              </div>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-purple-800 mb-2">Step 3: Validate Assumptions</h3>
                <p className="text-gray-700">Test whether your structural assumptions hold in practice. Measure similarity or decodability.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Key Insight</h3>
            <p className="text-xl">
              Structure in the environment is often more valuable than sophistication in the algorithm
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'limitations',
    title: 'Limitations & Future Work',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-100 p-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Limitations & Future Work</h1>
            <p className="text-xl text-gray-600">Honest Assessment & Research Directions</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-red-500">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Current Limitations</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="font-semibold text-red-800 mb-2">Training-Environment Exploration</p>
                  <p className="text-gray-700 text-sm">We assume perfect knowledge of training MDPs</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="font-semibold text-red-800 mb-2">Exact vs Approximate Structure</p>
                  <p className="text-gray-700 text-sm">Real environments may only approximately satisfy assumptions</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="font-semibold text-red-800 mb-2">Finite Horizon</p>
                  <p className="text-gray-700 text-sm">Infinite-horizon case remains open</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="font-semibold text-red-800 mb-2">Function Approximation</p>
                  <p className="text-gray-700 text-sm">Neural networks and large state spaces not covered</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-blue-500">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Future Directions</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-2">Combining Assumptions</p>
                  <p className="text-gray-700 text-sm">What if environments are both similar AND decodable?</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-2">Automatic Detection</p>
                  <p className="text-gray-700 text-sm">Algorithms that detect which structure exists</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-2">Robustness Analysis</p>
                  <p className="text-gray-700 text-sm">How much can assumptions be violated?</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-2">Deep RL Extension</p>
                  <p className="text-gray-700 text-sm">Neural networks with structural priors</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Research Questions for Students</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-purple-600 mr-2" />
                  <h3 className="font-bold text-purple-800">Question 1</h3>
                </div>
                <p className="text-gray-700">
                  Can we develop algorithms that automatically detect whether uniform similarity or decodability holds in a given environment?
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="font-bold text-green-800">Question 2</h3>
                </div>
                <p className="text-gray-700">
                  How can we extend these results to continuous state spaces and neural network function approximation?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'takeaways',
    title: 'Key Take-aways & Discussion Prompts',
    content: (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 p-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-10"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-white relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Key Take-aways</h1>
            <p className="text-2xl opacity-90">& Discussion Prompts</p>
          </div>
          
          <div className="bg-white bg-opacity-15 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Main Message</h2>
            <p className="text-xl text-center leading-relaxed">
              <strong>Structure turns impossibility into Õ(1/√m) learnability</strong>
            </p>
          </div>
          
          <div className="bg-white bg-opacity-15 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">If You Remember Three Things...</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Structure Matters</h3>
                <p className="text-sm opacity-90">Environmental structure is often more valuable than algorithmic sophistication</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Simple Can Work</h3>
                <p className="text-sm opacity-90">Plain ERM achieves optimal rates under structural assumptions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Two Regimes</h3>
                <p className="text-sm opacity-90">Both similarity and distinguishability enable generalization</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold">Discussion Question 1</h3>
              </div>
              <p className="opacity-90">
                Which structural regime do you think a self-driving car faces when moving between cities? Why?
              </p>
            </div>
            
            <div className="bg-white bg-opacity-15 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold">Discussion Question 2</h3>
              </div>
              <p className="opacity-90">
                How might you design environments to satisfy either uniform similarity or decodability assumptions?
              </p>
            </div>
          </div>
          
          <div className="text-center bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
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

  return (
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
  );
}

export default App;

