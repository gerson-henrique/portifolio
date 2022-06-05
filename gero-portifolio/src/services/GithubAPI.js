const AWESOME_API_BASE = 'https://api.github.com/users/USERNAME/repos';

const getRepos = async () => {
  const response = await fetch(AWESOME_API_BASE);
  const json = await response.json();
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default getRepos;