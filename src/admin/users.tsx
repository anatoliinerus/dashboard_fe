import * as React from 'react';
import { Create, SimpleForm, TextInput, required } from 'react-admin';

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="email" validate={[required()]} fullWidth />
            <TextInput source="password" validate={[required()]} fullWidth />
            <TextInput source="role" validate={[required()]} fullWidth />
            <TextInput source="name" fullWidth />
        </SimpleForm>
    </Create>
);
