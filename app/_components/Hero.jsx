import React from 'react';
import { ArrowRight, PiggyBank, LineChart, Lock } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-5xl mx-auto px-8 pt-20 pb-32">
        <div className="space-y-20">
          {/* Header */}
          <div className="space-y-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 tracking-tight">
              Track your money,
              <br />
              <span className="text-blue-600">shape your future</span>
            </h1>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
              Simple, beautiful, and powerful personal finance tracking that helps you make better financial decisions.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href= "/dashboard" className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                Start Your Financial Journey <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                <PiggyBank className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Smart Savings</h3>
              <p className="text-slate-600">Intelligent suggestions to help you save more effectively</p>
            </div>
            <div className="space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Visual Insights</h3>
              <p className="text-slate-600">Beautiful charts and graphs to visualize your finances</p>
            </div>
            <div className="space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Bank-Grade Security</h3>
              <p className="text-slate-600">Your financial data is always safe and encrypted</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 py-12 border-y border-slate-200">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-slate-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2M+</div>
              <div className="text-slate-600">Money Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-slate-600">User Rating</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;