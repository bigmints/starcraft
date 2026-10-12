'use client';

import { Layers, Palette, Type, Monitor, Check, RotateCcw } from 'lucide-react';
import { content, contentText } from './content';
import type { ReactNode, CSSProperties } from 'react';

export type ProjectView = 'system' | 'content' | 'prototype';

export function DesignWorkbench({
  view,
  setView,
  warm,
  setWarm,
  edited,
  setEdited,
  children,
}: {
  view: ProjectView;
  setView: (view: ProjectView) => void;
  warm: boolean;
  setWarm: (warm: boolean) => void;
  edited: boolean;
  setEdited: (edited: boolean) => void;
  children: ReactNode;
}) {
  const palette = {
    paper: warm ? '#f3dfc7' : '#f5f4e9',
    ink: '#314434',
    accent: warm ? '#b57853' : '#425540',
  };
  return (
    <div
      className={`design-workbench is-${view}`}
      style={
        {
          '--demo-paper': palette.paper,
          '--demo-ink': palette.ink,
          '--demo-accent': palette.accent,
        } as CSSProperties
      }
    >
      <fieldset
        className="design-workbench-tabs"
        aria-label={contentText('appDemo.projectViews')}
      >
        <button
          type="button"
          aria-pressed={view === 'system'}
          onClick={() => setView('system')}
        >
          <Layers size={14} />
          {content['appDemo.systemTab']}
        </button>
        <button
          type="button"
          aria-pressed={view === 'content'}
          onClick={() => setView('content')}
        >
          <Type size={14} />
          {content['appDemo.contentTab']}
        </button>
        <button
          type="button"
          aria-pressed={view === 'prototype'}
          onClick={() => setView('prototype')}
        >
          <Monitor size={14} />
          {content['appDemo.prototypeTab']}
        </button>
      </fieldset>
      <div className="design-workbench-body">
        {view === 'system' && (
          <section
            className="design-inspector"
            aria-label={contentText('appDemo.systemTab')}
          >
            <header>
              <Palette size={20} />
              <h3>{content['appDemo.systemTitle']}</h3>
              <p>{content['appDemo.systemDescription']}</p>
            </header>
            <section className="design-card">
              <h4>{content['appDemo.colors']}</h4>
              <div className="design-token">
                <i style={{ background: palette.paper }} />
                <div>
                  {content['appDemo.paper']}
                  <code>{palette.paper.toUpperCase()}</code>
                </div>
              </div>
              <div className="design-token">
                <i style={{ background: palette.ink }} />
                <div>
                  {content['appDemo.ink']}
                  <code>{palette.ink.toUpperCase()}</code>
                </div>
              </div>
              <div className="design-token">
                <i style={{ background: palette.accent }} />
                <div>
                  {content['appDemo.accent']}
                  <code>{palette.accent.toUpperCase()}</code>
                </div>
              </div>
              <button
                type="button"
                className="design-palette-action"
                aria-pressed={warm}
                onClick={() => setWarm(!warm)}
              >
                <RotateCcw size={12} />
                {
                  content[
                    warm ? 'appDemo.paletteRestore' : 'appDemo.paletteToggle'
                  ]
                }
              </button>
            </section>
            <section className="design-card">
              <h4>{content['appDemo.typography']}</h4>
              <p className="design-type-label">{content['appDemo.display']}</p>
              <p className="design-type-specimen">
                {content['appDemo.typeSample']}
              </p>
              <p className="design-type-label">{content['appDemo.body']}</p>
            </section>
            <section className="design-card">
              <h4>{content['appDemo.components']}</h4>
              <div
                className="design-component-example"
                style={{ background: palette.accent }}
              >
                {content['appDemo.primaryButton']}
              </div>
              <div className="design-component-example is-secondary">
                {content['appDemo.secondaryButton']}
              </div>
              <p>{content['appDemo.buttonNote']}</p>
            </section>
          </section>
        )}
        {view === 'content' && (
          <section
            className="design-inspector"
            aria-label={contentText('appDemo.contentTab')}
          >
            <header>
              <Type size={20} />
              <h3>{content['appDemo.contentTitle']}</h3>
              <p>{content['appDemo.contentDescription']}</p>
            </header>
            <section className="design-card">
              <h4>{content['appDemo.voice']}</h4>
              <p>{content['appDemo.voiceDescription']}</p>
            </section>
            <section className="design-card">
              <h4>{content['appDemo.copyHeading']}</h4>
              <button
                type="button"
                className="design-copy-choice"
                aria-pressed={!edited}
                onClick={() => setEdited(false)}
              >
                <small>
                  {content['appDemo.variantOriginal']}
                  {!edited && <Check size={13} />}
                </small>
                <span>{content['example.heading.start']}</span>
              </button>
              <button
                type="button"
                className="design-copy-choice"
                aria-pressed={edited}
                onClick={() => setEdited(true)}
              >
                <small>
                  {content['appDemo.variantAlternative']}
                  {edited && <Check size={13} />}
                </small>
                <span>{content['appDemo.editedHeadline']}</span>
              </button>
              <p aria-live="polite">{content['appDemo.copyApplied']}</p>
            </section>
            <section className="design-card">
              <h4>{content['appDemo.copyBody']}</h4>
              <p>
                {content['example.description.start']}{' '}
                {content['example.description.end']}
              </p>
            </section>
            <section className="design-card">
              <h4>{content['appDemo.copyCta']}</h4>
              <p className="design-copy-cta">
                {content['appDemo.primaryButton']}
              </p>
            </section>
          </section>
        )}
        <div className="design-live-preview">
          {view !== 'prototype' && (
            <div className="design-live-label">
              <span className="status-dot" />
              {content['appDemo.liveExample']}
            </div>
          )}
          {children}
        </div>
      </div>
      <p className="design-sample-label">{content['appDemo.sampleLabel']}</p>
    </div>
  );
}
