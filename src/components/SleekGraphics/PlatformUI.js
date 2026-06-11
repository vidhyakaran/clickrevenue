'use client';
import React from 'react';
import { ShoppingCart, Layout, PieChart } from 'lucide-react';

export default function PlatformUI() {
  return (
    <div style={{
      perspective: '1200px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-2xl) 0',
    }}>
      <div style={{
        background: 'rgba(18, 18, 28, 0.4)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-md)',
        width: '100%',
        aspectRatio: '16/10',
        display: 'flex',
        gap: 'var(--space-md)',
        boxShadow: '-20px 40px 60px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255,255,255,0.05)',
      }}
      className="platform-3d-card"
      >
      {/* Sidebar Mock */}
      <div style={{
        width: '80px',
        background: 'rgba(255, 255, 255, 0.03)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'var(--space-lg) 0',
        gap: 'var(--space-xl)',
      }}>
        <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'var(--gradient-neon)' }} />
        <Layout size={20} color="var(--cr-grey-400)" />
        <ShoppingCart size={20} color="var(--neon-cyan)" />
        <PieChart size={20} color="var(--cr-grey-400)" />
      </div>

      {/* Main Content Mock */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        <div style={{
          height: '60px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 'var(--radius-lg)',
          display: 'flex', alignItems: 'center', padding: '0 var(--space-lg)',
          border: '1px solid rgba(255, 255, 255, 0.04)'
        }}>
          <div style={{ width: '40%', height: '12px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px' }} />
        </div>

        <div style={{ flex: 1, display: 'flex', gap: 'var(--space-md)' }}>
          {/* Card 1 */}
          <div style={{ flex: 2, background: 'rgba(227, 27, 35, 0.05)', border: '1px solid rgba(227, 27, 35, 0.15)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-lg)' }}>
            <div style={{ width: '30%', height: '10px', background: 'var(--neon-cyan)', borderRadius: '4px', marginBottom: 'var(--space-lg)', opacity: 0.8 }} />
            <div style={{ width: '80%', height: '24px', background: 'rgba(255, 255, 255, 0.8)', borderRadius: '4px', marginBottom: 'var(--space-md)' }} />
            <div style={{ width: '50%', height: '8px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '4px' }} />
          </div>

          {/* Card 2 */}
          <div style={{ flex: 1, background: 'rgba(184, 20, 25, 0.05)', border: '1px solid rgba(184, 20, 25, 0.15)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '4px solid var(--neon-purple)', borderTopColor: 'transparent', animation: 'rotate 2s linear infinite' }} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
