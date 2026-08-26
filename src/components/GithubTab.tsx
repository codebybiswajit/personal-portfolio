import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { FadeUp } from './AnimatedSection';

interface GithubTabProps {
  githubUsername: string;
  pinnedRepos: string[];
}

interface RepoData {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export default function GithubTab({ githubUsername, pinnedRepos }: GithubTabProps) {
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedRepo, setSelectedRepo] = useState<RepoData | null>(null);
  const [readmeContent, setReadmeContent] = useState('');
  const [loadingReadme, setLoadingReadme] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        // Fetch all repos or a large batch, then filter to pinned
        const res = await axios.get<RepoData[]>(`https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`);
        const data = res.data;
        
        // If pinnedRepos are provided, filter and sort them by the order in profile.ts
        if (pinnedRepos.length > 0) {
          const filtered = pinnedRepos
            .map(name => data.find(r => r.name.toLowerCase() === name.toLowerCase()))
            .filter(Boolean) as RepoData[];
          setRepos(filtered);
        } else {
          // Fallback: top 6 by stars
          setRepos(data.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6));
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [githubUsername, pinnedRepos]);

  useEffect(() => {
    if (!selectedRepo) return;
    
    // If it has a homepage, we don't necessarily need the README for the modal preview (we show iframe/microlink).
    // But if we want to show README as fallback, we fetch it here.
    const fetchReadme = async () => {
      if (selectedRepo.homepage) return; // Skip if we have a website preview

      try {
        setLoadingReadme(true);
        const res = await axios.get(`https://api.github.com/repos/${githubUsername}/${selectedRepo.name}/readme`);
        const data = res.data;
        // GitHub API returns base64 encoded content
        const decoded = atob(data.content);
        setReadmeContent(decoded);
      } catch (err: any) {
        setReadmeContent('No README available for this repository.');
      } finally {
        setLoadingReadme(false);
      }
    };

    fetchReadme();
  }, [selectedRepo, githubUsername]);

  return (
    <section className="section github-tab">
      <FadeUp>
        <h2 className="section__title">
          <span className="section__number">08.</span> Open Source
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.05rem' }}>
          Explore my featured repositories, live previews, and documentation directly from GitHub.
        </p>
      </FadeUp>

      {loading ? (
        <div className="loading-spinner">Loading repositories...</div>
      ) : error ? (
        <div className="error-text">Error: {error}</div>
      ) : (
        <div className="github-grid">
          {repos.map((repo, i) => (
            <FadeUp key={repo.id} delay={0.1 + i * 0.1}>
              <div 
                className="repo-card glass-card"
                onClick={() => setSelectedRepo(repo)}
                style={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--accent-1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} title="Live Website">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--text-secondary)" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </a>
                    )}
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} title="GitHub Repo">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--text-secondary)" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-primary)' }}>{repo.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', flexGrow: 1, marginBottom: '24px' }}>
                  {repo.description || 'No description provided.'}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {repo.language && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-2)' }}></span>
                      {repo.language}
                    </span>
                  )}
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    {repo.stargazers_count}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path><path d="M12 12v3"></path></svg>
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      )}

      {/* Modal for Repo Details */}
      <AnimatePresence>
        {selectedRepo && (
          <motion.div 
            className="repo-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedRepo(null)}
          >
            <motion.div 
              className="repo-modal-content glass-card"
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="repo-modal-header">
                <h2>{selectedRepo.name}</h2>
                <button className="btn-close" onClick={() => setSelectedRepo(null)}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="repo-modal-body">
                {selectedRepo.homepage ? (
                  <div className="repo-preview">
                    <h3>Live Website Preview</h3>
                    <div className="microlink-wrapper">
                      <img 
                        src={`https://api.microlink.io/?url=${encodeURIComponent(selectedRepo.homepage)}&screenshot=true&meta=false&embed=screenshot.url`} 
                        alt={`${selectedRepo.name} website preview`}
                        loading="lazy"
                      />
                    </div>
                    <a href={selectedRepo.homepage} target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ marginTop: '20px', display: 'inline-flex' }}>
                      Visit Live Site
                    </a>
                  </div>
                ) : (
                  <div className="repo-readme markdown-body">
                    {loadingReadme ? (
                      <div className="loading-spinner">Loading README...</div>
                    ) : (
                      <ReactMarkdown>{readmeContent}</ReactMarkdown>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
