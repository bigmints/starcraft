'use client';
import Image from 'next/image';
import {
  ArrowUpRight,
  Download,
  ArrowDown,
  Asterisk,
  Play,
  Pause,
  MousePointer2,
  MessageCircle,
  Check,
  Monitor,
  Smartphone,
  CornerDownRight,
  MoveUpRight,
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
import { appDownloadUrl, content } from '@/src/content';

export default function StarcraftSite() {
  const [paused, setPaused] = useState(false);
  const [refined, setRefined] = useState(false);
  const [mobile, setMobile] = useState(false);
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
        <a href="#top" className="brand" aria-label="Starcraft home">
          <Asterisk />
          <span>starcraft</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#how-it-works">
            <span>How it works</span>
          </a>
          <a href="#workspace">
            <span>The workspace</span>
          </a>
          <a href="#questions">
            <span>A few answers</span>
          </a>
        </nav>
        <a className="pill header-cta" href={appDownloadUrl}>
          {content['actions.downloadApp']}
          <Download size={17} />
        </a>
      </header>
      <main className="site-content">
        <div id="top" className="section-anchor" aria-hidden="true" />
        <section className="hero hero-canvas">
          <div className="hero-body">
            <div className="hero-copy">
              <p className="eyebrow">
                <span>A little spark. A whole new possibility.</span>
              </p>
              <h1>
                <span>Big ideas.</span>
                <span>Meet your</span>
                <em>making space.</em>
              </h1>
              <p className="hero-description">
                Turn what’s in your head into something you can see. Describe
                it, shape it, and make it yours — all in Starcraft.
              </p>
              <div className="hero-actions">
                <a className="pill dark" href={appDownloadUrl}>
                  {content['actions.downloadApp']}
                  <Download size={18} />
                </a>
                <a className="text-link" href="#how-it-works">
                  <span>Take a look around</span>
                  <ArrowDown size={16} />
                </a>
              </div>
              <p className="hero-footnote">
                <span className="status-dot" />
                <span>A creative workspace for your Mac.</span>
              </p>
            </div>
            <div className="hero-art">
              <div className="art-orbit" />
              <Image
                unoptimized
                priority
                src="/images/idea-ink.png"
                alt="A fine ink drawing of a flowing idea ribbon becoming a floating browser window."
                width="1024"
                height="1024"
              />
              <div className="art-note note-top">
                <span className="small-cross" />
                <span>It starts with a thought.</span>
              </div>
              <div className="art-note note-bottom">
                <span>Make room for what’s next.</span>
                <ArrowUpRight size={18} />
              </div>
            </div>
            <div className="hero-bottom">
              <p>Less explaining. More creating.</p>
              <Button
                className="motion-button"
                variant="ghost"
                aria-label={paused ? 'Play animations' : 'Pause animations'}
                aria-pressed={paused}
                onClick={() => setPaused(!paused)}
              >
                {paused ? <Play /> : <Pause />}
                <span>Motion</span>
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
                <p className="eyebrow">From “what if” to right there.</p>
                <h2>
                  <span>Your idea doesn’t need</span>
                  <br />
                  <em>another blank page.</em>
                </h2>
                <p>
                  It needs a place to take shape. A conversation to get going. A
                  live view to see what’s working. And the freedom to keep
                  making it better.
                </p>
              </div>
              <div className="steps" aria-label="How Starcraft works">
                <div className="step reveal">
                  <div className="step-number">
                    <span>01</span>
                    <MessageCircle />
                  </div>
                  <h3>Say what you see.</h3>
                  <p>
                    A website, a fresh direction, a tiny change. Start with your
                    own words and a reference you love.
                  </p>
                  <div className="step-bottom">
                    <span>Start a conversation</span>
                    <ArrowUpRight />
                  </div>
                </div>
                <div className="step reveal">
                  <div className="step-number">
                    <span>02</span>
                    <MousePointer2 />
                  </div>
                  <h3>Point to the details.</h3>
                  <p>
                    See your work as it takes shape. Click the part you want to
                    change and leave a note right there.
                  </p>
                  <div className="step-bottom">
                    <span>Make it feel right</span>
                    <ArrowUpRight />
                  </div>
                </div>
                <div className="step reveal">
                  <div className="step-number">
                    <span>03</span>
                    <Layers />
                  </div>
                  <h3>Keep the good stuff.</h3>
                  <p>
                    Your conversation, references, and preview stay together.
                    Pick up the thread and keep creating.
                  </p>
                  <div className="step-bottom">
                    <span>Stay in your flow</span>
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
                  <p className="eyebrow">One space. Your whole process.</p>
                  <h2>
                    <span>A little less back and forth.</span>
                    <br />
                    <em>A lot more “that’s it.”</em>
                  </h2>
                </div>
                <p>
                  A conversation on one side.
                  <br />
                  Your idea coming to life on the other.
                  <br />
                  Try a small change below.
                </p>
              </div>
              <div className="workspace-demo reveal">
                <div className="window-bar">
                  <div className="window-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                  <p>Sunday Studio</p>
                  <span className="demo-label">Interactive example</span>
                </div>
                <div className="demo-body">
                  <div className="conversation">
                    <div className="conversation-title">
                      <Asterisk size={20} />
                      <span>Let’s make something.</span>
                    </div>
                    <div className="user-message">
                      <p>
                        A quiet little website for my pottery studio. Warm,
                        simple, and a bit playful.
                      </p>
                    </div>
                    <div className="assistant-message">
                      <Asterisk size={18} />
                      <p>
                        A little space for things made slowly. Let’s give it
                        some room to breathe.
                      </p>
                    </div>
                    <div className="example-reference">
                      <Layers size={20} />
                      <div>
                        <p>Sunday Studio</p>
                        <span>First look</span>
                      </div>
                      <Check size={16} />
                    </div>
                    <div className="demo-instruction">
                      <CornerDownRight size={19} />
                      <p>Make a small change.</p>
                    </div>
                    <Button
                      variant="outline"
                      className="change-button"
                      onClick={() => setRefined(!refined)}
                      aria-pressed={refined}
                    >
                      {refined ? <Check /> : <MousePointer2 />}
                      {refined ? (
                        <span>Undo the change</span>
                      ) : (
                        <span>Make it a little warmer</span>
                      )}
                      <ArrowUpRight />
                    </Button>
                    <output className="demo-feedback">
                      {refined ? (
                        <span>
                          A warmer palette. A little more personality.
                        </span>
                      ) : (
                        <span>Your ideas. A little room to play.</span>
                      )}
                    </output>
                  </div>
                  <div className="preview-column">
                    <div className="preview-toolbar">
                      <span>Live preview</span>
                      <div>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="Show desktop preview"
                          aria-pressed={!mobile}
                          onClick={() => setMobile(false)}
                        >
                          <Monitor />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="Show phone preview"
                          aria-pressed={mobile}
                          onClick={() => setMobile(true)}
                        >
                          <Smartphone />
                        </Button>
                      </div>
                    </div>
                    <div
                      className={
                        'example-site ' +
                        (refined ? 'warmer ' : '') +
                        (mobile ? 'phone-preview' : '')
                      }
                    >
                      <div className="example-nav">
                        <span>sunday.</span>
                        <span>Made by hand, in good time.</span>
                      </div>
                      <div className="example-content">
                        <p className="example-eyebrow">
                          Clay. Care. A little curiosity.
                        </p>
                        <h3>
                          <span>Good things.</span>
                          <br />
                          <em>Made slowly.</em>
                        </h3>
                        <p>
                          Everyday pieces, with a little
                          <br />
                          something of their own.
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
                          <span>A small studio. An open mind.</span>
                          <MoveUpRight size={26} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="workspace-caption">
                <p>This is a hands-on example of the creative flow.</p>
                <p>
                  <span className="status-dot" />
                  <span>Small changes. Big difference.</span>
                </p>
              </div>
            </div>
          </section>
          <div id="connections" className="section-anchor" aria-hidden="true" />
          <section className="connections">
            <div className="section-content">
              <div className="connection-copy reveal">
                <p className="eyebrow">Keep your world connected.</p>
                <h2>
                  <span>Bring your ideas.</span>
                  <br />
                  <em>And your favourite tools.</em>
                </h2>
                <p>
                  Start fresh or open a project you’re already working on. Bring
                  in a Figma reference, add a screenshot, and keep the things
                  that matter close.
                </p>
                <a href="#questions" className="text-link">
                  <span>A few things worth knowing</span>
                  <ArrowDown size={17} />
                </a>
              </div>
              <div
                className="connection-diagram reveal"
                aria-label="Your projects, Figma references and visual feedback connected in Starcraft"
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
                  <span>Your projects</span>
                </div>
                <div className="connection-node node-figma">
                  <PenTool />
                  <span>Figma</span>
                </div>
                <div className="connection-node node-notes">
                  <MessageCircle />
                  <span>Your feedback</span>
                </div>
                <div className="connection-node node-ideas">
                  <Layers />
                  <span>Your references</span>
                </div>
                <div className="connection-center">
                  <Asterisk />
                  <span>starcraft</span>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="questions" className="canvas-anchor" aria-hidden="true" />
        <section className="questions questions-canvas">
          <div className="questions-body">
            <div className="reveal">
              <p className="eyebrow">Good questions.</p>
              <h2>
                <span>A little clarity.</span>
                <br />
                <em>Before you begin.</em>
              </h2>
            </div>
            <Accordion className="faq reveal" defaultValue={['what']}>
              <AccordionItem value="what">
                <AccordionTrigger>
                  <span>What is Starcraft?</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Starcraft is a creative desktop workspace. Describe what you
                    want to make, see a live preview, and leave feedback
                    directly on the parts you want to change.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="code">
                <AccordionTrigger>
                  <span>Do I need to know how to code?</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    You can start with plain language and visual references.
                    Starcraft helps you shape the result through conversation.
                    Some projects may still need technical setup or a
                    developer’s help.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="figma">
                <AccordionTrigger>
                  <span>Can I bring my Figma work?</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes. Connect Figma through Starcraft’s bridge and bring a
                    selection into the conversation as a reference. Setup
                    happens in the desktop app’s Integrations settings.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="mac">
                <AccordionTrigger>
                  <span>Where does Starcraft run?</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Starcraft is built for the Mac. This website gives you a
                    feel for the workspace; the full creative experience lives
                    in the desktop app.
                  </p>
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
          <p className="eyebrow">Leave a little room for possibility.</p>
          <h2>
            <span>It’s a good day</span>
            <br />
            <em>to make something.</em>
          </h2>
          <a className="pill dark" href={appDownloadUrl}>
            {content['actions.downloadApp']}
            <Download size={19} />
          </a>
          <span className="closing-note">
            Start with a thought. See where it goes.
          </span>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-top">
          <a href="#top" className="brand">
            <Asterisk />
            <span>starcraft</span>
          </a>
          <p>A little spark goes a long way.</p>
          <a className="text-link" href="#top">
            <span>Back to the top</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Starcraft</span>
          <span>Made for the way ideas happen.</span>
        </div>
      </footer>
    </div>
  );
}
