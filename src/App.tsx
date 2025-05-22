import React, { useState, useEffect } from 'react';
import { Shield, Italic as Crystal, Network, Brain, Lock, Fingerprint, Waves, Sparkles, AlertTriangle, Activity, ChevronRight } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('crystal');
  const [alerts, setAlerts] = useState(0);
  const [systemHealth, setSystemHealth] = useState(98);

  useEffect(() => {
    // Simulate periodic system health updates
    const healthInterval = setInterval(() => {
      setSystemHealth(prev => Math.max(85, Math.min(100, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 5000);

    // Simulate random security alerts
    const alertInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setAlerts(prev => prev + 1);
      }
    }, 10000);

    return () => {
      clearInterval(healthInterval);
      clearInterval(alertInterval);
    };
  }, []);

  const getContentForSection = (section) => {
    const content = {
      neural: {
        title: "Neural Network Analytics",
        description: "Real-time deep learning analysis and quantum processing metrics.",
        stats: [
          { label: "Processing Power", value: "1.2 PFLOPS" },
          { label: "Active Models", value: "247" },
          { label: "Accuracy Rate", value: "99.97%" }
        ]
      },
      xrpl: {
        title: "XRPL Network Status",
        description: "Current blockchain metrics and transaction processing status.",
        stats: [
          { label: "TPS", value: "1,500" },
          { label: "Node Health", value: "Optimal" },
          { label: "Smart Contracts", value: "Active" }
        ]
      },
      quantum: {
        title: "Quantum Security Shield",
        description: "Quantum-resistant encryption and security protocol status.",
        stats: [
          { label: "Encryption Strength", value: "256-qubit" },
          { label: "Threat Detection", value: "Active" },
          { label: "Security Score", value: "98.5%" }
        ]
      },
      biometric: {
        title: "Biometric Systems",
        description: "Multi-factor authentication and behavioral analysis metrics.",
        stats: [
          { label: "Auth Success Rate", value: "99.99%" },
          { label: "Active Sessions", value: "1,247" },
          { label: "Risk Score", value: "Low" }
        ]
      },
      earth: {
        title: "Earth Connection Status",
        description: "Gaia frequency synchronization and ecosystem metrics.",
        stats: [
          { label: "Resonance", value: "7.83 Hz" },
          { label: "Harmony Index", value: "95%" },
          { label: "Balance Score", value: "Optimal" }
        ]
      },
      healing: {
        title: "Self-Healing Systems",
        description: "Autonomous maintenance and optimization metrics.",
        stats: [
          { label: "Recovery Rate", value: "99.99%" },
          { label: "Predictive Score", value: "High" },
          { label: "System Health", value: "Optimal" }
        ]
      }
    };
    return content[section] || null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
      <nav className="bg-black/30 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Crystal className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
                Crystal Agent
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-emerald-400" />
                <span className="text-white/80">{systemHealth}% Operational</span>
              </div>
              <div className="flex items-center space-x-2">
                <AlertTriangle className={`w-5 h-5 ${alerts > 0 ? 'text-amber-400' : 'text-emerald-400'}`} />
                <span className="text-white/80">{alerts} Alerts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-emerald-400" />
                <span className="text-white/80">Protected by Thoth Shield</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <div 
            className={`bg-white/5 backdrop-blur-xl rounded-xl p-6 border transition-all duration-300 cursor-pointer
              ${activeSection === 'neural' ? 'border-emerald-400 bg-white/10' : 'border-white/10 hover:border-emerald-400/50'}`}
            onClick={() => setActiveSection('neural')}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-semibold text-white">Neural Network</h2>
            </div>
            <p className="text-gray-300">
              Advanced deep learning capabilities with multi-modal processing and quantum computing integration.
            </p>
          </div>

          <div 
            className={`bg-white/5 backdrop-blur-xl rounded-xl p-6 border transition-all duration-300 cursor-pointer
              ${activeSection === 'xrpl' ? 'border-emerald-400 bg-white/10' : 'border-white/10 hover:border-emerald-400/50'}`}
            onClick={() => setActiveSection('xrpl')}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Network className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-semibold text-white">XRPL Integration</h2>
            </div>
            <p className="text-gray-300">
              Seamless blockchain connectivity with real-time transaction processing and smart contract execution.
            </p>
          </div>

          <div 
            className={`bg-white/5 backdrop-blur-xl rounded-xl p-6 border transition-all duration-300 cursor-pointer
              ${activeSection === 'quantum' ? 'border-emerald-400 bg-white/10' : 'border-white/10 hover:border-emerald-400/50'}`}
            onClick={() => setActiveSection('quantum')}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-semibold text-white">Quantum Security</h2>
            </div>
            <p className="text-gray-300">
              State-of-the-art encryption with quantum-resistant algorithms and real-time threat detection.
            </p>
          </div>

          <div 
            className={`bg-white/5 backdrop-blur-xl rounded-xl p-6 border transition-all duration-300 cursor-pointer
              ${activeSection === 'biometric' ? 'border-emerald-400 bg-white/10' : 'border-white/10 hover:border-emerald-400/50'}`}
            onClick={() => setActiveSection('biometric')}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Fingerprint className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-semibold text-white">Biometric Auth</h2>
            </div>
            <p className="text-gray-300">
              Advanced authentication system with multi-factor biometric verification and behavioral analysis.
            </p>
          </div>

          <div 
            className={`bg-white/5 backdrop-blur-xl rounded-xl p-6 border transition-all duration-300 cursor-pointer
              ${activeSection === 'earth' ? 'border-emerald-400 bg-white/10' : 'border-white/10 hover:border-emerald-400/50'}`}
            onClick={() => setActiveSection('earth')}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Waves className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-semibold text-white">Earth Connection</h2>
            </div>
            <p className="text-gray-300">
              Gaia-anchored algorithms promoting ecosystem balance and sustainable computing practices.
            </p>
          </div>

          <div 
            className={`bg-white/5 backdrop-blur-xl rounded-xl p-6 border transition-all duration-300 cursor-pointer
              ${activeSection === 'healing' ? 'border-emerald-400 bg-white/10' : 'border-white/10 hover:border-emerald-400/50'}`}
            onClick={() => setActiveSection('healing')}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Sparkles className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-semibold text-white">Self Healing</h2>
            </div>
            <p className="text-gray-300">
              Autonomous system maintenance with AI-driven repair protocols and predictive optimization.
            </p>
          </div>
        </div>

        {/* Dynamic Content Panel */}
        {activeSection !== 'crystal' && getContentForSection(activeSection) && (
          <div className="mt-8 bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-emerald-400/50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-2">
                {getContentForSection(activeSection).title}
              </h2>
              <p className="text-gray-300 mb-6">
                {getContentForSection(activeSection).description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {getContentForSection(activeSection).stats.map((stat, index) => (
                  <div key={index} className="bg-black/20 rounded-lg p-4">
                    <div className="text-emerald-400 font-medium mb-1">{stat.label}</div>
                    <div className="text-white text-lg font-bold">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Crystallized Intelligence Network
            </h2>
            <p className="text-gray-300">
              A revolutionary platform combining advanced AI, quantum computing, and blockchain technology. 
              Secured by the Thoth Emerald Shield and anchored to Earth's natural frequencies for 
              sustainable, ethical, and powerful computing solutions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;