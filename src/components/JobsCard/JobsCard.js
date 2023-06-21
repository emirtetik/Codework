import React from "react";
import { View, Text, Pressable } from "react-native";

import styles from "./JobsCard.style";
import Button from "../Button/Button";

const JobsCard = ({ job, onSelect,onRemove }) => {
    return (
        <Pressable onPress={onSelect} >
            <View style={styles.container}>
            <Text style={styles.title}>{job.name.length>35 ? job.name.slice(0,35) + '..' : job.name} </Text>
                <Text style={styles.company}>{job.company.name}</Text>           
                <View style={styles.inner_container}>
                    <Text style={styles.location}>{job.locations[0].name}</Text>
                    <Text style={styles.level}>{job.levels[0].name}</Text>
                </View>
                {onRemove && <Button text="Remove" onPress={onRemove} />}
            </View>
        </Pressable>
    )
}

export default JobsCard