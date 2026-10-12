'use client';
import Image from 'next/image';
import { AppPreview } from './app-preview';
import { useAppDownloads } from './use-app-downloads';
import {
  ArrowUpRight,
  Download,
  ArrowDown,
  Asterisk,
  Play,
  Pause,
  MousePointer2,
  MessageCircle,
  Layers,
  PenTool,
  FolderOpen,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { useEffect, useState } from 'react';
import { content, contentText } from '@/src/content';

export default function StarcraftSite() {
  const downloads = useAppDownloads();
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setPaused(reduce.matches);
    sync();
    reduce.addEventListener('change', sync);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      reduce.removeEventListener('change', sync);
    };
  }, []);
  return (
    <div className={paused ? 'site motion-paused' : 'site'}>
      <header className="site-header">
        <a
          href="#top"
          className="brand"
          aria-label={contentText('brand.homeLabel')}
        >
          <Asterisk />
          {content['brand.name']}
        </a>
        <nav aria-label={contentText('navigation.label')}>
          <a href="#how-it-works">{content['navigation.useCases']}</a>
          <a href="#workspace">{content['navigation.workspace']}</a>
          <a href="#questions">{content['navigation.questions']}</a>
        </nav>
        <a
          className="pill header-cta"
          href={downloads.arm64}
          aria-label={contentText('downloads.armLabel')}
        >
          {content['actions.downloadApp']}
          <Download size={17} />
        </a>
      </header>
      <main className="site-content">
        <div id="top" className="section-anchor" aria-hidden="true" />
        <section className="hero hero-canvas">
          <div className="hero-body">
            <div className="hero-copy">
              <p className="eyebrow">{content['hero.eyebrow']}</p>
              <h1>
                {content['hero.headline.design']}
                {content['hero.headline.write']}
                <em>{content['hero.headline.try']}</em>
              </h1>
              <p className="hero-description">{content['hero.description']}</p>
              <div className="hero-actions">
                <a
                  className="pill dark"
                  href={downloads.arm64}
                  aria-label={contentText('downloads.armLabel')}
                >
                  {content['actions.downloadApp']}
                  <Download size={18} />
                </a>
                <a className="text-link" href="#how-it-works">
                  {content['hero.explore']}
                  <ArrowDown size={16} />
                </a>
              </div>
              <p className="download-options">
                {content['downloads.appleSilicon']}
                <span aria-hidden="true">·</span>
                <a
                  href={downloads.x64}
                  aria-label={contentText('downloads.intelLabel')}
                >
                  {content['downloads.intel']}
                </a>
              </p>
              <p className="hero-footnote">
                <span className="status-dot" />
                {content['hero.platform']}
              </p>
            </div>
            <div className="hero-art">
              <div className="art-orbit" />
              <Image
                unoptimized
                priority
                src="/images/idea-ink.png"
                alt={contentText('hero.imageAlt')}
                width="1024"
                height="1024"
              />
              <div className="art-note note-top">
                <span className="small-cross" />
                {content['hero.artNote.start']}
              </div>
              <div className="art-note note-bottom">
                {content['hero.artNote.finish']}
                <ArrowUpRight size={18} />
              </div>
            </div>
            <div className="hero-bottom">
              <p>{content['hero.tagline']}</p>
              <Button
                className="motion-button"
                variant="ghost"
                aria-label={contentText(
                  paused ? 'motion.playLabel' : 'motion.pauseLabel',
                )}
                aria-pressed={paused}
                onClick={() => setPaused(!paused)}
              >
                {paused ? <Play /> : <Pause />}
                {content['motion.label']}
              </Button>
            </div>
          </div>
        </section>
        <div className="page-sections">
          <div
            id="how-it-works"
            className="section-anchor"
            aria-hidden="true"
          />
          <section className="process-section">
            <div className="section-content">
              <div className="intro">
                <p className="eyebrow">{content['useCases.eyebrow']}</p>
                <h2>
                  {content['useCases.heading.start']}
                  <br />
                  <em>{content['useCases.heading.end']}</em>
                </h2>
                <p>{content['useCases.description']}</p>
              </div>
              <div className="steps" aria-label={contentText('useCases.label')}>
                <div className="step reveal">
                  <div className="step-number">
                    {content['useCases.systems.number']}
                    <MessageCircle />
                  </div>
                  <h3>{content['useCases.systems.title']}</h3>
                  <p>{content['useCases.systems.description']}</p>
                  <div className="step-bottom">
                    {content['useCases.systems.caption']}
                    <ArrowUpRight />
                  </div>
                </div>
                <div className="step reveal">
                  <div className="step-number">
                    {content['useCases.copy.number']}
                    <MousePointer2 />
                  </div>
                  <h3>{content['useCases.copy.title']}</h3>
                  <p>{content['useCases.copy.description']}</p>
                  <div className="step-bottom">
                    {content['useCases.copy.caption']}
                    <ArrowUpRight />
                  </div>
                </div>
                <div className="step reveal">
                  <div className="step-number">
                    {content['useCases.prototypes.number']}
                    <Layers />
                  </div>
                  <h3>{content['useCases.prototypes.title']}</h3>
                  <p>{content['useCases.prototypes.description']}</p>
                  <div className="step-bottom">
                    {content['useCases.prototypes.caption']}
                    <ArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div id="workspace" className="section-anchor" aria-hidden="true" />
          <section className="workspace-section">
            <div className="section-content">
              <div className="section-heading reveal">
                <div>
                  <p className="eyebrow">{content['workspace.eyebrow']}</p>
                  <h2>
                    {content['workspace.heading.start']}
                    <br />
                    <em>{content['workspace.heading.end']}</em>
                  </h2>
                </div>
                <p>
                  {content['workspace.description.start']}
                  <br />
                  {content['workspace.description.middle']}
                  <br />
                  {content['workspace.description.end']}
                </p>
              </div>
              <AppPreview />
              <div className="workspace-caption">
                <p>{content['workspace.caption']}</p>
                <p>
                  <span className="status-dot" />
                  {content['workspace.captionNote']}
                </p>
              </div>
            </div>
          </section>
          <div id="connections" className="section-anchor" aria-hidden="true" />
          <section className="connections">
            <div className="section-content">
              <div className="connection-copy reveal">
                <p className="eyebrow">{content['connections.eyebrow']}</p>
                <h2>
                  {content['connections.heading.start']}
                  <br />
                  <em>{content['connections.heading.end']}</em>
                </h2>
                <p>{content['connections.description']}</p>
                <a href="#questions" className="text-link">
                  {content['connections.questionsLink']}
                  <ArrowDown size={17} />
                </a>
              </div>
              <div
                className="connection-diagram reveal"
                aria-label={contentText('connections.diagramLabel')}
              >
                <svg
                  className="connection-lines"
                  viewBox="0 0 500 350"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M85 75C260 75 155 175 250 175S300 60 410 65M80 280C210 280 135 175 250 175S320 280 425 280" />
                  <path
                    className="line-travel"
                    d="M85 75C260 75 155 175 250 175S300 60 410 65M80 280C210 280 135 175 250 175S320 280 425 280"
                  />
                </svg>
                <div className="connection-node node-project">
                  <FolderOpen />
                  {content['connections.projects']}
                </div>
                <div className="connection-node node-figma">
                  <PenTool />
                  {content['connections.figma']}
                </div>
                <div className="connection-node node-notes">
                  <MessageCircle />
                  {content['connections.feedback']}
                </div>
                <div className="connection-node node-ideas">
                  <Layers />
                  {content['connections.references']}
                </div>
                <div className="connection-center">
                  <Asterisk />
                  {content['brand.name']}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="questions" className="canvas-anchor" aria-hidden="true" />
        <section className="questions questions-canvas">
          <div className="questions-body">
            <div className="reveal">
              <p className="eyebrow">{content['faq.eyebrow']}</p>
              <h2>
                {content['faq.heading.start']}
                <br />
                <em>{content['faq.heading.end']}</em>
              </h2>
            </div>
            <Accordion className="faq reveal" defaultValue={['what']}>
              <AccordionItem value="what">
                <AccordionTrigger>
                  {content['faq.what.question']}
                </AccordionTrigger>
                <AccordionContent>
                  <p>{content['faq.what.answer']}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="systems">
                <AccordionTrigger>
                  {content['faq.systems.question']}
                </AccordionTrigger>
                <AccordionContent>
                  <p>{content['faq.systems.answer']}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="copy">
                <AccordionTrigger>
                  {content['faq.copy.question']}
                </AccordionTrigger>
                <AccordionContent>
                  <p>{content['faq.copy.answer']}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="code">
                <AccordionTrigger>
                  {content['faq.code.question']}
                </AccordionTrigger>
                <AccordionContent>
                  <p>{content['faq.code.answer']}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="figma">
                <AccordionTrigger>
                  {content['faq.figma.question']}
                </AccordionTrigger>
                <AccordionContent>
                  <p>{content['faq.figma.answer']}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="mac">
                <AccordionTrigger>
                  {content['faq.mac.question']}
                </AccordionTrigger>
                <AccordionContent>
                  <p>{content['faq.mac.answer']}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <section id="start" className="closing canvas-outro">
        <div className="canvas-body">
          <div className="closing-mark" aria-hidden="true">
            <Asterisk />
          </div>
          <p className="eyebrow">{content['closing.eyebrow']}</p>
          <h2>
            {content['closing.heading.start']}
            <br />
            <em>{content['closing.heading.end']}</em>
          </h2>
          <a
            className="pill dark"
            href={downloads.arm64}
            aria-label={contentText('downloads.armLabel')}
          >
            {content['actions.downloadApp']}
            <Download size={19} />
          </a>
          <p className="download-options">
            {content['downloads.appleSilicon']}
            <span aria-hidden="true">·</span>
            <a
              href={downloads.x64}
              aria-label={contentText('downloads.intelLabel')}
            >
              {content['downloads.intel']}
            </a>
          </p>
          <span className="closing-note">{content['closing.note']}</span>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-top">
          <a href="#top" className="brand">
            <Asterisk />
            {content['brand.name']}
          </a>
          <p>{content['footer.tagline']}</p>
          <a className="text-link" href="#top">
            {content['footer.backToTop']}
            <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="footer-bottom">
          {content['footer.copyright']}
          {content['footer.signature']}
        </div>
      </footer>
      {process.env.NODE_ENV === 'development' && (
        <details className="copy-catalog">
          <summary>{content['catalog.title']}</summary>
          <p>{content['catalog.help']}</p>
          <dl>
            {Object.entries(content).map(([key, value]) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </details>
      )}
    </div>
  );
}
