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
    SimpleForm,
    TextInput,
    Filter,
    email,
} from 'react-admin';
const validateEmail = email();

const PartnerFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);


export const PartnerList = (props: any) => (
    <List {...props} filters={<PartnerFilter/>}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="phone"/>
            <TextField source="payment_terms"/>
            <TextField source="comment"/>
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

const PartnerTitle = ({ record }: any) => {
    return <span>Partner {record ? `"${record.title}"` : ''}</span>;
};

export const PartnerEdit = (props: any) => (
    <Edit title={<PartnerTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="email" validate={validateEmail} />
            <TextInput source="phone"/>
            <TextInput source="payment_terms"/>
            <TextInput source="comment"/>
        </SimpleForm>
    </Edit>
);

export const PartnerCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" required/>
            <TextInput source="email" validate={validateEmail} required/>
            <TextInput source="phone"/>
            <TextInput source="payment_terms"/>
            <TextInput source="comment"/>
        </SimpleForm>
    </Create>
);

export const PartnerShow = (props: any) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="phone"/>
            <TextField source="payment_terms"/>
            <TextField source="comment"/>
        </SimpleShowLayout>
    </Show>
);
