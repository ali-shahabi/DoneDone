import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {
  AppSafeAreaView,
  AppListItem,
  AppListItemDeleteAction,
  AppListItemSeparator,
} from '../components';

const initialMessages = [
  {
    id: 1,
    title: 'lorem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('../assets/images/avatar.jpg'),
  },
  {
    id: 2,
    title: 'lorem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('../assets/images/avatar.jpg'),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = item => {
    setMessages(messages.filter(m => m.id !== item.id));
  };

  return (
    <AppSafeAreaView>
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
    </AppSafeAreaView>
  );
};

export default MessagesScreen;
