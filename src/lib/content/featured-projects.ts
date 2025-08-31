import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Grow Curriculum',
      description: 'A powerful tool designed for youth and children’s ministries.',
      tasks:
        'I collaborated with ministry leaders to define feature priorities, architected a scalable multi-platform solution, designed intuitive interfaces, built robust backend APIs, and integrated real-time attendance tracking with role-based access control.',
      url: 'https://growcurriculum.org/',
      img: 'https://i.postimg.cc/Z5BrVmLf/chrome-ya2s7krcfc.png',
      tags: ['education', 'youth-ministry', 'multi-platform', 'attendance-tracking', 'role-based-access', 'API-development', 'UX/UI-design', 'React-Native', 'Node.js', 'PostgreSQL', 'cloud-deployment']
    },
    {
      id: getId(),
      name: 'Hubfleet',
      description: 'A cross-platform fleet-management system for logistics and operations.',
      tasks:
        'I partnered with fleet operators to gather operational requirements, implemented real-time GPS tracking, developed fatigue monitoring algorithms, built a centralized dashboard, and ensured cross-platform consistency with secure data synchronization.',
      url: 'https://hubfleet.com.au/',
      img: 'https://i.postimg.cc/y8t2bVCW/chrome-ZKBmlev-Pzy.png',
      tags: ['fleet-management', 'real-time-tracking', 'geo-fencing', 'vehicle-diagnostics', 'driver-fatigue', 'cross-platform', 'dashboard', 'alerts', 'React-Native', 'Node.js', 'PostgreSQL', 'cloud-infrastructure']
    },
    {
      id: getId(),
      name: 'FuelFinance',
      description: 'Financial planning & analytics platform for spreadsheet-driven businesses.',
      tasks:
        'I worked with finance stakeholders to define KPIs, modeled a ledger-safe schema, built ingestion pipelines, automated ETL for forecasts, and delivered interactive dashboards for decision-making and transparency.',
      url: 'https://fuelfinance.me/',
      img: 'https://i.postimg.cc/ncc8sR1V/chrome-qijl-YLGXXT.png',
      tags: [
        'financial-planning',
        'cashflow-management',
        'profit-loss-analysis',
        'forecasting',
      ]
    }
  ],
};

export default featuredProjectsSection;
