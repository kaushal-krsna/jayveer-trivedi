import React, { useState } from 'react';
import { Zap, Home, Car, Activity, DollarSign, AlertCircle } from 'lucide-react';

export const P2PChargingDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'host',
      title: '1. Residential Host',
      actor: 'Private Charger Owner (Home / Society)',
      icon: Home,
      metric: '18+ hrs / day idle capacity',
      description:
        'A homeowner or housing society with a private 7.4 kW / 11 kW AC charger registers their unit, setting availability hours and access rules.',
      economics: 'Monetizes dormant asset; covers domestic fixed costs via incremental margin.',
      friction: 'Housing society (RWA) guest entry permissions and domestic vs commercial power tariff rules.',
    },
    {
      id: 'platform',
      title: '2. P2P Matchmaking & Verification',
      actor: 'Platform Engine & Smart Controller',
      icon: Zap,
      metric: 'Real-time Slot & Power Scheduling',
      description:
        'Platform matches approaching EV commuters based on route, estimated state of charge (SoC), and guaranteed parking window.',
      economics: 'Takes a micro-convenience fee per kWh / session; handles automated payment escrow.',
      friction: 'Overstay penalties, dynamic metering accuracy, and automated gate pass verification.',
    },
    {
      id: 'driver',
      title: '3. EV Driver / Commuter',
      actor: 'EV Urban Commuter / Traveler',
      icon: Car,
      metric: 'Zero Range Anxiety in Neighborhoods',
      description:
        'Driver reserves a guaranteed charging slot near work, transit points, or residential hubs without queuing at crowded commercial hubs.',
      economics: 'Lower cost than high-capex DC fast chargers; predictable destination charging.',
      friction: 'Host cancellation risk or physical charger blocked by non-EV vehicles (ICEing).',
    },
    {
      id: 'grid',
      title: '4. Distributed Grid & Settlement',
      actor: 'Utility Discom & Energy Governance',
      icon: Activity,
      metric: 'Off-Peak Load Balancing',
      description:
        'Smart scheduling shifts charging load to off-peak daytime solar or midnight hours, easing transformer peak stress.',
      economics: 'Reduces capital burden on public utility for multi-crore dedicated substation upgrades.',
      friction: 'State-level DISCOM regulations regarding resale of domestic electricity.',
    },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#F4EFE6] dark:bg-[#141715] border border-[#E6DFD3] dark:border-[#232724] space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E6DFD3] dark:border-[#232724]">
        <div>
          <span className="text-[11px] font-mono tracking-wider uppercase text-[#1E3A2F] dark:text-[#88C49F]">
            Interactive Systems Model
          </span>
          <h4 className="font-serif text-xl font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
            P2P Decentralized EV Charging Flow Architecture
          </h4>
        </div>
        <div className="text-xs font-mono text-[#736E65] dark:text-[#8A857B] bg-[#FAF7F0] dark:bg-[#1C211D] px-3 py-1 rounded-full border border-[#E6DFD3] dark:border-[#2A312B] self-start sm:self-auto">
          Multi-Sided Exchange
        </div>
      </div>

      {/* Step Selection Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isSelected = activeStep === idx;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-xl text-left transition-all duration-200 border ${
                isSelected
                  ? 'bg-[#FAF7F0] dark:bg-[#1C211D] border-[#1E3A2F] dark:border-[#88C49F] shadow-xs'
                  : 'bg-[#FAF7F0]/60 dark:bg-[#141715]/60 border-[#E6DFD3] dark:border-[#232724] hover:bg-[#FAF7F0] dark:hover:bg-[#1C211D]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-mono ${isSelected ? 'text-[#1E3A2F] dark:text-[#88C49F] font-bold' : 'text-[#736E65] dark:text-[#8A857B]'}`}>
                  Phase 0{idx + 1}
                </span>
                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#1E3A2F] dark:text-[#88C49F]' : 'text-[#736E65] dark:text-[#8A857B]'}`} />
              </div>
              <div className="text-xs font-medium text-[#1B1A18] dark:text-[#ECEAE4] truncate">
                {step.title.split('. ')[1]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep Dive */}
      <div className="p-5 sm:p-6 rounded-xl bg-[#FAF7F0] dark:bg-[#181D1A] border border-[#E6DFD3] dark:border-[#232724] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="text-xs font-mono text-[#1E3A2F] dark:text-[#88C49F]">
              Stakeholder Role
            </div>
            <h5 className="font-serif text-lg font-medium text-[#1B1A18] dark:text-[#ECEAE4]">
              {steps[activeStep].actor}
            </h5>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono bg-[#EAE5DA] dark:bg-[#252C27] text-[#1B1A18] dark:text-[#ECEAE4] px-2.5 py-1 rounded-md">
            <Activity className="w-3.5 h-3.5 text-[#1E3A2F] dark:text-[#88C49F]" />
            {steps[activeStep].metric}
          </span>
        </div>

        <p className="text-sm text-[#484540] dark:text-[#B5B0A4] leading-relaxed">
          {steps[activeStep].description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#E6DFD3] dark:border-[#232724]">
          <div className="p-3.5 rounded-lg bg-[#F4EFE6] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724]">
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#1E3A2F] dark:text-[#88C49F] mb-1">
              <DollarSign className="w-3.5 h-3.5" />
              <span>Economic Hypothesis</span>
            </div>
            <p className="text-xs text-[#484540] dark:text-[#B5B0A4] leading-normal">
              {steps[activeStep].economics}
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-[#F4EFE6] dark:bg-[#131714] border border-[#E6DFD3] dark:border-[#232724]">
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#A8792C] dark:text-[#D1A054] mb-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Operational & Policy Constraint</span>
            </div>
            <p className="text-xs text-[#484540] dark:text-[#B5B0A4] leading-normal">
              {steps[activeStep].friction}
            </p>
          </div>
        </div>
      </div>

      <div className="text-[11px] font-mono text-[#736E65] dark:text-[#8A857B] italic text-center">
        *Conceptual model developed as part of business feasibility and multi-sided marketplace exploration.
      </div>
    </div>
  );
};
