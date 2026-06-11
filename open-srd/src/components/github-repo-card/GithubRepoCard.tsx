import { useEffect, useState } from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card.js'
import { BookMarked, Star, GitBranch } from 'lucide-react'
import { Link } from 'react-router'

async function fetchRepoData({ username, repoName }: { username: string; repoName: string }) {
  if (!username || !repoName) {
    console.error('Username and repository name are required');
    return null;
  }
  try {
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Fetched repository data:', data);
    return {
      name: data.name,
      description: data.description,
        stars: data.stargazers_count,
        forks: data.forks_count,
    };
  } catch (error) {
    console.error('Error fetching repository data:', error);
    return null;
  }
}

const GithubRepoCard = ({ username, repoName }: { username: string; repoName: string }) => {
    const [repoData, setRepoData] = useState(null);

    useEffect(() => {
        const getRepoData = async () => {
            const data = await fetchRepoData({ username, repoName });
            setRepoData(data);
        };

        getRepoData();
    }, [username, repoName]);

    return (
        <Link to={`https://github.com/${username}/${repoName}`} target="_blank" rel="noopener noreferrer" className="w-full max-w-100">
          <Card size="sm" className="h-fit bg-gray-100">
            {!repoData ? (
              <CardContent>
                <p>Loading...</p>
              </CardContent>
            ) : (<>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BookMarked />{repoData?.name}</CardTitle>
                <CardDescription>{repoData?.description}</CardDescription>
                <CardAction></CardAction>
              </CardHeader>
              <CardFooter className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <p>{repoData?.stars}</p>
                  <Star size={16} />
                </div>
                <div className="flex items-center gap-2">
                  <p>{repoData?.forks}</p>
                  <GitBranch size={16} />
                </div>
              </CardFooter>
            </>)}
          </Card>
        </Link>
  )
}

export default GithubRepoCard