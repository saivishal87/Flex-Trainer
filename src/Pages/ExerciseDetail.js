import React,{useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import { exerciseOptions ,fetchData ,youtubeOptions  } from '../utils/fetchData'
import Detail from '../Components/Details'
import ExerciseVideos from '../Components/ExerciseVideos'
import SimilarExercises from '../Components/SimilarExercises'


const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail]=useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const {id}=useParams();
 useEffect (() =>{
  const fetchExercisesData = async() =>{
  const exerciseDbUrl='https://exercisedb.p.rapidapi.com';
  const YoutubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com'
  const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
  setExerciseDetail(exerciseDetailData);
    const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
      const exerciseVideosData = await fetchData(`${YoutubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

    }

  
  fetchExercisesData()
 },[id]) ;
    return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}  />
      
    </Box>
  )
}

export default ExerciseDetail
