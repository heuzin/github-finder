import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import { RepoProps } from "../../models/RepoProps";
import ReportItem from "./ReportItem";

const ReposList = () => {
  const { repos } = useContext(GithubContext);
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">Top Repositories</h2>
        {repos.map((repo: RepoProps) => (
          <ReportItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default ReposList;
