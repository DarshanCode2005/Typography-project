import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Monitor, Eye, Palette } from 'lucide-react';

interface TypographyVariant {
  id: number;
  name: string;
  device: 'mobile' | 'desktop';
  font: string;
  fontSize: string;
  lineHeight: string;
  background: string;
  textColor: string;
  description: string;
  inspiration: string;
}

const typographyVariants: TypographyVariant[] = [
  {
    id: 1,
    name: "Classic Editorial",
    device: 'desktop',
    font: 'Georgia, serif',
    fontSize: '1.125rem',
    lineHeight: '1.8',
    background: '#000000',
    textColor: '#f8f8f8',
    description: "Pure black with warm serif - inspired by premium editorial design",
    inspiration: "Medium's long-form articles"
  },
  {
    id: 2,
    name: "Modern Mobile",
    device: 'mobile',
    font: 'system-ui, -apple-system, sans-serif',
    fontSize: '1rem',
    lineHeight: '1.6',
    background: '#1a1a1a',
    textColor: '#e5e5e5',
    description: "Charcoal background with system font for mobile comfort",
    inspiration: "iOS dark mode interfaces"
  },
  {
    id: 3,
    name: "Developer Console",
    device: 'desktop',
    font: '"JetBrains Mono", "Fira Code", monospace',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    background: '#0d1117',
    textColor: '#c9d1d9',
    description: "GitHub-inspired dark theme for code and technical content",
    inspiration: "GitHub's dark mode"
  },
  {
    id: 4,
    name: "Elegant Mobile Article",
    device: 'mobile',
    font: '"Playfair Display", Georgia, serif',
    fontSize: '1.1rem',
    lineHeight: '1.7',
    background: '#1e1e2e',
    textColor: '#cdd6f4',
    description: "Deep navy with elegant serif for mobile article reading",
    inspiration: "Premium publishing apps"
  },
  {
    id: 5,
    name: "Clean Desktop Blog",
    device: 'desktop',
    font: '"Inter", system-ui, sans-serif',
    fontSize: '1.05rem',
    lineHeight: '1.65',
    background: '#18181b',
    textColor: '#fafafa',
    description: "Dark slate with modern sans-serif for blog content",
    inspiration: "Vercel's documentation"
  },
  {
    id: 6,
    name: "Friendly Mobile Reader",
    device: 'mobile',
    font: '"Nunito", system-ui, sans-serif',
    fontSize: '1rem',
    lineHeight: '1.6',
    background: '#0f0f0f',
    textColor: '#f0f0f0',
    description: "Rich black with rounded sans for comfortable mobile reading",
    inspiration: "Reading apps like Pocket"
  },
  {
    id: 7,
    name: "Magazine Desktop",
    device: 'desktop',
    font: '"Crimson Text", Georgia, serif',
    fontSize: '1.15rem',
    lineHeight: '1.75',
    background: '#111111',
    textColor: '#eeeeee',
    description: "Off-black with magazine serif for long-form desktop reading",
    inspiration: "The New York Times dark mode"
  }
];

const sampleText = `The art of typography in digital interfaces requires careful consideration of contrast, readability, and visual hierarchy. When designing for dark themes, the relationship between text and background becomes even more critical.

Good typography should feel invisible to the reader—allowing the content to flow naturally while providing excellent legibility across different devices and lighting conditions. The choice of typeface, sizing, and spacing can dramatically impact the reading experience.

Modern web typography offers unprecedented control over text rendering, enabling designers to create interfaces that are both beautiful and functional. The key is finding the perfect balance between aesthetic appeal and practical usability.`;

function App() {
  const [currentVariant, setCurrentVariant] = useState(0);
  const variant = typographyVariants[currentVariant];

  const nextVariant = () => {
    setCurrentVariant((prev) => (prev + 1) % typographyVariants.length);
  };

  const prevVariant = () => {
    setCurrentVariant((prev) => (prev - 1 + typographyVariants.length) % typographyVariants.length);
  };

  const getContrastRatio = (bg: string, text: string) => {
    // Simplified contrast calculation for demo
    const bgLum = parseInt(bg.slice(1), 16);
    const textLum = parseInt(text.slice(1), 16);
    const ratio = Math.abs(bgLum - textLum) / 255;
    return (ratio * 21).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Palette className="w-6 h-6 text-blue-400" />
            <h1 className="text-xl font-bold">Typography & Contrast Challenge</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {variant.device === 'mobile' ? 
                <Smartphone className="w-4 h-4 text-green-400" /> : 
                <Monitor className="w-4 h-4 text-blue-400" />
              }
              <span className="text-sm text-gray-300 capitalize">{variant.device}</span>
            </div>
            <div className="text-sm text-gray-400">
              {currentVariant + 1} / {typographyVariants.length}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Typography Showcase */}
          <div className="lg:col-span-2">
            <div 
              className="rounded-lg overflow-hidden shadow-2xl transition-all duration-500"
              style={{ backgroundColor: variant.background }}
            >
              {/* Sample Header */}
              <div className="p-8 border-b border-gray-600/30">
                <h2 
                  className="font-bold mb-2 transition-all duration-500"
                  style={{
                    fontFamily: variant.font,
                    fontSize: variant.device === 'mobile' ? '1.5rem' : '2rem',
                    color: variant.textColor,
                    lineHeight: '1.3'
                  }}
                >
                  {variant.name} Typography Sample
                </h2>
                <p 
                  className="opacity-75 transition-all duration-500"
                  style={{
                    fontFamily: variant.font,
                    fontSize: variant.device === 'mobile' ? '0.9rem' : '1rem',
                    color: variant.textColor,
                    lineHeight: '1.5'
                  }}
                >
                  Optimized for {variant.device} reading experience
                </p>
              </div>

              {/* Sample Content */}
              <div 
                className={`p-8 ${variant.device === 'mobile' ? 'max-w-sm mx-auto' : 'max-w-4xl'}`}
              >
                <div 
                  className="transition-all duration-500"
                  style={{
                    fontFamily: variant.font,
                    fontSize: variant.fontSize,
                    lineHeight: variant.lineHeight,
                    color: variant.textColor,
                  }}
                >
                  {sampleText.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevVariant}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <div className="flex gap-2">
                {typographyVariants.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVariant(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentVariant 
                        ? 'bg-blue-500' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextVariant}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Details Panel */}
          <div className="space-y-6">
            {/* Current Variant Info */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-400" />
                Typography Details
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400">Font Family</label>
                  <p className="font-mono text-sm bg-gray-700 p-2 rounded mt-1">
                    {variant.font}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm text-gray-400">Font Size</label>
                  <p className="font-mono text-sm bg-gray-700 p-2 rounded mt-1">
                    {variant.fontSize}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm text-gray-400">Line Height</label>
                  <p className="font-mono text-sm bg-gray-700 p-2 rounded mt-1">
                    {variant.lineHeight}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm text-gray-400">Background</label>
                  <div className="flex items-center gap-2 mt-1">
                    <div 
                      className="w-4 h-4 rounded border border-gray-600"
                      style={{ backgroundColor: variant.background }}
                    />
                    <p className="font-mono text-sm">{variant.background}</p>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm text-gray-400">Text Color</label>
                  <div className="flex items-center gap-2 mt-1">
                    <div 
                      className="w-4 h-4 rounded border border-gray-600"
                      style={{ backgroundColor: variant.textColor }}
                    />
                    <p className="font-mono text-sm">{variant.textColor}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-400">Contrast Ratio</label>
                  <p className="text-lg font-bold text-green-400 mt-1">
                    {getContrastRatio(variant.background, variant.textColor)}:1
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Design Notes</h3>
              <p className="text-gray-300 mb-4">{variant.description}</p>
              <div>
                <label className="text-sm text-gray-400">Inspired by</label>
                <p className="text-blue-400 font-medium">{variant.inspiration}</p>
              </div>
            </div>

            {/* All Variants Quick View */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">All Variants</h3>
              <div className="space-y-2">
                {typographyVariants.map((v, index) => (
                  <button
                    key={v.id}
                    onClick={() => setCurrentVariant(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      index === currentVariant 
                        ? 'bg-blue-600/20 border border-blue-500/30' 
                        : 'bg-gray-700/50 hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{v.name}</p>
                        <p className="text-sm text-gray-400 flex items-center gap-1">
                          {v.device === 'mobile' ? 
                            <Smartphone className="w-3 h-3" /> : 
                            <Monitor className="w-3 h-3" />
                          }
                          {v.device}
                        </p>
                      </div>
                      <div 
                        className="w-6 h-6 rounded border border-gray-600"
                        style={{ backgroundColor: v.background }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;