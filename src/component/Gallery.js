import { sculptureList } from "../data/data";
import {useState} from 'react'

export default function Gallery(){
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function onClickPrev(){
   if(hasPrev){
    setIndex(index-1);
   }
  }

  function onClickNext(){
   if(hasNext){
    setIndex(index+1);
    }
  }
  
  function onClickMore(){
    setShowMore(!showMore);
  }

  let source = sculptureList[index];
  let hasNext = index < sculptureList.length - 1;
  let hasPrev = index > 0;

  return(
    <div>
      <p>
        <button 
        onClick={onClickPrev}
        disabled={!hasPrev}>
          prev
          </button>
        <button 
        onClick={onClickNext}
        disabled={!hasNext}>
          next
          </button>
        </p>
        <h2>{source.name} made by <i>{source.name}</i></h2>
        <p>
          <img src={source.url} alt={source.alt}/>
          </p>
          <p>
            <button onClick={onClickMore}>
              show more
              </button>
              {showMore && <p>{source.description}</p>}
            </p>
    </div>
  );
}