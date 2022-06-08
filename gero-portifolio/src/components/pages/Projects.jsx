
import React, { useContext, useEffect } from 'react';
import { APIContext } from '../../context/API';
import { BlackBoard } from '../BlackBoard'
import "../../styles/colors.css"
import { RepoCard } from './RepoCard';

export const Projects = () => {

  const { load,
    setLoad,
    apiResponse,
    handleAPI } = useContext(APIContext);

    useEffect(() => {
      const asyncCall = async () => {
        setLoad(true);
        await handleAPI();
      };
      asyncCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    useEffect(() => {
      const asyncCall = async () => {
        if (apiResponse) {
          setLoad(false);
        }
      };
      asyncCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiResponse]);
  
  return (
    <div>
       <BlackBoard>
    <div className='bem-vindo'>Projects</div>
        
    <div className='pjFolder'>
    { load ? (<div className='bem-vindo'> LOADING...</div>) : apiResponse.map((repo) => <RepoCard name={repo.name} description={repo.description} html_url={repo.html_url}  />) }
    </div> 
      </BlackBoard>
    </div>
  )
}
