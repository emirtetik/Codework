import React from "react";
import { View, Text, FlatList } from "react-native";

import styles from "./Jobs.style";
import JobsCard from "../../components/JobsCard/JobsCard";

import useFetch from "../../hooks/useFetch";

import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

API_URL = "https://www.themuse.com/api/public/jobs?page=9"

const Jobs = ({navigation}) => {
    
    const {data, loading, error} = useFetch(API_URL);

    const renderJobSelect = ({item}) => <JobsCard job={item} onSelect={() => handleJobSelect (item.id)} />

    const handleJobSelect = id => {
        navigation.navigate("DetailPage" , {id});
    }

    if(loading) {
        return <Loading/>
    }
    if(error) {
        return <Error/>
    }

    return (
        <View style={styles.container}>
            <FlatList data={data.results} renderItem={renderJobSelect} />
        </View>
    );
}

export default Jobs