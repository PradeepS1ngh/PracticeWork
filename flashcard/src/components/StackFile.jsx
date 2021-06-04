import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import Stacks from "../data/stackList.json";
import { useDispatch, useSelector } from "react-redux";
import { setStack , loadStack } from "../Actions";

function StackFile() {
  const dispatch = useDispatch();
  const stacks = useSelector(state => state.stacks)
  useEffect(() => {
    if(stacks.length == 0) dispatch(loadStack(Stacks));    
  })
  return (
    <div>
      {stacks.map((stack, index) => {
        return (
          <Link
            to="/stack"
            key={index}
            onClick={() => dispatch(setStack(stack))}
          >
            <h4>{stack.title}</h4>
          </Link>
        );
      })}
    </div>
  );
}

export default StackFile;
