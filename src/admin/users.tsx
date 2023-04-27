import {
    Show,
    ShowButton,
    SimpleShowLayout,
    List,
    Edit,
    Create,
    Datagrid,
    TextField,
    EditButton,
    SelectInput,
    SimpleForm,
    TextInput,
    Filter,
    email,
    ReferenceField,
} from 'react-admin';
const validateEmail = email();

const UserFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <SelectInput source="Role" choices={[
            { id: 'ADMIN', name: 'ADMIN' },
            { id: 'USER', name: 'USER' },
        ]} />
    </Filter>
);


export const UserList = (props: any) => (
    <List {...props} filters={<UserFilter/>}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField  
            link={(record, reference) => `/${reference}/${record.partnerId}/show`}
            label="Partner" 
            source="partnerId" 
            reference="partners">
                <TextField source="name" />
            </ReferenceField>
            
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="role" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }: any) => {
    return <span>User {record ? `"${record.title}"` : ''}</span>;
};

export const UserEdit = (props: any) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="email" validate={validateEmail} />
            <SelectInput source="role" choices={[
            { id: 'ADMIN', name: 'ADMIN' },
            { id: 'USER', name: 'USER' },
        ]} />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" required/>
            <TextInput source="email" validate={validateEmail} required/>
            <TextInput source="password" required/>
            <SelectInput source="role" required choices={[
            { id: 'ADMIN', name: 'ADMIN' },
            { id: 'USER', name: 'USER' },
        ]} />
        </SimpleForm>
    </Create>
);

export const UserShow = (props: any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="role" />
        </SimpleShowLayout>
    </Show>
);
