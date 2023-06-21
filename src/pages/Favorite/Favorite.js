import React from "react";
import { View, Text, FlatList } from "react-native";

import styles from "./Favorite.style";
import JobsCard from "../../components/JobsCard/JobsCard";

import { useDispatch, useSelector } from "react-redux";

const Favorite = () => {
    const favJob = useSelector(s => s.favJobList);

    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch({type: "REMOVE_FAV", payload: {id} })
    }

    const renderJobs = ({item}) => (<JobCard job={item} onRemove= {() => handleRemove (item.id)} />)

    return (
        <View style={styles.container}>
            <FlatList data={favJob} renderItem={renderJobs}/>
        </View>
    )
}

export default Favorite