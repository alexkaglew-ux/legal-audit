import { useMemo, useState } from "react";
import {
  ISSUE_EXPLORER_PATHS,
  ISSUE_EXPLORER_CONTACT_NOTE,
} from "../content/issueExplorer.js";

const PROMOTED_PATHS = ISSUE_EXPLORER_PATHS.filter((p) => p.promoted);

export default function IssueExplorer() {
  const [pathId, setPathId] = useState(null);
  const [personaId, setPersonaId] = useState(null);
  const [issueId, setIssueId] = useState(null);

  const path = useMemo(
    () => ISSUE_EXPLORER_PATHS.find((p) => p.id === pathId) || null,
    [pathId],
  );
  const issue = useMemo(
    () => path?.issueStep.options.find((o) => o.id === issueId) || null,
    [path, issueId],
  );

  function selectPath(id) {
    setPathId(id);
    setPersonaId(null);
    setIssueId(null);
  }

  function selectPersona(id) {
    setPersonaId(id);
    setIssueId(null);
  }

  function reset() {
    setPathId(null);
    setPersonaId(null);
    setIssueId(null);
  }

  function backToPersona() {
    setIssueId(null);
  }

  const step = !path ? 1 : !personaId ? 2 : 3;

  return (
    <section className="issue-explorer section" id="issue-explorer" aria-labelledby="explorer-heading">
      <div className="section-kicker">
        <span>Explore the issue</span>
        <span>SPORTS · NIL · ENTERTAINMENT</span>
      </div>
      <h2 id="explorer-heading">What are you trying to understand?</h2>
      <p className="explorer-deck">
        Choose a topic, tell us where you fit, and see the questions that may matter and the resources
        that can help you get oriented. This is educational information, not individualized legal advice.
      </p>

      <ol className="explorer-steps" aria-label="Explorer progress">
        <li className={step >= 1 ? "done" : ""}>Topic</li>
        <li className={step >= 2 ? "done" : ""}>Who you are</li>
        <li className={step >= 3 ? "done" : ""}>Situation</li>
      </ol>

      <div className="explorer-panel" aria-live="polite">
        {!path && (
          <div className="explorer-options">
            {PROMOTED_PATHS.map((p) => (
              <button
                key={p.id}
                type="button"
                className="explorer-option-card"
                onClick={() => selectPath(p.id)}
              >
                <span className="explorer-kicker">{p.kicker}</span>
                <h3>{p.label}</h3>
                <p>{p.description}</p>
              </button>
            ))}
          </div>
        )}

        {path && !personaId && (
          <div className="explorer-step">
            <button type="button" className="explorer-back" onClick={reset}>
              ← Choose a different topic
            </button>
            <h3>{path.personaStep.question}</h3>
            <div className="explorer-options explorer-options--pills">
              {path.personaStep.options.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  className="explorer-pill"
                  onClick={() => selectPersona(o.id)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {path && personaId && !issueId && (
          <div className="explorer-step">
            <button type="button" className="explorer-back" onClick={backToPersona}>
              ← Back
            </button>
            <h3>{path.issueStep.question}</h3>
            <div className="explorer-options explorer-options--pills">
              {path.issueStep.options.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  className="explorer-pill"
                  onClick={() => setIssueId(o.id)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {path && personaId && issue && (
          <div className="explorer-result">
            <button type="button" className="explorer-back" onClick={backToPersona}>
              ← Back
            </button>
            <span className="explorer-kicker">{path.kicker}</span>
            <h3>{issue.label}</h3>

            {issue.whatMatters.length > 0 && (
              <div className="explorer-result-block">
                <p className="explorer-result-label">Questions that may matter</p>
                <ul>
                  {issue.whatMatters.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            {path.resources.length > 0 && (
              <div className="explorer-result-block">
                <p className="explorer-result-label">Start with these resources</p>
                <ul className="explorer-resource-list">
                  {path.resources.map((r) => (
                    <li key={r.label}>
                      <a className="text-link" href={r.url}>
                        {r.label} →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="explorer-result-block explorer-cta-block">
              <p className="explorer-result-label">Want to discuss your specific situation?</p>
              <p className="explorer-contact-note">{ISSUE_EXPLORER_CONTACT_NOTE}</p>
              <a className="primary-button" href="mailto:ak@thelewfirm.com">
                Contact Alex <span>→</span>
              </a>
            </div>

            <button type="button" className="text-link explorer-restart" onClick={reset}>
              Start over →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
