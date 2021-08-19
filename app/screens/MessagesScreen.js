import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {
  AppScreen,
  AppListItem,
  AppListItemDeleteAction,
  AppListItemSeparator,
} from '../components';

const initialMessages = [
  {
    id: 1,
    title: 't1',
    description: 'd1',
    image: require('../assets/avatar.jpg'),
  },
  {
    id: 2,
    title: 't2',
    description: 'd2',
    image: require('../assets/avatar.jpg'),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = item => {
    setMessages(messages.filter(m => m.id !== item.id));
  };

  return (
    <AppScreen>
      <FlatList
        data={messages}
        ItemSeparatorComponent={AppListItemSeparator}
        keyExtractor={message => message.id.toString()}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
        renderItem={({item}) => (
          <AppListItem
            onPress={() => console.log('message selected', item)}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <AppListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
      />
    </AppScreen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
