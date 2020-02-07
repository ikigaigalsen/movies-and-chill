import React, { useEffect } from "react";
import WidgetContainer from "../../components/WidgetContainer";
import { useSelector, useDispatch } from "react-redux";
import { TRootState, TDispatch } from "../../store";
import { IPeopleList } from "../../store/types";
import PersonWidget from "../../components/PersonWidget";

const People: React.FC = () => {
  const treadingPeople = useSelector<TRootState, IPeopleList>(
    state => state.people.treading
  );

  const dispatch = useDispatch<TDispatch>();

  useEffect(() => {
    if (treadingPeople.total_results === 0)
      dispatch.people.fetchTrendingPeople();
  }, [dispatch.people, treadingPeople]);

  return (
    <div style={{margin: '0 auto', width: 1200 }}>
      <WidgetContainer title={"Treading People"}>
        {treadingPeople.results.map(person => (
          <PersonWidget key={person.id} person={person} />
        ))}
      </WidgetContainer>
    </div>
  );
};

export default People;
