import { Stack } from 'expo-router';
import { FlatList, View } from 'react-native';

import events from '~/assets/events.json';
import EventListItem from '~/components/EventListItem';

export default function Events() {
  return (
    <View>
      <Stack.Screen options={{ title: 'Events' }} />

      <FlatList
        className="bg-white"
        data={events}
        keyExtractor={(event) => event.id}
        renderItem={({ item }) => <EventListItem event={item} />}
      />

      {/* Event list item */}
      {/* <EventListItem event={events[0]} />
      <EventListItem event={events[1]} />
      <EventListItem event={events[2]} />; */}
    </View>
  );
}
