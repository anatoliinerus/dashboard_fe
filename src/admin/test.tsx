import { useState, useEffect } from 'react';
import { SimpleForm, TextInput, useDataProvider, useNotify, useGetIdentity } from 'react-admin';

export const ProfileEdit = () => {
    const dataProvider = useDataProvider();
    const [user, setUser]: [any, any] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const notify = useNotify();
    const { data: identity, isLoading: identityLoading } = useGetIdentity();

    const userSave = (data: any) => {
        dataProvider.update('users', { id: data.id, data, previousData: {} })
        .then(({ data }) => {
            setUser(data);
            setLoading(false);
            notify("Your profile has been updated");
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        })
    };

    useEffect(() => {
        if(identity?.id){
            dataProvider.getOne('users', { id: identity?.id })
            .then(({ data }) => {
                setUser(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
        }
    }, [identity]);

    if (loading) return <h1>LOADING</h1>;
    if (error) return <h1>ERROR</h1>;
    if (!user) return null;
    if (identityLoading) return <h1>LOADING</h1>;


    return (
        <SimpleForm onSubmit={userSave}>
            <TextInput source="id" defaultValue={user.id}/>
            <TextInput source="email" defaultValue={user.email}/>
            <TextInput source="name" defaultValue={user.name}/>
            <TextInput source="password"/>
        </SimpleForm>
    )
};