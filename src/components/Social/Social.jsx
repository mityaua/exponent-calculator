import { InlineReactionButtons } from 'sharethis-reactjs';

export default function Social() {
  return (
    <InlineReactionButtons
      config={{
        alignment: 'center',
        enabled: true,
        language: 'en',
        min_count: 0,
        padding: 12,
        reactions: ['slight_smile', 'sob', 'rage'],
        size: 35,
        spacing: 10,
      }}
    />
  );
}
