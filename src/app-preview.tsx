'use client';

import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ChevronDown,
  ChevronRight,
  File,
  Folder,
  GitBranch,
  Maximize2,
  MessageSquare,
  Monitor,
  MousePointer2,
  PanelLeftClose,
  PanelRight,
  Plus,
  Power,
  RotateCcw,
  Settings,
  Smartphone,
  Type,
  Undo2,
} from 'lucide-react';
import { content, contentText } from './content';
import './app-preview.css';

// Same monogram geometry as the desktop renderer's StarcraftLogo.
function AppMark() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="18" fill="currentColor" />
      <path
        d="M42.5 18.75 C36.88 14.38 26.25 14.38 20.63 18.75 C15 23.13 16.88 31.25 24.38 33.44 L37.5 37.5 C40.63 38.44 41.25 41.88 38.13 43.75 C33.75 46.5 24.38 45.63 20.63 42.19 L16.88 47.5 C23.75 53.13 35.63 53.75 43.13 48.75 C51.25 43.13 47.5 34.38 39.38 31.88 L26.25 27.94 C23.13 27 22.81 24.5 25 22.81 C28.13 20.5 35 20.94 38.75 23.75 Z"
        fill="white"
      />
      <path
        d="m47.5 10.5 1.5 4.25 4.25 1.5-4.25 1.5L47.5 22l-1.5-4.25-4.25-1.5 4.25-1.5 1.5-4.25Z"
        fill="white"
      />
    </svg>
  );
}

type Tool = 'browse' | 'comment' | 'text';

export function AppPreview() {
  const [view, setView] = useState<'canvas' | 'preview'>('preview');
  const [tool, setTool] = useState<Tool>('browse');
  const [mobile, setMobile] = useState(false);
  const [warm, setWarm] = useState(false);
  const [edited, setEdited] = useState(false);
  const [pages, setPages] = useState(false);
  const reset = () => {
    setWarm(false);
    setEdited(false);
    setTool('browse');
    setMobile(false);
  };

  const projectPage = (
    <div
      className={`example-site app-demo-page ${warm ? 'warmer' : ''} ${mobile ? 'phone-preview' : ''}`}
    >
      <div className="example-nav">
        {content['example.brand']}
        {content['example.tagline']}
      </div>
      <div className="example-content">
        <p className="example-eyebrow">{content['example.eyebrow']}</p>
        <div
          className={`app-demo-heading ${tool === 'comment' ? 'is-commented' : ''} ${tool === 'text' ? 'is-editable' : ''}`}
        >
          <h3>
            {edited
              ? content['appDemo.editedHeadline']
              : content['example.heading.start']}
            <br />
            <em>{content['example.heading.end']}</em>
          </h3>
          {tool === 'comment' && (
            <span
              className="app-demo-pin"
              aria-label={contentText('appDemo.commentNumber')}
            >
              1
            </span>
          )}
          {tool === 'text' && (
            <button
              type="button"
              className="app-demo-text-action"
              onClick={() => setEdited(!edited)}
            >
              {content[edited ? 'appDemo.restoreText' : 'appDemo.tryText']}
            </button>
          )}
        </div>
        <p>
          {content['example.description.start']}
          <br />
          {content['example.description.end']}
        </p>
        <div className="example-color-study" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="example-bottom">
          {content['example.footer']}
          <ArrowUp size={18} />
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="starcraft-demo reveal"

      aria-label={contentText('appDemo.label')}
    >
      <div className="app-demo-titlebar">
        <div className="app-demo-traffic" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span className="app-demo-home">
          <AppMark />
          {content['appDemo.home']}
        </span>
        <span className="app-demo-project">
          <Folder size={14} />
          {content['demo.projectName']}
          <ChevronRight size={12} />
        </span>
        <fieldset
          className="app-demo-view-tabs"

          aria-label={contentText('appDemo.viewLabel')}
        >
          <button
            type="button"
            aria-pressed={view === 'canvas'}
            onClick={() => setView('canvas')}
          >
            {content['appDemo.canvas']}
          </button>
          <button
            type="button"
            aria-pressed={view === 'preview'}
            onClick={() => setView('preview')}
          >
            {content['appDemo.preview']}
          </button>
        </fieldset>
        <div className="app-demo-window-tools">
          <button
            type="button"
            aria-label={contentText('appDemo.togglePages')}
            aria-pressed={pages}
            onClick={() => setPages(!pages)}
          >
            <PanelRight size={15} />
          </button>
          <span aria-hidden="true">
            <GitBranch size={14} />
            <Settings size={15} />
          </span>
        </div>
      </div>
      <div className="app-demo-workspace">
        <section
          className="app-demo-chat"
          aria-label={contentText('appDemo.chatLabel')}
        >
          <header className="app-demo-chat-header">
            <strong>{content['appDemo.threadTitle']}</strong>
            <span aria-hidden="true">
              <Plus size={14} />
              <PanelLeftClose size={14} />
            </span>
          </header>
          <div className="app-demo-messages">
            <div className="app-demo-user">
              <span className="app-demo-message-meta">
                {content['appDemo.you']}
              </span>
              <p>{content['demo.prompt']}</p>
            </div>
            <div className="app-demo-assistant">
              <p>{content['appDemo.response']}</p>
              <ul>
                <li>{content['appDemo.responseLayout']}</li>
                <li>{content['appDemo.responseType']}</li>
                <li>{content['appDemo.responsePalette']}</li>
              </ul>
              <p>{content['appDemo.responseNext']}</p>
            </div>
            {tool === 'comment' && (
              <div className="app-demo-comment">
                <span>1</span>
                <div>
                  <strong>{content['appDemo.commentTarget']}</strong>
                  <p>{content['appDemo.commentText']}</p>
                </div>
              </div>
            )}
          </div>
          <div className="app-demo-composer">
            <div className="app-demo-composer-box">
              <p>{content['appDemo.composerPrompt']}</p>
              <div className="app-demo-composer-tools">
                <span aria-hidden="true">
                  <Plus size={16} />
                </span>
                <span className="app-demo-model">
                  {content['appDemo.model']}
                  <ChevronDown size={11} />
                </span>
                <button
                  type="button"
                  className="app-demo-send"
                  onClick={() => setWarm(!warm)}
                  aria-pressed={warm}
                  aria-label={contentText(warm ? 'demo.undo' : 'demo.refine')}
                >
                  <ArrowUp size={16} />
                </button>
              </div>
            </div>
            <output className="app-demo-feedback" aria-live="polite">
              {content[warm ? 'appDemo.applied' : 'appDemo.tryPrompt']}
            </output>
          </div>
        </section>
        <section
          className="app-demo-prototype"
          aria-label={contentText('appDemo.prototypeLabel')}
        >
          <div className="app-demo-toolbar">
            {view === 'preview' ? (
              <>
                <span className="app-demo-navigation" aria-hidden="true">
                  <Power size={13} />
                  <ArrowLeft size={13} />
                  <ArrowRight size={13} />
                </span>
                <button
                  type="button"
                  aria-label={contentText('appDemo.reset')}
                  onClick={reset}
                >
                  <RotateCcw size={13} />
                </button>
                <fieldset
                  className="app-demo-tool-group"

                  aria-label={contentText('appDemo.toolsLabel')}
                >
                  <button
                    type="button"
                    aria-pressed={tool === 'browse'}
                    onClick={() => setTool('browse')}
                  >
                    <MousePointer2 size={13} />
                    {content['appDemo.browse']}
                  </button>
                  <button
                    type="button"
                    aria-pressed={tool === 'comment'}
                    onClick={() => setTool('comment')}
                  >
                    <MessageSquare size={13} />
                    {content['appDemo.comment']}
                  </button>
                  <button
                    type="button"
                    aria-pressed={tool === 'text'}
                    onClick={() => setTool('text')}
                  >
                    <Type size={13} />
                    {content['appDemo.editText']}
                  </button>
                </fieldset>
                <fieldset
                  className="app-demo-tool-group"

                  aria-label={contentText('appDemo.viewportLabel')}
                >
                  <button
                    type="button"
                    aria-label={contentText('demo.desktopLabel')}
                    aria-pressed={!mobile}
                    onClick={() => setMobile(false)}
                  >
                    <Monitor size={14} />
                  </button>
                  <button
                    type="button"
                    aria-label={contentText('demo.phoneLabel')}
                    aria-pressed={mobile}
                    onClick={() => setMobile(true)}
                  >
                    <Smartphone size={14} />
                  </button>
                </fieldset>
              </>
            ) : (
              <>
                <span className="app-demo-canvas-label">
                  <Maximize2 size={13} />
                  {content['appDemo.fit']}
                </span>
                <button type="button" onClick={() => setView('preview')}>
                  {content['appDemo.openPreview']}
                  <ChevronRight size={13} />
                </button>
              </>
            )}
          </div>
          <div
            className={`app-demo-stage ${view === 'canvas' ? 'is-canvas' : ''}`}
          >
            <div className="app-demo-page-area">
              {view === 'canvas' && (
                <span className="app-demo-frame-label">
                  {content['appDemo.pageName']}
                  <small>/</small>
                </span>
              )}
              {projectPage}
              {view === 'canvas' && (
                <button
                  type="button"
                  className="app-demo-open-frame"
                  onClick={() => setView('preview')}
                >
                  {content['appDemo.openPreview']}
                </button>
              )}
            </div>
            {pages && (
              <aside className="app-demo-pages">
                <strong>{content['appDemo.pages']}</strong>
                <button
                  type="button"
                  aria-current="page"
                  onClick={() => setView('preview')}
                >
                  <File size={13} />
                  {content['appDemo.pageName']}
                </button>
              </aside>
            )}
          </div>
          {tool === 'text' && view === 'preview' && (
            <div className="app-demo-tool-hint">
              <Type size={13} />
              {content['appDemo.textHint']}
              {edited && (
                <button type="button" onClick={() => setEdited(false)}>
                  <Undo2 size={13} />
                  {content['appDemo.undo']}
                </button>
              )}
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
