import { Stack } from 'expo-router';
import { View } from 'react-native';

import events from '~/assets/events.json';
import EventListItem from '~/components/EventListItem';

export default function Events() {
  return (
    <View>
      <Stack.Screen options={{ title: 'Events' }} />

      {/* Event list item */}
      <EventListItem event={events[0]} />
      <EventListItem event={events[1]} />
      <EventListItem event={events[2]} />
    </View>
  );
}
