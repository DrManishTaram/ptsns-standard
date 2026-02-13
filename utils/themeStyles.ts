/**
 * Theme configuration for Department Pages.
 * Maps department types/themes to specific color palettes and gradients.
 */

// This comment forces Tailwind to scan these class names so they are generated in the CSS bundle.
// text-indigo-50 text-indigo-100 text-indigo-200 text-indigo-300 text-indigo-400 text-indigo-500 text-indigo-600 text-indigo-700 text-indigo-800 text-indigo-900 text-indigo-950
// bg-indigo-50 bg-indigo-100 bg-indigo-200 bg-indigo-300 bg-indigo-400 bg-indigo-500 bg-indigo-600 bg-indigo-700 bg-indigo-800 bg-indigo-900 bg-indigo-950
// border-indigo-50 border-indigo-100 border-indigo-200 border-indigo-300 border-indigo-400 border-indigo-500 border-indigo-600 border-indigo-700 border-indigo-800 border-indigo-900 border-indigo-950
// shadow-indigo-100 shadow-indigo-200 shadow-indigo-300 shadow-indigo-400 shadow-indigo-500
// ring-indigo-100 ring-indigo-200 ring-indigo-500
// from-indigo-50 from-indigo-100 from-indigo-500 from-indigo-600
// to-indigo-50 to-indigo-100 to-indigo-500 to-indigo-600 to-indigo-900
// via-indigo-50 via-indigo-100 via-indigo-500 via-indigo-600

// text-blue-50 text-blue-100 text-blue-200 text-blue-300 text-blue-400 text-blue-500 text-blue-600 text-blue-700 text-blue-800 text-blue-900 text-blue-950
// bg-blue-50 bg-blue-100 bg-blue-200 bg-blue-300 bg-blue-400 bg-blue-500 bg-blue-600 bg-blue-700 bg-blue-800 bg-blue-900 bg-blue-950
// border-blue-50 border-blue-100 border-blue-200 border-blue-300 border-blue-400 border-blue-500 border-blue-600 border-blue-700 border-blue-800 border-blue-900 border-blue-950
// shadow-blue-100 shadow-blue-200 shadow-blue-300 shadow-blue-400 shadow-blue-500
// ring-blue-100 ring-blue-200 ring-blue-500
// from-blue-50 from-blue-100 from-blue-500 from-blue-600
// to-blue-50 to-blue-100 to-blue-500 to-blue-600 to-blue-900
// via-blue-50 via-blue-100 via-blue-500 via-blue-600

// text-emerald-50 text-emerald-100 text-emerald-200 text-emerald-300 text-emerald-400 text-emerald-500 text-emerald-600 text-emerald-700 text-emerald-800 text-emerald-900 text-emerald-950
// bg-emerald-50 bg-emerald-100 bg-emerald-200 bg-emerald-300 bg-emerald-400 bg-emerald-500 bg-emerald-600 bg-emerald-700 bg-emerald-800 bg-emerald-900 bg-emerald-950
// border-emerald-50 border-emerald-100 border-emerald-200 border-emerald-300 border-emerald-400 border-emerald-500 border-emerald-600 border-emerald-700 border-emerald-800 border-emerald-900 border-emerald-950
// shadow-emerald-100 shadow-emerald-200 shadow-emerald-300 shadow-emerald-400 shadow-emerald-500
// ring-emerald-100 ring-emerald-200 ring-emerald-500
// from-emerald-50 from-emerald-100 from-emerald-500 from-emerald-600
// to-emerald-50 to-emerald-100 to-emerald-500 to-emerald-600 to-emerald-900
// via-emerald-50 via-emerald-100 via-emerald-500 via-emerald-600

// text-amber-50 text-amber-100 text-amber-200 text-amber-300 text-amber-400 text-amber-500 text-amber-600 text-amber-700 text-amber-800 text-amber-900 text-amber-950
// bg-amber-50 bg-amber-100 bg-amber-200 bg-amber-300 bg-amber-400 bg-amber-500 bg-amber-600 bg-amber-700 bg-amber-800 bg-amber-900 bg-amber-950
// border-amber-50 border-amber-100 border-amber-200 border-amber-300 border-amber-400 border-amber-500 border-amber-600 border-amber-700 border-amber-800 border-amber-900 border-amber-950
// shadow-amber-100 shadow-amber-200 shadow-amber-300 shadow-amber-400 shadow-amber-500
// ring-amber-100 ring-amber-200 ring-amber-500
// from-amber-50 from-amber-100 from-amber-500 from-amber-600
// to-amber-50 to-amber-100 to-amber-500 to-amber-600 to-amber-900
// via-amber-50 via-amber-100 via-amber-500 via-amber-600

// text-rose-50 text-rose-100 text-rose-200 text-rose-300 text-rose-400 text-rose-500 text-rose-600 text-rose-700 text-rose-800 text-rose-900 text-rose-950
// bg-rose-50 bg-rose-100 bg-rose-200 bg-rose-300 bg-rose-400 bg-rose-500 bg-rose-600 bg-rose-700 bg-rose-800 bg-rose-900 bg-rose-950
// border-rose-50 border-rose-100 border-rose-200 border-rose-300 border-rose-400 border-rose-500 border-rose-600 border-rose-700 border-rose-800 border-rose-900 border-rose-950
// shadow-rose-100 shadow-rose-200 shadow-rose-300 shadow-rose-400 shadow-rose-500
// ring-rose-100 ring-rose-200 ring-rose-500
// from-rose-50 from-rose-100 from-rose-500 from-rose-600
// to-rose-50 to-rose-100 to-rose-500 to-rose-600 to-rose-900
// via-rose-50 via-rose-100 via-rose-500 via-rose-600

// text-purple-600 text-purple-500 bg-purple-50 bg-purple-600 border-purple-100 border-purple-200 from-purple-600 to-purple-600
// text-cyan-600 text-cyan-500 bg-cyan-50 bg-cyan-600 border-cyan-100 border-cyan-200 from-cyan-600 to-cyan-600
// text-teal-600 text-teal-500 bg-teal-50 bg-teal-600 border-teal-100 border-teal-200 from-teal-600 to-teal-600
// text-orange-600 text-orange-500 bg-orange-50 bg-orange-600 border-orange-100 border-orange-200 from-orange-600 to-orange-600
// text-slate-600 text-slate-500 bg-slate-50 bg-slate-600 border-slate-100 border-slate-200 from-slate-600 to-slate-600

export type ThemeType = 'indigo' | 'blue' | 'emerald' | 'amber' | 'rose' | 'purple' | 'cyan' | 'teal' | 'orange' | 'slate';

interface ThemeConfig {
  primary: string; // The main color name, e.g., 'indigo'
  secondary: string; // A complementary color name, e.g., 'violet'
  heroGradient: string; // Custom CSS gradient for the hero section
}

export const themeStyles: Record<ThemeType, ThemeConfig> = {
  indigo: {
    primary: 'indigo',
    secondary: 'violet',
    heroGradient: 'linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e1b4b 100%)',
  },
  blue: {
    primary: 'blue',
    secondary: 'cyan',
    heroGradient: 'linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e3a8a 100%)',
  },
  emerald: {
    primary: 'emerald',
    secondary: 'teal',
    heroGradient: 'linear-gradient(135deg, #022c22 0%, #064e3b 40%, #065f46 100%)',
  },
  amber: {
    primary: 'amber',
    secondary: 'orange',
    heroGradient: 'linear-gradient(135deg, #451a03 0%, #78350f 40%, #b45309 100%)',
  },
  rose: {
    primary: 'rose',
    secondary: 'pink',
    heroGradient: 'linear-gradient(135deg, #4c0519 0%, #881337 40%, #be123c 100%)',
  },
  purple: {
    primary: 'purple',
    secondary: 'fuchsia',
    heroGradient: 'linear-gradient(135deg, #3b0764 0%, #581c87 40%, #7e22ce 100%)',
  },
  cyan: {
    primary: 'cyan',
    secondary: 'sky',
    heroGradient: 'linear-gradient(135deg, #083344 0%, #0e7490 40%, #06b6d4 100%)',
  },
  teal: {
    primary: 'teal',
    secondary: 'emerald',
    heroGradient: 'linear-gradient(135deg, #042f2e 0%, #0f766e 40%, #14b8a6 100%)',
  },
  orange: {
    primary: 'orange',
    secondary: 'amber',
    heroGradient: 'linear-gradient(135deg, #431407 0%, #9a3412 40%, #ea580c 100%)',
  },
  slate: {
    primary: 'slate',
    secondary: 'gray',
    heroGradient: 'linear-gradient(135deg, #0f172a 0%, #334155 40%, #475569 100%)',
  },
};
