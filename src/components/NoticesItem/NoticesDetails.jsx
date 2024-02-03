import { Label, List, ListItem, Value } from './NoticesDetails.styled';

export const NoticesDetails = ({ item }) => {
  const details = [
    { label: 'Name', value: item.name },
    { label: 'Birthday', value: item.birthday },
    { label: 'Sex', value: item.sex },
    { label: 'Species', value: item.species },
    { label: 'Category', value: item.category },
  ];

  return (
    <List>
      {details.map((detail, index) => (
        <ListItem key={index}>
          <Label>{detail.label}</Label>
          <Value> {detail.value}</Value>
        </ListItem>
      ))}
    </List>
  );
};
