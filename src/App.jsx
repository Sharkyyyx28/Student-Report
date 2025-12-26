import React from 'react';
import { studentData } from './data/StudentData';
import { getFeedback } from './utils/feedbackHelper';
import SkillChart from './components/SkillChart';

const SkillBar = ({ label, score }) => (
  <div className="mb-4 last:mb-0 group">
    <div className="flex justify-between items-end mb-1">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</span>
      <span className="text-sm font-bold text-slate-700">{score}/9</span>
    </div>
    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
      <div 
        className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out group-hover:bg-indigo-600"
        style={{ width: `${(score / 9) * 100}%` }}
      ></div>
    </div>
  </div>
);

function App() {
  const { name, date, overall_score, skills } = studentData;
  const feedback = getFeedback(overall_score);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight text-slate-800">Student <span className="text-indigo-600">Report</span></span>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-6 md:p-12">
        
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Speaking Evaluation</h1>
          <p className="text-slate-500 text-lg">Report for <span className="font-semibold text-slate-900">{name}</span> • {date}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          <div className="md:col-span-4 bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
            
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Overall Score</h3>

            <div className="relative w-48 h-48 flex items-center justify-center">

              <svg className="w-full h-full transform -rotate-90">
                <circle cx="96" cy="96" r="88" fill="none" stroke="#f1f5f9" strokeWidth="12" />
                <circle 
                  cx="96" cy="96" r="88" fill="none" stroke="currentColor" strokeWidth="12" 
                  strokeDasharray={552} 
                  strokeDashoffset={552 - (552 * (overall_score / 9))}
                  className={`text-indigo-600 transition-all duration-1000 ease-out`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-6xl font-black text-slate-800">{overall_score}</span>
                <span className="text-slate-400 font-medium">out of 9</span>
              </div>
            </div>

            <div className={`mt-8 px-6 py-2 rounded-full text-sm font-bold shadow-lg ${feedback.styles}`}>
              {feedback.label}
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="md:col-span-2 bg-indigo-900 text-white rounded-2xl p-8 shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
               <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-indigo-500 opacity-20 rounded-full blur-2xl"></div>
               
               <h3 className="relative z-10 text-indigo-200 font-semibold mb-2">Performance Summary</h3>
               <p className="relative z-10 text-2xl font-light leading-relaxed">"{feedback.description}"</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
               <h3 className="text-slate-700 font-bold mb-4">Skill Radar</h3>
               <SkillChart skills={skills} />
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-center">
              <h3 className="text-slate-700 font-bold mb-6">Breakdown</h3>
              {Object.entries(skills).map(([key, value]) => (
                <SkillBar key={key} label={key} score={value} />
              ))}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;