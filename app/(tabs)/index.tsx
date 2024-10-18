import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import EventListItem from '~/components/EventListItem';
import { supabase } from '~/utils/supabase';

export default function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents();
  }, []);
  const fetchEvents = async () => {
    const { data, error } = await supabase.from('events').select('*');
    setEvents(data);
  };
  return (
    <View style={{ flex: 1 }}>
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
