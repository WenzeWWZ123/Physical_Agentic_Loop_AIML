<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Physical Agentic Loop | Project Page</title>
  <meta name="description" content="A Physical Agentic Loop for Language-Guided Grasping with Execution-State Monitoring" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="bg-grid"></div>
  <header class="site-header">
    <div class="container nav">
      <div class="brand">
        <span class="brand-mark"></span>
        <span class="brand-text">Physical Agentic Loop</span>
      </div>
      <nav>
        <a href="#overview">Overview</a>
        <a href="#architecture">Architecture</a>
        <a href="#results">Results</a>
        <a href="#demos">Demos</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="eyebrow">IROS 2026 Project Page</div>
          <h1>A Physical Agentic Loop for Language-Guided Grasping</h1>
          <p class="hero-subtitle">
            Turning robot execution into explicit runtime states for <span>bounded recovery</span>,
            <span>interpretable decisions</span>, and <span>more robust real-world grasping</span>.
          </p>

          <div class="hero-actions">
            <a class="btn btn-primary" href="#paper">Paper</a>
            <a class="btn btn-secondary" href="#video">Video</a>
            <a class="btn btn-secondary" href="#code">Code</a>
            <a class="btn btn-secondary" href="#bibtex">BibTeX</a>
          </div>

          <div class="hero-mini-stats">
            <div class="mini-stat">
              <span class="mini-value">6</span>
              <span class="mini-label">Watchdog outcomes</span>
            </div>
            <div class="mini-stat">
              <span class="mini-value">1×</span>
              <span class="mini-label">bounded auto-retry</span>
            </div>
            <div class="mini-stat">
              <span class="mini-value">100%</span>
              <span class="mini-label">distractor robustness</span>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="glass-card hero-card">
            <div class="loop-flow">
              <div class="flow-node active">Observe</div>
              <div class="flow-arrow"></div>
              <div class="flow-node">Act</div>
              <div class="flow-arrow"></div>
              <div class="flow-node">Evaluate</div>
              <div class="flow-arrow"></div>
              <div class="flow-node">Decide</div>
            </div>

            <div class="hero-diagram">
              <div class="robot-panel">
                <div class="robot-head"></div>
                <div class="robot-body"></div>
                <div class="robot-arm"></div>
                <div class="robot-gripper"></div>
              </div>
              <div class="status-panel">
                <div class="status-title">Watchdog Runtime Stream</div>
                <div class="status-pill success">SUCCESS</div>
                <div class="status-pill empty">EMPTY</div>
                <div class="status-pill weak">WEAK</div>
                <div class="status-pill slip">SLIP</div>
                <div class="status-pill timeout">TIMEOUT</div>
                <div class="decision-box">Decision → FINALIZE / RETRY / CLARIFY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="overview" class="section">
      <div class="container">
        <div class="section-heading">
          <div class="eyebrow">Overview</div>
          <h2>Why this project stands out</h2>
          <p>
            Many language-guided grasping systems act once and hope for the best. This project wraps an
            unmodified learned manipulation primitive with an event-based interface and a lightweight Watchdog
            that turns noisy execution feedback into explicit tool-state signals the robot can act on. fileciteturn0file0L19-L50
          </p>
        </div>

        <div class="feature-grid">
          <article class="glass-card feature-card">
            <div class="feature-icon">01</div>
            <h3>No retraining required</h3>
            <p>Improves runtime behavior without changing the underlying grasp model.</p>
          </article>
          <article class="glass-card feature-card">
            <div class="feature-icon">02</div>
            <h3>Execution becomes legible</h3>
            <p>Telemetry is converted into discrete outcomes like SUCCESS, EMPTY, and SLIP.</p>
          </article>
          <article class="glass-card feature-card">
            <div class="feature-icon">03</div>
            <h3>Bounded and safe</h3>
            <p>The system deterministically finalizes, retries once, or escalates for clarification.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="architecture" class="section alt-section">
      <div class="container">
        <div class="section-heading">
          <div class="eyebrow">Architecture</div>
          <h2>Agent-centric system design</h2>
        </div>

        <div class="architecture-grid">
          <div class="glass-card architecture-stack">
            <div class="stack-block">
              <span class="stack-label">Agent Core</span>
              <h3>Goal parsing + decision logic</h3>
              <p>Parses structured goals, reasons over outcomes, and applies a bounded recovery policy.</p>
            </div>
            <div class="stack-block">
              <span class="stack-label">Perception Conditioning</span>
              <h3>Goal-consistent visual preprocessing</h3>
              <p>Suppresses distractors and maintains target consistency before execution.</p>
            </div>
            <div class="stack-block">
              <span class="stack-label">Outcome-Aware Execution</span>
              <h3>Primitive + Watchdog wrapper</h3>
              <p>Runs the unmodified manipulation primitive and emits structured outcome events. fileciteturn0file0L127-L191</p>
            </div>
          </div>

          <div class="glass-card architecture-flow">
            <div class="flow-card-title">Structured interface</div>
            <div class="interface-line"><span>Input</span><code>Structured goal G + RGB-D state</code></div>
            <div class="interface-line"><span>Event</span><code>trial_id, watchdog_label, exec_status</code></div>
            <div class="interface-line"><span>Policy</span><code>π : (S, G) → U</code></div>
            <div class="interface-line"><span>Actions</span><code>FINALIZE / RETRY / WAIT_CLARIFY</code></div>
            <div class="divider"></div>
            <div class="outcome-cluster">
              <span class="outcome-badge success">SUCCESS</span>
              <span class="outcome-badge empty">EMPTY</span>
              <span class="outcome-badge weak">WEAK</span>
              <span class="outcome-badge slip">SLIP</span>
              <span class="outcome-badge stall">STALL</span>
              <span class="outcome-badge timeout">TIMEOUT</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-heading">
          <div class="eyebrow">Core Loop</div>
          <h2>Observe → Act → Evaluate → Decide</h2>
        </div>

        <div class="timeline-grid">
          <article class="glass-card timeline-card">
            <span class="timeline-index">01</span>
            <h3>Observe</h3>
            <p>Receive the goal and the current RGB-D scene state.</p>
          </article>
          <article class="glass-card timeline-card">
            <span class="timeline-index">02</span>
            <h3>Act</h3>
            <p>Execute the unmodified pre-trained grasping primitive.</p>
          </article>
          <article class="glass-card timeline-card">
            <span class="timeline-index">03</span>
            <h3>Evaluate</h3>
            <p>Watchdog infers a discrete outcome from noisy telemetry.</p>
          </article>
          <article class="glass-card timeline-card">
            <span class="timeline-index">04</span>
            <h3>Decide</h3>
            <p>Finalize, retry once, or ask for clarification. fileciteturn0file0L1-L18</p>
          </article>
        </div>
      </div>
    </section>

    <section id="results" class="section alt-section">
      <div class="container">
        <div class="section-heading">
          <div class="eyebrow">Results</div>
          <h2>Strong performance under ambiguity and distractors</h2>
          <p>Compared with open-loop execution, the agentic loop remains much more robust across structured benchmark scenarios. fileciteturn0file0L257-L292</p>
        </div>

        <div class="stats-grid">
          <div class="glass-card stat-card">
            <div class="stat-value">100%</div>
            <div class="stat-title">Single Target</div>
            <div class="stat-meta">10 / 10 successful grasps</div>
          </div>
          <div class="glass-card stat-card">
            <div class="stat-value">80%</div>
            <div class="stat-title">Ambiguity</div>
            <div class="stat-meta">Color / spatial scenarios</div>
          </div>
          <div class="glass-card stat-card">
            <div class="stat-value">100%</div>
            <div class="stat-title">Distractor Robustness</div>
            <div class="stat-meta">10 / 10 in final system</div>
          </div>
          <div class="glass-card stat-card">
            <div class="stat-value">100%</div>
            <div class="stat-title">Multiple Identical Targets</div>
            <div class="stat-meta">10 / 10 successful grasps</div>
          </div>
        </div>

        <div class="dual-panel">
          <div class="glass-card panel-card">
            <h3>Component ablation</h3>
            <ul class="clean-list">
              <li><span>No Watchdog</span><strong>7 / 10</strong></li>
              <li><span>No Vision Conditioning</span><strong>4 / 10</strong></li>
              <li><span>No Retry</span><strong>9 / 10</strong></li>
              <li><span>Full System</span><strong>10 / 10</strong></li>
            </ul>
          </div>
          <div class="glass-card panel-card">
            <h3>Runtime overhead</h3>
            <ul class="clean-list">
              <li><span>Baseline (open-loop)</span><strong>14.78 s</strong></li>
              <li><span>Agentic loop</span><strong>15.94 s</strong></li>
              <li><span>Takeaway</span><strong>Minimal extra latency</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="demos" class="section">
      <div class="container">
        <div class="section-heading">
          <div class="eyebrow">Demo Scenarios</div>
          <h2>Representative behavior traces</h2>
          <p>The paper evaluates ambiguity, distractor robustness, induced empty grasps, goal revision, and safe clarification behavior. fileciteturn0file0L257-L269</p>
        </div>

        <div class="demo-grid">
          <article class="glass-card demo-card">
            <div class="demo-placeholder">Toy + Distractor</div>
            <h3>Toy grasping under distractor presence</h3>
            <p>Shows target consistency when salient non-target objects are nearby.</p>
          </article>
          <article class="glass-card demo-card">
            <div class="demo-placeholder">Multiple Cups</div>
            <h3>Multiple diverse cups under background variation</h3>
            <p>Highlights robustness to scene shift without retraining.</p>
          </article>
          <article class="glass-card demo-card">
            <div class="demo-placeholder">Farther Target</div>
            <h3>Two identical cups with the target farther away</h3>
            <p>Demonstrates structured grounding under spatial ambiguity.</p>
          </article>
          <article class="glass-card demo-card">
            <div class="demo-placeholder">Color Target</div>
            <h3>Selecting the target-colored cup</h3>
            <p>Illustrates semantic grounding plus outcome-aware execution. fileciteturn0file0L318-L328</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section alt-section">
      <div class="container">
        <div class="section-heading">
          <div class="eyebrow">Recovery Example</div>
          <h2>Outcome-driven recovery timeline</h2>
        </div>

        <div class="glass-card recovery-card">
          <div class="recovery-line">
            <div class="recovery-step"><span>1</span><p>Initial execution</p></div>
            <div class="recovery-arrow"></div>
            <div class="recovery-step danger"><span>2</span><p>EMPTY detected</p></div>
            <div class="recovery-arrow"></div>
            <div class="recovery-step"><span>3</span><p>Bounded retry</p></div>
            <div class="recovery-arrow"></div>
            <div class="recovery-step success"><span>4</span><p>Re-grasp or clarify</p></div>
          </div>
          <p class="recovery-note">The policy retries once for recoverable empty grasps and escalates when ambiguity persists, guaranteeing finite termination. fileciteturn0file0L311-L317</p>
        </div>
      </div>
    </section>

    <section id="paper" class="section">
      <div class="container small-container">
        <div class="section-heading center">
          <div class="eyebrow">Links</div>
          <h2>Paper, video, code</h2>
        </div>

        <div class="glass-card link-card">
          <p><strong>Paper:</strong> Replace this button with your PDF link</p>
          <p><strong>Video:</strong> Replace with YouTube or MP4 demo link</p>
          <p><strong>Code:</strong> Replace with your GitHub repo link</p>
          <p><strong>Note:</strong> This page layout is based on your IROS submission content. fileciteturn0file0L1-L18</p>
        </div>
      </div>
    </section>

    <section id="bibtex" class="section footer-section">
      <div class="container small-container">
        <div class="section-heading center">
          <div class="eyebrow">Citation</div>
          <h2>BibTeX</h2>
        </div>

        <div class="glass-card bib-card">
<pre><code>@inproceedings{wang2026physicalagenticloop,
  title     = {A Physical Agentic Loop for Language-Guided Grasping with Execution-State Monitoring},
  author    = {Wang, Wenze and Hosseinzadeh, Mehdi and Dayoub, Feras},
  booktitle = {IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  year      = {2026}
}</code></pre>
        </div>
      </div>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
