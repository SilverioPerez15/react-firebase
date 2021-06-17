import React, { useEffect, useState } from 'react';
import {Button, StyleSheet} from 'react-native';
import firebase from '../database/firebase';
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from "react-native-gesture-handler";

const UsersList = (props) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        firebase.db.collection('users').onSnapshot(querySnapshot => {
            const users = [];

            querySnapshot.docs.forEach(doc => {
                const {name, email, phone} = doc.data()
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone
                })
            });
            setUsers(users)
        });
    }, [])

    return (
        <ScrollView>
            <Button
                title = "Create User" 
                onPress={() => props.navigation.navigate("CreateUserScreen")} 
            />

            {
                users.map(user => {
                    return (
                        <ListItem key={user.id} bottomDivider onPress={() => {
                            props.navigation.navigate('UserDetailScreen', {
                                userId: user.id
                            })

                        }}>
                            <ListItem.Chevron/>
                            <Avatar source={{
                                uri: 'https://previews.123rf.com/images/azvector/azvector1802/azvector180200507/95925928-editar-informaci%C3%B3n-icono-de-usuario-de-personas-ilustraci%C3%B3n-vectorial.jpg'
                                }} 
                                rounded
                            />
                            <ListItem.Content>
                                <ListItem.Title>{user.name}</ListItem.Title>
                                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>

                    )
                })
            }

        </ScrollView>
    );
};

export default UsersList