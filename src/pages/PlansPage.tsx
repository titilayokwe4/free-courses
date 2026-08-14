import React, { useState } from 'react';
import { Check, HelpCircle, Laptop, ShoppingBag, Radio, Zap } from 'lucide-react';
import { Header } from '../components/Header';
import { LearningAdvantage } from '../components/LearningAdvantage';
import { Footer } from '../components/Footer';

export const PlansPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      title: 'Starter',
      description: 'Perfect for beginners exploring new skills',
      priceMonthly: 12.99,
      priceAnnual: 10.39,
      iconColor: 'bg-emerald-50 text-emerald-500 dark:bg-emerald-950/20 dark:text-emerald-400',
      btnStyle: 'bg-[#00E676] hover:bg-[#00c765] text-white border-none',
      features: [
        'Access to 50+ beginner courses',
        'Certificate of completion',
        'Mobile app access',
        'Community forums'
      ]
    },
    {
      title: 'Pro',
      description: 'For serious learners who want unlimited access',
      priceMonthly: 29.99,
      priceAnnual: 23.99,
      isPopular: true,
      iconColor: 'bg-purple-100 text-brand-primary dark:bg-purple-950/30 dark:text-purple-400',
      btnStyle: 'bg-white text-brand-primary hover:bg-gray-50 border-none',
      features: [
        'Access to 400+ courses',
        'All skill levels included',
        'Offline downloads',
        'Certificate of completion',
        'Priority support',
        'Live Q&A sessions'
      ]
    },
    {
      title: 'Teams',
      description: 'Collaborative learning for professionals',
      priceMonthly: 49.99,
      priceAnnual: 39.99,
      iconColor: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
      btnStyle: 'bg-[#0A0E27] hover:bg-gray-850 text-white border-none dark:bg-[#11143B] dark:hover:bg-[#1e1e36] dark:border dark:border-[#23264A]',
      features: [
        'Everything in Pro',
        'Up to 5 team members',
        'Team progress dashboard',
        'Custom learning paths',
        'Dedicated account manager',
        'API access'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFBFC] dark:bg-[#070A31] font-sans transition-colors duration-300">
      <Header />

      {/* Hero Header Section */}
      <div className="bg-[#0B0F3B] dark:bg-[#060822] text-white py-12 md:py-16 text-center transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h1 className="text-[#FFFFFF] text-4xl md:text-5xl font-extrabold tracking-tight">
            Simple, <span className="text-[#00E676]">flexible</span> pricing
          </h1>
          <p className="text-gray-300 text-md md:text-lg max-w-2xl mx-auto leading-relaxed">
            Pick the plan that fits how you learn. Own a single course, stream everything, or go deep with live coaching.
          </p>

          {/* Toggle pill */}
          <div className="inline-flex items-center bg-[#11143B] border border-[#23264A] p-1 rounded-full mt-4">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingPeriod === 'annual'
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>Annual</span>
              <span className="text-[10px] bg-brand-primary text-white px-1.5 py-0.5 rounded font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Pricing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const displayPrice = billingPeriod === 'monthly' ? plan.priceMonthly : plan.priceAnnual;
            return (
              <div
                key={plan.title}
                className={`rounded-3xl p-8 flex flex-col justify-between relative shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  plan.isPopular
                    ? 'bg-[#5A12EC] text-white ring-4 ring-purple-600/30'
                    : 'bg-white dark:bg-[#11143B] text-gray-900 dark:text-white border border-gray-200 dark:border-[#23264A]'
                }`}
              >
                {/* Popular Pill */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-8 bg-brand-primary text-white text-[10px] uppercase font-extrabold tracking-widest px-3.5 py-1.5 rounded-full shadow-md border border-purple-500">
                    Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 ${plan.iconColor}`}>
                    <Zap size={22} fill="currentColor" />
                  </div>

                  <div>
                    <h3 className={`text-2xl font-bold tracking-tight ${plan.isPopular && 'text-white'}`}>{plan.title}</h3>
                    <p className={`text-xs mt-1 leading-normal ${
                      plan.isPopular ? 'text-purple-100' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold">₦{displayPrice.toFixed(2)}</span>
                    <span className={`text-sm font-semibold ml-1.5 ${
                      plan.isPopular ? 'text-purple-200' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      /month
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 pt-4 border-t border-gray-100 dark:border-white/10 text-sm">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={18} className={`flex-shrink-0 mt-0.5 ${
                          plan.isPopular ? 'text-white' : 'text-emerald-500'
                        }`} />
                        <span className={plan.isPopular ? 'text-purple-50' : 'text-gray-600 dark:text-gray-300'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button Action */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => {
                      alert(`Signing up for the ${plan.title} plan!`);
                      window.location.href = '/login';
                    }}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer ${plan.btnStyle}`}
                  >
                    Log in to Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Value Propositions (Netflix, Single subject, Live) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] rounded-2xl p-6 flex gap-4 items-start shadow-sm transition-colors duration-300">
            <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/20 text-[#1ABC9C] rounded-xl flex items-center justify-center flex-shrink-0">
              <Laptop size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white text-md mb-1.5">All Access</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                Like Netflix for learning — one flat rate unlocks every course on the platform. Best for explorers.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] rounded-2xl p-6 flex gap-4 items-start shadow-sm transition-colors duration-300">
            <div className="w-10 h-10 bg-purple-50 dark:bg-purple-950/20 text-brand-primary dark:text-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white text-md mb-1.5">Single Course</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                Commit to one subject. Pay once, keep access forever. Download, revisit, and grow at your pace.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] rounded-2xl p-6 flex gap-4 items-start shadow-sm transition-colors duration-300">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950/20 text-[#5A12EC] rounded-xl flex items-center justify-center flex-shrink-0">
              <Radio size={20} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white text-md mb-1.5">Live + Recorded</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                Want accountability? Join a live cohort. 8 scheduled weekly sessions with a real instructor, plus all pre-recorded content.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-24 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Frequently asked questions
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-lg mx-auto">
              Everything you need to know about our plans and course access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] p-6 rounded-2xl space-y-2 shadow-sm transition-colors duration-300">
              <h3 className="font-bold text-gray-900 dark:text-white text-md flex items-center gap-2">
                <HelpCircle size={18} className="text-[#1ABC9C]" />
                What's the difference between All Access and Single Course?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed pl-6.5">
                All Access is a monthly subscription that streams every course on the platform — cancel anytime. Single Course is a one-time payment for permanent lifetime access to one specific course.
              </p>
            </div>

            <div className="bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] p-6 rounded-2xl space-y-2 shadow-sm transition-colors duration-300">
              <h3 className="font-bold text-gray-900 dark:text-white text-md flex items-center gap-2">
                <HelpCircle size={18} className="text-[#1ABC9C]" />
                How does the Live + Recorded program work?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed pl-6.5">
                After subscribing you join a cohort. You get access to all pre-recorded videos immediately, plus 8 live weekly sessions with an instructor. Replays of every session are available after.
              </p>
            </div>

            <div className="bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] p-6 rounded-2xl space-y-2 shadow-sm transition-colors duration-300">
              <h3 className="font-bold text-gray-900 dark:text-white text-md flex items-center gap-2">
                <HelpCircle size={18} className="text-[#1ABC9C]" />
                Can I switch plans later?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed pl-6.5">
                Yes. You can subscribe to any plan at any time, and they are independent — for example, you can hold an All Access subscription and also buy individual courses.
              </p>
            </div>

            <div className="bg-white dark:bg-[#11143B] border border-gray-200 dark:border-[#23264A] p-6 rounded-2xl space-y-2 shadow-sm transition-colors duration-300">
              <h3 className="font-bold text-gray-900 dark:text-white text-md flex items-center gap-2">
                <HelpCircle size={18} className="text-[#1ABC9C]" />
                What payment methods are accepted?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed pl-6.5">
                We accept all major debit/credit cards and mobile money via Paystack. All transactions are secured and processed in Naira (₦).
              </p>
            </div>
          </div>
        </div>
      </div>

      <LearningAdvantage />
      <Footer />
    </div>
  );
};
