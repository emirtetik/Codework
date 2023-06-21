import React from "react";
import { View, Text,Alert,ScrollView,Dimensions } from "react-native";

import styles  from "./Details.style"

import useFetch from "../../hooks/useFetch";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import RenderHTML from 'react-native-render-html';
import { useDispatch, useSelector } from "react-redux";

API_DETAIL_URL = 'https://www.themuse.com/api/public/jobs/'

const Detail = ({route}) => {
    const favJob = useSelector( s => s.favJobList )
    const subJob = useSelector(s => s.subJobList)
    const dispatch = useDispatch();

    const width = Dimensions.get('window').width;

    const {id} = route.params;
    const {data, loading, error} = useFetch(API_DETAIL_URL + id)

 const handleAddFav = () => {
        if (favJob.find(item => item.id === data.id)) {
            Alert.alert("Error", "Job has already added the favorities");
        } else {
            dispatch({ type: "ADD_FAV" , payload: {data} })
            Alert.alert("Successfully" , "Job is added the favorites")
        }
    }

    const handleAddSubmit = () => {
        if (subJob.find(item => item.id === data.id)) {
            Alert.alert("Error", "Job has already added Submit")
        } else {
            dispatch({ type: "ADD_SUBMIT" , payload: {data} })
            Alert.alert("Successfully" , "Job is added Submit")
        }
    }
    if(loading) {
        return <Loading/>
    }
    if(error) {
        return <Error/>
    }

    return (
         <ScrollView style={styles.main_container}>
        <View style={styles.container}>         

            <Text style={styles.job_header}>{data.name}</Text>

            <View style={styles.location_container}>                

                <Text style={styles.location_header}>Locations: 
                <Text style={styles.location_text}>{data.locations && data.locations.length > 0 ? data.locations[0].name
                : 'Unknown Location'} </Text></Text>

            </View>
            <View style={styles.level_container}>

                <Text style={styles.level_header}>Job Level:
                <Text style={styles.level_text}>
                    {data.levels && data.levels.length > 0 ? data.levels[0].name
                    : 'Unknown Level'}</Text></Text>

            </View>

            <Text style={styles.bodyHeader}>Job Detail</Text>
        
            <View style={styles.detail_container}>
                <RenderHTML source={{html:`${data.contents}`}} contentWidth={width}></RenderHTML>
            </View>
            <View style={styles.button}>
                    <Button text='Submit' onPress={handleAddSubmit}  iconName='logout' />
                    <Button text='Favorite Job' onPress={handleAddFav}  iconName='heart' />
                </View>

            </View>   

        </ScrollView> 
   )
}

export default Detail