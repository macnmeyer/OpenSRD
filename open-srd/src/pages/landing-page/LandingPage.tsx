import GithubRepoCard from '@/components/github-repo-card/GithubRepoCard.js';
import React from 'react'
import data from 'root/src/user-content/pages/landing-page.json' with { type: "json" };

const LandingPage = () => {

  const path = "./user-content/pages/landing-page.json";
  const pageContent = fetch(path)
    .then(response => response.json())
    .catch(error => {
      console.error("Error loading landing page content:", error);
      return null;
    });


  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8 md:py-16">
        <section className="w-full lg:max-w-300  h-fit flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <h2 className="text-2xl text-gray-500">{data.subtitle}</h2>
          <p>{data.content}</p>
        </section>
        <GithubRepoCard username="macnmeyer" repoName="OpenSRD" />
    </div>
  )
}

export default LandingPage