import { useEffect, useState } from 'react';
import type { GithubRepo } from '@/types';
import { profile } from '@/data/content';

interface GithubProfile {
  public_repos: number;
  followers: number;
  html_url: string;
}

interface GithubData {
  repos: GithubRepo[];
  profile: GithubProfile | null;
  loading: boolean;
  error: string | null;
}

export function useGithub(): GithubData {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [githubProfile, setGithubProfile] = useState<GithubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const username = profile.githubUsername;
        const [reposRes, profileRes] = await Promise.all([
          fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
            { signal: controller.signal }
          ),
          fetch(`https://api.github.com/users/${username}`, { signal: controller.signal }),
        ]);

        if (!reposRes.ok || !profileRes.ok) {
          throw new Error('Não foi possível carregar os dados do GitHub agora.');
        }

        const reposData: GithubRepo[] = await reposRes.json();
        const profileData: GithubProfile = await profileRes.json();

        setRepos(reposData.filter((r) => !r.name.includes(username)).slice(0, 6));
        setGithubProfile(profileData);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setError('Não foi possível carregar os repositórios agora. Tente novamente mais tarde.');
        }
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  return { repos, profile: githubProfile, loading, error };
}
